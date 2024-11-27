import React from 'react'
import Heroimg from "../../assets/Group 4.png"

const Herosection = () => {
    return (
        <div className='container'>
            <div className='row align-items-center justify-content-center'>
                <div className='col-md-6 col-sm-12'>
                    <h3>
                        Fair price ride
                    </h3>
                    <h1>
                        Rent Our <span className='text-warning'>Scooter</span>
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Nobis, maiores. Vel, nobis similique aut possimus iste <br /> aliquid, corrupti atque numquam in sed error
                    </p>
                </div>
                <div className='col-md-6 col-sm-12'>
                    <img src={Heroimg} alt="" className='img-fluid' />
                </div>
            </div>
        </div>
    )
}

export default Herosection