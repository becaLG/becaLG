<template>
   <div id="home">
    <van-button @click="show">点击打开Dialog</van-button>
    <myDialog :title="title" titletwo="提示2" v-model:visible="hide" @close="closure">
        <template #foot>
        <div>111111</div>
        <h1>这是Home页面</h1>
        </template>
    </myDialog>

    <ccButton type="success" size="mini" disabled>
            这是一个按钮
    </ccButton>

    <!-- <myTransfer :data="datalist">
        
    </myTransfer> -->

    <myRate>
    </myRate>

    <myCascader>

    </myCascader>
    
    </div>
</template>

<script setup>
import myCascader from "../order/Cascader.vue"
import myTransfer from "../order/Transfer.vue";
import mySelect from "../order/Select.vue";
import myOption from "../order/Option.vue";
import { ref,reactive } from "@vue/reactivity";
import ccButton from "../../../src/components/ccButton.vue";
import myDialog from "../order/Dialog.vue"
import myRate from "../order/Rate.vue"

const hide = ref(false)
const show = () =>{
    hide.value = !hide.value
}
const closure = ()=>{
    alert('我要关闭了')
}
const datalist = ref([{
    name:"options1",
    key:"a"
},
{
    name:"options2",
    key:"b"
},{
    name:"options3",
    key:"c"
},{
    name:"options4",
    key:"d"
},{
    name:"options5",
    key:"e"
},{
    name:"options6",
    key:"f"
}])
</script>

<style>

</style>