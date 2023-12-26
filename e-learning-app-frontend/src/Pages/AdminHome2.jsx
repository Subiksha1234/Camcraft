import React from 'react'
import AdminNavbar from '../Components/AdminNavbar'
import NavBar from '../Components/NavBar'
import ManageCourse from '../Components/ManageCourse'
import AdminTopbar from '../Components/AdminTopbar'

export default function AdminHome2() {
    return (
        <div>
            <div>
                <AdminNavbar />
            </div>
            <div className='navbar-container'>
                <AdminTopbar />
            </div>
            <div className='manageusers-container'>
                <ManageCourse />
            </div>
        </div>
    )
}
