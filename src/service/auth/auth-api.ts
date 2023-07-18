import {useMutation} from "react-query";
import {axiosInstance} from "../axiosInstance.ts";
import {LoginFormType, RegisterFormType} from "./types.ts";
import {redirect} from "react-router-dom";


export const useRegisterMutation = () => {
    return useMutation((registerData: RegisterFormType) => {
        return axiosInstance.post('/api/auth/register', registerData)
    }, {
        onSuccess: (data) => {
            localStorage.setItem("chat-token", data.data.token)

            // TODO
            console.log(1223)
            new Response("", {
                status: 302,
                headers: {
                    Location: "/login",
                },
            });
        }
    })
}

export const useLoginMutation = () => {
    return useMutation((loginData: LoginFormType) => {
        return axiosInstance.post('/api/auth/login', loginData)
    }, {
        onSuccess: (data) => {
            localStorage.setItem("chat-token", data.data.token)
            redirect("/chatDashboard")
        }
    })
}

export const useGetMeQuery = () => {
    return useMutation("meAuth", () => axiosInstance.get('/me'))
}


export const meAuth = () => {
    return axiosInstance.post('/api/auth/me')
}