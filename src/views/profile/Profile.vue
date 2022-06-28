<template>
    <div>
        <nav-bar>
            <template v-slot:left>&lt;</template>
            <template v-slot:default> 个人中心</template>
        </nav-bar>

        <div style="margin:15px;margin-top:100px">
            <van-button round block color='#44BA80'>退出登录</van-button>
        </div>
    </div>
</template>

<script>
import NavBar from "../../components/common/NavBar/NavBar.vue"
export default {
    name:"Profile",
    components:{
        NavBar
    }
}
</script>