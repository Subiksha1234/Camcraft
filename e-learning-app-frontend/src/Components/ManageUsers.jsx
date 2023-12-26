import React, { useEffect, useState } from 'react'
import '../CSS/ManageUsers.css'
import { deleteUserById, getAllUser } from '../Service/Api';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';

export default function ManageUsers() {

    const [details, setDetails] = useState([]);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');
    const [isdelete,setisDelete] = useState(0);  

    async function handleDelete(){

        const response = await deleteUserById(isdelete);
        if (response.status === 200) {
            
            console.log("Deleted");
            toast.error("Account Deleted Successfully");
            setTimeout(() => {
                fetchUsers();               
            }, 2000)            
        }
    }

    useEffect(() => {
        fetchUsers();
    }, [])

    async function fetchUsers() {

        try {
            await getAllUser().then((res) => {
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
            if (name.trim() && email.trim() && password.trim() && role.trim()) {
                const response = await axios.post('http://localhost:8080/api/v1/auth/register', {
                    name: name,
                    email: email,
                    password: password,
                    role: role
                });

                if (response.status === 200) {
                    toast.success("Account created Successfully");
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
            <h2 className="text-center">Users List</h2>
            <div className='row'>
                <div className='col d-flex'>
                    <button id='adderButton' type="button" className="btn btn-info" data-bs-toggle="modal" data-bs-target="#exampleModalCenter">ADD USER</button>
                </div>
            </div>
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
                                    <input onChange={(e) => { setPassword(e.target.value) }} type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                                </div>
                                <br />
                                <div class="form-group">
                                    <input onChange={(e) => { setRole(e.target.value) }} type="text" class="form-control" id="exampleInputRole1" placeholder="Enter role" />
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
                                <th> Username</th>
                                <th> Email</th>
                                <th> Role</th>
                                <th> Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                details.map((current) => {

                                    if (current.role === "STUDENT") {

                                        return (

                                            <tr key={current.uid}>
                                                <td> {current.name} </td>
                                                <td> {current.email}</td>
                                                <td> {current.role}</td>
                                                <td>
                                                    {/* <button onClick={() => { handleUpdate(current.uid) }} type='button' data-bs-toggle="modal" data-bs-target="#exampleUpdateCenter" style={{ backgroundColor: '#005A9C', color: 'white' }} className="btn">Update </button> */}
                                                    <button type='button' data-bs-toggle="modal" data-bs-target="#exampleDeleteCenter" style={{ marginLeft: "10px" }} onClick={() => { setisDelete(current.uid) }} className="btn btn-danger">Delete </button>
                                                </td>
                                            </tr>

                                        )
                                    }
                                })
                            }
                        </tbody>
                    </table>
                    <div className="modal fade" id="exampleDeleteCenter" tabindex="-1" aria-labelledby="exampleDeleteCenterTitle" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">CONFIRM DELETE</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    Are You Sure? Want To Delete
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={handleDelete}>Delete</button>
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
