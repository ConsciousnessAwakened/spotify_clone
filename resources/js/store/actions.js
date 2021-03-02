import {AuthorizationService} from "../Services/AuthorizationService";

export default {

    ...AuthorizationService,

    startProcessing({commit}) {

        commit('statePageProcess', true);
    },

    finishProcessing({commit}) {

        commit('statePageProcess', false);
    }
}
