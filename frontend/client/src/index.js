import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from 'react-toastify';
import { CookiesProvider } from 'react-cookie';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <React.StrictMode>
    <CookiesProvider>
        <BrowserRouter>
         <App />
         <ToastContainer position='top-center'/>
        </BrowserRouter>
    {/* </React.StrictMode> */}
    </CookiesProvider>
);
export {default as Login} from './pages/Login';
export {default as Signup} from './pages/Signup';
export {default as Home} from './pages/Home';