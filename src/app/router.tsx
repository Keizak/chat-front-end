import {createBrowserRouter, redirect} from "react-router-dom";
import {RegisterPage} from "../pages/auth/RegisterPage.tsx";
import {LoginPage} from "../pages/auth/LoginPage.tsx";
import {meAuth} from "../service/auth/auth-api.ts";
import {ChatDashboard} from "../pages/chatDashboard/chatDashboard.tsx";

export const authLoader = async () => {
    try{
        const {data} = await meAuth()
        return data;
    }
    catch (e){
        return redirect("/login")
    }
}
export const router = createBrowserRouter([
    {
        path: "/",
        element: <ChatDashboard/>,
        children: [
            {
                path:'/chatDashboard',
                loader:authLoader,
            }
        ],
        loader:authLoader
    },
    {
        path: "/register",
        element: <RegisterPage/>,
    },
    {
        path: "/login",
        element: <LoginPage/>,
    },
]);