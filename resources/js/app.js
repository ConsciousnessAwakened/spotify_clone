require('./bootstrap');

import Vue from'vue';
import { Inertia } from '@inertiajs/inertia'
import { InertiaApp, plugin } from '@inertiajs/inertia-vue';

Inertia.on('start', () => console.log("INERTIA STARTED"));
Inertia.on('finish', () => console.log("INERTIA FINISHED"));
Vue.use(plugin);

new Vue({
    el : '#app',
    render: h => h(InertiaApp, {
        props: {
            initialPage: JSON.parse(document.getElementById('app').dataset.page),
            resolveComponent: name => require(`./components/Pages/${name}`).default
        },
    })
});
