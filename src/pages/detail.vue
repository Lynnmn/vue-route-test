<template>
	<div class="detailPage">
        <detail-header></detail-header>
        <transition :name="transitionName">
            <router-view></router-view>
        </transition>
    </div>
	
</template>

<script>
	// require('../css/detail.css')
	// import data from '../data/detailData.json'
	import Header from '../components/header.vue'

	export default {
		data: function(){
			return{
				transitionName: 'slide-left'
			}
		},
		watch: {
			'$route' (to, from) {
			  const toDepth = to.path.split('/').length;
			  const fromDepth = from.path.split('/').length;
			  this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
			}
	    },
		methods:{
			
		},
		components:{
			detailHeader: Header
		}
		
	}
</script>