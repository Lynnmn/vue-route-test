<template>
	<div class="rules">
		<div class="rules-list" v-for="rule in data">
			<div class="title" @click="showContent(rule.id)">
				<span :class="selectId==rule.id?'up':'down'">{{rule.title}}</span>
			</div>
			<div class="content" :class=" selectId == rule.id ? 'show' : 'hide'">
				<p>{{rule.content}}</p>
			</div>
		</div>
	</div>
</template>

<script>
	require('../css/rules.css')
	import data from '../data/rules.json'

	export default {
		data: function(){
			return{
				data: data.rules,
				selectId:''
			} 
		},
		methods:{
			showContent:function(id){
				this.selectId = id;
			}
		}
	}
</script>