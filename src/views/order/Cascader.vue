<template>
    <div id="cascader">
        <div class="clickmenu">
            <span>默认 click 触发子菜单</span>
            <input class="clickinput" type="text"  @click="onearrclick">
            <span class="inputvalue">{{onearr.onearrvalue}}</span>
            <div class="oneselectionbox" v-show="onearr.onearrswitch">
                <ul>
                    <li class="onearrstyle" v-for=" (item,index) in onearr.oneboxvalue" :key="index" @click="oneliclick(index)">
                        {{item}}
                    </li>
                </ul>
            </div>
            <div class="twoselectionbox" v-show="onearr.oneliswitch">
                <ul>
                    <li class="oneli" v-for="(item,index) in onearr.oneli" :key="index" @click="onelioneclick(index)">
                        {{item}}
                    </li>
                </ul>
            </div>
            <div class="threeselectionbox" v-show="onearr.onelioneswitch">
                <ul>
                    <li class="onelione" v-for="(item,index) in onearr.onelione" :key="index" @click="onelithree(index)">
                        {{item}}
                    </li>
                </ul>
            </div>
        </div>
        <div class="hovermenu">
            <span class="hoverfont">hover 触发子菜单</span>
            <input class="hoverinput" type="text" value="请输入">
        </div>
    </div>
</template>

<script setup>
import { reactive } from "vue";

const onearr =reactive({
    oneboxvalue:["","指南","组件","资源"],
    onearrswitch:false,
    oneli:["设计原则","导航"],
    oneliswitch:false,
    onelione:["一致","反馈","效率","可控"],
    onelioneswitch:false,
    twoli:["Basic","Form","Data","Notice","Navigation","Others"],
    threeli:["Axure Components","Sketch Templates","组件监护文档"],
    onearrvalue:"请输入"
})
const onearrclick = () =>{
    onearr.onearrswitch = !onearr.onearrswitch;
}
const oneliclick = (index)=>{
    onearr.oneboxvalue.forEach((item,i)=>{
        if(index == 1){
        onearr.oneliswitch = true
        }else{
            if(index == 2){
                onearr.oneli = onearr.twoli
            }else{
            if(index == 3){
                onearr.oneli = onearr.threeli
            }
            }
        }
    })
}
const onelioneclick = (index) =>{
    onearr.oneli.forEach((item,i)=>{
        onearr.onelioneswitch = true
    })
}
const onelithree =(index)=>{
    onearr.onelione.forEach((item,i)=>{
        // console.log(index)
        if(index == i){
            onearr.onearrvalue = onearr.oneboxvalue[i+1]+"/" + onearr.oneli[i]+"/" + onearr.onelione[i]
        }
        console.log(1)
    })
}
</script>

<style>
.clickmenu{
    width: 222px;
    height: 40px;
    color: #8492a6;
    font-size: 14px;
    
}
.hovermenu{
    width: 222px;
    height: 40px;
    position: relative;
    top: 50px;
    color: #8492a6;
    font-size: 14px;
}
.clickinput{
    width: 222px;
    height: 40px;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
}
.hoverinput{
    width: 222px;
    height: 40px;
    margin-top: 270px;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
}
.hoverfont{
   position: absolute;
    /* margin-top: 61px; */
    top: 250px;
    left: 45px;
}
.oneselectionbox{
    width: 196px;
    height: 204px;
    background: white;
    margin-top: 10px;
}
.twoselectionbox{
    width: 196px;
    height: 204px;
    background: white;
    position: absolute;
    top: 188px;
    left: 196px;
}
.threeselectionbox{
    width: 196px;
    height: 204px;
    background: white;
    position: absolute;
    top: 188px;
    left: 393px;
}
.onearrstyle{
    margin-top: 10px;
    width: 40px;
    height: 20px;
    position: relative;
    left: 20px;
}
.oneli{
    margin-top: 10px;
    width: 200px;
    height: 20px;
    position: relative;
    left: 20px;
}
.onelione{
    margin-top: 10px;
    width: 100px;
    height: 20px;
    position: relative;
    left: 20px;
}
.inputvalue{
    position: absolute;
    left: 10px;
    font-size: 17px;
    line-height: 40px;
}
</style>