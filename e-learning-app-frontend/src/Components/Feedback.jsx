import React, { useEffect, useState } from 'react'
import '../CSS/ManageUsers.css'
import { deleteUserById, getAllUser, getFeedback } from '../Service/Api';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';

export default function Feedback() {

    const [details, setDetails] = useState([]);  
    
    useEffect(() => {
        fetchFeedback();
    }, [])

    async function fetchFeedback() {

        try {
            await getFeedback().then((res) => {
                setDetails(res.data)
            })
        }
        catch (error) {
            console.log('error');
        }
    }


    return (
        <div>
            <h2 className="text-center">Feedback List</h2>
            <br />
            <div className='table-container'>
                <div className="row">
                    <table className="table table-hover" >

                        <thead>
                            <tr>
                                <th> Username</th>
                                <th> Queries</th>                                
                            </tr>
                        </thead>
                        <tbody>
                            {
                                details.map((current) => {                                   

                                        return (

                                            <tr key={current.name}>
                                                <td> {current.name} </td>
                                                <td> {current.feedback}</td>                                               
                                            </tr>

                                        )                                    
                                })
                            }
                        </tbody>
                    </table>
                    
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}
