<template>
    <div ref="myselet">
        <input v-model="value" class="inputbox" disabled="true" @click="showOptions">
        <slot></slot>
    </div>
</template>

<script setup>
import { ref } from "@vue/reactivity";

let myselet = ref(null)
console.log(myselet)

</script>

<style>
.asd{
    width: 100px;
    height: 100px;
}
.menu{
    width: 240px;
    height: 184px;
    /* background: red; */
    position: absolute;
    left: 352px;
    border: 1px solid rgb(228, 221, 237);
}
.menupage{
    width: 240px;
    height: 34px;
    line-height: 40px;
    text-align:left;
}
.menupage:hover{
    background: #F5F7FA;
}
.inputbox{
    width: 240px;
    height: 40px;
   position: relative;
   right: 295px;
   border: 1px solid rgb(228, 221, 237);
}
</style>