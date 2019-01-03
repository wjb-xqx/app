<template>
   <div class="Videoes">
        <ul class="clearfix">
            <li>
                <a href="javascript"  class="clearfix">
                    <img src="@/assets/images/vedio1.png" alt="" class="vocal">
                    <p class="title">花泽香菜《恋爱循环》中国首秀背景跨年！全场大合唱</p>
                    <p class="play fl"><i class="iconfont">&#xe60a;</i>1.1万</p>
                </a>
                <a href="javascript"  class="clearfix">
                    <img src="@/assets/images/vedio1.png" alt="">
                    <p class="title">花泽香菜《恋爱循环》中国首秀背景跨年！全场大合唱</p>
                    <p class="play fl"><i class="iconfont">&#xe60a;</i>1.1万</p>
                </a>
            </li>
            <li>
                <a href="javascript">
                    <img  src="@/assets/images/vedio1.png" alt="">
                    <p class="title">花泽香菜《恋爱循环》中国首秀背景跨年！全场大合唱</p>
                    <p class="play fl"><i class="iconfont">&#xe60a;</i>1.1万</p>
                </a>
            </li>
        </ul>
    </div> 
</template>

<script>
export default {
    name:'Videoes',
    data() {
        return {
            
        };
    }
}
</script>

<style lang="less" scoped>
.Videoes{
    margin: 1.5rem 0;
    >ul{
        >li{
            width: 50%;
            float: left;
            padding: 0 10/50rem;
            text-align: center;
            box-sizing: border-box;
            margin: 10/50rem 0;
          >a{   
                display: inline-block;
                margin-bottom: 20/50rem;
                >img{
                     width: 100%;
                     border-radius: 10/50rem;
                     height: 6rem;
                }
                >.vocal{
                    height: 2rem;
                }
                >.title{
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 2;
                    overflow: hidden;
                    font-size: 18/50rem;
                    margin: 5/50rem 0;
                    color:#000;
                }
                >.play{
                    line-height: 30/50rem;
                    color:#ccc;
                    >i{
                        color:#666;
                        padding-right: 5/50rem;
                    }
            }
          }
        }
    }
}
</style>

