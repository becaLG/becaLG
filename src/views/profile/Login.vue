<template>
  <div>
    <nav-bar>
      <template v-slot:default> 用户登录</template>
    </nav-bar>

    <div style="margin-top: 50px">
      <div style="text-align: center,padding-top:50px">
        <van-image
          width="10rem"
          height="5rem"
          fit="contain"
          src="https://bkimg.cdn.bcebos.com/pic/8601a18b87d6277f44e129fb26381f30e824fc06?x-bce-process=image/resize,m_lfit,w_536,limit_1/format,f_jpg"
        />
      </div>
      <van-form @submit="onSubmit">
        <van-field
          v-model="email"
          name="用户名"
          label="用户名"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          v-model="password"
          type="password"
          name="密码"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
      

        <div style="margin: 16px">
          <div class="link-login" @click="$router.push({ path: '/register' })">
            没有账号,立即注册
          </div>
          <van-button
            round
            block
            type="primary"
            color="#44b883"
            native-type="submit"
          >
            提交
          </van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>

<script>
import NavBar from "../../components/common/NavBar/NavBar.vue";
import {ref,reactive,toRefs} from "vue";
import {login} from '../../components/network/user';
import { Notify } from 'vant';
import { Toast } from 'vant';
import {useRouter} from "vue-router";
export default {
  name: "Register",
  components: {
    NavBar,
  },
  setup(){
    const router = useRouter();
    const userinfo = reactive({
        email:'',
        password:'',
        
    })
        const onSubmit = () =>{
            login(userinfo).then(res=>{
                window.localStorage.setItem('token',res.access_token);
                Toast.success('登录成功');
                userinfo.email = '';
                userinfo.password = '';
                setTimeout(()=>{
                    router.go(-1);  
                },500)
            })
        }
        return {
            ...toRefs(userinfo),
            onSubmit
        }
  }
};
</script>

<style scoped>
.link-login{
    font-size: 14px;
    margin-bottom: 20px;
    color: #42b983;
    display: inline-block;
    text-align: left;
    float: left;
}
</style>