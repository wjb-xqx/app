<template>
    <div class="hot">
        <ul class="navList clearfix">
            <router-link tag="li" to="/hotMore"><span class="bgColor">热门</span></router-link>
            <router-link tag="li" to="/hotDimension"><span>次元</span></router-link>
            <router-link tag="li" to="/hotDaily"><span>日常</span></router-link>
            <router-link tag="li" to="/hotVideo"><span>影音</span></router-link>
            <router-link tag="li" to="/hotGame"><span>游戏</span></router-link>
        </ul>
        <!-- 热门的导航路由 -->
        <router-view/>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="less" scoped>
.hot{
    margin-top: 1.2rem;
    >.navList{
        font-size: 18/50rem;
        color: #6B6E77;
        >li{
            float: left;
            width: 20%;
            text-align: center;
            line-height: 35/50rem;
            padding:0 8/50rem;
            box-sizing: border-box;
            >span{
                display: inline-block;
                width: 100%;
                height: 100%;
                font-size: 18/50rem;
            }
        }
        .bgColor{
            height: 35/50rem;
            background-color: #FB4C85;
            border-radius: 20/50rem;
            color:#fff;
        }
    }
}
</style>

