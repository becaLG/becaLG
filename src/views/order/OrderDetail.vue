<template>
  <div class="order-detail-box">
    <nav-bar>
      <template v-slot:default> 订单详情 </template>
    </nav-bar>

    <div class="order-status">
      <div class="status-item">
        <label> 订单状态:</label>
        <span>{{ statusString }}</span>
      </div>
      <div class="status-item">
        <label> 订单编号:</label>
        <span>{{ detail.order_no }}</span>
      </div>
      <div class="status-item">
        <label>下单时间:</label>
        <span>{{ detail.create_at }}</span>
      </div>

      <van-button
        v-if="detail.status == 1"
        @click="showPayFn"
        style="margin-bottom: 10px"
        color="#1baeae"
        block
        >去支付</van-button
      >
      <van-button block @click="handleConfirmOrder" class="asd">确认订单</van-button>
    </div>

    <div class="order-price">
      <div class="price-item">
        <label>商品金额:</label>
        <span>${{ total + ".00" }}</span>
      </div>

      <div class="price-item">
        <label>配送方式:</label>
        <span>普通快递</span>
      </div>
    </div>

    <van-cart
      v-for="item in list"
      :key="item.id"
      :num="item.num"
      :price="item.price + '.00'"
      desc="全场包邮"
      :title="item.goods.title"
      :thumb="item.goods.cover_url"
    />

    <div style="width: 100%; height: 50px">


    </div>

    <van-popup
      v-model:show="showPay"
      position="bottom"
      :style="{ height: '40%' }"
    >
      <div :style="{ width: '90%', margin: '0 auto', padding: '50px 0' }">
        <van-grid :border="false" :column-num="2">
          <van-grid-item text="支付宝">
            支付宝二维码 <br />
            <van-image
              width="150"
              height="150"
              :src="aliyun"
            />
          </van-grid-item>
          <van-grid-item text="微信支付">
            微信二维码 <br />
            <van-image
              width="150"
              height="150"
              :src="wechat"
            />
          </van-grid-item>
        </van-grid>
      </div>
    </van-popup>
  </div>
</template>

<script>
import NavBar from "../../components/common/NavBar/NavBar.vue";
import { reactive, toRefs } from "@vue/reactivity";
import { useRoute, useRouter } from "vue-router";
import { computed, onMounted } from "@vue/runtime-core";
import { Dialog, Toast } from "vant";
import { confirmOrder, getOrderDetail, payOrder } from "../../components/network/order";
export default {
  name: 'OrderDetail',
  components: {
    NavBar,
  },
  setup() {
    const route = useRoute();
    const router = useRouter();
    const state = reactive({
      orderNo: "",
      detail: {
        OrderDetails: {
          date: [],
        },
        status: 0,
      },
      showPay: false,
      aliyun:'',
      wechat:'',
    });

    const init = () => {
      const { id } = route.query;
      state.orderNo = id;

      getOrderDetail(id).then((res) => {
        // state.detail = res;
        Object.assign(state.detail,res);
      });
    };

    onMounted(() => {
      Toast.loading({ message: "加载中...", forbidClick: true });
      init();
      Toast.clear();
    });

    const statusString = computed(() => {
      let status = ["", "已下单", "已支付", "等待发货", "确认收获", "已过期"];

      return status[state.detail.status];
    });
    const total = computed(() => {
      let sum = 0;

      state.detail.OrderDetails.date.forEach((item) => {
          sum += item.num * item.price;
        });

      return sum;
    });

    const list = computed(() => {
      console.log(state.detail.OrderDetails.date)
      return state.detail.OrderDetails.date;
    });

    const showPayFn = () => {
      state.showPay = true;
      payOrder(state.orderNo, { type: "aliyun" }).then((res) => {
        state.aliyun = res.qr_code_url;
        state.wechat = res.qr_code_url;
      });
      const timer = setInterval(() => {
          payOrderStatus(state.orderNo).then(res=>{
            if(res =='2'){
                clearInterval(timer);
                state.showPay = false;
                router.push({path:'/orderdetail',query:{id:state.orderNo}})
            }
          }) 
        }, 2000);
    };

    const handleConfirmOrder = () =>{
        Dialog.confirm({
            title:'是否确认订单'
        }).then(()=>{
            confirmOrder(state.orderNo).then(res=>{
                
                    Toast('确认成功');
                    init()
                
            })
        }).catch(()=>{

        })
    }

    const close = () =>{
        Dialog.close();
    }

    return {
      ...toRefs(state),
      list,
      statusString,
      total,
      showPayFn,
      handleConfirmOrder,
      close
    };
  },
};
</script>

<style lang="scss" scoped>
.order-detail-box{
  text-align: left;
  background: #f7f7f7;
  .order-status{
    background: #fff;
    margin-top: 44px;
    padding: 20px;
    font-size: 15px;
    .status-item{
      margin-bottom: 10px;
    }
  }
}
.order-price{
  background: #fff;
  height: 100px;
  line-height: 35px;
  padding: 10px;
}

</style>