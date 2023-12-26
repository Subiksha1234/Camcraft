import React from 'react'
import AdminNavbar from '../Components/AdminNavbar'
import '../CSS/Admin1.css'
import AdminTopbar from '../Components/AdminTopbar'
import Feedback from '../Components/Feedback'

export default function AdminFeedback() {
    return (
        <div>
            <div>
                <AdminNavbar />
            </div>
            <div className='navbar-container'>
                <AdminTopbar />
            </div>
            <div className='manageusers-container'>
                <Feedback />
            </div>
        </div>
    )
}
