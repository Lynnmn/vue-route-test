<template>
    <div class="header">
        <span class="iconfont icon-back" @click="go"></span>
        <div class="title">{{title}}</div>
    </div>
    

</template>

<script>
  require('../css/header.css')

  export default {
    data:function(){
        return {
          title:''
        }
    },
    methods:{
      go:function(){
        history.go(-1);
      }
    },
    components:{

    }
  }
</script>

