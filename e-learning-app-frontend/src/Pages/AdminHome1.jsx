import React from 'react'
import AdminNavbar from '../Components/AdminNavbar'
import ManageUsers from '../Components/ManageUsers'
import '../CSS/Admin1.css'
import AdminTopbar from '../Components/AdminTopbar'

export default function AdminHome1() {
    return (
        <div>
            <div>
                <AdminNavbar />
            </div>
            <div className='navbar-container'>
                <AdminTopbar />
            </div>
            <div className='manageusers-container'>
                <ManageUsers />
            </div>
        </div>
    )
}
