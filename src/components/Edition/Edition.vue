<template>
    <div class="edition">
        <!-- 版区 -->
         <com-header></com-header>
         <router-view/>
         <!-- <com-footer></com-footer> -->
    </div>
</template>

<script>
import comHeader from '@/common/Header'
// import comFooter from '@/common/footer';
export default {
    components:{
        comHeader,
        // comFooter
    }
}
</script>

<style lang="less" scoped>
.edition{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom:60/50rem;
}
</style>
