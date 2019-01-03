<template>
   <div class="information">
        <div class="header">
            <div class="img" @click="showUserInfo">
                <img src="@/assets/images/user.png" alt="">
            </div>
            <nav>
                <span>消息</span>
            </nav>
            <div class="icon">
                <i class="iconfont">&#xe605;</i>
            </div>
        </div>
        <!-- 个人信息设置 -->
        <transition name="myInfo">
            <div class="userInfo clearfix" v-show="flag">
                <div class="hearder clearfix">
                    <div class="use">
                        <span class="img">
                            <img src="@/assets/images/user.png" alt="">
                        </span>
                        <span class="name">A酷酷的旧爱A酷酷的旧爱</span>
                        <img src="@/assets/images/nav_r2_c2.png" alt="" class="imgTop">
                    </div>
                    <div class="Sign fr">
                        <img src="@/assets/images/nav_r2_c3.png" alt="" class="imgTop">
                        <p><span>签到</span></p>
                    </div>
                </div>
                <ul class="list">
                    <li>
                        <i class="iconfont">&#xe65f;</i>
                        我的收藏
                    </li>
                    <li>
                        <i class="iconfont">&#xe613;</i>
                        我的话题
                    </li>
                    <li>
                        <i class="iconfont">&#xe622;</i>
                        我的下载
                    </li>
                    <li>
                        <i class="iconfont">&#xe76e;</i>
                        浏览历史
                    </li>
                    <li>
                        <i class="iconfont">&#xe604;</i>
                        我的勋章
                    </li>
                    <li>
                        <i class="iconfont">&#xe603;</i>
                        交易屋
                    </li>
                    <li>
                        <i class="iconfont">&#xe663;</i>
                        游戏中心
                    </li>
                    <li>
                        <i class="iconfont">&#xe64c;</i>
                        糖果商城
                    </li>
                    <li class="fr edie">
                        <i class="iconfont">&#xe642;</i>
                        <i class="iconfont">&#xe634;</i>
                    </li>
                </ul>
            </div>
        </transition>
        <!-- 遮盖层 -->
        <div class="mask" v-show="flag"></div>

       <div class="content clearfix">
            <ul class="infomations clearfix">
                 <li>
                     <span>
                         <i class="iconfont">&#xe609;</i>
                     </span>
                     <p class="name">回复我的</p>
                 </li>
                 <li>
                     <span>
                         <i class="iconfont">&#xe643;</i>
                     </span>
                     <p class="name">糖果</p>
                 </li>
                 <li>
                     <span>
                         <i>
                             @
                         </i>
                     </span>
                     <p class="name">@我的</p>
                 </li>
                 <li>
                     <span>
                         <i>
                             <van-icon name="volume-o" />
                         </i>
                     </span>
                     <p class="name">系统通知</p>
                     <p class="spot"></p>
                 </li>
            </ul>
            <ul class="info clearfix">
                <li v-for="(item,index) in list" :key="index">
                    <div class="img">
                        <img :src="item.url" alt="">
                    </div>
                    <div class="title">
                        <p>{{item.title}}</p>
                        <span>{{item.text}}</span>
                    </div>
                    <div class="time">{{item.time}}天前
                        <p class="fr" v-show="item.Unread">{{item.Unread}}</p>
                    </div>
                </li>
            </ul>
       </div>
       <!-- <com-footer></com-footer> -->
   </div>
</template>

<script>
// import comFooter from '@/common/footer';
export default {
    data(){
        return{
            flag:false,
            list:[{
                id:1,
                url:require('../../assets/images/user.png'),
                title:'南宫第一老大',
                text:'感谢你的关注---如果想如果想歹意事件设计师如果想歹意',
                time:'1',
                Unread:'3'
            },{
                id:2,
                url:require('../../assets/images/user.png'),
                title:'南宫第一老大',
                text:'感谢你的关注---如果想如果想歹意事件设计师如果想歹意',
                time:'2',
            },{
                id:3,
                url:require('../../assets/images/user.png'),
                title:'南宫第一老大',
                text:'感谢你的关注---如果想如果想歹意事件设计师如果想歹意',
                time:'3',
                Unread:'3'
            }]
        }
    },
    methods:{
         showUserInfo(){
            this.flag = true
        },
    },
    components:{
        // comFooter
    }
}
</script>

