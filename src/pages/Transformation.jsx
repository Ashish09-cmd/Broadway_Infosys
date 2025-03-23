import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { StdTestimonial } from "../Category/Data";

function Transformation() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 2
      };
  return (
    <>
      <section className="py-4 bg-lightgray">
        <div className="container">
          <h6 className="fw-bold">Grab the best of</h6>
          <h2 className="fw-bold">How can Broadway transform your career?</h2>
          <div className="row py-4 ">
            <div className="col-lg-6">
               
                     <Slider {...settings}>
                     {StdTestimonial.map(a=>(
                     <div className="shadow p-5 rounded fix-height bg-white ">
                         <div className="d-flex mt-2 align-items-center">
                                 <div>
                                   <img
                                     className="testimonial-std-img"
                                     src={a.profile}
                                     alt=""
                                   />
                                 </div>
                                 <ul className="ms-2">
                                   <li className="fw-bold ">{a.name}</li>
                                   <li>{a.course}</li>
                                 </ul>
                                 
                               </div>
                               <p className="pt-3">
                               {a.testimonial}
                               <br />
                               <a href="#">Read more</a>
                             </p>
                         </div>
                          ))}
                     </Slider>
               
             
            </div>
            <div className="col-lg-6">
                <img
                  className="img-100 img-fluid fix-height rounded"
                  src="https://broadwayinfosys.com/uploads/testimonials/1733298678.webp"
                  alt=""
                />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Transformation;
