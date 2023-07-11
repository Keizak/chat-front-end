import {createBrowserRouter, redirect} from "react-router-dom";
import App from "./App.tsx";
import {LoginPage} from "../pages/login/LoginPage.tsx";
import {meAuth} from "../service/login-api.ts";

export const loader = async () => {
    const user = await meAuth()
    // if (!user) {
    //     return redirect("/");
    // }
    return null;
}
export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path:'/chatDashboard'
            }
        ],
        loader:loader,
        hasErrorBoundary:false
    },
    {
        path: "/login",
        element: <LoginPage/>,
    },
]);