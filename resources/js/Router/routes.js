import Welcome from "../Page/Welcome.vue";
import About from "../Page/About.vue";

export const routes = [
    {
        path: "/",
        component: Welcome
    },
    {
        path: "/about",
        component: About
    }
];