<style lang="less" scoped>
 .header{
        position: fixed;
        z-index: 99;
        height: 1rem;
        width: 100%;
        padding: 3/50rem 10/50rem;
        display: flex;
        background-color: #fff;
        >.img{
            width: 45/50rem;
            height: 45/50rem;
            background-color: pink;
            border-radius: 50%;
            >img{
                width: 100%;
                height: 100%;
                border-radius: 50%;
            }
        }
        >nav{
            flex: 1;
             text-align: center;
            >span{
                display: inline-block;
                line-height: 1rem;
                padding: 0 6/50rem;
                font-size: 18/50rem;
                position: relative;
        }
        .coherLine{
            width: 30/50rem;
            height: 3/50rem;
            background-color: #333;
            position: absolute;
            left: .2rem;
            }
        }
        >.icon{
             width: 1rem;   
              margin-top: 15/50rem;
        >i{
             font-size: 24/50rem;
             color:#FE4F88;
         }
        }
}
.userInfo{
        position: fixed;
        top: 0;
        left: 0;
        right: 70/50rem;
        bottom: 0;
        background-color: #fff;
        z-index: 1111;
        >.hearder{
            height: 3rem;
            width: 100%;
            background-color: pink;
            padding: 10/50rem;
            background: url('../../assets/images/user.png') no-repeat;
            background-size: cover;
            box-sizing: border-box;
            >.use{
                margin-top: .6rem;
               height: 1rem;
               >span{
                   display: inline-block;
                   float: left;
               } 
               >.img{
                   width: 1.5rem;
                   height: 1.5rem;
                   >img{
                       width: 100%;
                       height: 100%;
                       border-radius: 50%;
                       border: .01rem solid #fff;
                   }
               }
               >.name{
                   width: 2.5rem;
                   font-size: 20/50rem;
                   display: -webkit-box;
                   margin-top: .5rem;
                   padding: .05rem;
                   -webkit-box-orient: vertical;
                   -webkit-line-clamp: 1;
                   overflow: hidden;
                   color:#fff;
               }
               >.imgTop{
                   width: 40/50rem;
                   position: absolute;
                   top: 15/50rem;
                   right: 15/50rem;
               }
            }
            >.Sign{
                padding-right: 8/50rem;
                margin-top: -20/50rem;
                >img{
                    width: 1rem;
                }
                >p{
                    display: block;
                    width: 1.2rem;
                    height: 30/50rem;
                    border: .01rem solid #F894E1;
                    background-color: #fff;
                    border-radius: 15/50rem;
                    >span{
                        display: block;
                        width: 50/50rem;
                        height: 25/50rem;
                        line-height: 25/50rem;
                        text-align: center;
                        color:#fff;
                        background-color: #F894E1;
                        margin: 2.5/50rem auto;
                        border-radius: 15/50rem;
                    }
                }
            }
        }
        >.list{
            >li{
                line-height: 38/50rem;
                padding: 0 10/50rem;
                font-size: 18/50rem;
                >i{
                    font-size: 20/50rem;
                }
                &:nth-child(1){
                    i{
                        color:#FFDA69;
                    }
                }
                &:nth-child(2){
                    i{
                        color:#48CFE5;
                    }
                }
                &:nth-child(3){
                    i{
                        color:#8683EA;
                    }
                }
                &:nth-child(4){
                    i{
                        color:#48CFE5;
                    }
                }
                &:nth-child(5){
                    border-bottom: .01rem solid #EEEEF0;
                    i{
                        color:#6C97EE;
                    }
                }
                &:nth-child(6){
                    i{
                        color:#FB7199;
                }
                &:nth-child(7){
                    i{
                        color:#58D598;
                    }
                }
                 &:nth-child(8){
                    i{
                        color:#FFB161;
                    }
                 }
                }
            }
            >.edie{
                >i{
                    font-size: 25/50rem;
                    padding-right: 8/50rem;
                    color:#666;
                }
            }
        }
}
.myInfo-enter {
  opacity: 0;
  transform: translateX(-100%);
}
.myInfo-leave-to {
  opacity: 0;
  transform: translateX(100%);
  position: absolute;
}
.myInfo-enter-active,
.myInfo-leave-active {
  transition: all 0.5s ease;
}
// 遮盖层
.mask{
       position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0; 
        z-index: 1110;
        background-color: rgba(0,0,0,.8);
}
.content{
    position: absolute;
    top: 1.2rem;
    bottom: 1.2rem;
    left: 0;
    right: 0;
    >.infomations{
        >li{
            width: 25%;
            float: left;
            text-align: center;
            position: relative;
            >span{
                display: inline-block;
                width: 40/50rem;
                height: 40/50rem;
                line-height: 40/50rem;
                 border-radius: 50%;
            }
            &:nth-child(1){
                span{
                     background-color: #FEB403;
                     >i{
                         color:#fff;
                         font-size: 20/50rem;
                     }
                }
            }
            &:nth-child(2){
                span{
                     background-color: #F88F8B;
                     >i{
                         color:#fff;
                         font-size: 20/50rem;
                     }
                }
            }
            &:nth-child(3){
                span{
                     background-color: #3ACCFF;
                     >i{
                         color:#fff;
                         font-size: 30/50rem;
                     }
                }
            }
            &:nth-child(4){
                span{
                     background-color: #5C84FD;
                     >i{
                         color:#fff;
                         font-size: 20/50rem;
                         line-height: 45/50rem;
                     }
                }
            }
            >.spot{
                display: block;
                width: 8/50rem;
                height: 8/50rem;
                border-radius: 50%;
                background-color: #FF4984;
                position: absolute;
                top: 0;
                right: 20%;
            }
            >.name{
                line-height: 1rem;
                color:#000;
                font-size: 16/50rem;
            }
        }
    }
    >.info{
        margin-top: 20/50rem;
        li{
            height: 1rem;
            padding: 15/50rem 10/50rem;
            border-bottom: .04rem solid #F3F3F3;
            display: flex;
            >.img{
                width: 1.2rem;
                height: 1.2rem;
                >img{
                    width: 100%;
                    height: 100%;
                    border-radius: 50%;
                }
            }
            >.title{
                flex: 1;
                padding-left: 5/50rem;
                >p{
                    line-height: 30/50rem;
                    font-weight: 700;
                    font-size: 18/50rem;
                    color:#000;
                }
                >span{
                    min-width: 0;
                    padding-left: 8/50rem;
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 1;
                    overflow: hidden; 
                    color:#ccc;
                    font-size: 16/50rem;
                }
            }
            >.time{
                width: 1.5rem;
                font-size: 16/50rem;
                >p{
                    width: 20/50rem;
                    height: 20/50rem;
                    line-height: 20/50rem;
                    border-radius: 50%;
                    background-color: #FF4884;
                    color:#fff;
                    text-align: center;
                    margin-top: 25/50rem;
                }
            }
        }
    }
}
</style>

