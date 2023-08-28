import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import AI from '@/views/AI'
import home from '@/views/conter'
import myDaily from '@/views/myDaily'
import myPaper from '@/views/myPaper'
import myWeb from '@/views/myWeb'


export default new VueRouter({
    routes: [
        {
            path: "/home", component: home
        },
        {
            path: "/ai", component: AI
        },
        {
            path: "/Daily", component: myDaily
        },
        {
            path: "/Paper", component: myPaper
        },
        {
            path: "/Web", component: myWeb
        },


        // 路由重定向
        {
            path: '*',
            redirect: "/home"

        }
    ]
})




