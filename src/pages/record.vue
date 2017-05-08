<template>
	<div class="record">
		<div class="record-list" v-for="item in items">
	    	<div class="img"></div>
	    	<div class="right">
		    	<p>昵称：nn</p>
		    	<p>IP:4545454545</p>
		    	<p>
			    	<span>参与了9次</span>
			    	<span>2017-03-09</span>
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
			// items: data.record
		},
		methods:{
			
		},
		components:{
			
		}
		
	}
</script>