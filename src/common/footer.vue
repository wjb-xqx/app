<template>
    <div class="footer">
        <ul>
            <router-link tag="li" to="/home">
                <i class="iconfont hoverColor">&#xe70a;</i>
                <p>首页</p>
            </router-link>
            <router-link tag="li" to="/Edition">
                <i class="iconfont">&#xe686;</i>
                <p>版区</p>
            </router-link>
            <router-link tag="li" to="">
                <i class="el-icon-circle-plus"></i>
            </router-link>
            <router-link tag="li" to="/Information">
                <i class="iconfont">&#xe606;</i>
                <p>消息</p>
            </router-link>
            <router-link tag="li" to="/User">
                <i class="iconfont">&#xe6ac;</i>
                <p>我</p>
            </router-link>
        </ul>
        <span></span>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.footer{
    position: fixed;
    bottom: 0;
    height: 60/50rem;
    left: 0;
    right: 0;
    border-top: .01rem solid #EEEEF0;
    z-index: 999;
    background-color: #fff;
    >ul{
        width: 100%;
        height: 100%;
        li{
            width:  20%;
            float: left;
            height: 100%;
            text-align: center;
            box-sizing: border-box;
            font-size: 35/50rem;
            >i{
                font-size: 30/50rem;
            }
            >p{
                font-size: 14/50rem;
            }
        }
        .hoverColor{
            color:#FE54A3;
        }
        /deep/.el-icon-circle-plus{
            color:#FE54A3;
            font-size: 1.2rem;
            margin-top: -20/50rem;
        }
    }
    
    span{
        display: block;
        width: 1.2rem;
        height:  1.2rem;
        border-radius: 50%;
        background-color: #fff;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        top: -15/50rem;
        z-index: -1;
        border: .02rem solid #EEEEF0;
        }
}
</style>
