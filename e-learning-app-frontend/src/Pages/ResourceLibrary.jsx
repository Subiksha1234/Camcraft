import React from 'react'
import { Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';
function ResourceLibrary() {

    let navigate = useNavigate();
    return (
        <div className='container-fluid d-flex justify-content-center' style={{ paddingTop: '4%' }}>
            <div className='shadow-lg p-3 mb-5 bg-white rounded '>
            <div className="card">
                <h5 className="card-header">RESOURCE LIBRARY</h5>
                <br />
                <div className="card-body text-start">
                    <h5 className="card-heading d-flex">1. REFERRAL YOUTUBE LINKS</h5>
                    <br />
                    <a href='https://youtu.be/LxO-6rlihSg?si=oLyVoeqtX1Fz18pg'> https://youtu.be/LxO-6rlihSg?si=oLyVoeqtX1Fz18pg</a>
                    <br />
                    <br />
                    <a href='https://youtu.be/yhAmMUi2NmM?si=rxHV0rP-V7RyUErN'>https://youtu.be/yhAmMUi2NmM?si=rxHV0rP-V7RyUErN</a>
                    <br />
                    <br />
                    <h5 className="card-heading d-flex">2. E-Books</h5>
                    <br />
                    <p className="card-text">Using the Crop Tool to Create Better Pictures – Free Quick Guide</p>
                    <a href=' https://photzy.com/using-the-crop-tool-to-create-better-pictures-free-quick-guide/'>https://photzy.com/using-the-crop-tool-to-create-better-pictures-free-quick-guide/</a>
                    <br />
                    <br />
                    <p className="card-text">Color Theory (And How to Make It Work for You) – Free Quick Guide</p>
                    <a href='https://photzy.com/color-theory-and-how-to-make-it-work-for-you-free-quick-guide/'>https://photzy.com/color-theory-and-how-to-make-it-work-for-you-free-quick-guide/</a>
                    <br />
                    <br />
                    <h5 className="card-heading d-flex">3. COURSE GUIDES</h5>
                    <br />
                    <p className="card-text ">a) Photography for Beginners (The Ultimate Guide in 2023)</p>
                    <p className="card-text ">b) Photography Basics: The Complete Beginner's Guide</p>
                    <p className="card-text ">c) Photography For Beginners Complete Guide: Master Photography</p>
                    <br />


                    <h5 className="card-heading d-flex">4. PRESETS</h5>
                    <br />
                    <p className="card-text ">a) Camera Raw Presets Free Download - FixThePhoto.com</p>
                    <a href='https://fixthephoto.com/camera-raw-presets'> https://fixthephoto.com/camera-raw-presets</a>
                    <br />
                    <br />
                    <p className="card-text ">b) Photoshop Presets - Adobe</p>
                    <a href='https://www.adobe.com/products/photoshop/presets.html'>https://www.adobe.com/products/photoshop/presets.html</a>

                    <br />
                    <br />
                    <button className='btn btn-primary' onClick={()=>{navigate(-1)}}>BACK</button>
                </div>
                </div>
            </div>
        </div>
    )
}
export default ResourceLibrary