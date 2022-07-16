<template>
    <div class="order-detail-box">
        <nav-bar class="nav-bar">
            <template v-slot:default>
                订单详情
            </template>
        </nav-bar>

        <div class="order-status">
            <div class="status-item">
                <label> 订单状态:</label>
                <span>{{statusString}}</span>
            </div>
            <div class="status-item">
                <label> 订单编号:</label>
                <span>{{detail.order_no}}</span>
            </div>
            <div class="status-item">
                <label>下单时间:</label>
                <span>{{detail.create_at}}</span>
            </div>

            <van-button style="margin-bottom:10px" color="#1baeae" block>去支付</van-button>
            <van-button block>确认订单</van-button>
        </div>

        <div class="order-price">
            <div class="price-item">
                <label>商品金额:</label>
                <span>${{total + '.00'}}</span>
            </div>

            <div class="price-item">
                <label>配送方式:</label>
                <span>普通快递</span>
            </div>
        </div>

        <van-cart
            v-for="item in detail.orderDetails.data" :key="item.id"
            :num="item.num"
            :price="item.price + '.00'"
            desc="全场包邮"
            :title="item.goods.title"
            :thumb="item.goods.cover_url"
        />

        

        <div style="width:100%;height:50px;">

        </div>

        <van-popup
        :show="false"
        position="bottom"
        :style="{height:'40%'}"
        >

        <div :style="{width:'90%',margin:'0 auto',padding:'50px 0'}">
            <van-grid :border="false" :column-num="2">
            <van-grid-item text="支付宝">
                支付宝二维码 <br>
            <van-image width="150" height="150" src="../../assets/images/1.jpg" />
            </van-grid-item>
            <van-grid-item text="微信支付">
                微信二维码 <br>
                <van-image width="150" height="150" src="../../assets/images/1.jpg" />
            </van-grid-item>
            </van-grid>
        </div>

        </van-popup>
       
    </div>
</template>

<script>
import {NavBar} from "../../components/common/NavBar/NavBar.vue"
import { reactive, toRefs } from '@vue/reactivity'
import { useRoute, useRouter } from 'vue-router'
import { computed, onMounted } from '@vue/runtime-core'
import { Toast } from 'vant'
import { getOrderDetail } from '../../components/network/order'
export default {
    name:OrderDetail,
    components:{
        NavBar
    },
    setup(){
        const route = useRoute()
        const router = useRouter()
        const state = reactive({
            orderNo:'',
            detail:{
                OrderDetails:{
                    date:[]
                }
            },
        })

        const init= () =>{
           const {id}= route.query;
           state.orderNo = id;

           getOrderDetail(id).then(res=>{
             state.detai = res;
           })
        }

        onMounted(()=>{
            Toast.loading({message:'加载中...',forbidClick:true})
            init();
            Toast.clear();
        })

        const statusString = computed(()=>{
            let status = ['','已下单','已支付','等待发货','确认收获','已过期'];

            return status[state.detail.status];
        })
        const total = computed(()=>{
            let sum = 0;

            state.detail,OrderDetails.data.forEach(item=>{
                sum += item.num * item.price;
            })

            return sum;
        })

        return {
            ...toRefs(state),
            statusString,
            total

        }
    }
}
</script>