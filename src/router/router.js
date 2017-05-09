/**
 * Created by linhaifeng on 2016/10/28.
 */
import Vue from 'vue';
import VueRouter from 'vueRouter';
import App from '../layouts/Main';
import Index from '../pages/index';
import Rules from '../pages/rules';
import Info from '../pages/info';
import Detail from '../pages/detail';
import DetailPage from '../components/detailPage';
import Record from '../pages/record';
import GetDraw from '../pages/getDraw';
import Order from '../pages/order';

Vue.use(VueRouter);

const routes = [
    { path: '/', component: App,
        children: [

            { path: '/index', name:'index', component: Index },

            { path: '/rules', name:'rules', component: Rules },

            { path: '/info', name:'info', component: Info},

            

        ]
    },
    {
        path:'/detail', component: Detail,
        children: [
            { path: '/detail/:id', name:'detail', component: DetailPage },

            { path:'/detail/:id/record', name:'record', component : Record },

            { path:'/detail/:id/getDraw', name:'getDraw', component : GetDraw },

        ]
    },
    
    { path: '/info/record', name:'record', component: Record },

    { path: '/order/:gId', name:'order', component: Order }
];



const router = new VueRouter({
    // mode:'history', //这样url就没有/#/XXX,而是常见的url形式
    base: __dirname,
    routes:routes, // short for routes: routes
    linkActiveClass:'active',     //router-link的选中状态的class，也有一个默认的值
    history:true
});


export  default router