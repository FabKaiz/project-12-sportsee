import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter, createRoutesFromElements, Navigate, Route,
  RouterProvider
} from "react-router-dom";

import Root from "./routes/root";
import Error from "./pages/error/Error.jsx";
import Layout from "./pages/Layout.jsx";
import UserPage from "./pages/user/UserPage.jsx";

import './styles/main.scss'

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route element={<Layout />} errorElement={<Error />}>
          <Route path="/" element={<Navigate replace to="/users" />} index={true} />
          <Route path="/users" element={<Root />} />
          <Route
              path="user/:userId"
              element={<UserPage />}
          />
          <Route path="*" element={<Error />} />
        </Route>
    )
)

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>,
)
