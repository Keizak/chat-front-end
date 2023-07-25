import {useMutation} from "react-query";
import {axiosInstance} from "../axiosInstance.ts";
import {LoginFormType, RegisterFormType} from "./types.ts";
import {enqueueSnackbar} from "notistack";
import {AxiosError, AxiosPromise} from "axios";
import {navigateTo} from "../../shared/helpers";


export const useRegisterMutation = () => {
    return useMutation((registerData: RegisterFormType) => {
        return axiosInstance.post('/api/auth/register', registerData)
    }, {
        onSuccess: (data) => {
            localStorage.setItem("chat-token", data.data.token)
            enqueueSnackbar({message:"Success",variant:"success"})
            navigateTo("/login")
        },
        onError: (e:AxiosError<{ message: string }>) => {
            enqueueSnackbar({message:e.response?.data?.message,variant:"error"})
        }
    })
}

export const useLoginMutation = () => {
    return useMutation((loginData: LoginFormType) => {
        return axiosInstance.post('/api/auth/login', loginData)
    }, {
        onSuccess: (data) => {
            localStorage.setItem("chat-token", data.data.token)
            enqueueSnackbar({message:"Success",variant:"success"})
            navigateTo("/chatDashboard")

        },
        onError: (e:AxiosError<{ message: string }>) => {
            enqueueSnackbar({message:e.response?.data?.message,variant:"error"})
        }
    })
}

export const useGetMeQuery = () => {
    return useMutation("meAuth", () => axiosInstance.post('/api/auth/me'))
}


export interface UserType {
    chatIds: string[];
    password: string;
    phone: string;
    token: string;
    userName: string;
    __v: number;
    _id: string;
}
export const meAuth = ():AxiosPromise<UserType> => {
    return axiosInstance.post('/api/auth/me')
}