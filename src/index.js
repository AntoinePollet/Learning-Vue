import Vue from 'vue'
import router from './router/index'
import i18n from './locales'
import App from './App.vue'

export default new Vue({
    router,
    i18n,
    el : '#app',
    render: h => h(App)
})