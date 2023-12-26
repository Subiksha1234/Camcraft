import React, { useEffect, useState } from 'react'
import NavBar from '../Components/NavBar'
import SideNavBar from '../Components/SideNavBar'
import { useSelector } from 'react-redux'
import "../CSS/MyHome.css"
import { getInstructors } from '../Service/Api'
import { createSearchParams, useNavigate } from 'react-router-dom'

export default function MyHome() {
    const user = useSelector(state => state.user.value)
    let navigate = useNavigate();
    const [staff, setStaff] = useState([]);
    // const [ID, setID] = useState(0);

    useEffect(() => {
        fetch();
    }, [])

    async function fetch() {

        try {
            await getInstructors().then((res) => {
                setStaff(res.data);
            })
        }
        catch (error) {
            console.log("error");
        }
    }   

    let handleInstructor = (id) => {
        console.log(id);
        navigate({
            pathname: "/student/mail",
            search: createSearchParams({
                id: id
            }).toString()
        })
    }
    return (
        <div>
            <div className='navbar-container'>
                <NavBar />
            </div>
            <div>
                <SideNavBar />
            </div>
            <div className='myhome-container'>
                <div className='row'>
                    <div className='col-md-3'>
                        <h4 style={{ display: 'flex' }}>HELLO {localStorage.getItem("name")} !</h4>
                        <p style={{ display: 'flex' }}>Let's Learn something new</p>
                    </div>
                </div>

                <div className='row'>
                    <div className='col-md-3'>
                        <br />
                        <h4 style={{ display: 'flex' }}>INSTRUCTORS</h4>
                        <br />
                    </div>
                </div>

                <div className='row'>
                    {
                        staff.map((current) => {
                            return (
                                <div className='col-md-3'>
                                    <div className="card shadow-lg p-3 mb-5 bg-white rounded" style={{ width: '18rem', maxHeight: "400px", minHeight: "350px" }} key={current.instructor_id}>
                                        <img src={require("../Images/profile-default.jpg")} style={{ height: '40%', width: '45%', marginLeft: '25%' }} className="card-img-top" />
                                        <div className="card-body">
                                            <h5 className="card-title">{current.instructorName}</h5>
                                            <p className="card-text">{current.experience} Experience</p>
                                            <p className="card-text">{current.teaching}</p>                                            
                                            <button onClick={() => { handleInstructor(current.instructor_id) }} className="btn btn-info">SEND MAIL</button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
