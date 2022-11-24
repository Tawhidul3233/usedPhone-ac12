import React from 'react';
import './Banner.css'

const Banner = () => {
     return (
          <div>
               <div className="carousel w-full">
                    <div id="slide1" className="carousel-item relative w-full justify-center md:justify-start">
                         <div className='banner-img'>
                              <img alt='' style={{ height: '500px', width: '100%' }} src="https://i.ibb.co/7RHrkXP/minerals-mobile-phone-full-width-jpg-thumb-1160-1160.jpg" className="w-full" />
                         </div>

                         <div className="absolute md:text-left text-center w-5/6 md:w-2/5    transform -translate-y-1/2  top-1/4 md:ml-20 ">
                              <h1 className='text-3xl font-bold  text-white'>
                                   Buy your favorite mobile <br />  at a lower price. </h1>
                         </div>
                         <div className="absolute md:text-left text-center w-5/6 md:w-2/5    transform -translate-y-1/2  top-2/4 md:ml-20 ">
                              <p className='text-white '>Looking to upgrade your phone but don't know what to do with your old one? Are you looking to buy your old phone? Bring it to URPhone Store! We pay cash for gently used phones, helping you to get rid of your old device and buy another brand new phone.</p>
                         </div>

                         <div className="absolute md:text-left text-center w-5/6 md:w-2/5    transform -translate-y-1/2  top-3/4 md:ml-20 ">
                              <button className="btn btn-warning">Explore Our Product</button>
                         </div>


                         <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                              <a href="#slide3" className="btn btn-circle">❮</a>
                              <a href="#slide2" className="btn btn-circle">❯</a>
                         </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                         <div className='banner-img'>
                              <img alt='' style={{ height: '500px' }} src="https://i.ibb.co/Gvycx0T/b2.jpg" className="w-full" />
                         </div>
                         <div className="absolute md:text-left text-center w-5/6 md:w-2/5    transform -translate-y-1/2  top-1/4 md:ml-20 ">
                              <h1 className='text-3xl font-bold  text-white'>
                                   Big deal old mobile <br />  at a lower price. </h1>
                         </div>
                         <div className="absolute md:text-left text-center w-5/6 md:w-2/5    transform -translate-y-1/2  top-2/4 md:ml-20 ">
                              <p className='text-white'>Looking to upgrade your phone but don't know what to do with your old one? Are you looking to buy your old phone? Bring it to URPhone Store! We pay cash for gently used phones, helping you to get rid of your old device and buy another brand new phone.</p>
                         </div>

                         <div className="absolute md:text-left text-center w-5/6 md:w-2/5    transform -translate-y-1/2  top-3/4 md:ml-20 ">
                              <button className="btn btn-warning">Explore Our Product</button>
                         </div>
                         <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                              <a href="#slide1" className="btn btn-circle">❮</a>
                              <a href="#slide3" className="btn btn-circle">❯</a>
                         </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                         <div className='banner-img'>
                              <img alt='' style={{ height: '500px' }} src="https://i.ibb.co/16zQzpZ/b3.jpg" className="w-full" />
                         </div>
                         <div className="absolute md:text-left text-center w-5/6 md:w-2/5    transform -translate-y-1/2  top-1/4 md:ml-20 ">
                              <h1 className='text-3xl font-bold  text-white'>
                                   Choose your Dream mobile <br />  at a lower price. </h1>
                         </div>
                         <div className="absolute md:text-left text-center w-5/6 md:w-2/5    transform -translate-y-1/2  top-2/4 md:ml-20 ">
                              <p className='text-white'>Looking to upgrade your phone but don't know what to do with your old one? Are you looking to buy your old phone? Bring it to URPhone Store! We pay cash for gently used phones, helping you to get rid of your old device and buy another brand new phone.</p>
                         </div>

                         <div className="absolute md:text-left text-center w-5/6 md:w-2/5    transform -translate-y-1/2  top-3/4 md:ml-20 ">
                              <button className="btn btn-warning ">Explore Our Product</button>
                         </div>
                         <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                              <a href="#slide2" className="btn btn-circle">❮</a>
                              <a href="#slide1" className="btn btn-circle">❯</a>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Banner;