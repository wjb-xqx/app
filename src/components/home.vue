<template>
    <div class="home">
        <div class="header">
            <div class="img" @click="showUserInfo">
                <img src="@/assets/images/user.png" alt="">
            </div>
            <nav>
                <span>关注 <p class="coherLine"></p> </span>
                <span>推荐</span>
                <span>视频</span>
            </nav>
            <div class="icon">
                <i class="iconfont">&#xe6a8;</i>
            </div>
        </div>
        <div class="links">
            <h3>
                <img src="@/assets/images/index.png" alt="">
                你可能感兴趣的弹友
            </h3>
            <ul>
                <li v-for="(item,index) in personList" :key="index">
                    <div class="img">
                        <img :src="item.url" alt="">
                    </div>
                    <p class="name">{{item.name}}</p>
                    <p class="type">{{item.type}}</p>
                    <p class="btn">+&nbsp;关注</p>
                </li>
            </ul>
            <div class="change">
                换一批
                <i class="iconfont">&#xe600;</i>
            </div>
        </div>
        <div class="links edition">
            <h3>
                <img src="@/assets/images/index.png" alt="">
                你可能感兴趣的版区
            </h3>
            <ul>
                <li v-for="(item,index) in containerList" :key="index">
                    <div class="img">
                        <img :src="item.url" alt="">
                    </div>
                    <p class="name">{{item.name}}</p>
                    <p class="btn">+&nbsp;加入</p>
                </li>
            </ul>
            <div class="change">
                换一批
                <i class="iconfont">&#xe600;</i>
            </div>
        </div>
        <com-footer></com-footer>

        <!-- 个人信息设置 -->
        <transition>
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
    </div>
</template>

<script>
import comFooter from './footer.vue';
export default {
    data(){
        return{
            personList:[{
                id:'1',
                url:require('../assets/images/user.png'),
                name:'南小姐的枕边人',
                type:'活跃达人',
                },{
                id:'2',
                url:require('../assets/images/user.png'),
                name:'miss小姐',
                type:'活跃达人',
                },{
                id:'3',
                url:require('../assets/images/user.png'),
                name:'南小姐的枕边人',
                type:'活跃达人',
            }],
            containerList:[{
                id:'1',
                url:require('../assets/images/user.png'),
                name:'南小姐的枕边人',
                type:'活跃达人',
                },{
                id:'2',
                url:require('../assets/images/user.png'),
                name:'miss小姐',
                type:'活跃达人',
                },{
                id:'3',
                url:require('../assets/images/user.png'),
                name:'南小姐的枕边人',
                type:'活跃达人',
            }],
            flag:false
        }
    },
    components:{
        comFooter
    },
    methods:{
        showUserInfo(){
            this.flag = true
        }
    }
}
</script>

<style lang="less" scoped>
.home{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom:0;
    .header{
        position: fixed;
        z-index: 99;
        height: 1rem;
        width: 100%;
        padding: 3/50rem 10/50rem;
        border-bottom: .001rem solid #EEEEF0;
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
    .links{
        margin: 85/50rem 10/50rem;
        box-sizing: border-box;
        >h3{
            font-size: 14/50rem;
            >img{
                width: 30/50rem;
            }
        }
        >ul{
            display: flex;
            >li{
                flex: 1;
                min-width: 0;
                text-align: center;
                margin-top: 15/50rem;
                height: 130/50rem;
                >.img{
                    width: 1rem;
                    height: 1rem;
                    background-color: pink;
                    display: block;
                    margin: 0 auto;
                    border-radius: 50%;
                    >img{
                        width: 100%;
                        height: 100%;
                        border-radius: 50%;
                    }
                }
                >.name{
                    line-height: 30/50rem;
                    color:#000;
                    font-weight: 700;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
                >.type{
                   line-height: 15/50rem; 
                   color:#ccc;
                   font-size: 12/50rem;
                }
                >.btn{
                    margin: 8/50rem auto;
                    width: 1.2rem;
                    height: 20/50rem;
                    line-height: 20/50rem;
                    border: .01rem solid #FD4C86;
                    border-radius: 15/50rem;
                    color:#FD4C86;
                }
            }
        }
        >.change{
            padding: 45/50rem 30/50rem 10/50rem;
            text-align: center;
            color:#FD4C86;
            font-size: 16/50rem;
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
            background: url('../assets/images/user.png') no-repeat;
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
    .v-enter {
      opacity: 0;
      transform: translateX(-100%);
    }

    .v-leave-to {
      opacity: 0;
      transform: translateX(100%);
      position: absolute;
    }

    .v-enter-active,
    .v-leave-active {
      transition: all 0.5s ease;
    }
    .mask{
       position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0; 
        z-index: 1110;
        background-color: rgba(0,0,0,.8);
    }
}

</style>

