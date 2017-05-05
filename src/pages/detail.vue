<template>
	<div class="detail">
		{{ $route.params.id }}
	</div>
</template>

<script>
	import style from '../css/detail.css'


	export default {
		data: function(){
			return{
				data:'detail'
			}
		},
		components:{

		}
		
	}
</script>