require('./bootstrap');

import Vue from "vue";
import Core from './Mixins/Core';
import store from './store';
import { Inertia } from '@inertiajs/inertia'
import { InertiaApp, plugin } from '@inertiajs/inertia-vue';
import { InertiaProgress } from '@inertiajs/progress';

InertiaProgress.init()

Vue.mixin(Core);
Vue.use(plugin);

Inertia.on('start', (event) => console.log("INERTIA STARTED"));
Inertia.on('finish', (event) => console.log("INERTIA FINISHED"));

new Vue({
    el: '#app',
    store,
    mounted() {this.finishProcessing();},
    render: h => h(InertiaApp, {
        props: {
            initialPage: JSON.parse(document.getElementById('app').dataset.page),
            resolveComponent: name => require(`./components/${name}`).default
        },
    })
});
