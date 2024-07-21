

import { createRoot } from 'react-dom/client'
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Header from './Components/Header';
import Main from './Components/Main';
import Error from './Components/Error';
import Country from './Components/Country';

const root = createRoot(document.getElementById("root"))

const router= createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <Error/>,
        children: [
            
            {
                path: "/",
                element: <Main/>
            },
            {
                path: "/contact",
                element: <div>This is Contact page</div>
            },
            {
                path: "/home",
                element: <div>This is Home page</div>
            },
            {
                path: "/:country",
                element: <Country/>
            },
        ],
    },
])

root.render(
    <>
   
    <RouterProvider router= {router} />
    </>

    
    
    

);