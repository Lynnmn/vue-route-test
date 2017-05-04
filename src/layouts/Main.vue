<template>
    <div class="app">
        <transition :name="transitionName">
            <router-view class="child-view"></router-view>
        </transition>
        <app-footer></app-footer>
    </div>
    

</template>

<script>
  require('../css/main.css') 
  require('../css/app.css')
  import Index from '../pages/index.vue'
  import Footer from '../components/footer.vue'
  import Header from '../components/header.vue'

  export default {
    data:function(){
        return {
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
    components:{
        appHeader:Header,
        appFooter:Footer,
        appIndex:Index
    }
  }
</script>

