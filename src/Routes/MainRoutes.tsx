import { useRoutes } from "react-router-dom";
import { AboutItem } from "../pages/aboutPage";
import { ColorPage } from "../pages/colorpage";
import { Home } from "../pages/home";



export function Routes() {
    return useRoutes([
        { path:'/', element: <Home /> },
        { path:'/color', element: <ColorPage />},
        { path: '/album/:id', element: <AboutItem />}
       
    ])
}