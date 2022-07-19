<template>
<div>
  <nav-bar>
    <template v-slot:default> 订单列表</template>
  </nav-bar>

  <van-tabs ref="tabs" class="order-tab">
    <van-tab title="全部"></van-tab>
    <van-tab title="待付款"></van-tab>
    <van-tab title="已支付"></van-tab>
    <van-tab title="发货"></van-tab>
    <van-tab title="交易完成"></van-tab>
    <van-tab title="已过期"></van-tab>
  </van-tabs>


    <div class="content">
        <van-pull-refresh v-model="refreshing" @refresh="onRefresh" class="order-list-refresh">
            <van-list
            v-model:loading="loading"
            :finished = 'finished'
            finished-text="没有更多了"
            @load="onLoad"
            @offset ="10"
            >
            <div class="order-item-box">
                <div class="order-item-header">
                    <span style="line-height:30px;">订单号:2022222 <br> 创建时间:20221202 </span>
                </div>

            <van-card
            num="10"
            price="999.9"
            desc="全场包邮"
            title="《细说PHP》第四版"
            thumb="../../assets/images/1.jpg"
            />

            </div>
            </van-list>
        </van-pull-refresh>
    </div>
</div>


</template>


<script>
import {reactive,ref,toRefs,onMounted} from 'vue';
import { useRoute, useRouter } from 'vue-router';
import NavBar from "../../components/common/NavBar/NavBar.vue";
import {getOrderList} from "../../components/network/order";

export default({
    name:'Order',
    components:{
        NavBar
    },
    setup(){
        const router = useRouter()
        const route = useRoute()
        let tabs = ref(null);
        const state = reactive({
            loading:false,
            finished:false,
            refreshing:false,
            list:[],
            page:1,
            totalPage:0,
            status:0
        })
        onMounted(()=>{
            onRefresh();
        })
        const loadData = () =>{

        }

        const onLoad =()=>{
            loadData();
        }


        const onRefresh = () =>{
            state.refreshing = true

            state.finished = false

            state.loading = true
            onLoad()
        }

        return {
            ...toRefs(state,),
            onLoad,
            onRefresh,
            tabs
        }
    }
})
</script>
