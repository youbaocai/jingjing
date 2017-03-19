<template>
	<div>
		<footer>
			<ul>
				<!--<router-link v-for="item in footerlist"  to="{name:'footerlink',params:{type:item.type}}"	<li>
						<p>{{item.title}}</p>
				</li></router-link>-->
				<router-link to="/home"><li>首页</li></router-link>
				<router-link to="/kind"><li>分类</li></router-link>
				<router-link to="/cart"><li>购物车</li></router-link>
				<router-link to="/user"><li>我的</li></router-link>
				<router-link to="/more"><li>更多</li></router-link>
				
			</ul>
		</footer>
	</div>
</template>

<script>
	export default {
		
		data () {
			return {
				msg:"我是组件footer模板的数据",
				footerlist:[
					{icon:"",title:"首页",type:"home"},
					{icon:"",title:"分页",type:"kind"},
					{icon:"",title:"购物车",type:"cart"},
					{icon:"",title:"我的秀",type:"user"},
					{icon:"",title:"更多",type:"more"}
				]
			}
		}
	}
</script>

<style>
</style>