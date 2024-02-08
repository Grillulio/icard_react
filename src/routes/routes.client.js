import { ClientLayout, BasicLayout } from "../layouts";
import { SelectTable, Categories, Products, Cart, OrdersHistory, } from "../pages/Client";

const routesClient = [
    {
        path: "/",
        layout: BasicLayout,
        component: SelectTable,
        exact: true,
    },
    {
        path: "/client/:tableNumber",
        layout: ClientLayout,
        component: Categories,
        exact: true,
    },
    {
        path: "/client/:tableNumber/Cart",
        layout: ClientLayout,
        component: Cart,
        exact: true,
    },
    {
        path: "/client/:tableNumber/Orders",
        layout: ClientLayout,
        component: OrdersHistory,
        exact: true,
    },
    {
        path: "/client/:tableNumber/:idCategory",
        layout: ClientLayout,
        component: Products,
        exact: true,
    },
];

export default routesClient;



/*


import {
    SelectTable,
    Categories,
    Products,
    Cart,
    OrdersHistory,
} from "../pages/Client";

const routesClient = [
    
    {
        path: "/client/:tableNumber/cart",
        layout: ClientLayout,
        component: Cart,
        exact: true,
    },
    {
        path: "/client/:tableNumber/orders",
        layout: ClientLayout,
        component: OrdersHistory,
        exact: true,
    },
    {
        path: "/client/:tableNumber/:idCategory",
        layout: ClientLayout,
        component: Products,
        exact: true,
    },
];

export default routesClient;

*/