import { createApp } from "vue"
// import { router } from '@/router/router'
import router from "./router/router"
import App from "./App.vue"
import "./style.css"
// import "./assets/xxx.js"
createApp(App).use(router).mount("#app")
