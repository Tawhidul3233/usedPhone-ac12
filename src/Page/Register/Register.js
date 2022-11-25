import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const Register = () => {
     return (
          <div>
               <div className="hero my-10">
                    <div className="hero-content grid md:grid-cols-2 flex-col lg:flex-row">
                         <form  className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                              <div className="card-body">
                                   <h1 className="text-5xl font-bold">Register now!</h1>

                                   <div className="form-control">
                                        <label className="label">
                                             <span className="label-text">Name</span>
                                        </label>
                                        <input type="text" name='name' placeholder="name" className="input input-bordered" />
                                   </div>
                         
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

                                        </label>
                                   </div>
                                   <div className="form-control mt-6">
                                        <button className="btn bg-green-700">Register</button>
                                   </div>
                              </div >
                              <p className='mb-10 text-center'>
                                   Already you have account<Link className='text-orange-600' to='/login'> Login </Link>
                              </p>
                         </form>

                         <div className="mx-auto">
                              <button  className="flex  btn my-5 bg-green-500 rounded-md px-4 py-2 text-center">
                                   <FaGoogle className='mt-1 mx-2'></FaGoogle>
                                   Continue with google
                              </button>
                              <button  className="flex  btn bg-green-500 rounded-md px-4 py-2 text-center">
                                   <FaGithub className='mt-1 mx-2'> </FaGithub>
                                   Continue with Github
                              </button>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Register;