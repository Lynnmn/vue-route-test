<template>
	<div class="award">
		<div class="award-list" v-for="item in items">
			<div class="top">
				<span class="period">第{{item.period}}期</span>
		    	<span class="award-time">揭晓时间：{{item.time}}</span>
			</div>
		    
		    <div class="bottom">
		    	<img class="img" :src="item.face">
			    <div class="right">
			        <p>幸运号码：{{item.number}}</p>
			        <p>获得者：<span>{{item.nickname}}</span></p>
			        <p>手机号码：<span>{{item.phone}}</span></p>
			        <p>本期参与：<span>{{item.amount}}次</span></p>
			    </div>
		    </div>
		</div>
	</div>
</template>

<script>
	require('../css/getDraw.css')
	import data from '../data/getDraw.json'

	export default {
		data: function(){
			return {
				items: data.getDraw
			}
		},
		methods:{
			go: function(){
				history.go(-1);
			}
		},
		components:{
			
		}
		
	}
</script>