import React, { useState } from 'react'
import NavBar from '../Components/NavBar'
import SideNavBar from '../Components/SideNavBar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { HEADER } from '../Service/Api';

export default function Feedback() {

    const [name, setName] = useState(localStorage.getItem('name'));
    const [feedback, setFeedback] = useState('');

    const handleFeedback = async (e) => {

        e.preventDefault()
        console.log(name + " " + feedback);

        try {
            if (name.trim() && feedback.trim()) {
                const response = await axios.post('http://localhost:8080/api/v1/feedback/create', {
                    name: name,
                    feedback: feedback
                }, { headers: HEADER });
                console.log(response.data);
                if (response.status === 200) {
                    toast.success("Feedback reported Successfully")
                }
                else {
                    toast.error("Invalid Inputs...")
                }
            }
            else {
                toast.error("Enter Valid Credentials");
            }
        }
        catch (error) {
            toast.error("Invalid Credentials...")
            console.log("error");
        }

    }
    return (
        <>
            <div className='navbar-container'>
                <NavBar />
            </div>
            <div>
                <SideNavBar />
            </div>
            <div className='dashboard-container'>

                <div className='container-fluid w-100' >
                    <div className="shadow-lg p-3 mb-5 bg-white rounded">
                        <div className="card d-flex">
                            <h5 className="card-header d-flex">FEEDBACK</h5>
                            <div className="card-body text-start">
                                <div className='container-fluid d-flex justify-content-center align-items-center inner pt-3'>
                                    <div className="card shadow-lg d-flex p-3 mb-3 bg-white rounded" >
                                        <div className="card-body">
                                            <form className='EmailForm' onSubmit={handleFeedback}>
                                                <label className='EmailName'>Name</label>
                                                <input className='EmailText' id='text' type="text" defaultValue={localStorage.getItem("name")} />
                                                <br />
                                                <label className='EmailName'>Feedback</label>
                                                <textarea className='EmailMessage' onChange={(e) => { setFeedback(e.target.value) }} />
                                                <input className='EmailButton' type="submit" />
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <ToastContainer />
        </>
    )
}
