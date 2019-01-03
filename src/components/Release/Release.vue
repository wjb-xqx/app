<template>
    <!-- 发布 -->
    <div class="release clearfix">
        <div class="return">
            <i class="iconfont">&#xe602;</i>
            <span class="fr post">发布</span>
        </div>
        <!-- 选择音乐，选择封面 -->
        <div class="select">
            <div class="item">
                <span><i class="iconfont">&#xe618;</i></span>
                <p>选择音乐</p>
            </div>
            <div class="item">
                 <span><i class="iconfont">&#xe62a;</i></span>
                 <p>选择封面</p>
            </div>
        </div>
        <!-- 发表内容 -->
        <div class="content">
            <form action="">
                <div class="title"><input type="text" placeholder="来个标题吧~" ></div>
                <textarea name="" class="text" id="" cols="40" rows="8" placeholder="(*￣︶￣)内容写得很好，谁看谁知道~"></textarea>
                <div class="addImg">
                    <i class="iconfont">&#xe62b;</i>
                    <span>添加图片</span>
                </div>
            </form>
        </div>
        <!-- 添加标签 -->
        <router-link tag="div" to="/Release/AddLabel" class="addLabel">
            <i class="iconfont">&#xe676;</i>添加标签
            <span class="fr">
                <van-icon name="arrow" />
            </span>
        </router-link>
        <!-- 发往版区（必选） -->
        <div class="to clearfix">
            <h3>发往版区（必选）</h3>
            <ul>
                <li v-for="(item,index) in list" :key="index">
                     <img :src="item.url" alt="">
                     <span class="lx">{{item.lx}}</span>
                     <span class="timeLong">{{item.timeLong}}</span>
                     <input type="radio">
                </li>
            </ul>
            <div class="more">更多版区</div>
        </div>
        <div class="footer">
            <span class="iconfont">&#xe629;</span>
            <span>@</span>
            <div class="fr">
                <input type="radio">原创
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            list:[{
                    id:1,
                    url:require('../../assets/images/user.png'),
                    lx:'手机游戏',
                    timeLong:"常逛版区推荐"
                },{
                    id:2,
                    url:require('../../assets/images/user.png'),
                    lx:'王者荣耀',
                    timeLong:"常逛版区推荐"
                },{
                    id:3,
                    url:require('../../assets/images/user.png'),
                    lx:'动画番剧',
                    timeLong:"常逛版区推荐"
                },{
                    id:4,
                    url:require('../../assets/images/user.png'),
                    lx:'情感&白常',
                    timeLong:"常逛版区推荐"
                },{
                    id:5,
                    url:require('../../assets/images/user.png'),
                    lx:'视频',
                    timeLong:"常逛版区推荐"
            }]
        }
    }
}
</script>

<style lang="less" scoped>
.release{
    background-color: #EEF3F7;
    >.return{
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
        }
    }
    // 选择音乐，选择封面
    >.select{
        margin-top: 48/50rem;
        height: 2rem;
        padding: 35/50rem 20/50rem;
        background-color: #fff;
        >.item{
            float: left;
            width: 50%;
            height: 100%;
            padding: 0 20/50rem;
            box-sizing: border-box;
            >span{
                display: inline-block;
                width: 100%;
                height: 100%;
                line-height: 2rem;
                background-color: #F7F7F7;
                text-align: center;
                >i{
                    font-size: 40/50rem;
                }
            }
            >p{
                color:#FF7CAB;
                text-align: center;
                line-height: 30/50rem;
            }
        }
    }
    // 内容
    .title{
        display: block;
        line-height: 1.2rem;
        background-color: #fff;
        width: 100%;
        font-size: 18/50rem;
        color:#999;
        >input{
            display: block;
            width: 90%;
            border-bottom: .01rem solid #E5E5E5;
            margin: 0 auto;
        }
    }
    .text{
        width: 100%;
        padding: 20/50rem;
        box-sizing: border-box;
        font-size: 16/50rem;
        color:#999;
    }
    // 发表内容
    .content{
        background-color: #fff;
        .addImg{
            width: 2.5rem;
            height: 2.5rem;
            background-color: #F7F7F7;
            font-size: 18/50rem;
            margin-left: 20/50rem;
            text-align: center;
            position: relative;
             >i{ 
                 display: block;
                 margin: 0 auto;
                 font-size: 30/50rem;
                 line-height: 2.5rem;
             }
             >span{
                 width: 100%;
                 position: absolute;
                 bottom: 10/50rem;
                 left: 50%; 
                 transform: translateX(-50%);
             }
        }
    }
    // 添加标签
    >.addLabel{
        margin: 10/50rem 0;
        line-height: 1.2rem;
        background-color: #fff;
        padding: 0 10/50rem;
        font-size: 20/50rem;
        >i{
            color:#32BEFC;
            font-size: 20/50rem;
            padding-right: 8/50rem;
        }
        >span{
            font-size: 20/50rem;
        }
    }
    // 发往版区（必选）
    >.to{
        background-color: #fff;
        >h3{
            line-height: 1.2rem;
            font-size: 20/50rem;
            margin: 0 10/50rem;
            color:#000;
            font-family: KaiTi;
            border-bottom: 0.01rem solid #E5E5E5;
        }
        >ul{
            li{
                margin: 10/50rem;
                line-height: 1.2rem;
                display: flex;
                padding: 1/50rem 10/50rem;
                border-bottom: 0.01rem solid #E5E5E5;
                >img{
                    width: 1rem;
                    height: 1rem;
                    border-radius: 10/50rem;
                }
                >.lx{
                    flex: 1;
                    color:#000;
                    font-size: 18/50rem;
                    padding-left: 5/50rem;
                }
                >.timeLong{
                     flex: 1;
                    color:#898989;
                }
                >input{
                    width: 1rem;
                    margin-top: 20/50rem;
                }
            }
        }
        >.more{
           line-height: 1.5rem;
           text-align: center;
           font-size: 18/50rem;
        }
    }
    >.footer{
        position: fixed;
        z-index: 99;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: #EDEEF0;
        line-height: 1rem;
        padding:  0 20/50rem;
        >span{
            font-size: 30/50rem;
            padding-left: 10/50rem;
            color:#ADAEB0;
        }
    }
}
</style>

