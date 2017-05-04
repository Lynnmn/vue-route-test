/**
 * Created by linhaifeng on 2016/10/28.
 */
import Vue from 'vue';
import VueRouter from 'vueRouter';
import App from '../layouts/Main';
import Index from '../pages/index';
import List from '../pages/list';
import Info from '../pages/info';
// import Article from '../page/article';
// import UserInfo from '../page/userInfo';
// import MyPet from '../page/myPet';
// import AddPet from '../page/addPet';

Vue.use(VueRouter);

const routes = [
    { path: '/', component: App,
        children: [

            { path: '/index', name:'index', component: Index },

            { path: '/list', name:'list', component: List },

            { path: '/info', name:'info', component: Info},

            // { path: '/userInfo/:uid', name:'userInfo', component: UserInfo },

            // { path:'/article/:id', name:'article', component : Article},

            // { path:'/home/mypet', name:'myPet', component : MyPet},

            // { path:'/home/mypet/addpet', name:'addPet', component : AddPet},

        ]
    }
];



const router = new VueRouter({
    // mode:'history', //这样url就没有/#/XXX,而是常见的url形式
    routes:routes, // short for routes: routes
    linkActiveClass:'active',     //router-link的选中状态的class，也有一个默认的值
    history:true
});


export  default router