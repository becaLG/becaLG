import axios from "axios";
import { Notify } from 'vant';

export function request(config){
    const instance = axios.create({
        baseURL:'https://api.shop.eduwork.cn',
        timeout:5000
    })

    //请求拦截
    instance.interceptors.request.use(config=>{
        const token = window.localStorage.getItem('token');
        if(token){
            config.headers.Authorization = 'Bearer'+token;
        }
        return config;
    },err=>{

    })

    //响应拦截

    instance.interceptors.response.use(res=>{
        // console.log(res)
        return res.data ? res.data : res;
    },err=>{
        Notify(err.response.data.errors[Object.keys(err.response.data.errors)[0]][0]);
    })

    return instance(config);
}