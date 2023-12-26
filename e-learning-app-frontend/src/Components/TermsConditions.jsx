import React from 'react'
import "../CSS/Terms.css"
import { useNavigate } from 'react-router-dom'

export default function TermsConditions() {

    let navigate = useNavigate();
    return (
        <div className='container-fluid d-flex justify-content-center' style={{ paddingTop: '4%', width: '80%' }}>
            <div className="shadow-lg p-3 mb-5 bg-white rounded">
                <div className="card">
                    <h5 className="card-header">Terms & Conditions</h5>
                    <div className="card-body text-start">
                        <h5 className="card-title d-flex">1. Acceptance of Terms</h5>
                        <p className="card-text ">By using our e-learning platform, you agree to comply with and be bound by these Terms and Conditions. If you do not agree with these terms, please do not use our services.</p>
                        <h5 className="card-title d-flex">2. User Registration</h5>
                        <p className="card-text">Users must register for a User Account to access certain features of the platform.User Account information must be accurate and kept up to date.Users are responsible for maintaining the confidentiality of their account information.</p>
                        <h5 className="card-title d-flex">3. Content and Courses</h5>
                        <p className="card-text ">The platform provides access to educational content and courses.We reserve the right to modify or remove content and courses at our discretion.Users may not share, distribute, or reproduce course materials without written consent.</p>
                        <h5 className="card-title d-flex">4. Payments and Refunds</h5>
                        <p className="card-text ">Payment is required for certain courses or services. Payment information must be accurate.Refund policies, if applicable, are specified for each course or service.</p>
                        <h5 className="card-title d-flex">5. Intellectual Property</h5>
                        <p className="card-text "> All content and materials on the platform are protected by copyright and other intellectual property laws.Users may not use, copy, or distribute content without permission.</p>
                        <br />
                        <button className="btn btn-primary" onClick={()=>{navigate(-1)}}>I Agree</button>
                    </div>                 
                </div>
            </div>
        </div>
    )
}
