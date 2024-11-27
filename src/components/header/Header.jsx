import React from 'react'
import Logo from "../../assets/Group 1.png"
const Header = () => {
    return (
        <div className='container'>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"><img src={Logo} alt="" /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-4">
                            <li className="nav-item">
                                <a className="nav-link active fw-bold" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active fw-bold" aria-current="page" href="#">Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active fw-bold" aria-current="page" href="#">Contact us</a>
                            </li>
                        </ul>
                        <div>
                            <button type='button' className='border-0 bg-white me-3'>Login</button>
                            <button type="button" className="btn btn-warning text-white rounded-5">Book Scooter</button>
                        </div>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Header