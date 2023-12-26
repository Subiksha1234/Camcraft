import React, { useEffect, useState } from 'react'
import { deleteCourseById, getAllCourse, getCourseById, postCourse, updateCourse } from '../Service/Api';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

export default function ManageCourse() {

    const [details, setDetails] = useState([]);
    const [fields, setFields] = useState([]);
    const [course, setCourse] = useState('');
    const [duration, setDuration] = useState('');
    const [instructor, setInstructor] = useState('');
    const [isdelete, setisDelete] = useState(0);    
    const [ID, setID] = useState(0);    

    useEffect(() => {
        fetchCourse();
    }, [])

    async function handleDelete() {

        const response = await deleteCourseById(isdelete);
        if (response.status === 200) {

            console.log("Deleted");
            toast.error("Courses Deleted Successfully");
            setTimeout(() => {
                fetchCourse();
            }, 2000)
        }
    }

    async function fetchCourse() {

        try {
            await getAllCourse().then((res) => {
                setDetails(res.data)
            })
        }
        catch (error) {
            console.log('error');
        }
    }

    async function fetchCourseById(id) {

        try{
            console.log("IN");
            setID(id);
            await getCourseById(id).then((res)=>{
                setFields(res.data);
            })

            console.log(fields);
        }
        catch(error){
            console.log('error');
        }
    }


    const handleSubmit = async (e) => {

        e.preventDefault();
        let data = { courseName: course, duration: duration, instructorName: instructor }
        try {
            const response = await postCourse(data);
            console.log(response);
            if (response.status === 201) {
                console.log("IN");
                toast.success("Course created Successfully");
                setTimeout(() => {
                    fetchCourse();
                    document.querySelector("#adderButton").click()
                }, 2000)
            }
        }
        catch (error) {
            console.log('error');
        }
    }

    const handleUpdate = async (e) => {

        e.preventDefault();      
        try {
            const response = await updateCourse(fields,ID);
            console.log(response);
            if (response.status === 200) {
                console.log("IN");
                toast.success("Course updated Successfully");
                setTimeout(() => {
                    fetchCourse();
                    document.querySelector("#updateButton").click()
                }, 2000)
            }
        }
        catch (error) {
            console.log('error');
        }
    }

    const onFormFieldChange = (event) => {
        // No need to return this function can be void       
        setFields({
            ...fields,[event.target.name] : event.target.value
        })
    }


    return (
        <div>
            <h2 className="text-center">Courses List</h2>
            <div className='row'>
                <div className='col d-flex'>
                    <button id='adderButton' type="button" className='btn btn-info' data-bs-toggle="modal" data-bs-target="#exampleModalCenter">ADD COURSE</button>
                </div>
            </div>
            <br />
            <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalCenterTitle">ADD COURSE</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form onSubmit={handleSubmit}>
                                <div class="form-group">
                                    <input type="text" onChange={(e) => { setCourse(e.target.value) }} class="form-control" id="exampleInputName1" placeholder="Enter Course name" />
                                </div>
                                <br />
                                <div class="form-group">
                                    <input type="text" onChange={(e) => { setDuration(e.target.value) }} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Course duration" />
                                </div>
                                <br />
                                <div class="form-group">
                                    <input type="text" onChange={(e) => { setInstructor(e.target.value) }} class="form-control" id="exampleInputRole1" placeholder="Enter Instructor Name" />
                                </div>

                                <div class="modal-footer">
                                    <button type="submit" className="btn btn-primary">Save Course</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className='table-container'>
                <div className="row">
                    <table className="table table-hover" >

                        <thead>
                            <tr>
                                <th> Course Name</th>
                                <th> Duration</th>
                                <th> Instructor</th>
                                <th> Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                details.map((current) => {
                                    return (
                                        <tr key={current.course_id}>
                                            <td> {current.courseName} </td>
                                            <td> {current.duration}</td>
                                            <td> {current.instructor_id.instructorName}</td>
                                            <td>
                                                <button id='updateButton' data-bs-toggle="modal" data-bs-target="#exampleUpdateCenter" onClick={() => { fetchCourseById(current.course_id) }} style={{ backgroundColor: '#005A9C', color: 'white' }} className="btn">Update </button>
                                                <button data-bs-toggle="modal" data-bs-target="#exampleDeleteCenter" style={{ marginLeft: "10px" }} onClick={() => { setisDelete(current.course_id) }} className="btn btn-danger">Delete </button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }

                        </tbody>
                    </table>
                    <div class="modal fade" id="exampleUpdateCenter" tabindex="-1" role="dialog" aria-labelledby="exampleUpdateCenterTitle" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleUpdateCenterTitle">UPDATE COURSE</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <form onSubmit={handleUpdate}>
                                        <div class="form-group">
                                            <input type="text" name='courseName' onChange={onFormFieldChange} defaultValue={fields.courseName} class="form-control" id="exampleInputName1"  />
                                        </div>
                                        <br />
                                        <div class="form-group">
                                            <input type="text" name='duration' onChange={onFormFieldChange} defaultValue={fields.duration} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                        </div>
                                        <br />
                                        <div class="form-group">
                                            <input type="text" name='instructorName' onChange={onFormFieldChange} defaultValue={fields.instructorName} class="form-control" id="exampleInputRole1" />
                                        </div>

                                        <div class="modal-footer">
                                            <button type="submit" className="btn btn-primary">Update Course</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
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
