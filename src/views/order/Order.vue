<template>
  <div>
    <nav-bar>
      <template v-slot:default> 订单列表</template>
    </nav-bar>

    <!-- <van-tabs ref="tabs" class="order-tab">
      <van-tab title="全部"></van-tab>
      <van-tab title="待付款"></van-tab>
      <van-tab title="已支付"></van-tab>
      <van-tab title="发货"></van-tab>
      <van-tab title="交易完成"></van-tab>
      <van-tab title="已过期"></van-tab>
    </van-tabs> -->

    <van-tabs @click="onChangeTab" ref="tabs" class="order-tab">
      <van-tab title="全部"></van-tab>
      <van-tab title="待付款"></van-tab>
      <van-tab title="已支付"></van-tab>
      <van-tab title="发货"></van-tab>
      <van-tab title="交易完成"></van-tab>
      <van-tab title="已过期"></van-tab>
    </van-tabs>

    <div class="content">
      <van-pull-refresh
        v-model="refreshing"
        @refresh="onRefresh"
        class="order-list-refresh"
      >
        <van-list
          v-model:loading="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad"
          @offset="10"
        >
          <div
            @click="goTo(item.id)"
            class="order-item-box"
            v-for="(item, index) in list"
            :key="index"
          >
            <div class="order-item-header">
              <span style="line-height: 30px"
                >订单号:{{ item.order_no }} <br />
                创建时间:{{ item.created_at }}
              </span>
            </div>

            <van-card
              v-for="sub in item.orderDetails.data"
              :key="sub.id"
              :num="sub.num"
              :price="sub.goods.price"
              desc="全场包邮"
              :title="sub.goods.title"
              :thumb="sub.goods.cover_url"
            />
          </div>
        </van-list>
      </van-pull-refresh>
    </div>
  </div>
</template>


<script>
import { reactive, ref, toRefs, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import NavBar from "../../components/common/NavBar/NavBar.vue";
import { getOrderList } from "../../components/network/order";

export default {
  name: "Order",
  components: {
    NavBar,
  },
  setup() {
    const router = useRouter();
    const route = useRoute();
    let tabs = ref(null);
    const state = reactive({
      loading: false,
      finished: false,
      refreshing: false,
      list: [],
      page: 1,
      totalPage: 0,
      status: 0,
    });
    onMounted(() => {
      onRefresh();
    });
    const loadData = () => {
      getOrderList({
        page: state.page,
        status: state.status,
        include: "orderDetails.goods",
      }).then((res) => {
        state.list = state.list.concat(res.data);
        state.loading = false;

        state.totalPage = res.meta.pagination.total_pages;

        if (state.page >= state.totalPage) {
          state.finished = true;
        }
      });
    };

    const onLoad = () => {
        if(!state.refreshing && state.page < state.totalPage){
            state.page = state.page +1;
        }
      
      if (state.refreshing) {
        state.list = [];
        state.refreshing = false;
      }
      loadData();
    };

    const onRefresh = () => {
      state.refreshing = true;

      state.finished = false;

      state.loading = true;

      state.page = 1;
      onLoad();
    };

    const onChangeTab = (name) => {
      state.status = name;
      onRefresh();
      // console.log(name)
    };

    const goTo = (id) => {
      router.push({ path: "/orderdetail", query: { id } });
    };

    return {
      ...toRefs(state),
      onLoad,
      onRefresh,
      tabs,
      onChangeTab,
      goTo,
    };
  },
};
</script>

<style scoped>
.order-tab{
    margin-top: 40px;
}
</style>