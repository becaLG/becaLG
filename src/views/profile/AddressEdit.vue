<template>
    <div class="address-edit-box">
        <nav-bar class="nav-bar">
            <template v-slot:default>
                新增地址
            </template>
        </nav-bar>

        <van-address-edit class="edit"
         :area-list="areaList"
         :address-info="addressInfo"
         :show-delete="false"
         show-set-default
         show-search-result
         :search-result="searchResult"
         :area-columns-placeholder="['请选择','请选择','请选择']"
         @save="onSave"
         @delete="onDelete"
         />
    </div>
</template>


<script>
import { reactive, toRefs } from '@vue/reactivity'
import { useRoute, useRouter } from 'vue-router'
import { onMounted } from '@vue/runtime-core'

export default {
    components:{
        NavBar
    },
    setup(){
        const router = useRouter()
        const route = useRoute()
        const state = reactive({
            areaList:{

            },
            searchResult:[],
            addressInfo:{}
        })

        onMounted(()=>{

        })

        const onSave = () =>{

        }

        const onDelete = () =>{
            
        }

        return {
            ...toRefs(state),
            onSave,
            onDelete
        }
    }
}
</script>



<style lang="scss">
.edit{
    .van-field__body{
        textarea{
            height: 26px!important;
        }
    }
}





</style>