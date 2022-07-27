<template>
    <div id="home">
        <van-button @click="handelClick" class="swithup">开关弹窗</van-button>
        <myDialog :visible="visible" title="提示" content="这是一段信息">
            <div>sdfsdf</div>
            <h1 class="h1">12312
            </h1>
             <template #footer>
                    <van-button class="Cancel">取1消</van-button>
                    <van-button class="Sure">确1定</van-button>
             </template>
        </myDialog>

        <div class="background-style" v-show="background">
   
        </div>
        
    </div>
</template>

<script setup>
    import myDialog from '../order/Dialog.vue';
    import { ref } from 'vue';
    const visible = ref(false);
    const background = ref(false);
    
    const handelClick = () => {
        visible.value = !visible.value;
        background.value = !background.value;
    }

</script>

<style scoped>
.background-style {
      background-color: rgba(128, 128, 128, .5); /* 设置背景颜色 */
      position:fixed;
      top:0;
      left:0;
      bottom:0;
      right:0;
      z-index:-1;
}
.Cancel{
    color: #606266;
    position: relative;
    left: 110px;
    top: 10px;
    border-radius:5px;
    width: 75px;
    height: 40px;
}
.Sure{
    background: #409eff;
    color: white;
    position: relative;
    left: 130px;
    border-radius:5px;
    width: 75px;
    height: 40px;
    top: 10px;
}

</style>    