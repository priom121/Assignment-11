import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import router from './Router/Router.jsx';
import AuthProVider from './Provider/AuthProVider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProVider>
    <RouterProvider router={router} />
    </AuthProVider>
  </React.StrictMode>,
)
