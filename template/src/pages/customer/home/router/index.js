import Vue from 'vue'
import Router from 'vue-router'
import notFound from '../selfComponents/notFound'

Vue.use(Router)

const not_found = () => Promise.resolve(notFound)

export default new Router({
    routes: [
        {
            path: '*',
            name: 'notFound',
            component: not_found
        }
    ]
})