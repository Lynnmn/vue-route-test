<template>
	<div class="order">
		<order-header></order-header>
		<div class="name">{{name}}</div>
		<div class="count">
			<div class="number">
				<span>参与次数</span>
				<span class="remain">{{remain}}</span>
				<p>次数越多，机会越大</p>
			</div>
			<div class="add">
				<span class="jian" @click="decrease">-</span>
				<span class="num">{{number}}</span>
				<span class="jia" @click="increase">+</span>
			</div>
		</div>
		<div class="phone">手机号码：<input type="text" name="" class="phonenum" value="" placeholder="请输入手机号码" maxlength="11" /> </div>
		<div class="rules" @click="showRules">
			<span>活动说明</span>
			<span class="iconfont" :class=" show ? 'icon-less' : 'icon-moreunfold' " ></span>
		</div>
		<div class="desc" v-show="show">
			 <p>1、查看中奖信息：点击“我的”查看参与记录及中奖纪录；</p>
			 <p>2、当达到开奖人次时，系统会取得最近的上一期“重庆时时彩”的开奖结果；默认2个小时内开奖，请您耐心等待。</p>
			 <p>3、如果你收到中奖通知后，请您保持您的通讯设备畅顺无阻，实物奖品我们的客服会在开奖后的7个工作日内联系您，若联络您的7个工作日内天内未得到回复，我们将视为您自动放弃该商品，虚拟商品将以短信方式通知您，如若7天时间未填写领取信息，则视为弃权；</p>
			 <p>4、用户所获得的实物商品颜色随机发放不可退换，旅行类产品用户不得改期或转让给其他人，若因个人原因无法出行视为自动放弃中奖资格；抵用券/礼品卡不可以以任何形式出售或转让，抵用券/礼品卡有时间限制，如若过期，不再补偿，火车票抵用券购票成功后，如若退票改签，抵用券不退还；1元夺宝商品不提供相关发票；</p>
		</div>
		<div class="bottom">
			<div class="price"><span>￥</span><span>1</span></div>
			<div class="btn">提交订单</div>
		</div>
	</div>
</template>

<script>
	require('../css/order.css')
	import data from '../data/detailData.json'
	import Header from '../components/header.vue'
	

	export default {
		data: function(){
			let sort = location.href.split('#')[1].split('/')[2].split('-')[0];
     		let id = location.href.split('#')[1].split('/')[2].split('-')[1];
			return{
				number:1,
				name: data[sort][id-1].name,
				remain: data[sort][id-1].remain,
				show:''
			} 
		},
		methods:{
			showRules:function(e){
				this.show = this.show ? false : true;
			},
			decrease: function(){
				if(this.number > 1){
					this.number--;
				}
			},
			increase: function(){
				this.number++;
			}
			
		},
		components: {
			orderHeader: Header
		}
	}
</script>