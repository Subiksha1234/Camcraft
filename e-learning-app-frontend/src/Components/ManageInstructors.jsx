import React, { useEffect, useState } from 'react'
import { getInstructorById, getInstructors, postInstructor } from '../Service/Api';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

export default function ManageInstructors() {
    const [details, setDetails] = useState([]);    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [experience, setExperience] = useState('');
    const [skills, setSkills] = useState('');

    useEffect(() => {
        fetchUsers();
    }, [])

    async function fetchUsers() {

        try {
            await getInstructors().then((res) => {
                setDetails(res.data)
            })
        }
        catch (error) {
            console.log('error');
        }
    }
    const handleAdduser = async (e) => {
        e.preventDefault();

        try {
            let instructor = { instructorName: name, experience: experience, teaching: skills ,email : email}
            if (name.trim() && email.trim() && experience.trim() && skills.trim()) {

                const response = await postInstructor(instructor);
                console.log(response);
                if (response.status === 201) {
                    toast.success("Instructor created Successfully");
                    setTimeout(() => {
                        fetchUsers();
                        for (let x of e.target) {
                            if (x.type === 'submit') continue
                            x.value = ''
                        }
                        document.querySelector("#adderButton").click()
                    }, 2000)
                }
            }
            else {
                toast.error("Enter Valid Credentials");
            }
        }
        catch (error) {
            console.log("error");
        }
    }

    return (
        <div>
            <h2 className="text-center">Instructors List</h2>
            <div className='row'>
                <div className='col d-flex'>
                    <button id='adderButton' type="button" className='btn btn-info' data-bs-toggle="modal" data-bs-target="#exampleModalCenter">ADD INSTRUCTOR</button>
                </div>
            </div>
            <br />
            <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalCenterTitle">ADD USER</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form onSubmit={handleAdduser}>
                                <div class="form-group">
                                    <input onChange={(e) => { setName(e.target.value) }} type="text" class="form-control" id="exampleInputName1" placeholder="Enter name" />
                                </div>
                                <br />
                                <div class="form-group">
                                    <input onChange={(e) => { setEmail(e.target.value) }} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                </div>
                                <br />
                                <div class="form-group">
                                    <input onChange={(e) => { setExperience(e.target.value) }} type="text" class="form-control" id="exampleInputPassword1" placeholder="Enter Experience" />
                                </div>
                                <br />
                                <div class="form-group">
                                    <input onChange={(e) => { setSkills(e.target.value) }} type="text" class="form-control" id="exampleInputRole1" placeholder="Enter Skills" />
                                </div>

                                <div class="modal-footer">
                                    <button type="submit" className="btn btn-primary">Save User</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <div className='table-container'>
                <div className="row">
                    <table className="table table-hover" >

                        <thead>
                            <tr>
                                <th> Instructor Name</th>
                                <th> Email</th>
                                <th> Experience</th>
                                <th> Skills</th>
                                <th> Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                details.map((current) => {
                                    return (

                                        <tr key={current.instructor_id}>
                                            <td> {current.instructorName} </td>
                                            <td> {current.email}</td>
                                            <td> {current.experience}</td>
                                            <td> {current.teaching}</td>
                                            <td>
                                                {/* <button type='button' data-bs-toggle="modal" data-bs-target="#exampleDeleteCenter" style={{ marginLeft: "10px" }} onClick={() => {  }} className="btn btn-success">View </button> */}
                                                <button type='button' data-bs-toggle="modal" data-bs-target="#exampleDeleteCenter" style={{ marginLeft: "10px" }} className="btn btn-danger">Delete </button>
                                            </td>
                                        </tr>

                                    )
                                })
                            }
                        </tbody>
                    </table>
                    <div className="modal fade" id="exampleDeleteCenter" tabindex="-1" aria-labelledby="exampleDeleteCenterTitle" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">CONFIRM DELETE INSTRUCTOR</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    Are You Sure? Want To Delete
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-danger" data-bs-dismiss="modal" >Delete</button>
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />

        </div>
    )
}
