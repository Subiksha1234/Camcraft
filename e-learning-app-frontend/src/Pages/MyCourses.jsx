import React, { useEffect, useState } from 'react'
import NavBar from '../Components/NavBar'
import SideNavBar from '../Components/SideNavBar'
import { getEnroll } from '../Service/Api';
import tripod1 from '../Images/o3.1.png'
import tripod2 from '../Images/o3.png'
import { useNavigate } from 'react-router-dom';
import '../CSS/MyCourses.css'

export default function MyCourses() {

    let navigate = useNavigate();

    const [details, setDetails] = useState([]);

    useEffect(() => {
        fetch();
    }, [])

    async function fetch() {

        try {
            await getEnroll().then((res) => {
                setDetails(res.data);
            })
        }
        catch (error) {
            console.log("error");
        }
    }

    return (
        <div>
            <div className='navbar-container'>
                <NavBar />
            </div>
            <div>
                <SideNavBar />
            </div>
            <div className='dashboard-container'>
                <div className='row'>
                    <div className='col-md-3'>
                        <h4 style={{ display: 'flex' }}>HELLO {localStorage.getItem("name")} !</h4>
                        <p style={{ display: 'flex' }}>Let's Learn Something New</p>
                    </div>
                </div>

                <div className='row'>
                    <div className='col-md-3'>
                        <br />
                        <h4 style={{ display: 'flex' }}>COURSES ENROLLED</h4>
                        <br />
                    </div>
                </div>
                <section className='online' id='mycourses'>
                    <div className='container-fluid d-flex justify-content-start'>
                        <div className='row'>
                            {
                                details.map((current) => {
                                    return (
                                        <div className='col'>
                                            <div className="card shadow-lg p-3 mb-5 bg-white rounded" style={{width: '18rem',maxHeight: "400px", minHeight: "350px"}} key={current.course_id}>
                                                <div className='box'>
                                                    <div className='img'>
                                                        <img src={tripod2} />
                                                        <img src={tripod1} alt='' className='show' />
                                                    </div>
                                                    <h1>{current.courseName}</h1>
                                                    <h6>{current.duration}</h6>
                                                    <span>Instructor : {current.instructor_id.instructorName}</span>
                                                    <br />
                                                    <br />
                                                    <span onClick={() => {navigate('/student/tutorial') }}>VIEW COURSE</span>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </section>

            </div>
        </div>
    )
}
