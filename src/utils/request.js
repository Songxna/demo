// 引入axios
import axios from "axios";
import qs from 'querystring'
// import store from '../store'

// 响应错误处理方法
/**
 * 常用的http协议状态码
 * 2xx成功
 * 3xx 4xx 5xx 
 * status 状态码
 * info：错误信息
 */
const errorHandle = (status, info) => {
    switch (status) {
        case 400:
            console.log('400-表示请求时报文中存在语法错误');
            break;
        case 401:
            console.log('401-未经许可，需要通过HTTP认证');
            break;
        case 403:
            console.log('403-服务器拒绝该次访问（访问权限问题）');
            break;
        case 404:
            console.log('404-表示服务器上无法找到请求的资源');
            break;
        case 500:
            console.log('500-表示服务器暂时处于超负载或正在进行停机维护，无法处理请求');
            break;
        default:
            console.log(info);
            break;
    }
}

// 创建实例
const instance =axios.create({
    // // 公共配置
    // baseURL:'http://iweniki.com',//公共的请求地址
    timeout:5000,//请求超市等待时间
})

/**
 * 拦截器
 */
// 添加请求拦截器
instance.interceptors.request.use(
    config=>{
        // 功能：如果是post请求 处理发送请求
        if(config.method==='post'){
            // 处理post发送的数据格式：config.data
            config.data=qs.stringify(config.data)
        }
        // 请求接口--给后台发送token  在请求头  配置headers
        // let token=store.state.LoginModule.userInfo.token;
        // if(token){
        //     config.headers.authorization=token;
        // }
        // console.log('config---',config);
        //config.headers.authorization
        return config;
    },
    error=>Promise.reject(error)
)

// 添加响应拦截器
instance.interceptors.response.use(
    // 请求响应的成功数据
    response=>response.status===200?
    Promise.resolve(response):Promise.reject(response),
    error=>{
        // 接收错误里面的相应数据
        const {response}=error;
        errorHandle(response.status,response.info)
    }
)

// get请求  post请求
// export function get(){
//     return instance.get()
// }

// 导出instance
export default instance