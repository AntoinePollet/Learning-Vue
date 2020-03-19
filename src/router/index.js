import Vue from 'vue'
import Router from 'vue-router'
import testLayout from '../components/testLayout.vue'
import classRoute from '../components/class.vue'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: testLayout       
        },
        {
            path: '/class/:className',
            name: 'class',
            component: classRoute      
        }
    ]
})

export default router
