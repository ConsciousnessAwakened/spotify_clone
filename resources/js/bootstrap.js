import * as URL from "url";

window._ = require('lodash');

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

window.axios = require('axios');

window.originDomain = axios.create();
window.originDomain.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
window.originDomain.defaults.headers.common['Content-Type'] = 'application/json';
window.originDomain.defaults.headers.common['Accept'] = 'application/json';

/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */

// import Echo from 'laravel-echo';

// window.Pusher = require('pusher-js');

// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: process.env.MIX_PUSHER_APP_KEY,
//     cluster: process.env.MIX_PUSHER_APP_CLUSTER,
//     forceTLS: true
// });

import './enums';
import Vue from "vue";
import Moment from 'moment';
import Collection from "./Classes/Collection";
import Text from "./Classes/Text";
import Uri from "./Classes/Uri";
import Statement from "./Classes/Statement";
import Obj from "./Classes/Obj";

window.Vue = Vue;
window.Moment = Moment;
window.Collection = Collection;
window.Text = Text;
window.Uri = Uri;
window.Statement = Statement;
window.Obj = Obj;

window.transform = require('json-map-transform');

Moment.defaultFormat = 'YYYY-MM-DD HH:mm:ss';
