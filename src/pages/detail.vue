<template>
	<div class="detail">
		<div class="top-img">
			<span class="iconfont icon-roundleftfill-copy" @click="go"></span>
			<img :src= "imgSrc">
			<span class="period">{{preiod}}</span>
		</div>
		<div class="info">
    		<div class="title">
    			<span class="award-status">{{status}}</span>
    			<p class="timedown">
    				<span class="countdownName">倒计时：</span>
    				<span class="day">08</span>
    				<span>天</span>
    				<span class="hour">08</span>
    				<span>时</span>
    				<span class="min">08</span>
    				<span>分</span>
    				<span class="sec">08</span>
    				<span>秒</span>
    			</p>
    		</div>
    		<div class="desc">{{name}}</div>
    		<div class="line">
    			<div class="line-progress" v-bind:style="{width:percent}"></div>
    		</div>
    		<div class="amount">
    			<p class="total">总需：{{total}}</p>
    			<p class="remain">剩余：{{remain}}</p>
    		</div>
    	</div>
		<div class="draw-num">
			<span>我的奖号</span>
			<span>{{drawNum}}</span>
		</div>
		<router-link to="/detail/:id/record">
            <span class="txt">本期参与记录</span>
            <span class="iconfont icon-more more"></span>
        </router-link>
        <router-link to="/detail/getDraw">
            <span class="txt">往期中奖揭晓</span>
            <span class="iconfont icon-more more"></span>
        </router-link>
	</div>
</template>

<script>
	require('../css/detail.css')
	import data from '../data/detailData.json'

	export default {
		data: function(){
			let sort = location.href.split('#')[1].split('/')[2].split('-')[0];
			let id = location.href.split('#')[1].split('/')[2].split('-')[1];
			return{
				imgSrc: data[sort][id-1].img,
				preiod: data[sort][id-1].period,
				drawNum: data[sort][id-1].drawNum,
				status: data[sort][id-1].status,
				name: data[sort][id-1].name,
				percent: data[sort][id-1].percent,
				total: data[sort][id-1].total,
				remain: data[sort][id-1].remain
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