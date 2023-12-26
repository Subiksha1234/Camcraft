import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

const User = () => {

    const Token = localStorage.getItem("token") !== null;
    const Role = localStorage.getItem("Role") === "STUDENT";

    return Token && Role ? <Outlet /> : <Navigate to="/404error" />
}

export default User