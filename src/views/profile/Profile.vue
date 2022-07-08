<template>
  <div>
    <nav-bar>
      <template v-slot:left>&lt;</template>
      <template v-slot:default> 个人中心</template>
    </nav-bar>

    <div class="Topimg">
      <img src="../../../src/assets/images/1.jpg" alt="" />
      <div>昵称:{{}}</div>
      <div>登录名:{{}}</div>
      <div>个性签名:{{}}</div>
    </div>
    
    

    <div style="margin: 15px; margin-top: 100px">
      <van-button @click="tologout" round block color="#44BA80"
        >退出登录</van-button
      >
    </div>
  </div>
</template>

<script>
import NavBar from "../../components/common/NavBar/NavBar.vue";
import { logout } from "../../components/network/user";
import { Toast } from "vant";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
export default {
  name: "Profile",
  components: {
    NavBar,
  },
  setup() {
    const router = useRouter();
    const store = useStore();
    const tologout = () => {
      logout().then((res) => {
        if (res.status == "204") {
          Toast.success("退出成功");
          window.localStorage.setItem("token", "");
          store.commit("setIsLogin", false);
          setTimeout(() => {
            router.push({ path: "/login" });
          }, 500);
        }
      });
    };
    return {
      tologout,
    };
  },
};
</script>


<style lang="scss">
.Topimg {
  height: 150px;
  width: 95%;
  background: rgb(57, 199, 168);
  margin: 0 auto;
  position: relative;
  top: 60px;
  border-radius: 20px;
  img {
    width: 100px;
    left: 0;
    position: absolute;
    bottom: 25px;
    left: 25px;
  }
}
</style>