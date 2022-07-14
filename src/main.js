import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'vant/lib/index.css';

import {Popup,CellGroup,Cell,AddressList,AddressEdit,SubmitBar,Stepper,SwipeCell,Checkbox, CheckboxGroup,Field,Form,Tag,Button,Card,Swipe,SwipeItem,Lazyload,Badge,Sidebar, SidebarItem,Collapse, CollapseItem,Tab, Tabs,Image as VanImage} from 'vant';


createApp(App).use(Cell).use(Popup).use(CellGroup).use(Checkbox).use(AddressList).use(AddressEdit).use(SubmitBar).use(Stepper).use(SwipeCell).use(CheckboxGroup).use(Tag).use(Field).use(Form).use(Button).use(Swipe).use(VanImage).use(Card).use(SwipeItem).use(Badge).use(Sidebar).use(SidebarItem).use(Tab).use(Tabs).use(Collapse).use(CollapseItem).use(Lazyload,{loading:require('./assets/images/1.jpg')}).use(store).use(router).mount('#app')
