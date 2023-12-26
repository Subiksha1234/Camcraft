import React, { useState, useEffect } from 'react'
import '../CSS/Dashboard.css'
import NavBar from '../Components/NavBar'
import { useSelector } from 'react-redux';
import AdminNavbar from '../Components/AdminNavbar';
import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import { getCountUser,getCountInstructor,getCountCourse } from '../Service/Api.js'
import AdminTopbar from '../Components/AdminTopbar';

export default function AdminDashboard() {

    const user = useSelector(state => state.user.value)
    const [users, setUsers] = useState(0);
    const [instructor, setInstructor] = useState(0);
    const [course, setCourse] = useState(0);

    useEffect(() => {
        fetchUserCount();
    }, [])

    async function fetchUserCount() {
        try {

            const response1 = await getCountUser()
            setUsers(response1.data)
            const response2 = await getCountInstructor()
            setInstructor(response2.data)
            const response3 = await getCountCourse()
            setCourse(response3.data)
        }
        catch (error) {
            console.log("error");
        }
    }

    return (
        <div>
            <div className='navbar-container'>
                <AdminTopbar />
            </div>
            <div>
                <AdminNavbar />
            </div>

            <div className='dashboard-container'>

                <div className='row'>
                    <div className='col-md-3'>
                        <h4 style={{ display: 'flex' }}>HELLO {localStorage.getItem("name")} !</h4>
                        <p style={{ display: 'flex' }}>Hey Admin..! Wassup?</p>
                        <br />
                    </div>
                </div>

                <div className='row'>
                    <div className='col-md-3'>
                        <h4 style={{ display: 'flex' }}>OVERVIEW</h4>
                        <br />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-3'>
                        <div >
                            <div className="Card" >
                                <Card
                                    sx={{
                                        display: 'flex',
                                        maxWidth: 250,
                                        maxHeight: 200,
                                        bgcolor: "#005A9C",
                                    }}
                                >

                                    <CardMedia
                                        component="img"
                                        image={require('../Images/noOfUsers.png')}
                                        sx={{ width: 90, height: 80, marginTop: '12%', paddingLeft: '7%' }} />
                                    <CardContent>
                                        <Typography
                                            variant="h3"
                                            color={"white"}
                                        >
                                            {users}
                                        </Typography>
                                        <Typography
                                            variant="h6"
                                            color={"white"}
                                        >
                                            NO OF USERS
                                        </Typography>
                                    </CardContent>
                                </Card>

                                <br />

                            </div>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <div >
                            <div className="Card" >
                                <Card
                                    sx={{
                                        display: 'flex',
                                        maxWidth: 260,
                                        maxHeight: 200,
                                        bgcolor: "#005A9C",
                                    }}
                                >

                                    <CardMedia
                                        component="img"
                                        image={require('../Images/noOfInstructors.png')}
                                        sx={{ width: 90, height: 80, marginTop: '12%', paddingLeft: '7%' }} />
                                    <CardContent>
                                        <Typography
                                            variant="h3"
                                            color={"white"}
                                        >
                                            5
                                        </Typography>
                                        <Typography
                                            variant="h6"
                                            color={"white"}
                                        >
                                            NO OF INSTRUCTORS
                                        </Typography>
                                    </CardContent>
                                </Card>

                                <br />

                            </div>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <div >
                            <div className="Card" >
                                <Card
                                    sx={{
                                        display: 'flex',
                                        maxWidth: 250,
                                        maxHeight: 200,
                                        bgcolor: "#005A9C",
                                    }}
                                >

                                    <CardMedia
                                        component="img"
                                        image={require('../Images/noOfCourses.png')}
                                        sx={{ width: 90, height: 80, marginTop: '12%', paddingLeft: '7%' }} />
                                    <CardContent>
                                        <Typography
                                            variant="h3"
                                            color={"white"}
                                        >
                                            5
                                        </Typography>
                                        <Typography
                                            variant="h6"
                                            color={"white"}
                                        >
                                            NO OF COURSES
                                        </Typography>
                                    </CardContent>
                                </Card>

                                <br />

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='footer-common'>

            </div>
        </div>
    )
}
