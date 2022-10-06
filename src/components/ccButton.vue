<template>
  <div class="mybuttone" :class="[type,size,{'plain':plain},{'disabled':disabled}]">这是按钮</div>
</template>

<script setup>
const props = defineProps({
  type: {
    type: String,
    default: "default",
  },
  plain:{
    type:Boolean,
    default:false
  },
  disabled:{
    type:Boolean,
    default:false
  },
  size:{
    type:String,
    default:"default"
  }
});
</script>

<style>
.mybuttone {
  width: 98px;
  height: 40px;
}
.primary{
  width: 98px;
  height: 40px;
  color: #fff;
  background-color: #409eff;
  border-color: #409eff;
  border-radius: 4px;
  line-height: 40px;
}
.disabled:hover{
 cursor: not-allowed;
}
.primary.plain{
  width: 98px;
  height: 40px;
  color: #409eff;
  background: #ecf5ff;
  border-color: #b3d8ff;
  border-radius: 4px;
  line-height: 40px;
}

.primary.plain:hover{
 background:blue;
}
.success{
  width: 98px;
  height: 40px;
  color: #fff;
  background-color: #67c23a;
  border-color: #67c23a;
  border-radius: 4px;
  line-height: 40px;
}
.success.plain{
  width: 98px;
  height: 40px;
  color: #67c23a;
  background: #f0f9eb;
  border-color: #c2e7b0;
  border-radius: 4px;
  line-height: 40px;
}
.success.plain:hover{
 background:green;
}
.info{
  width: 98px;
  height: 40px;
  color: #fff;
  background-color: #909399;
  border-color: #909399;
  border-radius: 4px;
  line-height: 40px;
}
.info.plain{
  width: 98px;
  height: 40px;
  color: #909399;
  background: #f4f4f5;
  border-color: #d3d4d6;
  border-radius: 4px;
  line-height: 40px;
}
.info.plain:hover{
 background:black;
}
.warning{
  width: 98px;
  height: 40px;
  color: #fff;
  background-color: #e6a23c;
  border-color: #e6a23c;
  border-radius: 4px;
  line-height: 40px;
}
.warning.plain{
  width: 98px;
  height: 40px;
  color: #e6a23c;
  background: #fdf6ec;
  border-color: #f5dab1;
  border-radius: 4px;
  line-height: 40px;
}
.warning.plain:hover{
 background:yellow;
}
.danger{
  width: 98px;
  height: 40px;
  color: #fff;
  background-color: #f56c6c;
  border-color: #f56c6c;
  border-radius: 4px;
  line-height: 40px;
}
.danger.plain{
  width: 98px;
  height: 40px;
  color: #f56c6c;
  background: #fef0f0;
  border-color: #fbc4c4;
  border-radius: 4px;
  line-height: 40px;
}
.danger.plain:hover{
 background:red;
}
.medium{
  width: 98px;
  height: 36px;
}
.small{
  width: 80px;
  height: 32px;
}
.mini{
  width: 80px;
  height: 28px;
}
</style>
