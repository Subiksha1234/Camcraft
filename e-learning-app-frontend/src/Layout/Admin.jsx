import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

const Admin = () => {

    const Token = localStorage.getItem("token") !== null;
    const Role = localStorage.getItem("Role") === "ADMIN";

  return Token && Role ? <Outlet/> : <Navigate to = "/404error"/>
}

export default Admin