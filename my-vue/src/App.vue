<template>
  <div id="app">
  	
  	<v-header></v-header>
	  	<div class="content">
	  		<router-view></router-view>
	  	</div>
    <v-footer></v-footer>
    
  </div>
</template>

<script>
	//定义Header 组件-----引入Header.vue
	import Header from "./com/Header.vue"
	import Footer from "./com/Footer.vue"
	import Home from "./com/Home.vue"
	import Kind from "./com/Kind.vue"
	import Cart from "./com/Cart.vue"
	import User from "./com/User.vue"
	import More from "./com/More.vue"
	
	
	
	
	
export default {
  name: 'app',
  data () {
    return {
      
    }
  },
  
  components:{
  	"v-header":Header,
  	"v-footer":Footer
  }
}
</script>

<style>
	*{
		padding: 0;
		margin: 0;
		list-style: none;
		text-decoration: none;}
html,body,#app{
	width: 100%;
	height: 100%;
}
#app{
	display: flex;
	flex-direction: column;
}
.header{
	width: 100%;
	height: 44px;
	background-color: #f66;
	color: #FFFFFF;
}
.content{
	flex: 1;
}
footer{
	width: 100%;
	height: 50px;
	background-color: #efefef;
}
footer ul{
	width: 100%;
	height: 100%;
	display: flex;
}
footer ul a{
	display: block;
	color: #333;
	line-height: 50px;
	text-align: center;
	flex: 1;
}
footer ul a.router-link-active{
	color: #f66;
}
</style>
