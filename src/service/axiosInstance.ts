import axios from "axios";

export const axiosInstance = axios.create({
    baseURL:"http://localhost:3000"
})

// Add a request interceptor
axiosInstance.interceptors.request.use(function (config) {
    const token = localStorage.getItem("chat-token")
    if(token){
        config.headers.token = token
    }
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});