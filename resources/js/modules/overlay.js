
export default {
    namespaced : true,

    state : {
        stack : {
            visible : false,
            src : ''
        },
        anotherStack : {
            visible : false,
            src : ''
        },
        stackIndex : 0,
        video : [],
        image : [],
        iterate : null
    },

    mutations : {
        putStack(state, payload) {
            state[payload.type] = [];
            state[payload.type] = payload.value;
        },

        toggleStack(state, payload) {
            state[payload.stack].visible = !state[payload.stack].visible;
        },

        toggleBoth(state) {
            state.stack.visible = !state.stack.visible;
            state.anotherStack.visible = !state.anotherStack.visible;
        },

        stackSource(state, payload) {
            state[payload.stack].src = payload.value
        },

        resetIndex(state) {
            state.stackIndex = 0;
        },

        incrementIndex(state) {
            state.stackIndex++;
        },

        iterateInterval(state, payload) {
            state.iterate = setInterval(() => {
                payload.callback();
            },6000);
        },

        clearIteration(state) {
            clearInterval(state.iterate);
        }
    },

    getters : {
        stack : (state) => state.stack,
        anotherStack : (state) => state.anotherStack,
        api : (state, getters, rootState) => rootState.app.overlay.api,
        type : (state, getters, rootState) => rootState.app.overlay.stack.type,
        key : (state, getters, rootState) => rootState.api[getters.api].responses[getters.type].key
    },

    actions : {

        updateFadedStack({state, commit, getters, dispatch}) {
            console.log('Hidden Stack Must Update With New Source');

            setTimeout(() => {
                if (state.stack.visible) {
                    dispatch('getIndex').then((index)=>{
                        commit('stackSource', {
                            stack : 'anotherStack',
                            value : state[getters.type][index]
                        });
                    });
                } else {
                    dispatch('getIndex').then((index)=>{
                        commit('stackSource', {
                            stack : 'stack',
                            value : state[getters.type][index]
                        });
                    });
                }
            }, 3500);
        },

        getIndex({state, commit, getters}) {
            return new Promise((resolve, reject)=>{
                if (!state[getters.type].length) { resolve(0); }

                if (state.stackIndex >= (state[getters.type].length)) { commit('resetIndex'); }

                resolve(state.stackIndex);

                commit('incrementIndex');
            })
        },

        initialStack({state, commit, getters, dispatch}) {
            return new Promise((resolve, reject)=>{

                dispatch('getIndex').then((index)=>{
                    commit('stackSource', {
                        stack : 'stack',
                        value : state[getters.type][index]
                    });
                });

                dispatch('getIndex').then((index)=>{
                    commit('stackSource', {
                        stack : 'anotherStack',
                        value : state[getters.type][index]
                    });
                });

                resolve();
            });
        },

        boot({commit, getters, dispatch, rootState}) {

            dispatch('request', {
                service : rootState.api[getters.api][getters.type]({
                    params : rootState.api[getters.api].meta({search : rootState.app.overlay.meta})
                }),
                animateProcess : false,
                successCallback : (response) => {
                    let stack = response.data[getters.key].reduce(function(result, item){
                        let stack = rootState.api[getters.api].responses[getters.type].transformer(item, rootState.app.overlay.stack.quality);
                        if (stack) {result.push(stack);}
                        return result;
                    }, []);

                    if (stack.length) {
                        commit('putStack', {type : getters.type, value : stack});

                        dispatch('initialStack').then(() => {
                            commit('toggleStack', {stack : 'stack'});

                            commit('iterateInterval', {
                                callback : () => {
                                    commit('toggleBoth');
                                    dispatch('updateFadedStack');
                                }
                            });
                        });
                    }
                }
            }, {root : true})
        }
    }
}
