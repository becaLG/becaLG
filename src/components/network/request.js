import router from "@/router";
import axios from "axios";
import { Notify, Toast } from 'vant';

export function request(config){
    const instance = axios.create({
        baseURL:'https://api.shop.eduwork.cn',
        timeout:5000
    })

    //请求拦截
    instance.interceptors.request.use(config=>{
        const token = window.localStorage.getItem('token');
        if(token){
            config.headers.Authorization = 'Bearer '+token;
        }
        return config;
    },err=>{

    })

    //响应拦截

    instance.interceptors.response.use(res=>{
        // console.log(res)
        return res.data ? res.data : res;
    },err=>{
        if(err?.response){
            if(err?.response?.status == '401'){
                Toast.fail('请先登录');
                router.push({path:'/login'});
            }
    
            if(err?.response?.status == '400'){
                Toast.fail(err.response.data.message);
                return false;
            }
    
            Notify(err.response.data.errors[Object.keys(err.response.data.errors)[0]][0]);
        }
    })

    return instance(config);
}