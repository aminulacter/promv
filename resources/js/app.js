/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require("./bootstrap");

window.Vue = require("vue");

import Vuetify from "vuetify";
import VueRouter from "vue-router";
import VueI18n from "vue-i18n";

import { routes } from "./Router/routes";
import app from "./Layout/app.vue";
import * as bdtn from "./language/bangla/index";
import * as entn from "./language/english/index";

Vue.use(Vuetify);
Vue.use(VueRouter);

import "babel-polyfill";

const router = new VueRouter({
    routes,
    mode: "history"
});

Vue.use(VueI18n);
const messages = {
    bd: bdtn,
    en: entn
};

const i18n = new VueI18n({
    locale: "bd", // set locale
    fallbackLocale: "en", // set fallback locale
    messages // set locale messages
});

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

new Vue({
    el: "#app",
    i18n,
    router,
    components: { app }
});
