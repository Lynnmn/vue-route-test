<template>
    <div class="myinfo">
        <div class="user-info">
            <router-link to="/homeUserInfo/123" class="link-box clearfix" >
                <img src="/src/images/img/info.jpg" class="userface">
                <p>Lynnmn</p>
               <span class="iconfont icon-more"></span>
            </router-link>
        </div>

        <div class="user-link">
            <ul>
                <li>
                    <router-link to="/info/record">
                        <span class="iconfont icon-all all"></span>
                        <span class="txt">我的参与记录</span>
                        <span class="iconfont icon-more more"></span>
                    </router-link>
                </li>
                <li>
                    <router-link to="/info/record">
                        <span class="iconfont icon-gifts gifts"></span>
                        <span class="txt">中奖记录</span>
                        <span class="iconfont icon-more more"></span>
                    </router-link>
                </li>
                <li>
                    <router-link to="/info/record">
                        <span class="iconfont icon-process process"></span>
                        <span  class="txt">进行中</span>
                        <span class="iconfont icon-more more"></span>
                    </router-link>
                </li>
                <li>
                    <router-link to="/info/record">
                        <span class="iconfont icon-cry cry"></span>
                        <span  class="txt">失败记录</span>
                        <span class="iconfont icon-more more"></span>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>



<script>
    require('../css/info.css');


    let data = {
        id:1
    };
    export default{
        data:function(){
            return{
                data
            }
        }
        
    }

    </script>