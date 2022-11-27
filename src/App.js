import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './Routers/Routes/Router';
import toast, { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="max-w-screen-xl mx-auto mx-5">
     <RouterProvider router={ router }></RouterProvider>
     <Toaster></Toaster>
    </div>
  );
}

export default App;
