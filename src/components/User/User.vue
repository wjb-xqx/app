<template>
    <div class="use">
        <div class="bgImg">
            <img src="@/assets/images/tup.jpg" alt="">
            <span>
                <i class="iconfont">&#xe617;</i>
                修改背景
            </span>
        </div>
        <div class="content clearfix">
            <div class="header">
                <img src="@/assets/images/tup.jpg" alt="">
                <span class="fr edie">编辑个人资料</span>
            </div>
            <div class="name">A酷酷的旧爱</div>
            <div class="level">
                <span class="fl dj">LV2</span>
                <span class="fr money"><i class="iconfont">&#xe641;</i>&nbsp;0.0元</span>
                <span class="fr"><i class="iconfont">&#xe60e;</i>&nbsp;糖果</span>
            </div>
            <ul class="list clearfix">
                <li>
                    <span>1</span>
                    <p>关注</p>
                </li>
                <li>
                    <span>1</span>
                    <p>粉丝</p>
                </li>
                <li>
                    <span>1</span>
                    <p>后援</p>
                </li>
                <li>
                    <span>1</span>
                    <p>访客</p>
                </li>
            </ul>
            <van-tabs v-model="active">
                <van-tab title="资料">内容 1</van-tab>
                <van-tab title="动态">
                    <div class="dynamic">
                        <span>帖子</span>
                        <span>动态</span>
                        <span>图墙</span>
                    </div>
                </van-tab>
                <van-tab title="收藏">内容 3</van-tab>
                <van-tab title="留言">内容 4</van-tab>
            </van-tabs>
        </div>
        <!-- <com-footer></com-footer> -->
    </div>
</template>

<script>
// import comFooter from '@/common/footer';
export default {
     data() {
        return {
          active: 0
        };
     },
     components:{
        //  comFooter
     }
}
</script>

<style lang="less" scoped>
.use{
    margin-bottom: 1.2rem;
    position: relative;
    >.bgImg{
        width: 100%;
        height: 4.5rem;
        position: relative;
        >img{
            width: 100%;
            height: 100%;
            opacity: .8;
        }
        >span{
            display: block;
            width: 2.5rem;
            height: 40/50rem;
            line-height: 40/50rem;
            border-radius: 15/50rem;
            text-align: center;
            background-color: rgba(255, 255, 255, .4);
            color:#fff;
            font-size: 20/50rem;
            position: absolute;
            bottom: 40/50rem;
            right: 10/50rem;
            >i{
                color:#fff;
                font-size: 20/50rem;
            }
        }
    }
    >.content{
        width: 100%;
        border-top-left-radius: 20/50rem;
        border-top-right-radius: 20/50rem;
        position: absolute;
        background-color: #fff;
        top: 4rem;
        left: 0;
        right: 0;
        margin-bottom: 1.2rem;
        >.header{
            height: 1rem;
            >img{
                width: 1.5rem;
                height: 1.5rem;
                border-radius: 50%;
                position: absolute;
                top: -30/50rem;
                left: 15/50rem;
            }
            >.edie{
                width: 2rem;
                height: 30/50rem;
                border: .01rem solid #FC549F;
                color:#FC549F;
                text-align: center;
                display: block;
                line-height: 30/50rem;
                margin: 10/50rem 20/50rem  0;
                border-radius: 15/50rem;
            }
        }
        >.name{
            font-size: 18/50rem;
            line-height: 40/50rem;
            padding: 0 10/50rem;
        }
        >.level{
            height: 30/50rem;
            padding: 0 10/50rem;
            >.dj{
                color:#D348DF;
            }
            >span{
               padding-right: 15/50rem;
               color:#ccc;
               >i{
                   color:#000;
               }
            }
            >.money{
                padding-right: 30/50rem;
            }
        }
        >.list{
            border-bottom: .001rem solid #ccc;
            padding-bottom: 15/50rem;
            >li{
                width: 25%;
                text-align: center;
                float: left;
                >span{
                    display: inline-block;
                    width: 100%;
                    height: 25/50rem;
                    border-right: .01rem solid #ccc;
                    font-weight: 700;
                    font-size: 18/50rem;
                }
                >p{
                    line-height: 25/50rem;
                    color:#AFB0B5;
                    font-size: 16/50rem;
                }
            }
        }
        // 动态
        /deep/.van-tab{
            height: 1rem;
            border-bottom: .001rem solid #ccc;
            color:#000;
        }
        /deep/.van-tabs__line{
            background-color: #000;
        }
        .dynamic{
            padding: 0 10/50rem;
            margin: 10/50rem 0;
            >span{
                padding: 5/50rem;
                display: inline-block;
                border: .01rem solid #AAB2B5;
                text-align: center;
                line-height: 25/50rem;
                border-radius: 10/50rem;
                margin-right: 20/50rem;
                margin: 5/50rem 15/50rem 10/50rem 0;
                color:#AAB2B5;
                &:nth-child(2){
                    color:#E3648D;
                    border: .01rem solid #E3648D;
                    background-color: #FEEEF1;
                }
            }

        }
    }
}
</style>
