<template>
    <div class="backTop" @click="backTop"></div>
</template>

<script>
export default {
    name:'BackTop',
    setup(props,{emit}){
        return {
            backTop:()=>{
                emit('bTop');
            }
        }
    }
}
</script>

<style scoped>
.backTop{
    width: 40px;
    height: 40px;
    position: fixed;
    bottom: 80px;
    right: 30px;
    z-index: 40px;
    box-shadow: 5px 5px 5px #888888;
    border-radius: 50%;
    background: #FCFCFC url('../../../assets/images/1.jpg')no-repeat center center;
}
</style>