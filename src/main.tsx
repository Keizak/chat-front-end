import React from 'react'
import ReactDOM from 'react-dom/client'
import './app/index.css'
import {RouterProvider} from "react-router-dom";
import {router} from "./app/router.tsx";
import {queryClient} from "./service/queryClient.ts";
import {QueryClientProvider} from "react-query";


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router}/>
        </QueryClientProvider>
    </React.StrictMode>,
)
