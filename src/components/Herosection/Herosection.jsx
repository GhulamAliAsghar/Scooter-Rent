import React from 'react'
import Heroimg from "../../assets/Group 4.png"

const Herosection = () => {
  return (
    <div className='container d-flex justify-content-around align-content-center align-items-center'>
        <div className='me-4'> 
            <h3>
                Fair price ride
            </h3>
            <h1>
                Rent Our <span>Scooter</span>
            </h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Nobis, maiores. Vel, nobis similique aut possimus iste <br /> aliquid, corrupti atque numquam in sed error
            </p>
        </div>
        <div>
            <img src={Heroimg} alt="" className='img-fluid' />
        </div>
    </div>
  )
}

export default Herosection