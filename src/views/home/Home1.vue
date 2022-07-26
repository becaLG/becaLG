<template>
    <div id="home">
        <nav-bar>
            <template v-slot:left>&lt;</template>
            <template v-slot:default> 图书兄弟</template>
        </nav-bar>

        <tab-control v-show="isTabFixed" @tabclick="tabclick" :titles="['畅销','新书','精选']"></tab-control>

        <div class="wrapper">
               <div class="content">

                    <div ref="banref">
                        <home-swiper :banners="banners"></home-swiper>

                    <recommend-view :recommends="recommends"></recommend-view>
                    </div>

                    <tab-control @tabclick="tabclick" :titles="['畅销','新书','精选']"></tab-control>

                    <goods-list :goods="showGoods"></goods-list>
               </div>
        </div>
        <back-top @bTop = "bTop" v-show="isShowBackTop"></back-top>
    </div>
</template>

<script>
import HomeSwiper from "../home/ChildComps/HomeSwiper.vue";
import NavBar from "../../components/common/NavBar/NavBar.vue";
import RecommendView from "./ChildComps/RecommendView.vue";
import {getHomeAllData,getHomeGoods} from "../../components/network/home";
import {ref,reactive,onMounted,computed,watchEffect,nextTick} from 'vue';
import TabControl from '../../components/content/tabControl/TabControl.vue';
import GoodsList from '../../components/content/goods/GoodsList.vue';
import BScroll from 'better-scroll';
import BackTop from '../../components/common/backtop/BackTop.vue';
export default {
    name:"Home",
    setup(){

        let isTabFixed = ref(false);
        let isShowBackTop = ref(false);
        let banref = ref(null);
        const recommends = ref([]);
        const goods = reactive({
            sales:{page:1,list:[]},
            new:{page:1,list:[]},
            recommend:{page:1,list:[]}
        })
        let currentType = ref('sales');

        const showGoods = computed(()=>{
            return goods[currentType.value].list;
        })

        let bscroll = reactive({});

        let banners = ref([]);

        onMounted(()=>{
            getHomeAllData().then(res=>{
                recommends.value = res.goods.data;
                banners.value = res.slides;
            })

            getHomeGoods('sales').then(res=>{
                goods.sales.list = res.goods.data;
            })
             getHomeGoods('recommend').then(res=>{
                goods.recommend.list = res.goods.data;
            })
             getHomeGoods('new').then(res=>{
                goods.new.list = res.goods.data;
            })
            
            bscroll = new BScroll(document.querySelector('.wrapper'),{
                probeType:3,
                click :true,
                pullUpLoad:true
            });

            
            bscroll.on('scroll',(position)=>{
                console.log(position.y);
                isShowBackTop.value = isTabFixed.value = (-position.y) > banref.value.offsetHeight;
            })

            bscroll.on("pullingUp",()=>{
                console.log('上拉加载更多');
                

                const page = goods[currentType.value].page + 1;

                getHomeGoods(currentType.value,page).then(res=>{
                    goods[currentType.value].list.push(...res.goods.data);
                    goods[currentType.value].page +=1;
                })

                bscroll.finishPullUp();

                bscroll.refresh();
                console.log("contentheight:"+ document.querySelector('.content').clientHeight);
                console.log("当前类型:" + currentType.value + ",当前页:" + page);

            })
            
        })

        

        const tabclick = (index) =>{

                let types = ['sales','new','recommend'];
                currentType.value = types[index];

                nextTick(()=>{
                bscroll && bscroll.refresh();
            })
        }



        watchEffect(()=>{
            nextTick(()=>{
                bscroll && bscroll.refresh();
            })
        })

        const bTop = () => {
            bscroll.scrollTo(0,0,500);
        }
        return {
            recommends,
            tabclick,
            goods,
            showGoods,
            isTabFixed,
            banref,
            isShowBackTop,
            bTop,
            banners
            
        }
    },
    components:{
        NavBar,
        RecommendView,
        TabControl,
        GoodsList,
        BackTop,
        HomeSwiper
    },
   
}
</script>

<style scoped>
.banners img{
    width: 100%;
    height: auto; 
}
#home{
    height: 100vh;
    position: relative;
}
.wrapper{
    position: absolute;
    top: 45px;
    bottom: 50px;
    left: 0;
    right: 0;
    overflow: hidden;
}
</style>