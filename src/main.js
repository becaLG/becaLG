import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'vant/lib/index.css';

import {SubmitBar,Stepper,SwipeCell,Checkbox, CheckboxGroup,Field,Form,Tag,Button,Card,Swipe,SwipeItem,Lazyload,Badge,Sidebar, SidebarItem,Collapse, CollapseItem,Tab, Tabs,Image as VanImage} from 'vant';


createApp(App).use(Checkbox).use(SubmitBar).use(Stepper).use(SwipeCell).use(CheckboxGroup).use(Tag).use(Field).use(Form).use(Button).use(Swipe).use(VanImage).use(Card).use(SwipeItem).use(Badge).use(Sidebar).use(SidebarItem).use(Tab).use(Tabs).use(Collapse).use(CollapseItem).use(Lazyload,{loading:require('./assets/images/1.jpg')}).use(store).use(router).mount('#app')
