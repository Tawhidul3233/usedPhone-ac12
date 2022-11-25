import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const Login = () => {
     return (
          <div>
               <div className="hero my-20">
                    <div className="hero-content grid md:grid-cols-2 flex-col lg:flex-row">
                         <form  className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                              <div className="card-body">
                                   <h1 className="text-5xl font-bold">Login now!</h1>

                                   <div className="form-control">
                                        <label className="label">
                                             <span className="label-text">Email</span>
                                        </label>
                                        <input type="text" name='email' placeholder="email" className="input input-bordered" required />
                                   </div>
                                   <div className="form-control">
                                        <label className="label">
                                             <span className="label-text">Password</span>
                                        </label>
                                        <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                        <label className="label">
                                             <a href="/" className="label-text-alt link link-hover">Forgot password?</a>
                                        </label>
                                   </div>
                                   <div className="form-control mt-6">
                                        <button className="btn bg-green-700">Login</button>
                                   </div>
                              </div >
                              <p className='mb-10 text-center'>
                                   If new user<Link className='text-orange-600' to='/register'> Create Account </Link>
                              </p>
                         </form>
                         <div className="mx-auto">
                              <button  className="flex  btn bg-green-500  my-5  rounded-md px-4 py-2 text-center">
                                   <FaGoogle className='mt-1 mx-2'></FaGoogle>
                                   Sing in with google
                              </button>
                              <button  className="flex  btn bg-green-500 rounded-md px-4 py-2 text-center">
                                   <FaGithub className='mt-1 mx-2 '> </FaGithub>
                                   Sing in with Github
                              </button>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Login;