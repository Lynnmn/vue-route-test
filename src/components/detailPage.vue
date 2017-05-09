<template>
    
    <div class="detail">
      <div class="top-img">
        <img :src= "imgSrc">
        <span class="period">{{preiod}}</span>
      </div>
      <div class="info">
          <div class="title">
            <span class="award-status">{{status}}</span>
            <time-down></time-down>
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
      <router-link :to="{ path: 'record'}" append>
              <span class="txt">本期参与记录</span>
              <span class="iconfont icon-more more"></span>
          </router-link>
          <router-link :to="{ path: 'getDraw'}" append>
              <span class="txt">往期中奖揭晓</span>
              <span class="iconfont icon-more more"></span>
          </router-link>
    </div>

</template>

<script>
  require('../css/detail.css')
  import data from '../data/detailData.json'
  import timedown from '../components/timedown.vue'

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
        remain: data[sort][id-1].remain,
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
      go: function(){
        history.go(-1);
      }
    },
    components:{
      timeDown: timedown
    }
    
  }
</script>

