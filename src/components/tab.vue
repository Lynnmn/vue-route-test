<template>
	<div class="tab">
		<div class="tab-title">
			<ul>
				<li v-bind:class="isSelected=='travel'?'selected':''" @click="changeStatus('travel')">旅游周边</li>
				<li v-bind:class="isSelected=='electronic'?'selected':''" @click="changeStatus('electronic')">电子数码</li>
				<li v-bind:class="isSelected=='ticket'?'selected':''" @click="changeStatus('ticket')">现金卡券</li>
			</ul>
		</div>
		<div class="tab-content">
			<component :is="currentView" keep-alive></component>
		</div>
	</div>
</template>

<script>
	require('../css/tab.css')
	import travel from '../components/travel.vue'
	import electronic from '../components/electronic.vue'
	import ticket from '../components/ticket.vue'

	export default {
		data: function(){
			return{
				currentView:travel,
				isSelected:'travel'
			}
		},
		methods:{
			changeStatus:function(content){
				this.isSelected = content;
				this.currentView = content;
			}
		},
		components:{
			travel:travel,
			electronic:electronic,
			ticket:ticket
		}
		
	}
</script>