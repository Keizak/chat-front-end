import {createBrowserRouter, redirect} from "react-router-dom";
import App from "./App.tsx";
import {RegisterPage} from "../pages/auth/RegisterPage.tsx";
import {LoginPage} from "../pages/auth/LoginPage.tsx";
import {meAuth} from "../service/auth/auth-api.ts";

export const authLoader = async () => {
    try{
        await meAuth();
        return null;
    }
    catch (e){
        return redirect("/login")
    }
}
export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
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