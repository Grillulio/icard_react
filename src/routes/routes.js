import routerAdmin from "./routes.admin";
import routerClient from "./routes.client";
import { Error404 } from "../pages";
import { BasicLayout } from "../layouts";



const routes = [
    ...routerAdmin, 
    ...routerClient,
    {
        path: "*",
        layout: BasicLayout, // Cambia el diseño si es necesario
        component: Error404,
    },
];

export default routes;
