<template>
    <div class="setinfo">
        <div class="return">
            <i class="iconfont">&#xe602;</i>
            设置
        </div>
        <ul class="item clearfix">
            <li>个人资料<p class="point fr"></p></li>
            <li>黑名单</li>
            <li>通用设置</li>
            <li>夜间模式 
                <span class="fr">
                    <el-switch
                      v-model="value2"
                      active-color="#EEEEF0"
                      inactive-color="#EEEEF0">
                    </el-switch>
                </span>
            </li>
            <li>非WiFi下自动播放视频
                <span class="fr">
                    <el-switch
                      v-model="value3"
                      active-color="#EEEEF0"
                      inactive-color="#EEEEF0">
                    </el-switch>
                </span>
            </li>
        </ul>
        <ul class="item clearfix">
            <li>自动回复</li>
            <li>私信弹弹娘</li>
            <li>私信弹弹妹</li>
        </ul>
        <ul class="item clearfix">
            <li>检查更新 <span class="fr">2.29.3</span></li>
            <li>免责声明</li>
            <li>商务合作</li>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return{
            value1: true,
            value2: true,
            value3: true
        }
    }
}
</script>

<style lang="less" scoped>
.setinfo{
   font-family: KaiTi;
   position: absolute;
   background-color: #EEEEF0;
   top: 0;
   bottom: 0;
   left: 0;
   right: 0;
   color:#000;
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
        >i{
            float: left;
            color:#FE4C86;
            font-size: 20/50rem;
            padding:0  10/50rem;
        }
    }
    >.item{
        background-color: #fff;
        >li{
            line-height: 40/50rem;
            padding: 0 10/50rem;
            border-bottom: .001rem solid #EEEEF0;
            >.point{
                display: inline-block;
                width: 8/50rem;
                height: 8/50rem;
                border-radius: 50%;
                background-color: #FD4C86;
                margin-top: 16/50rem;
            }
        }
        margin-bottom: 8/50rem; 
    }
}
</style>

