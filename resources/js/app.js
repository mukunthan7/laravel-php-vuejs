const { createApp } = require("vue");

require("./bootstrap");

import App from "./App.vue";
import router from "./router.js";
createApp.Vue = createApp(App).use(router).mount("#app");

let cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", (e) => {
    cursor.setAttribute(
        "style",
        "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;"
    );
});
