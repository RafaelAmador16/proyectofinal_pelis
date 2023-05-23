import { createBrowserRouter } from "react-router-dom";
import Error from "../pages/Error";
import Layout from "../layout/Layout";
import Peliculas from "../pages/Peliculas";
import InfoPelicula from "../pages/InfoPelicula";
import Logins from "../pages/Logins";

//hay que crear obligatoriamente un enrutador (router)

export const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <Layout />,
            errorElement: <Error />,
            children: [
                {
                    index: true, element: <Peliculas />
                },
                {
                    path: "/login",
                    element: <Logins />
                },
                {
                    path: "/peliculas",
                    element: <Peliculas />,
                },
                {
                    path: "/peliculas/:id",
                    element: <InfoPelicula />,
                },
            ]
        }


    ]
)