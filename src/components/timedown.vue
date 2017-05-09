<template>
	<div class="timedown">
		<span class="countdownName">倒计时：</span>
		<span class="day">08</span>
		<span>天</span>
		<span class="hour">08</span>
		<span>时</span>
		<span class="min">08</span>
		<span>分</span>
		<span class="sec">08</span>
		<span>秒</span>
	</div>
</template>

<script>
	require('../css/timedown.css')

	export default {
		data: function(){
			return {
				
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