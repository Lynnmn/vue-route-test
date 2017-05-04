<template>
	<div class="travel">
		<!-- <img-list></img-list> -->
		<div class="imgList" v-for="item in data">
			<img class="good-img" />
			<div class="right">
				<p class="good-name"></p>
				<div>
					<span>揭晓进度：</span>
					<span>59%</span>
					<div class="good-line">
						<div class="good-rate"></div>
					</div>
				</div>
				<div class="timeout">
					<span>倒计时：</span>
					<span>08</span>
					<span>:</span>
					<span>08</span>
					<span>:</span>
					<span>08</span>
				</div>
				<div class="one-join">1元参与</div>
			</div>
		</div>
	</div>
</template>

<script>
	import style from '../css/tabContent.css'
	import data from '../data/travelData.json'
	// import imgList from '../components/imgList.vue'

	export default {
		data: function(){
			return{
				data:data.travelList
			}
		},
		components:{
			// imgList:imgList
		}
		
	}
</script>