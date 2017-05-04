<template>
	<div class="commendImg">
		<div class="commend-title">
			<span class="line"></span>
			<span class="title">热门推荐</span>
			<span class="line"></span>
		</div>
		<div class="commend-main">
			<div class="commend-list" v-for="item in data">
				<img class="img" :src="item.img" />
		        <p class="desc">{{item.name}}</p>
		        <div class="rate">
		            <div class="line">
		                <div class="line-rate"></div>
		            </div>
		            <span class="percent">揭晓进度：<span>{{item.percent}}</span></span>
		        </div>
		        <div class="join-btn">参与</div>
			</div>
		</div>
	</div>
</template>

<script>
	import recommendData from '../data/recommendData.json'
	import style from '../css/recommendImg.css'

	export default {
		data: function(){
			return{
				data:recommendData.recommendList
			} 
		}
	}
</script>