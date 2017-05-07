<template>
	<div class="detail">
		<img :src= "imgSrc">
		{{ $route.params.id }}
	</div>
</template>

<script>
	import style from '../css/detail.css'
	// import image from '../images/img'

	export default {
		data: function(){
			let imgId = location.pathname.split('/')[2];
			return{
				imgSrc:'src/images/img' + imgId+'.png'
			}
		},
		components:{

		}
		
	}
</script>