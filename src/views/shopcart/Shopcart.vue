<template>
      <div>
        <nav-bar>
            <template v-slot:left>&lt;</template>
            <template v-slot:default> 购物车</template>
        </nav-bar>
    </div>
</template>

<script>
import NavBar from "../../components/common/NavBar/NavBar.vue"
export default {
    name:"Shopcart",
    components:{
        NavBar
    }
}
</script>