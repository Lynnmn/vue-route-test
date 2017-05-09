<template>
	<div class="record">
		<div class="record-list" v-for="item in items">
	    	<img class="img" :src="item.face">
	    	<div class="right">
		    	<p>昵称：{{item.nickname}}</p>
		    	<p>IP:{{item.ip}}</p>
		    	<p>
			    	<span>参与了{{item.amount}}次</span>
			    	<span>{{item.time}}</span>
		    	</p>
	    	</div>
	    </div>
	</div>
</template>

<script>
	require('../css/record.css')
	import data from '../data/record.json'

	export default {
		data: function(){
			return {
				items: data.record
			}
		},
		methods:{
			
		},
		components:{
			
		}
		
	}
</script>