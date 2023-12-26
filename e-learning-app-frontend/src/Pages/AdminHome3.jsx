import React from 'react'
import AdminNavbar from '../Components/AdminNavbar'
import NavBar from '../Components/NavBar'
import ManageInstructors from '../Components/ManageInstructors'
import AdminTopbar from '../Components/AdminTopbar'

export default function AdminHome3() {
    return (
        <div>
            <div>
                <AdminNavbar />
            </div>
            <div className='navbar-container'>
                <AdminTopbar />
            </div>
            <div className='manageusers-container'>
                <ManageInstructors />
            </div>
        </div>
    )
}
