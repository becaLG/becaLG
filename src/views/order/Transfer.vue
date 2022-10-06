<template>
  <div id="transfer">
    <div class="cuboid">
      <div class="listone"></div>
      <span class="square">&nbsp&nbsp&nbsp&nbsp</span>
      <span class="listfont">List 1</span>
       <van-checkbox-group v-model="checked">
           <van-checkbox v-for="item in leftArr" :name="item.key" :key="item.key">
             {{ item.name }}
             </van-checkbox>
       </van-checkbox-group>
    </div>
    <button class="left" @click="leftbutton">&lt</button>
    <button class="right" @click="rightbutton">&gt</button>
    <div class="rightcuboid">
      <div class="listtwo">
        <span class="squarethree">&nbsp&nbsp&nbsp&nbsp</span>
        <span class="listfonttwo">List 2</span>
      </div>
      <div class="checkboxtwo">
        <van-checkbox-group v-model="rightCheck" class="group">
           <van-checkbox v-for="item in rightArr" :key="item.key" :name="item.key">
             {{item.name}}
            </van-checkbox>
       </van-checkbox-group>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { createApp } from 'vue';
import { Checkbox, CheckboxGroup } from 'vant';
const app = createApp();
app.use(Checkbox);
app.use(CheckboxGroup);
const rightArr = ref([]);
const checked = ref([]);
const rightCheck = ref([])
const props = defineProps({
  data:{
    type:Array,
  }
})
const leftArr = ref([...props.data])
const rightbutton = () =>{
    const emptybox =[]
    checked.value.forEach((item,index)=>{
      leftArr.value.forEach((leftitem,index)=>{
        if(item == leftitem.key){
          emptybox.push(leftitem)
        }
      })
    })
    emptybox.forEach((emptyboxitem,index)=>{
      leftArr.value.forEach((leftArritem,index)=>{
        if(emptyboxitem.key == leftArritem.key){
          leftArr.value.splice(index,1)
        }
      })
    })

    rightArr.value.push(...emptybox)
    checked.value =[]
}

  const leftbutton = () =>{
    const LinArr = []
    rightCheck.value.forEach((item,rightindex)=>{
      rightArr.value.forEach((rightitem,righti)=>{
        if(item == rightitem.key){
          LinArr.push(rightitem)
        }
      })
    })

    LinArr.forEach((linitem)=>{
      rightArr.value.forEach((rightitem,righti)=>{
        if(linitem.key == rightitem.key){
          rightArr.value.splice(righti,1)
        }
      })
    })

    leftArr.value.push(...LinArr)
    rightCheck.value =[]
  }
</script>

<style>
.group{
  position: absolute;
    top: 40px;
}
.cuboid {
  width: 200px;
  height: 318px;
  position: absolute;
  overflow: auto;
  border: 1px solid #ebeef5;
  cursor: pointer;
}
.cuboid::-webkit-scrollbar {
  width: 5px;
  height: 6px;
  background-color: #b1b3b8;
  border-radius: 4px;
}
.cuboid .el-table--scrollable-y .el-table__body-wrapper {
  overflow-y: hidden;
}
.rightcuboid {
  width: 200px;
  height: 318px;
  position: relative;
  left: 400px;
  border: 1px solid #ebeef5;
}
.left {
  width: 46px;
  height: 32px;
  background: #a0cfff;
  position: absolute;
  left: 240px;
  top: 200px;
}
.right {
  width: 46px;
  height: 32px;
  background: #a0cfff;
  position: absolute;
  left: 300px;
  top: 200px;
}
.listone {
  width: 200px;
  height: 40px;
  background: #f5f7fa;
  margin: 0px;
  font-size: 16px;
  border: 1px solid #ebeef5;
}
.listtwo {
  width: 200px;
  height: 40px;
  background: #f5f7fa;
  font-size: 16px;
  border: 1px solid #ebeef5;
}
.listfont {
  position: absolute;
  left: 40px;
  top: 10px;
}
.listfonttwo {
  position: absolute;
  left: 40px;
  top: 10px;
}
.checkbox {
  width: 147px;
  height: 30px;
}
.checkbox:hover{
    color: #409eff;
}
.square {
  position: absolute;
  top: 13px;
  left: 20px;
  width: 14px;
  height: 14px;
  background: #ffffff;
  border-radius: 3px;
  border: 1px solid #dcdfe6;
}
.square:hover{
    border: 1px solid #409eff;
}
.squaretwo {
  position: absolute;
  width: 14px;
  height: 14px;
  background: #ffffff;
  border-radius: 3px;
  border: 1px solid #dcdfe6;
  margin: 1px 0px 61px -20px;
}
.squaretwo:hover{
    border: 1px solid #409eff;
}
.squarethree {
  position: absolute;
  width: 14px;
  height: 14px;
  background: #ffffff;
  border-radius: 3px;
  border: 1px solid #dcdfe6;
  top: 13px;
  left: 20px;
}
.squarethree:hover{
    border: 1px solid #409eff;
}
</style>