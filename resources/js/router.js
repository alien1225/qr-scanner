import Vue from "vue";
import VueRouter from "vue-router";
import MainPage from "./views/main-page";

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        { path: "/", component:  MainPage },
    ],
    mode: "history",
});