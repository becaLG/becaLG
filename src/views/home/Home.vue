<template>
    <div id="home">
        <van-button @click="handelClick" >开关弹窗</van-button>
        <myDialog :visible="visible" title="home的标题" content="home的内容">
          
             <template #footer>
                    
                    <van-button>取消1</van-button>
                    
               
                    <van-button>确定1</van-button>
             </template>
        </myDialog>
        
    </div>
</template>

<script setup>
    import myDialog from '@/views/order/Dialog.vue';
    import { ref } from 'vue';
    const visible = ref(false);

    const handelClick = () => {
        visible.value = !visible.value;
    }
    
</script>

<style scoped>

</style>    