import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";

function Patners() {
  return (
    <>
    <section className='py-5 bg-white'>
        <div className="container">
            <h2 className='text-center fw-bold'>Our Placement Partners</h2>
            <div className="row align-items-center justify-content-center ">
              <div className='con'>
              <div className="col-lg-4">
                <img className='img-fluid' src="https://broadwayinfosys.com/uploads/ourplacementpartner/1579608350.png" alt="" />
              </div>
              <div className="col-lg-4">
                <img src="https://broadwayinfosys.com/uploads/ourclients/1738153723.png" alt="" className='img-fluid' />
              </div>
              <div className="col-lg-4">
                <img src="https://broadwayinfosys.com/uploads/career/1562569188.jpg" alt="" className="img-fluid" />
              </div>
              </div>
            </div>
            <div className="row align-items-center justify-content-center">
              <div className="con">
              <div className="col-lg-3">
                <img className='img-fluid' src="https://broadwayinfosys.com/uploads/career/1636695049.png" alt="" />
              </div>
              <div className="col-lg-3">
                <img className='img-fluid' src="https://broadwayinfosys.com/uploads/career/1640927833.jpg" alt="" />
              </div><div className="col-lg-3">
                <img className='img-fluid' src="https://broadwayinfosys.com/uploads/ourclients/1628138685.png" alt="" />
              </div><div className="col-lg-3">
                <img className='img-fluid' src="https://broadwayinfosys.com/uploads/career/1607939490.png" alt="" />
              </div>
              </div>
            </div>
            <div className='text-center pt-5'>
            <a className='fs-6 text-decoration-none' href="#">View more placement partners <IoIosArrowRoundForward className='fs-4' /></a>
            </div>
        </div>
    </section>
    
    </>
  )
}

export default Patners