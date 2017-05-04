<template>
	<div class="index">
		<reco-zone></reco-zone>
		<tab></tab>
	</div>
</template>

<script>

	import recommendImg from '../components/commendImg.vue'
	import tab from '../components/tab.vue'
	
	export default {
		data: function(){
			return{
				data:'index'
			} 
		},
		components:{
	        recoZone:recommendImg,
	        tab:tab
	    }
	}
</script>