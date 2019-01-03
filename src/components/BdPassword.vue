<template>
    <div class="pass">
        <div class="return">
            <i class="iconfont">&#xe602;</i>
            绑定手机
        </div>
         <!-- 绑定手机 -->
         <div class="loginPage binding">
                <!-- 登录 -->
            <form action="" class="loginInfo">
                <div class="div">
                    <i class="iconfont">&#xe628;</i>
                    <input type="text" placeholder="我的手机号码">
                </div>
                <div class="">
                    <i class="iconfont">&#xe67c;</i>
                    <input type="text" placeholder="验证码">
                </div>
                 <div>
                      <i class="iconfont">&#xe614;</i>
                      <input type="password" placeholder="设置登录密码" v-if="ifDisplay">
                      <input type="text" placeholder="设置登录密码" v-else>
                      <span class="iconfont" v-show="ifDisplay" @click="ifDisplay=!ifDisplay">&#xe63b;</span>
                      <span class="iconfont" v-show="!ifDisplay" @click="ifDisplay=!ifDisplay">&#xe66a;</span>    
                 </div>
                  <div>
                      <i class="iconfont">&#xe614;</i>
                      <input type="password" placeholder="重复登录密码" v-if="ifDisplay">
                      <input type="text" placeholder="重复登录密码" v-else>
                      <span class="iconfont" v-show="ifDisplay1" @click="ifDisplay1=!ifDisplay1">&#xe63b;</span>
                      <span class="iconfont" v-show="!ifDisplay1" @click="ifDisplay1=!ifDisplay1">&#xe66a;</span>    
                 </div>
               <button class="btn">登录</button>
            </form>
        </div>
        
    </div>
</template>
<script>
export default {
    name:"login",
    data(){
        return {
            ifDisplay:true,
            ifDisplay1:true,
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
 .return{
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
}
.loginPage{
    position: absolute;
    top: 1.3rem;
    left: 0;
    right: 0;
    bottom: 0;
}
 // 登录
.loginInfo{
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
</style>

