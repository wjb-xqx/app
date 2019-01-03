<template>
    <div class="Recommend">
        <!-- 节日祝福 -->
        <div class="happy">
            <img src="@/assets/images/推荐1_r2_c1.jpg" alt="">
        </div>
        <ul class="recommendUser clearfix">
            <li class="clearfix">
                <div class="user">
                    <img src="@/assets/images/tup.jpg" alt="" class="fl">
                    <div class="title fl">
                        <h4>进度条菌
                            <i class="iconfont xing">&#xe60c;</i>
                        </h4>
                        <p class="time">4天前</p>
                    </div>
                     <i class="fr iconfont">&#xe637;</i>
                </div>
                <h3>游园惊梦 这是我见过的最想的妖姬了</h3>
                <div class="videoBig">
                    <video controls src="@/assets/images/vedios.mp4" ></video>
                </div>
                <div class="type">
                    <span>短视频区</span>
                    <span>cos</span>
                    <span>游戏coser</span>
                </div>
                <!-- 回复 -->
                <div class="reply">
                    <span class="code"><i class="iconfont">&#xe656;</i>神回复</span>
                    <span class="fr">17赞</span>
                    <p><span>小可爱9985868：</span>
                        我已开始以为是七秀</p>
                </div>
                <!-- 留言评价喜欢 -->
                <ul class="likes">
                    <li><i class="iconfont">&#xe625;</i>685</li>
                    <li><i class="iconfont">&#xe69f;</i>888</li>
                    <li><i class="iconfont">&#xe6ac;</i>666</li>
                </ul>
            </li>
            <li>
                <div class="user">
                    <img src="@/assets/images/tup.jpg" alt="" class="fl">
                    <div class="title fl">
                        <h4>进度条菌<i class="iconfont zhuang">&#xe633;</i></h4>
                        <p class="time">4天前</p>
                    </div>
                     <i class="fr iconfont">&#xe637;</i>
                </div>
                <h3>游园惊梦 这是我见过的最想的妖姬了</h3>
                <p class="text">这可真是最强防御</p>
                <div class="videoBig">
                    <video controls src="@/assets/images/vedios.mp4" ></video>
                </div>
                <div class="type">
                    <span>短视频区</span>
                    <span>cos</span>
                    <span>游戏coser</span>
                </div>
                <!-- 回复 -->
                <div class="reply">
                    <span class="code"><i class="iconfont">&#xe656;</i>神回复</span>
                    <span class="fr">17赞</span>
                    <p><span>小可爱9985868：</span>
                        我已开始以为是七秀</p>
                </div>
                <!-- 留言评价喜欢 -->
                <ul class="likes">
                    <li><i class="iconfont">&#xe625;</i>685</li>
                    <li><i class="iconfont">&#xe69f;</i>888</li>
                    <li><i class="iconfont">&#xe6ac;</i>666</li>
                </ul>
            </li>
        </ul>
    </div>  
</template>

<script>
export default {
    name:'Recommend'
}
</script>

<style lang="less" scoped>
.Recommend{
    margin:  1.3rem 0;
    // 节日祝福
    .happy{
        padding: 0 10/50rem;
        >img{
            width: 100%;
        }
    }
    >.recommendUser{
        margin-top: 10/50rem;
        >li{
            padding: 0 10/50rem;
            >.user{
                height: 1rem;
            >img{
                height: 1rem;
                border-radius: 50%;
            }
            >.title{
                padding-left: 15/50rem;
                >h4{
                    font-size: 16/50rem;
                    font-weight: 700;
                    >.xing{
                        color:#FFAE14;
                    }
                    >.zhuang{
                        color:#BBE7FF;
                    }
                }
                >.time{
                    line-height: 30/50rem;
                    color:#ccc;
                }
            }
             >i{
                font-size: 20/50rem;
                padding-right: 20/50rem;
            }
            }
            >h3{
                line-height: 40/50rem;
                color:#000;
                font-weight: 700;
                font-size: 18/50rem;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
                overflow: hidden;
                margin-bottom: 10/50rem;
            }
            >.text{
                color:#666;
                font-family: KaiTi;
                font-size: 18/50rem;
                margin: 10/50rem 0;
            }
            >.videoBig{
                width: 100%;
                height: 3.5rem;
                >video{
                    width: 100%;
                    height: 100%;
                }
            }
            >.type{
                line-height: 1.2rem;
                >span{
                    display: inline-block;
                    line-height: 30/50rem;
                    text-align: center;
                    background-color: #EEF3F6;
                    color:#537A9B;
                    padding: .001rem 12/50rem;
                    border-radius: 15/50rem;
                }
            }
            >.reply{
                height: 1.5rem;
                background-color: #F4F5F7;
                 color:#F9A310;
                 padding: 10/50rem;
                >.code{
                    display: inline-block;
                    width: 1.5rem;
                    height: 25/50rem;
                    line-height: 25/50rem;
                    text-align: center;
                    background-color: #fff;
                    border: .05rem solid #F9A310;
                }
                >p{
                    color:#000;
                    font-family: KaiTi;
                    font-size: 17/50rem;
                    line-height: 1rem;
                    >span{
                        color:#5D7C99;
                    }
                }
            }
            >.likes{
                width: 100%;
                line-height: 2rem;
                >li{
                    float: left;
                    width: 33.33%;
                    text-align: center;
                    font-size: 20/50rem;
                    >i{
                        font-size: 25/50rem;
                    }
                }
            }
        }
    }
}
</style>

