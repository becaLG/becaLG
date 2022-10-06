<template>
    <div v-show="visible">
      <div>{{title}}</div>
        <div><slot>{{titletwo}}</slot>、</div>
        <slot name="foot">
        <van-button @click="close">取消</van-button>
        <van-button @click="close">确定</van-button>
        </slot>
    </div>
</template>

<script setup>
const emits = defineEmits(['close','visible']);
const props = defineProps({
    visible:{
        type:Boolean,
        default:false
    },
    title:{
        type:String,
        default:'这是Dialog页面'
    },
    titletwo:{
        type:String,
        default:'这是Dialog页面2'
    }
})

const close = ()=>{
    emits('close')
    emits('update:visible',false)
}
</script>

<style>

</style>