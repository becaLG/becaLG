<template>
    <div class="Rate" @mouseleave="Rateleave">
        <div class="top" v-for="(item,index) in data.star" :key="index" @mouseover="Rateover(index)" @click="clickRate(index)">
            <van-icon v-show="!item" name="star-o"  />
            <van-icon v-show="item" color="rgb(247, 186, 42)" name="star" />
        </div>
    </div>

</template>

<script setup>

import { ref,reactive } from "vue";
const data = reactive({
    star:[false,false,false,false,false],
    clickstar:[false,false,false,false,false]
})

const Rateover = (index)=>{
    data.star.forEach((item,i)=>{
        if(i <= index){
            data.star[i] = true 
        }else{
            data.star[i] = false
        }
    })
}
const clickRate = (index)=>{
    data.clickstar.forEach((item,i)=>{
        if(i <= index){
            data.clickstar[i] = true 
        }else{
            data.clickstar[i] = false
        }
    })
}

const Rateleave =()=>{
    data.star = [...data.clickstar]
}
</script>

<style>
.Rate{
    width: 900px;
    height: 50px;
    float: left;
}
.top{
    margin-top: 10px;
    float: left;
}
.star{
    width: 20px;
    height: 20px;
}
</style>