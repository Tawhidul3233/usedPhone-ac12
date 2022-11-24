import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Blog from "../../Page/Blogs/Blog";
import Home from "../../Page/Home/Home/Home";

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
               }
          ]
     }
])