import React from 'react'
import Patners from '../Patners'
import SuccessStudent from './SuccessStudent'

function SuccessGallery() {
  return (
    <>
    <section className='py-5 light-green'>
        <div className="container"> 
            <div className="row">
                <div className="col-lg-6 d-flex flex-column justify-content-center">
                    <h1 className='fw-bold'>Meet our <span className='text-blue'>students</span>.</h1>
                    <h1 className='fw-bold'>Read their <span className='orange'>success <br />stories</span>.</h1>
                </div>
                <div className="col-lg-6 position-relative">
                    <div className='d-flex gap-4'>
                    <div>
                            <img className='f-img1 rounded' src="https://broadwayinfosys.com/uploads/successgallery/1739945305.jpg" alt="" />
                            </div>
                            <div>
                                <img className='f-img2 rounded' src="https://broadwayinfosys.com/uploads/successgallery/1739773475.jpg " alt="" />
                                <img className='f-img3 mt-4 rounded' src="https://broadwayinfosys.com/uploads/successgallery/1739171627.jpg" alt="" />
                                
                            </div>
                           
                            </div>
                            <div className="recent-absolute rounded bg-white">
                                <div className="shadow p-2">
                                    <div className="row">
                                        <div className="col-lg-4">
                                            <img className='f-img4 rounded' src="https://broadwayinfosys.com/uploads/successgallery/1739945305.jpg" alt="" />
                                        </div>
                                        <div className="col-lg-8">
                                            <h6>Recently Hired By</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>   
                </div>
            </div>
        </div>
    </section>
    <Patners/>
    <section className='bg-white py-4'>
        <div className="container">
          <h3 className='fw-bold text-center'>Our Hiring Patners</h3>
          <div className="row pt-3">
            <div className="col">
              <div className="shadow">
              <img className='client-img' src="https://broadwayinfosys.com/uploads/career/1607939490.png" alt="" />
              </div>
            </div>
            <div className="col">
              <div className="shadow">
              <img className='client-img'  src="https://broadwayinfosys.com/uploads/ourclients/1628137439.png" alt="" />
              </div>
            </div>
            <div className="col">
              <div className="shadow">
              <img className='client-img'  src="https://broadwayinfosys.com/uploads/career/1546587703.png" alt="" />
              </div>
            </div>
            <div className="col">
              <div className="shadow">
              <img className='client-img'  src="https://broadwayinfosys.com/uploads/ourclients/1704354955.png" alt="" />
              </div>
            </div>
            <div className="col">
              <div className="shadow">
              <img className='client-img '  src="https://broadwayinfosys.com/uploads/ourplacementpartner/1740119698.jpg" alt="" />
              </div>
            </div>
            <div className="col">
              <div className="shadow">
              <img className='client-img'  src="https://broadwayinfosys.com/uploads/career/1535616817.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <SuccessStudent/>
    </>
  )
}

export default SuccessGallery