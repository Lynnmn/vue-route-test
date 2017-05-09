<template>
	<div class="commendImg">
		<div class="commend-title">
			<span class="line"></span>
			<span class="title">热门推荐</span>
			<span class="line"></span>
		</div>
		<div class="commend-main">
			<router-link class="commend-list" v-for="item in data" :to="{  name: 'detail', params: { id: item.id }}">
				<img class="img" :src="item.img" />
		        <p class="desc">{{item.name}}</p>
		        <div class="rate">
		            <div class="line">
		                <div class="line-rate"></div>
		            </div>
		            <span class="percent">揭晓进度：<span>{{item.percent}}</span></span>
		        </div>
		        <div class="join-btn" v-on:click.stop.prevent="order(item.id)">参与</div>
			</router-link>
		</div>
	</div>
</template>

<script>
	import data from '../data/recommendData.json'
	require('../css/recommendImg.css')

	export default {
		data: function(){
			return{
				data:data.recommendList
			} 
		},
		methods:{
			order:function(id){
				this.$router.push({ name: 'order', params: { gId: id }});
				return false;
			}
			
		}
	}
</script>