<template>
    <div class="hotMore">
        <div class="item">
            <h3>当前最热</h3>
            <ul class="list clearfix">
                <li v-for="(item,index) in List" :key="index">
                    <div class="img">
                        <img :src="item.url" alt="">
                    </div>
                    <span>{{item.title}}</span>
                </li>
            </ul>
        </div>
        <div class="item">
            <h3>上升最快</h3>
            <ul class="list clearfix">
                <li v-for="(item,index) in List" :key="index">
                    <div class="img">
                        <img :src="item.url" alt="">
                    </div>
                    <span>{{item.title}}</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name:"hotMore",
    data(){
        return{
            List:[{
                    id:1,
                    url:require('../../../assets/images/dongman.jpg'),
                    title:'动漫美图'
                },{
                    id:2,
                    url:require('../../../assets/images/dongman.jpg'),
                    title:'CP交友'
                },{
                    id:3,
                    url:require('../../../assets/images/dongman.jpg'),
                    title:'绘画'
                },{
                    id:4,
                    url:require('../../../assets/images/dongman.jpg'),
                    title:'漫画'
                },{
                    id:5,
                    url:require('../../../assets/images/dongman.jpg'),
                    title:'COS'
                },{
                    id:6,
                    url:require('../../../assets/images/dongman.jpg'),
                    title:'绝对宅学领域'
                },{
                    id:7,
                    url:require('../../../assets/images/dongman.jpg'),
                    title:'动画番剧'
                },{
                    id:8,
                    url:require('../../../assets/images/dongman.jpg'),
                    title:'动漫美图'
                },{
                    id:9,
                    url:require('../../../assets/images/dongman.jpg'),
                    title:'动漫美图'
            }]
        }
    }
}
</script>

<style lang="less">
.hotMore{
    margin-bottom: 1.2rem;
    >.item{
        padding: 0 10/50rem;
        >h3{
            line-height: 1rem;
            font-size: 16/50rem;
            font-weight: 700;
            position: relative;
            padding-left: .3rem;
            color:#7F818E;
            &::before{
                content: "";
                width: .1rem;
                height: 15/50rem;
                border-radius: .1rem;
                background-color: #FF4985;
                position: absolute;
                top: .35rem;
                left: 0;
            }
        }
        >.list{
            >li{
                float: left;
                width: 33.33%;
                padding: 5/50rem;
                box-sizing: border-box;
                position: relative;
                margin-bottom: 10/50rem;
                >.img{
                    width: 100%;
                    height: 100%;
                    border-radius: 10/50rem;
                     box-shadow: 0.06rem .06rem 0.06rem 0.01rem #E1E6E9;
                    >img{
                        width: 100%;
                        height: 110/50rem;
                        border-radius: 10/50rem;
                    }
                }
                >span{
                    position: absolute;
                    bottom: 8/50rem;
                    left: 50%;
                    transform: translateX(-50%);
                    color:#fff;
                }
            }
        }
    }
}
</style>

