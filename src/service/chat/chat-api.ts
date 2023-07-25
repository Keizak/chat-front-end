import {useMutation, useQuery} from "react-query";
import {axiosInstance} from "../axiosInstance.ts";
import {enqueueSnackbar} from "notistack";
import {AddContactFormType} from "./types.ts";
import {AxiosError} from "axios";
import {navigateTo} from "../../shared/helpers";

export const useAddContactMutation = () => {
    return useMutation((data: AddContactFormType) => {
        return axiosInstance.post('/api/chat/add-contact', data)
    }, {
        onSuccess: () => {
            navigateTo("/")
            enqueueSnackbar({message:"Success",variant:"success"})
        },
        onError: (e:AxiosError<{ message: string }>) => {
            enqueueSnackbar({message:e.response?.data?.message,variant:"error"})
        }
    })
}

export const useGetUserQuery = (id:string) => {
    return useQuery(["user",id],() => {
        return axiosInstance.get(`/api/chat/get-user/${id}`)
    }, {
        onSuccess: (res) => {
            enqueueSnackbar({message:"Success",variant:"success"})
            return res.data
        },
        onError: (e:AxiosError<{ message: string }>) => {
            enqueueSnackbar({message:e.response?.data?.message,variant:"error"})
        },
        refetchOnMount: false,
        enabled:false
    })
}