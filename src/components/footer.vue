<template>
    <div class="footer">
        <ul>
            <li class="iconfont hoverColor">&#xe70a;</li>
            <li class="iconfont">&#xe686;</li>
            <li class="el-icon-circle-plus add"></li>
            <li class="iconfont">&#xe606;</li>
            <li class="iconfont">&#xe6ac;</li>
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
    width: 100%;
    border-top: .01rem solid #EEEEF0;
    z-index: 999;
    background-color: #fff;
    li{
        width:  20%;
        float: left;
        height: 100%;
        text-align: center;
        box-sizing: border-box;
        font-size: 35/50rem;
        margin-top: 15/50rem;
    }
    .hoverColor{
        color:#FE54A3;
    }
    /deep/.el-icon-circle-plus{
        color:#FE54A3;
        font-size: 1.2rem;
        margin-top: -10/50rem;
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
