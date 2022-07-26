<template>
  <div class="home">
    <div class="one">
      <button class="onebuttone" @click="dianji">click to open the Dialog</button>
      <div class="tanchuangone">
         <div class="qiantaoone" v-show="false">
          <div class="zhongwenzitwo">Are you sure to close this dialog?</div>
          <button class="Cancel" @click="cancel">Cancel</button>
          <button class="OK" @click="OK">OK</button>
         </div>
        <div @click="dianji" v-show="this.asd" class="topzitione">Tips <div class="onex" @click="cha">X </div>
        </div>
        <div @click="dianji" v-show="this.asd" class="zhongwenzi">This is a message</div>
        <button @click="dianji" v-show="this.asd" class="onebutton">Cancel</button>
        <button @click="dianji" v-show="this.asd" class="twobutton">Confirm</button>
      </div>
    </div>

    <div class="two">
      <button @click="twoanniu">open a Table nested Dialog</button>
      <button>open a Form nested Dialog</button>
    </div>
    <div class="background-style" v-show="this.asd">
      
    </div>

    <!-- <div class="background-styletwo">

    </div> -->

  </div>


  
</template>

<script>


// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
export default {
  name: 'HomeView',
  data(){
    return {
      asd:false,
      abc:false,
    }
  },
  components: {
    HelloWorld
  },
  methods:{
    dianji(){
      this.asd = !this.asd;
    },
    cha(){
      this.abc = true;
      this.asd = !this.asd;
    },
    cancel(){
      this.abc = !this.abc;
    },
    OK(){
      this.abc = !this.abc;
      this.asd = !this.asd;
    },
    twoanniu(){
      this.asd = !this.asd;
      this.abc = false;
    }

  },
// setup(){
//   let dianji = () =>{
//     this.asd = !this.asd
//   }
//   return {
//     dianji
//   }
// }
 

  
}
</script>


<style scoped scss>
.background-style {
      background-color: rgba(0,0,0,.5); /* 设置背景颜色 */
      position:fixed;
      top:0;
      left:0;
      bottom:0;
      right:0;
      z-index: -1;

}
.background-styletwo{
      background-color: rgba(0,0,0,.5); /* 设置背景颜色 */
      position:fixed;
      top:0;
      left:0;
      bottom:0;
      right:0;
      z-index: -1;

}
.one{
  width: 370px;
  height: 80px;
  margin: 0 auto;
}
.two{
  width: 370px;
  height: 80px;
  margin: 160px auto;
  background: red;
}
.tanchuangone{
  width: 465px;
  height: 200px;
  background: #FFFFFF;
  position: absolute;
}
.onebuttone{
  cursor:pointer;
  width: 175px;
  height: 32px;
  border: none;
  color: #606266;
  background-color: white;
  font-size: 15px;
}
.onebuttone:hover{
  background: #d9dadb;
  border-radius:5px;
}
.topzitione{
  position: absolute;
  left: 15px;
  top: 20px;
  font-size: 21px;
}
.zhongwenzi{
  position: absolute;
  left: 15px;
  top: 80px;
  color: #606266;
}
.onebutton{
  width: 75px;
  height: 32px;
  position: absolute;
  bottom: 30px;
  right: 150px;
  color: black;
  background: #FFFFFF;
  border: 1px solid;
  border-color: #d9dadb;
  opacity:0.6;
  border-radius:5px;
  font-weight:550;
  cursor:pointer;
}
.twobutton{
  width: 75px;
  height: 32px;
  position: absolute;
  bottom: 30px;
  right: 55px;
  background: #409eff;
  border: 1px solid;
  border-color: #409eff;
  border-radius:5px;
  color: white;
  font-weight:550;
  cursor:pointer;
}
.onex{
  position: absolute;
  left: 410px;
  bottom: 5px;
  font-size: 13px;
  color: #606266;
  cursor:pointer
}
.onex:hover{
  color: #a0cfff;
}
.qiantaoone{
  width: 420px;
  height: 118px;
  background: white;
  margin: 0 auto;
  margin-top: 210px;
}
.zhongwenzitwo{
  position: relative;
  bottom: -40px;
  font-size: 15px;
  right: 80px
}
.Cancel{
    position: relative;
    width: 75px;
    height: 32px;
    top: 50px;
    left: 75px;
    color: black;
  background: #FFFFFF;
  border: 1px solid;
  border-color: #d9dadb;
  opacity:0.6;
  border-radius:5px;
  font-weight:550;
  cursor:pointer;
}
.OK{
position: relative;
    width: 52px;
    height: 32px;
    top: 50px;
    left: 85px;
     background: #409eff;
  border: 1px solid;
  border-color: #409eff;
  border-radius:5px;
  color: white;
  font-weight:550;
  cursor:pointer;
}


</style>