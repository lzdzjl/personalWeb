import VueRouter from 'vue-router'
import AppIndex from './components/Index.vue'

export default new VueRouter({
    routes:[
        {
            path:'/',
            component:AppIndex
        }
    ]
})