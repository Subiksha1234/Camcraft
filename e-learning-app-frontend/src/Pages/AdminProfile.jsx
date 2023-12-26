import React from 'react'
import AdminNavbar from '../Components/AdminNavbar'
import AdminTopbar from '../Components/AdminTopbar'
import AdminPersonalInfo from '../Components/AdminPersonalInfo'

export default function AdminProfile() {

    return (
        <div>
            <div className='navbar-container'>
                <AdminTopbar />
            </div>
            <div>
                <AdminNavbar />
            </div>

            <div>
                <AdminPersonalInfo />
            </div>

        </div>


    )
}
