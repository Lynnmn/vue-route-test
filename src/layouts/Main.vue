<template>

    <!-- <app-header></app-header>
    <transition :name="transitionName" >
        <router-view class="child-view"></router-view>
    </transition> -->
    <app-footer></app-footer>

</template>

<script>
  import style from '../css/main.css'
  import Index from '../pages/index.vue'
  import Footer from '../components/footer.vue'
  import Header from '../components/header.vue'

  export default {
    // components: {
    //   VLink
    // }
    components:{
        appHeader:Header,
        appFooter:Footer,
        appIndex:Index
    }
  }
</script>

