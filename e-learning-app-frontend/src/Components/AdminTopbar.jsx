import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function AdminTopbar() {
    const user = useSelector(state => state.user.value);
    let navigate = useNavigate();

    const username = localStorage.getItem("name")

    let handleLogout = () => {

        toast.success("Logout Successfully");
        localStorage.removeItem("id");
        localStorage.removeItem("token");
        localStorage.removeItem("name");
        localStorage.removeItem("Role");
        setTimeout(() => {
            navigate('/');
        }, 3000)
    }

    return (
        <>
            <div>
                <div className='row'>
                    <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: "#b3cee5", height: '12' }}>
                        <div className='col-9 d-flex justify-content-start'>
                            <form
                                className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                                <div className="input-group" style={{ width: '400px', left: '8%', padding: '1%' }}>
                                    <input type="text" className="form-control bg-light border-0 small " placeholder="Search for..."
                                        aria-label="Search" aria-describedby="basic-addon2"
                                    />
                                    <button className="btn btn-secondary" type="button">
                                        <i className="bi bi-search"></i>
                                    </button>
                                </div>
                            </form>
                        </div>

                        <div className='col-3 d-flex justify-content-end'>
                            <div className="btn-group " style={{ right: '20%' }}>
                                <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{ border: 'none' }}>
                                    <i className='bi bi-person f5-4'></i> {username}
                                </button>
                                <div className="dropdown-menu">

                                    <button className="dropdown-item" >
                                        <i className="bi bi-person f5-4"
                                            onClick={() => { navigate('/admin/adminProfile') }} style={{ fontSize: '90%' }}> PROFILE</i>
                                    </button>
                                    <button className="dropdown-item" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                        <i className="bi bi-box-arrow-left"
                                            style={{ fontSize: '90%' }}> LOGOUT</i>
                                    </button>
                                </div>
                                <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div className="modal-dialog modal-dialog-centered">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title" id="exampleModalLabel">LOGOUT</h5>
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div className="modal-body">
                                                Are You Sure? Want To Exit
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={handleLogout}>Logout</button>
                                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
                <ToastContainer />
            </div>

        </>
    );
}

export default AdminTopbar;
