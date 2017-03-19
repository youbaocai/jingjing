<template>
	<div>
		这是购物车
		<ul>
			<li v-for="(item,index) in list">
				{{item.goodsName}}----{{item.number}}
				<button @click="deletedata(item.goodsID,index)">删除</button>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		
		data () {
			return {
				msg:"我是组件模板的数据",
				list:[]
			}
		},
		methods:{
			deletedata (goodsID,index){
				this.$http.get("http://datainfo.duapp.com/shopdata/updatecar.php",
				{
				params:{
						userID:localStorage.getItem("userID"),
						goodsID:goodsID,
						number:0
					}
				}).then(function(response){
					console.log(response.body,"cartaaaaa");
					if(response.body*1==1){
						this.list.splice(index,1);
					}
				})
			}
		},
		mounted (){
		  if(localStorage.getItem("userID")){
		  	//查看数据库接口
		  	this.$http.jsonp("http://datainfo.duapp.com/shopdata/getCar.php",{
		  		params:{
		  			userID:localStorage.getItem("userID")
		  		}
		  	}).then(function(response){
		  		this.list = response.body;
		  	})
		  }else{
		  	window.location.href = "#/login";
		  }
		}
	}
</script>

<style>
</style>