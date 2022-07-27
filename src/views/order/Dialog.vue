<template>
    <div class="my-dialog-top" v-show="visible">
        <div class="title">{{title}}</div>
        <div class="content"><slot>{{content}}</slot></div>
        <slot name="footer" class="asd">
            <van-button>取2消</van-button>
            <van-button>确2定</van-button>
        </slot>
        
    </div>
</template>

<script setup>
    const props = defineProps({
        visible:{
            type:Boolean,
            default:false
        },
        title:{
            type:String,
            default:'这是Dialog的标题'
        },
        content:{
            type:String,
            default:"这是Dialog内容"
        }
    }) 
</script>

<style scoped>
.my-dialog-top{
    width: 460px;
    height: 200px;
    background: white;
    z-index: 1;
    margin: 30px auto;
    position: relative;
}
.title{
    width: 470px;
    height: 54px;
    font-size: 18px;
    position: relative;
    top: 21px;
    right: 199px
}
.content{
    width: 460px;
    height: 80px;
    position: relative;
    top: 21px;
    right: 190px
}

</style>