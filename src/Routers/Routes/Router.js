import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Blog from "../../Page/Blogs/Blog";
import Home from "../../Page/Home/Home/Home";
import Product from "../../Page/Products/Products";

export const router = createBrowserRouter([
     {
          path:'/',
          element:<Main> </Main>,
          children: [
               {
                    path:'/',
                    element:<Home> </Home>
               },
               {
                    path:'/blog',
                    element: <Blog> </Blog>
               },
               {
                    path:'/category/:id',
                    element:<Product> </Product>,
                    loader: ({params})=>{
                         return fetch(`http://localhost:5000/category/${params.id}`)
                    }
               }
          ]
     }
])