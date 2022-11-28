
import { Link, useNavigate } from 'react-router-dom';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { stringify } from 'postcss';


const Register = () => {

     const { openAccountWithEmail, createUserWithGoogle, createUserWithGithub, loading, changeName } = useContext(AuthContext)


     const googleProvider = new GoogleAuthProvider();
     const githubProvider = new GithubAuthProvider();
     const navigate = useNavigate()


     


     const fromSubmitHandler = (event) => {
          event.preventDefault();
          const form = event.target;
          const email = form.email.value;
          const password = form.password.value;
          const name = form.name.value;
          const usertype = form.usertype.value;

          openAccountWithEmail(email, password)
               .then(result => {
                    const user = result.user
                    toast.success('Register Successfully')
                    
                    navigate('/');

                    const username = {
                         displayName: name
                    }
                    changeName(username)
                         .then(() => { })
                         .catch(error => console.log(error))


                    const newuser = {
                         displayName: name,
                         email,
                         usertype,
                         seller_verified: false
                    }
                    fetch('http://localhost:5000/users', {
                         method: 'POST',
                         headers: {
                              'content-type': 'application/json'
                         },
                         body: JSON.stringify(newuser)
                    })
                         .then(res => res.json())
                         .then(data => {

                         })
                         .catch(err => console.log(err))

               })
               .catch(error => {
                    console.error(error)
                    toast.error('Something wrong check you email and password')
               });

     }

     const googleHandler = () => {
          createUserWithGoogle(googleProvider)
               .then(result => {
                    const user = result.user;
                    toast.success('Login Successfully')
                    navigate('/');
                    
                    console.log(user)

                    const newuser = {
                         displayName: user.displayName,
                         email: user.email,
                         usertype: 'buyer',
                    }

                    fetch('http://localhost:5000/users', {
                         method: 'POST',
                         headers: {
                              'content-type': 'application/json'
                         },
                         body: JSON.stringify(newuser)
                    })
                         .then(res => res.json())
                         .then(data => console.log(data))
                         .catch(err => console.log(err))

               })
               .catch(error => console.error(error))
     }

     const githubHandler = () => {
          createUserWithGithub(githubProvider)
               .then(result => {
                    const user = result.user;
                    toast.success('Login Successfully')
                    navigate('/');
                    
                    const newuser = {
                         displayName: user.displayName,
                         email: user.email,
                         usertype: 'buyer',
                    }

                    fetch('http://localhost:5000/users', {
                         method: 'POST',
                         headers: {
                              'content-type': 'application/json'
                         },
                         body: JSON.stringify(newuser)
                    })
                         .then(res => res.json())
                         .then(data => console.log(data))
                         .catch(err => console.log(err))
               })
               .catch(error => console.error(error))
     }

     return (
          <div>
               <div className="hero my-10">
                    <div className="hero-content grid md:grid-cols-2 flex-col lg:flex-row">
                         <form onSubmit={fromSubmitHandler} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
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

                                   <select name='usertype' className="select select-bordered w-full max-w-xs">
                                        <option >buyer</option>
                                        <option >seller</option>
                                   </select>

                                   <div className="form-control mt-6">
                                        <button className="btn bg-green-700">Register</button>
                                   </div>
                              </div >
                              <p className='mb-10 text-center'>
                                   Already you have account<Link className='text-orange-600' to='/login'> Login </Link>
                              </p>
                         </form>

                         <div className="mx-auto">
                              <button onClick={googleHandler} className="flex  btn my-5 bg-green-500 rounded-md px-4 py-2 text-center">
                                   <FaGoogle className='mt-1 mx-2'></FaGoogle>
                                   Continue with google
                              </button>
                              <button onClick={githubHandler} className="flex  btn bg-green-500 rounded-md px-4 py-2 text-center">
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