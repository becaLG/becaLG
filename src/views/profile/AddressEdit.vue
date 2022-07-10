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
import {tdist} from '../../components/utils/address'
import {addAddress,EditAddress,DeleteAddress,getAddressDetail} from '../../components/network/address'
import { ref } from 'vue';
import { Toast } from 'vant';
import NavBar from "../../components/common/NavBar/NavBar.vue";
import { reactive, toRefs } from '@vue/reactivity'
import { useRoute, useRouter } from 'vue-router'
import { onMounted } from '@vue/runtime-core'
import { isDate } from 'vant/lib/utils';

export default {
    components:{
        NavBar
    },
    setup(){
        const router = useRouter()
        const route = useRoute()
        const state = reactive({
            areaList:{
                province_list:{},
                city_list:{},
                county_list:{}
            },
            searchResult:[],
            addressInfo:{}
        })

        

        onMounted(()=>{
             let _province_list = {};
             let _city_list = {};
             let _county_list ={};

             tdist.getLev1().forEach(p=>{
                _province_list[p.id] = p.text;
                tdist.getLev2(p.id).forEach(c=>{
                    _city_list[c.id] = c.text;
                    tdist.getLev3(c.id).forEach(q =>{
                        _county_list[q.id] = q.text;
                     })
                })
             })

             state.areaList.province_list = _province_list;
             state.areaList.city_list = _city_list;
             state.areaList._county_list = _county_list;
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