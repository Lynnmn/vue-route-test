<template>
    <div class="footer" >
        <div>
            <router-link to="/index" ><span class="icon-shouye iconfont" v-bind:class="{active : isActive}"></span><p>首页</p></router-link>
            <router-link to="/list" ><span class="icon-mulu iconfont "></span><p>分类</p></router-link>
            <router-link to="/info" > <span class="icon-wodejuhuasuan iconfont "></span><p>我的</p></router-link>
        </div>
    </div>
</template>



<script>
    import style from '../css/footer.css';

    export default{
        data:function(){
            return{

            }
        }

    }

</script>