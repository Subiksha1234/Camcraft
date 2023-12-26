import React, { useEffect } from 'react'
import '../CSS/Login.css'
import { Link, useNavigate } from 'react-router-dom/dist'
import { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  let navigate = useNavigate();

  let apiConfig = (data) => {

    localStorage.setItem('id', data.uid)
    localStorage.setItem('token', data.token)
    localStorage.setItem('Role', data.role)
    localStorage.setItem('name', data.name)
    let role = data.role;

    toast.success("Logged in Successfully");
    setTimeout(() => {
      if (role === "ADMIN")
        navigate('/admin/adminDashboard');
      else
        navigate('/student/dashboard');
    }, 3000)
  }

  const handleSubmit = async (e) => {

    e.preventDefault()

    try {
      if (email.trim() && password.trim()) {
        const response = await axios.post('http://localhost:8080/api/v1/auth/login', {
          email: email,
          password: password
        });
        console.log(response.data);
        if (response.status === 200) {
          apiConfig(response.data)
        }
        else {
          toast.error("Invalid Credentials...")
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

  // useEffect(() => {
  //   const fetchData = async () =>{
  //     const response = await axios.post('http://localhost:8080/api/v1/auth/login',user,
  //     {
  //       headers:{
  //       // 'Authorization' : `Bearer ${apiConfig.token}`
  //     }});
  //   }
  // })



  return (
    <div className='container'>
      <div className='login-container'>
        <div className="login-credentials">
          <h3 style={{ padding: '2%' }}>CamCraft</h3>
          <form
            className="login-form"
            id="new_user"
            onSubmit={handleSubmit}
          >
            <fieldset>
              <div className="form-group email optional user_email" style={{ padding: '2%' }}>
                <input
                  className="form-control string email optional form-control-xl js-email-field"
                  placeholder="Email"
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="a-input-group js-show-password mb-1" style={{ padding: '2%' }}>
                <input
                  className="form-control form-control-xl js-password-field"
                  placeholder="Password"
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                {/* <span className="a-input-group__action js-show-password-action" role="button">
                  <i className="a-icon-eye a-input-group__action-icon js-show-password-icon"></i>
                  <i className="a-icon-eye-slash a-input-group__action-icon d-none js-show-password-icon">
                    ::before
                  </i>
                </span> */}
              </div>

            </fieldset>
            <div className="btn-toolbar form-actions t-login-button" style={{ padding: '2%' }}>
              <button name="button" type="submit" className="a-button" >
                LOG IN
              </button>
            </div>
          </form>
          <div className='login-footer'>
            Don't Have an Account?
            <Link to={'/signup'}> SignUp</Link>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  )
}
