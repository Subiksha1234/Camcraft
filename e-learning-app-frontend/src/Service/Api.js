import axios from "axios"

let jwtToken = localStorage.getItem('token');
let uid = localStorage.getItem('id');
let authHeader = `Bearer ${jwtToken}`;

export const HEADER = {
    'Authorization': authHeader,
    'Content-Type': "application/json"
}

const baseURL = 'http://localhost:8080';

export const getUserById = async () => await axios.get(`${baseURL}/api/v1/user/getByUid/${uid}`, { headers: HEADER })
export const getCourses = async () => await axios.get(`${baseURL}/api/v1/user/getAll`)
export const getInstructors = async () => await axios.get(`${baseURL}/api/v1/user/getallInstructor`, { headers: HEADER })
export const getInstructorById = async (id) => await axios.get(`${baseURL}/api/v1/user/getInstructor/${id}`, { headers: HEADER })
export const getCoursesById = async (id) => await axios.get(`${baseURL}/api/v1/user/getById/${id}`, { headers: HEADER })
export const getCourseById = async (id) => await axios.get(`${baseURL}/api/v1/user/getCourseById/${id}`, { headers: HEADER })
export const updateCourse = async (data,id) => await axios.put(`${baseURL}/api/v1/user/updateCourse/${id}`,data, { headers: HEADER })
export const courseEnroll = async (data) => await axios.post(`${baseURL}/api/v1/user/enrollCourse`, data, { headers: HEADER })
export const getEnroll = async () => await axios.get(`${baseURL}/api/v1/user/getEnrolled/${uid}`, { headers: HEADER })
export const getCountEnroll = async () => await axios.get(`${baseURL}/api/v1/user/getEnrolled/count/${uid}`, { headers: HEADER })
export const getAllUser = async () => await axios.get(`${baseURL}/api/v1/user/getAllUser`, { headers: HEADER })
export const getFeedback = async () => await axios.get(`${baseURL}/api/v1/feedback/getfeed`, { headers: HEADER })
export const getAllCourse = async () => await axios.get(`${baseURL}/api/v1/user/getAll`, { headers: HEADER })
export const deleteUserById = async (id) => await axios.delete(`${baseURL}/api/v1/user/deleteUser/${id}`, { headers: HEADER })
export const deleteCourseById = async (id) => await axios.delete(`${baseURL}/api/v1/user/deleteCourse/${id}`, { headers: HEADER })
export const postCourse = async (data) => await axios.post(`${baseURL}/api/v1/user/createCourse`, data, { headers: HEADER })
export const postInstructor = async (data) => await axios.post(`${baseURL}/api/v1/user/createInstructor`, data, { headers: HEADER })
export const getCountUser = async () => await axios.get(`${baseURL}/api/v1/user/countOfUsers`, { headers: HEADER })
export const getCountInstructor = async () => await axios.get(`${baseURL}/api/v1/user/countOfInstructor`, { headers: HEADER })
export const getCountCourse = async () => await axios.get(`${baseURL}/api/v1/user/countOfCourse`, { headers: HEADER })