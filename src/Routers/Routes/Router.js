import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import AddProduct from "../../Page/AddProduct/AddProduct";
import Blog from "../../Page/Blogs/Blog";
import Home from "../../Page/Home/Home/Home";
import Login from "../../Page/Login/Login";
import Product from "../../Page/Products/Products";
import Register from "../../Page/Register/Register";

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
               },
               {
                    path:'/addproduct',
                    element:<AddProduct> </AddProduct>
               },
               {
                    path:'/register',
                    element: <Register></Register>
               },
               {
                    path:'/login',
                    element: <Login> </Login>
               }
          ]
     }
])