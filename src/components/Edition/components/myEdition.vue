<template>
    <div class="my">
        <div class="item">
             <h3>
                 <img src="@/assets/images/index.png" alt="">
                    加入的版区
             </h3>
              <div class="content">
                  <i class="iconfont">&#xe639;</i>
                  <span class="text">添加新版去</span>
              </div>
         </div>
        <div class="item itemList">
             <h3>
                 <img src="@/assets/images/index.png" alt="">
                    推荐的版区
             </h3>
              <ul class="content clearfix">
                 <li>
                     <img src="@/assets/images/user.png" alt="">
                     <p>帖子：8888.8万</p>
                     <span>+&nbsp;加入</span>
                 </li>
                 <li>
                     <img src="@/assets/images/user.png" alt="">
                     <p>帖子：8888.8万</p>
                     <span>+&nbsp;加入</span>
                 </li>
                 <li>
                     <img src="@/assets/images/user.png" alt="">
                     <p>帖子：8888.8万</p>
                     <span>+&nbsp;加入</span>
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

}
</script>

<style lang="less" scoped>
.item{
        margin: 1.5rem 0 20/50rem;
        padding: 0 10/50rem;
        >h3{
            line-height: 1rem;
            font-size: 16/50rem;
            color:#000;
            >img{
                width: 30/50rem;
            }
        }
        >.content{
                color:#999;
                padding: 10/50rem 0;
                >i{
                    font-size: 50/50rem;
                    display: inline-block;
                }
                >.text{
                    font-size: 18/50rem;

                }
                >li{
                    width: 32%;
                    float: left;
                    border: .01rem solid #818286;
                     box-sizing: border-box;
                     box-shadow: .01rem .02rem #D1D1D1;
                     margin-right: 2%;
                    >img{
                        width: 100%;
                        height: 2.3rem;
                        border-radius: 10/50rem;
                    }
                    >p{
                        font-size: 15/50rem;
                        line-height: 30/50rem;
                        text-align: center;
                        display: -webkit-box;
                        -webkit-box-orient: vertical;
                        -webkit-line-clamp: 1;
                        overflow: hidden;
                    }
                    >span{
                        display: block;
                        width: 1.5rem;
                        height: 30/50rem;
                        border: .01rem solid #262626;
                        border-radius: 15/ 50rem;
                        text-align: center;
                        line-height: 30/50rem;
                        font-size: 18/50rem;
                        color:#262626;
                        margin: 8/50rem auto;
                    }
                    &:nth-child(3n+3){
                        float: right;
                        margin-right: 0;
                    }
                }
        }
        >.change{
            padding: 30/50rem 30/50rem 20/50rem;
            text-align: center;
            color:#FD4C86;
            font-size: 16/50rem;
        }
}
.itemList{
    margin-top: 10/50rem;
}
</style>

