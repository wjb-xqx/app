<template>
    <div class="follow">
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
    </div>
</template>

<script>
export default {
    name:"Follow",
    data(){
        return{
            personList:[{
                id:'1',
                url:require('../../../assets/images/user.png'),
                name:'南小姐的枕边人',
                type:'活跃达人',
                },{
                id:'2',
                url:require('../../../assets/images/user.png'),
                name:'miss小姐',
                type:'活跃达人',
                },{
                id:'3',
                url:require('../../../assets/images/user.png'),
                name:'南小姐的枕边人',
                type:'活跃达人',
            }],
            containerList:[{
                id:'1',
                url:require('../../../assets/images/user.png'),
                name:'南小姐的枕边人',
                type:'活跃达人',
                },{
                id:'2',
                url:require('../../../assets/images/user.png'),
                name:'miss小姐',
                type:'活跃达人',
                },{
                id:'3',
                url:require('../../../assets/images/user.png'),
                name:'南小姐的枕边人',
                type:'活跃达人',
            }],
        }
    }
}
</script>

<style lang="less" scoped>
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
</style>

