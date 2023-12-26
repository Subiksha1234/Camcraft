import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../CSS/SignUp.css'
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

export default function SignUp() {

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  let dispatch = useDispatch();

  const handleSingup = async (e) => {
    e.preventDefault()

    try {
      if (username.trim() && email.trim() && password.trim()) {
        const response = await axios.post('http://localhost:8080/api/v1/auth/register', {
          name: username,
          email: email,
          password: password,
          role: "STUDENT"
        });

        if (response.status === 200) {
          // dispatch(signup({ name: username, email: email, password: password }));
          toast.success("Account created Successfully");
          setTimeout(() => {
            navigate("/login");
          },3000)
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
    <div className='container'>
      <div className='signup-container'>
        <div className="signup-credentials">
          <h3 style={{ padding: '2%' }}>CamCraft</h3>
          <form
            className="signup-form">
            <fieldset>
              <div className="form-group name optional user_name" style={{ padding: '2%' }}>
                <input
                  className="form-control string name optional form-control-xl js-name-field"
                  placeholder="Username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
              <div className="form-group email optional user_email" style={{ padding: '2%' }}>
                <input
                  className="form-control string email optional form-control-xl js-email-field"
                  placeholder="Email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="a-input-group js-show-password mb-1" style={{ padding: '2%' }}>
                <input
                  className="form-control form-control-xl js-password-field"
                  placeholder="Password"
                  type="password"
                  value={password}
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
              <button type="button" name="button" className="a-button" onClick={handleSingup}
              //onClick={() => dispatch(signup({username:username, email:email, password:password}))}
              >
                SIGN UP
              </button>
            </div>
          </form>
          <div className='signup-footer'>
            Already a User?
            <Link to={'/login'}> Login</Link>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  )
}
