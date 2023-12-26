import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <>
            <div style={{ padding: '3%' }}>
                <footer className='py-5'>
                    <div className='row'>
                        <div className='col-6 col-md-2 mb-3'>
                            <Link to={'/termscondition'} style={{ textDecoration: 'none', color: 'black' }}>TERMS & CONDITIONS</Link>
                        </div>
                        <div className='col-6 col-md-2 mb-3'>
                            <Link style={{ textDecoration: 'none', color: 'black' }}>FAQ</Link>
                        </div>
                        <div className='col-6 col-md-2 mb-3'>
                            <Link to={'/contact'} style={{ textDecoration: 'none', color: 'black' }}>CONTACT</Link>
                        </div>
                        <div className='col-md-5 offset-md-1 mb-3'>
                            <form>
                                <h5>Subscribe to our Newsletter</h5>
                                <p>Monthly digest of what's new and exciting from us.</p>
                                <div className='d-flex flex-column flex-sm-row w-100 gap-2'>
                                    <label className='visually-hidden'>Email Address</label>
                                    <input id='newsletter1' type='text' className='form-control' placeholder='Email Address'></input>
                                    <button className='btn btn-primary' type='button'>Subscribe</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className='d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top'>
                        <p>© CAMCRAFT Company, Inc. All rights reserved.
                            <p>Created By Guru Charan</p>
                        </p>
                        <ul className='list-unstyled d-flex'>
                            <li className='ms-3'>
                                <i className='bi bi-twitter' style={{ fontSize: '150%' }} />
                            </li>
                            <li className='ms-3'>
                                <i className='bi bi-instagram' style={{ fontSize: '150%' }} />
                            </li>
                            <li className='ms-3'>
                                <i className='bi bi-facebook' style={{ fontSize: '150%' }} />
                            </li>
                        </ul>
                    </div>
                </footer>
                {/* <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                    Launch demo modal
                </button>

                <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                ...
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </>
    )
}
