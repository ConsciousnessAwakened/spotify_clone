require('./bootstrap');

import Core from './Mixins/Core';
import store from './store';
import { Inertia } from '@inertiajs/inertia'
import { InertiaApp, plugin } from '@inertiajs/inertia-vue';
import { InertiaProgress } from '@inertiajs/progress';

InertiaProgress.init()

Vue.mixin(Core);
Vue.use(plugin);

Inertia.on('start', (event) => {});
Inertia.on('finish', (event) => {});

new Vue({
    el: '#app',
    store,
    mounted() {this.finishProcessing()},
    render: h => h(InertiaApp, {
        props: {
            initialPage: JSON.parse(document.getElementById('app').dataset.page),
            resolveComponent: name => require(`./components/${name}`).default
        },
    })
});
