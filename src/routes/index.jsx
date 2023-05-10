import { createBrowserRouter } from "react-router-dom";
import Error from "../pages/Error";
import Layout from "../layout/Layout";
import About from "../pages/About";
import Peliculas from "../pages/Peliculas";
import InfoPelicula from "../pages/InfoPelicula";

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