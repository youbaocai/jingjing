<template>
	
		<div class="banner">
			<div class="swiper-container">
				<div class="swiper-wrapper">
					<div class="swiper-slide" v-for="item in bannerlist">
						<img :src="JSON.parse(item.goodsBenUrl)[0]" />
						<!--{{JSON.parse(item.goodsBenUrl)[0]  }}-->
					</div>
				</div>
				<div class="swiper-pagination"></div>
			</div>
			<ul>
				<li v-for="item in prolist">
					{{item.goodsName}}<button @click="addCart(item.goodsID)">加入购物车</button>
				</li>
			</ul>
			
		</div>
		
</template>

<script>
	export default {
		/*
		  data:function(){
		  	return {
		  		msg: "我是组件魔板"
		  	}
		  }
		 * */
		data () {
			return {
				msg:"我是组件模板的数据",
				bannerlist:[],
				prolist:[]
			}
		},
		methods:{
			addCart (goodsID) {
				if(localStorage.getItem("userID")){
					this.$http.get("http://datainfo.duapp.com/shopdata/updatecar.php",
					{
					params:{
							userID:localStorage.getItem("userID"),
							goodsID:goodsID,
							number:1
						}
					}).then(function(response){
						console.log(response.body,"cartaaaaa");
					})
				}else{
					window.location.href = "#/login";
				}
			}
		},
		mounted () {
			var url = 'http://datainfo.duapp.com/shopdata/getBanner.php';
			this.$http.jsonp(url).then(function(response){
				this.bannerlist = response.body;
				//console.log(this.bannerlist);
			},function(err){
				console.log(err);
			})
			
			//请求列表数据
			this.$http.jsonp("http://datainfo.duapp.com/shopdata/getGoods.php").then(function(response){
				this.prolist = response.body;
				//console.log(response,"aaaaa");
			})
				
		},
		updated () {
			var swiper = new Swiper(".swiper-container",{
				autoplayDisableOnInteraction:false,
				autoplay:2000,
				loop:true,
				pagination:".swiper-pagination"
			});
		}
	}
</script>

<style>
	.banner{
		width: 100%;
		height: 180px;
	}
	.swiper-container{
		width: 100%;
		height: 100%;
	}
</style>