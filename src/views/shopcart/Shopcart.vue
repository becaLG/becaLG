<template>
  <div>
    <nav-bar>
      <template v-slot:left>&lt;</template>
      <template v-slot:default>
        购物车(<span style="color: red">{{ $store.state.cartCount }}</span
        >)</template
      >
    </nav-bar>

    <div class="cart-box">
      <div class="cart-body">
        <van-checkbox-group ref="checkboxGroup">
          <van-swipe-cell :right-width='50'>
            <div class="good-item">
                <van-checkbox name=""/>
                <div class="good-img"><img src="../../assets/images/1.jpg" alt=""></div>
                <div class="good-desc">
                    <div class="good-title">
                        <span>细说PHP</span>
                        <span>x100</span>
                    </div>
                    <div class="good-btn">
                        <div class="price"><small>$</small>999.00</div>
                        <van-stepper integer :min="1" :max="10" :model-value="5" name="10" async-change />
                    </div>
                </div>
            </div>
            <template #right>
              <van-button
                square
                icon="delete"
                type="danger"
                class="delete-button"
              />
            </template>
          </van-swipe-cell>
        </van-checkbox-group>
      </div>
    <van-submit-bar class="submit-all" :price="9999" button-text="结算">
        <van-checkbox>全选</van-checkbox>
    </van-submit-bar>
    </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import NavBar from "../../components/common/NavBar/NavBar.vue";
export default {
  name: "Shopcart",
  setup(){
    const router = useRouter();
    const store = useStore();
    return {

    }
  },
  components: {
    NavBar,
  },
};
</script>

<style scoped lang="scss">
.cart-box{
    .cart-body{
        margin: 60px 0 100px 0;
        padding-left: 10px;
    
    .good-item{
        display: flex;
    
    .good-img{
        img{
        width: 100px;
        height: auto;
        } 
    }
    .good-desc{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        flex: 1;
        padding: 20px;
    .good-btn{
        display: flex;
        justify-content: space-between;
    .price{
        font-size: 16px;
        color:red;
        line-height: 28px;
    }
    .van-icon-delete{
        font-size: 20px;
        margin-top: 4px;
    }
    }
    }
    }
    .delete-button{
        width: 50px;
        height: 100%;
    }
    }
    .empty{
        width: 50%;
        margin: 0 auto;
        text-align: center;
        margin-top: 200px;
    .empty-cart{
        width: 150px;
        margin-bottom: 20px;
    }    
    .van-icon-smile-o{
        font-size: 50px;
    }
    .title{
        font-size: 16px;
        margin-bottom: 20px;
    }
    }
    .submit-all{
        margin-bottom: 50px;
    .van-checkbox{
        margin-left:0px;
    }    
    .van-submit-bar__bar{
        background: red;
    }
    }
    .van-checkbox__icon--checked .van-icon{
        background-color:red;
        border-color: red;
    }
}
</style>