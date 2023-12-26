import '../CSS/Mail.css'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

export default function Mail() {

    const form = useRef();
    let navigate = useNavigate();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_rubnbyr', 'template_zfc5907', form.current, 'FQ7qh1irh_Mg9uYTf')
            .then((result) => {
                console.log(result.text);
                toast.success("Mail Sent Successfully");
                setTimeout(() => {
                    navigate(-1);
                }, 3000)
            }, (error) => {
                toast.error("Invalid Credentials");
                console.log(error.text);
            });
    };
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: "#b3cee5" }}>
                <div className="container-fluid">
                    <div className='d-flex justify-content-left'>
                        <i className="bi bi-arrow-left-circle" onClick={() => navigate(-1)} style={{ fontSize: '175%', paddingTop: '1%', paddingLeft: '5%', cursor: 'pointer' }}></i>
                    </div>
                </div>
            </nav>

            <div className='staffmail min-vh-100 d-flex'>
                <div className='container-fluid d-flex justify-content-center align-items-center inner'>
                    <div className="card shadow-lg d-flex p-3 mb-5 bg-white rounded" >
                        <div className="card-body">
                            <form className='EmailForm' ref={form} onSubmit={sendEmail}>
                                <label className='EmailName'>Name</label>
                                <input className='EmailText' id='text' type="text" name="Subiksha" defaultValue={localStorage.getItem("name")} />
                                <label className='EmailName'>Email</label>
                                <input className='EmailText' id='email' type="email" name="727821tuad052@skct.edu.in" defaultValue="727821tuad017@skct.edu.in" />
                                <label className='EmailName'>Message</label>
                                <textarea className='EmailMessage' name="message" />
                                <input className='EmailButton' type="submit" value="Send" />
                            </form>
                        </div>
                    </div>
                </div>
                <ToastContainer />
            </div>
        </>
    )
}
