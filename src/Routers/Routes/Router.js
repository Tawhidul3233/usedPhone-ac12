import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import AddProduct from "../../Page/AddProduct/AddProduct";
import AllBuyer from "../../Page/AllBuyer/AllBuyer";
import Allseller from "../../Page/AllSeller/Allseller";
import Blog from "../../Page/Blogs/Blog";
import Home from "../../Page/Home/Home/Home";
import Login from "../../Page/Login/Login";
import MyOrder from "../../Page/MyOrder/MyOrder";
import MyProduct from "../../Page/MyProduct/MyProduct";
import Product from "../../Page/Products/Products";
import Register from "../../Page/Register/Register";
import Wishlist from "../../Page/Wishlist/Wishlist";
import PrivateRouter from "../PrivateRouter/PrivateRouter";

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
                    element: <PrivateRouter> <Product> </Product> </PrivateRouter> ,
                    loader: ({params})=>{
                         return fetch(`https://usedphone-server.vercel.app/category/${params.id}`)
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
               },
               {
                    path:'/myorder',
                    element:<MyOrder> </MyOrder>
               },
               {
                    path:'/myproduct',
                    element:<MyProduct> </MyProduct>
               },
               {
                    path:'/allbuyer',
                    element: <AllBuyer> </AllBuyer>
               },
               {
                    path:'/allseller',
                    element: <Allseller> </Allseller>
               },
               {
                    path:'/wishlist',
                    element: <Wishlist> </Wishlist>
               },


               {
                    path:'*',
                    element: <div className="text-center ">
                         <h1 className="text-3xl font-semibold my-5"> This page not found </h1>
                         <img className="mx-auto" style={{width:'70%', height:'400px'}} src="https://i.ibb.co/fFC20JG/A-404-Page-Best-Practices-and-Design-Inspiration.jpg" alt="" />
                    </div>
               }
          ]
     }
])