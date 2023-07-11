import {useMutation} from "react-query";
import {axiosInstance} from "./axiosInstance.ts";
import {LoginFormType} from "../pages/login/LoginPage.tsx";

export const useRegisterMutation = () => {
    return useMutation((loginData:LoginFormType) => {
        return axiosInstance.post('/api/auth/register', loginData)
    },{
        onSuccess:(data) => {
            localStorage.setItem("chat-token",data.data.token)
        }})
}

export const useGetMeQuery = () => {
    return useMutation("meAuth" , () => axiosInstance.get('/me'))
}


export const meAuth = () => {
    return axiosInstance.post('/api/auth/me')
}