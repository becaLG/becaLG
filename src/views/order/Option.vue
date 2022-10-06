<template>
    <div ref="options" class="menu" v-show="show">
            <div class="menupage" v-for="item in options"
            :key="item.value"
            :value="item.value"
            :label="item.label"
            @click="select(item)"
            >
                {{item.label}}
            </div>
        
        </div>
</template>

<script setup>
import { ref } from "vue";


const options = [
    {value:"选项1",label:"黄金糕"},
    {value:"选项2",label:"双皮奶"},
    {value:"选项3",label:"蚵仔煎"},
    {value:"选项4",label:"龙须面"},
    {value:"选项5",label:"北京烤鸭"},
];
const value = ref("请输入");
const show = ref(false);
const select = (item)=>{
    value.value = item.label;
    show.value = !show.value;
}
const showOptions = ()=>{
    show.value = !show.value;
} 

const props = defineProps({
    type:Boolean,
    default:false
})
</script>