import React, { useEffect, useState } from 'react'
import '../CSS/Catalog.css'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { courseEnroll, getCoursesById } from '../Service/Api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function CourseCatalog() {

    const [details, setDetails] = useState({
        course_id: 1,
        courseName: "",
        duration: "",
        instructor_id: {
            instructor_id: 1,
            instructorName: "",
            experience: "",
            teaching: ""
        }
    })

    const [courseId] = useSearchParams();

    useEffect(() => {
        getCourseById();
    }, [])

    async function getCourseById() {
        try {
            await getCoursesById(courseId.get("id")).then((res) => {
                setDetails(res.data)
            });
        }
        catch (err) {
            console.log(err);
        }
    }
    // console.log(details);
    let navigate = useNavigate();

    let course;
    course = { ...course, student_id: localStorage.getItem("id"), name: localStorage.getItem("name"), enrolledCourses: [details] };
    console.log(course);
    let handleEnrolled = async () => {
        try {
            const response = await courseEnroll(course)
            console.log(response);
            if (response.status === 201) {
                console.log("IN");
                toast.success("Enrolled Successfully");
                setTimeout(() => {
                    navigate('/student/mycourses');
                }, 3000)
            }
        }
        catch (error) {
            console.log(error);
        }
    }
    return (
        <div className='Catalog-background min-vh-100 d-flex '>
            <div className='container-fluid d-flex justify-content-center align-items-center inner'>
                <div className="shadow-lg p-3 bg-white rounded">
                    <div className="card">
                        <h5 className="card-header">COURSE CATALOGUE</h5>
                        <div className="card-body text-start">
                            <h5 className="card-title d-flex">COURSE NAME</h5>
                            <p className="card-text ">{details.courseName}</p>
                            <h5 className="card-title d-flex">COURSE DURATION</h5>
                            <p className="card-text">{details.duration}</p>
                            <h5 className="card-title d-flex">COURSE DESCRIPTION</h5>
                            <p className="card-text ">Introduction to what is Photography and Clear Explanation of using Cameras</p>
                            <h5 className="card-title d-flex">INSTRUCTOR NAME</h5>
                            <p className="card-text ">{details.instructor_id.instructorName}</p>
                        </div>
                        <div className='card-body'>
                            <button className="btn btn-primary justify-content-center" onClick={handleEnrolled}>ENROLL NOW</button>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}
