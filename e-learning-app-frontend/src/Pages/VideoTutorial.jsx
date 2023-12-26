import React from 'react'
import Footer from '../Components/Footer'
import { useNavigate } from 'react-router-dom'

export default function VideoTutorial() {
    let navigate = useNavigate();
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: "#b3cee5" }}>
                <div className="container-fluid">
                    <div className='d-flex justify-content-left'>
                        <i className="bi bi-arrow-left-circle" onClick={() => navigate(-1)} style={{ fontSize: '175%', paddingTop: '1%', paddingLeft: '5%', cursor: 'pointer' }}></i>
                    </div>
                </div>
            </nav>

            <div>
                <h4 style={{paddingTop:'1.5%'}}>TUTORIAL VIDEO</h4>
                <iframe
                    src="https://www.youtube.com/embed/V7z7BAZdt2M"
                    frameborder="0"
                    allow="autoplay; encrypted-media"
                    allowfullscreen
                    title="video"
                    style={{

                        width: "1000px",
                        height: "600px",
                        marginTop: '50px',
                        overflow: "auto",
                    }}
                />
            </div>
            <br /><br />
            <hr />
            <div>
                <Footer />
            </div>
        </>
    )
}
