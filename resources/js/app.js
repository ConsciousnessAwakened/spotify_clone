require('./bootstrap');

import Core from './Mixins/Core';
import store from './store';
import { Inertia } from '@inertiajs/inertia'
import { InertiaApp, plugin } from '@inertiajs/inertia-vue';
import { InertiaProgress } from '@inertiajs/progress';

InertiaProgress.init()

window.Vue.mixin(Core);
window.Vue.use(plugin);

Inertia.on('start', (event) => {});
Inertia.on('finish', (event) => {});

new window.Vue({
    el: '#app',
    store,
    mounted() {
        console.log("Vue Mounted");
        let that = this;

        that.$store.state.inertia = that.$inertia;

        Object.keys(that.$store.state.api).forEach((api)=>{

            window[api] = axios.create();
            window[api].defaults.headers.common['Content-Type'] = 'application/json';
            window[api].defaults.headers.common['Accept'] = 'application/json';

            if (!_.isEmpty(that.$store.state.api[api].key)){
                window[api].defaults.headers.common['Authorization'] = `${that.$store.state.api[api].key}`;
            }
        });

        that.$store.dispatch('moodCaster/boot');

        that.finishProcessing();
    },
    render: h => h(InertiaApp, {
        props: {
            initialPage: JSON.parse(document.getElementById('app').dataset.page),
            resolveComponent: name => require(`./components/${name}`).default
        },
    }),
});
