import React from 'react'
import SideNavBar from '../Components/SideNavBar'
import NavBar from '../Components/NavBar'
import PersonalInfo from '../Components/PersonalInfo'

export default function Profile() {

    return (
        <div>
            <div className='navbar-container'>
                <NavBar />
            </div>
            <div>
                <SideNavBar />
            </div>

            <div>
                <PersonalInfo />                
            </div>

        </div>


    )
}
