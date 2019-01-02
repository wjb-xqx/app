<template>
    <div class="login">
        <img src="@/assets/images/yanz.png" alt="">
        <div class="loginPage" v-show="isLogin">
                <!-- 登录 -->
            <form action="" class="loginInfo">
                <div class="div">
                    <i class="iconfont">&#xe628;</i>
                    <input type="text" placeholder="我的手机号码">
                </div>
                <!-- <div class="">
                    <i class="iconfont">&#xe67c;</i>
                    <input type="text" placeholder="验证码">
                </div> -->
               <div>
                    <i class="iconfont">&#xe614;</i>
                    <input type="password" placeholder="请输入密码" v-if="ifDisplay">
                    <input type="text" placeholder="请输入密码" v-else>
                    <span class="iconfont" v-show="ifDisplay" @click="ifDisplay=!ifDisplay">&#xe63b;</span>
                    <span class="iconfont" v-show="!ifDisplay" @click="ifDisplay=!ifDisplay">&#xe66a;</span>    
               </div>
               <button class="btn">登录</button>
            </form>
            <div class="help">
                <a href="javascript:;">忘记密码？</a>
                <span class="line">|</span>
                <a href="javascript:;" @click="showregisterPage">现在注册&nbsp;&nbsp;></a>
            </div>
            <ul>
                <li><i class="iconfont">&#xe60b;</i></li>
                <li><i class="iconfont">&#xe64d;</i></li>
                <li><i class="iconfont">&#xe630;</i></li>
            </ul>
        </div>

        <!-- 注册 -->
        <div class="loginPage registerPage" v-show="!isLogin">
            <form action="" class="loginInfo">
                  <div>
                      <i class="iconfont">&#xe628;</i>
                      <input type="text" placeholder="我的手机号码">
                  </div>
                  <div>
                      <i class="iconfont">&#xe67c;</i>
                      <input type="text" class="codeInput" placeholder="验证码">
                      <p>获取验证码</p>
                  </div>
                 <div>
                      <i class="iconfont">&#xe614;</i>
                      <input type="password" placeholder="请输入密码" v-if="ifDisplay">
                      <input type="text" placeholder="请输入密码" v-else>
                      <span class="iconfont" v-show="ifDisplay" @click="ifDisplay=!ifDisplay">&#xe63b;</span>
                      <span class="iconfont" v-show="!ifDisplay" @click="ifDisplay=!ifDisplay">&#xe66a;</span>    
                 </div>
                 <button class="btn code" v-show="codeShow">请输入邀请码</button>
                <button class="btn">注册</button>
            </form>
            <div class="loginBtn">
                <span ><a @click="showLogin">登录</a></span>
                <span><a v-show="showCode" @click="showCodeBtn">我有邀约人</a></span>
                <span><a v-show="!showCode" @click="hideCodeBtn">没有邀约人</a></span>
            </div>

        </div>
         
    </div>
</template>

<script>
export default {
    name:"login",
    data(){
        return {
            ifDisplay:true,
            isLogin:false,
            codeShow:false,
            showCode:true
        }
    },
    methods:{
        showPassWord(){
            this.ifDisplay = false
        },
        showLogin(){
            //跳转登录
            this.isLogin = true
        },
        showregisterPage(){
            //跳转注册页面
            this.isLogin = false
        },
        showCodeBtn(){
            // 有邀约人显示
            this.codeShow = true
            this.showCode = false
        },
        hideCodeBtn(){
            // 没有邀约人显示
            this.codeShow = false
            this.showCode = true
        }
    }
}
</script>
<style lang="less" scoped>
.login{
    position: absolute;
    width: 100%;
    height: 100%;
    font-family: KaiTi;
    img{
        width: 4.5rem;
        display: block;
        margin: 15/50rem auto 0;
    }
    // 登录
   >.loginPage{
        >.loginInfo{
            >div{
                height: 40/50rem;
                line-height: 35/50rem;
                margin: 10/50rem 30/50rem;
                border-bottom: 1/50rem solid #ccc;
                padding-left: 50/50rem;
                position: relative;
                box-sizing: border-box;
            >i{
                position: absolute;
                top: .12rem;
                left: .3rem;
            }
            >input{
                width: 80%;
                height: 35/50rem;
                line-height: 30/50rem;
                padding-top: 4/50rem;
                color: #ccc;
                font-size: 14/50rem;
                font-family: KaiTi;
                overflow: hidden;
            }
            >.codeInput{
                width: 50%!important;
                overflow: hidden;
            }
            >span{
                position: absolute;
                top: .12rem;
                right: .5rem;
                margin-top: .01rem;
            }
            >p{
                position: absolute;
                top: 0rem;
                right: .3rem;
                width: 1.6rem;
                text-align: center;
                line-height: 30/50rem;
                display: inline-block;
                font-size: 10/50rem;
                background-color: #FD4C86;
                border-radius: 15/50rem;
                color:#fff;
            }
            }
        >.btn{
            width: 80%;
            height: 45/50rem;
            display: block;
            margin: 15/50rem auto;
            line-height: 45/50rem;
            background-color: #FD4C86;
            color: #fff;
            font-family: KaiTi;
            border-radius: 30/50rem;
            font-size: 14/50rem;
        }
        >.code{
            background-color: #fff;
            color:#FD4C86;
            border: .01rem solid #FD4C86;
        }
    }
    >.help{
        position: absolute;
        bottom: 70/50rem;
        display: block;
        width: 100%;
        text-align: center;
        >a{
            color:#666;
            
        }
        >.line{
            padding: 0 5/50rem;
        }
    }
    >ul{
        position: absolute;
        bottom: 0rem;
        width: 100%;
        height: 50/50rem;
        >li{
            width: 33.33%;
            height: 100%;
            float: left;
            text-align: center;
            >i{
                font-size: 30/50rem;
                color:#333;
            }
            &:nth-child(1){
                text-align: right;
            }
            &:nth-child(3){
                text-align: left;
            }
        }
    }
   }
//    注册
    .loginBtn{
       >span{
           float: left;
           width: 50%;
           text-align: center;
           >a{
               color: #333;
           }
       } 
    }
}
</style>

