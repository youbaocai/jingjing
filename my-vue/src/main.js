import Vue from 'vue'

import VueRouter from "vue-router"

import VueResource from "vue-resource"


//让程序认识他们
//如果在一个模块化工程中，
Vue.use(VueRouter);
Vue.use(VueResource);



import App from './App.vue'
	import Home from "./com/Home.vue"
	import Kind from "./com/Kind.vue"
	import Cart from "./com/Cart.vue"
	import User from "./com/User.vue"
	import More from "./com/More.vue"
	import Login from "./com/Login.vue"
	


//定义路由
 const routes = [
  {path:"/home",name:"footerlink",component:Home},
  {path:"/kind",name:"footerlink",component:Kind},
  {path:"/cart",name:"footerlink",component:Cart},
  {path:"/user",name:"footerlink",component:User},
  {path:"/more",name:"footerlink",component:More},
  {path:"/login",name:"footerlink",component:Login}
 	
 ]


//实例化VueRouter
const router = new VueRouter({
	routes:routes
})
//挂载
new Vue({
	router:router,
  el: '#app',
  render: h => h(App)
})
