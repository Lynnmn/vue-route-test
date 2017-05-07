<template>
	<div class="travel">
		<router-link to="/info" class="imgList" v-for="item in data" :to="{  name: 'detail', params: { id: item.ticketId }}"> 
			<img class="good-img" :src="item.img"/>
			<div class="right">
				<p class="good-name">{{item.name}}</p>
				<div class="process">
					<span>揭晓进度：</span>
					<span>{{item.percent}}</span>
					<div class="good-line">
						<div class="good-rate"></div>
					</div>
				</div>
				<div class="timeout">
					<span>倒计时</span>
					<span>08</span>
					<span>:</span>
					<span>08</span>
					<span>:</span>
					<span>08</span>
				</div>
				<div class="one-join">1元参与</div>
			</div>
		</router-link>
	</div>
</template>

<script>
	import style from '../css/tabContent.css'
	import data from '../data/ticketData.json'

	export default {
		data: function(){
			return{
				data:data.ticketList
			}
		},
		components:{

		}
		
	}
</script>