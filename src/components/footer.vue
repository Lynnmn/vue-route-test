<template>
    <div class="footer" >
        <div>
            <router-link to="/index" ><span class="icon-shouye iconfont" v-bind:class="{active : isActive}"></span><p>首页</p></router-link>
            <router-link to="/rules" ><span class="icon-createtask iconfont "></span><p>活动规则</p></router-link>
            <router-link to="/info" > <span class="icon-wodejuhuasuan iconfont "></span><p>我的</p></router-link>
        </div>
    </div>
</template>



<script>
    require('../css/footer.css')

    export default{
        data:function(){
            return{

            }
        }

    }

</script>