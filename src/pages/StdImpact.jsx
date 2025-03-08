import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from 'react-router-dom';
import { SuccessStd } from '../Category/Data';

function StdImpact() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2
      };
  return (
    <>
    <section className='py-5 bg-lightgray'>
        <div className="container">
            <div className="row">
                <div className="col-lg-4">
                    <h2 className='fw-bold'>See how our students</h2>
                    <h2 className='fw-bold'><span className='orange'>make an impact</span></h2>
                    <div className="row py-2">
                        <div className="col-lg-4 border-end border-3 text-center">
                            <h2 className='fw-bold'>96%</h2>
                        </div>
                        <div className="col-lg-8">
                            <h6>Graduates receive offer within three months of course completion.</h6>
                        </div>
                    </div>
                    <Link className='fs-14px text-decoration-none' to={'/student/success-gallery'}>Read more success stories <IoIosArrowRoundForward /></Link>

                </div>
                <div className="col-lg-8 ">
                <Slider {...settings}>
             
                 {SuccessStd.map(a=>(
                                
                                         <div className="shadow py-4 bg-white   text-center rounded">
                                            <div className='d-flex align-items-center justify-content-center mb-3'>
                                             <img className='success-std-img' src={a.profile} alt="" />
                                             </div>
                                             <h5 className='fw-bold'>{a.name}</h5>
                                             <p>{a.role}
                                                 <br />
                                                 <span className='fw-bold text-blue'>{a.company}</span>
                                             </p>
                                             <ul className='pt-3'>
                                                 <li className='fw-bold'>{a.college}</li>
                                                 <li>{a.faculty}</li>
                                             </ul>
                                         </div>
                                        
                                 ))}
                                 
               </Slider>
               </div>
            </div>
        </div>
    </section>
    
    </>
  )
}

export default StdImpact