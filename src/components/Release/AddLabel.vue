<template>
    <div class="add">
        <div class="return clearfix">
            <i class="iconfont" @click='prev'>&#xe602;</i>
            添加标签
            <span class="fr post">确定</span>
        </div>
        <div class="content">
            <!-- 搜索框 -->
            <div class="search">
                <i class="iconfont">&#xe6a8;</i>
                <input type="text" placeholder="搜索关键字">
            </div>
            <!-- 热门标签 -->
            <h3><i class="iconfont">&#xe611;</i>
                热门标签
            </h3>
            <div class="list clearfix">
                <span>拯救剧荒</span>
                <span>我在第一滩等你</span>
                <span>拯救剧荒</span>
                <span>年终盘点</span>
                <span>元旦快乐</span>
                <span>我在第一滩等你</span>
                <span>搞笑</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods:{
        prev(){
            this.$router.go(-1)
        }
    }
}
</script>

<style lang="less" scoped>
.return{
        width: 100%;
        height: 48/50rem;
        font-size: 20/50rem;
        line-height: 48/50rem;
        color:#000;
        font-weight: 700;
        text-align: center;
        border-bottom: .001rem solid #EEEEF0;
        font-family: KaiTi;
        background-color: #fff;
        position: fixed;
        z-index: 99;
        >i{
            float: left;
            color:#FE4C86;
            font-size: 20/50rem;
            padding:0  10/50rem;
        }
        >.post{
            padding-right: 15/50rem;
            color:#FE4C86;
        }
}
.content{
    position: absolute;
    top: 1rem;
    left: 0;
    right: 0;
    bottom: 0;
    // 搜索框
    >.search{
        width: 100%;
        margin: 10/50rem 0;
        height: 1rem;
        position: relative;
        >input{
            width: 90%;
            display: block;
            margin: 0 auto;
            height: 100%;
            background-color: #F7F9F8;
            border-radius: 15/50rem;
            text-align: center;
            font-size: 0.35rem;
        }
        >i{
            position: absolute;
            top: 55%;
            left: 50%;
            font-size: 22/50rem;
            transform: translate(-350%,-50%);
        }
    }
    // 热门标签
    >h3{
        padding: 0 10/50rem;
        margin: 15/50rem 0;
        line-height: 1rem;
        font-size:20/50rem;
        color:#000;
        >i{
            font-size: 30/50rem;
            color:#FC56A8;
        }
    }
    >.list{
        padding:0 10/50rem;
        >span{
            display: inline-block;
            padding: 10/50rem 12/50rem;
            background-color: #F5F5F5;
            color:#000;
            margin-bottom: 10/50rem;
            border-radius: 15/50rem;
        }
    }
}

</style>

