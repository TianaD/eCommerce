import { Counter } from "./components/Counter";
import { FetchData } from "./components/FetchData";
import { Home } from "./components/Home";
import { Landing } from "./components/Landing";
import { Women } from "./components/Women";
import { Men } from "./components/Men";


const AppRoutes = [
    {
        index: true,
        element: <Landing />
    },
    {
        path: './women',
        element: <Women />
    },
    {
        paht: '/men',
        element: <Men />
    },
    {
        path: '/home',
        element: <Home />
    }
    //{
    //    index: true,
    //    element: <Home />
    //},
    //{
    //    path: '/counter',
    //    element: <Counter />
    //},
    //{
    //    path: '/fetch-data',
    //    element: <FetchData />
    //}
];

export default AppRoutes;
