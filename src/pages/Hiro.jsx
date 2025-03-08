import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { GrCertificate } from "react-icons/gr";
import { RiGraduationCapFill } from "react-icons/ri";
import { FaUniversity } from "react-icons/fa";

function Hiro() {
  return (
    <>
      <section className="py-5 hiro">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h1 className="fw-bold">
                <span className="text-blue "> Building Global IT </span>
                <br />
                Professionals since 2008
              </h1>
              <p className="fw-bold fs-6">
                <span className="text-blue">ISO 9001:2015 </span>CERTIFIED IT
                LEARNING CENTER
              </p>
              <p>
                Broadway Infosys, established in 2008, is a leading computer
                training institute in Kathmandu, Nepal, offering professional IT
                training and education through industry experts.
              </p>

              <div className="testimonial">
                {/* Overlapping Profile Images */}
                <div className="avatar-group">
                  <img
                    src="https://randomuser.me/api/portraits/women/44.jpg"
                    alt="User 1"
                  />
                  <img
                    src="https://randomuser.me/api/portraits/men/45.jpg"
                    alt="User 2"
                  />
                  <img
                    src="https://randomuser.me/api/portraits/women/46.jpg"
                    alt="User 3"
                  />
                  <img
                    src="https://broadwayinfosys.com/uploads/successgallery/1739854945.jpg"
                    alt="User 3"
                  />
                </div>
                {/* Testimonial Text */}
                <p className="testimonial-text">
                  More than 15000+ students have started their career after
                  getting certified from Broadway Infosys.
                </p>
              </div>
              <button className="btn btn-primary mt-4  fs-5">
                Explore Our Cources <IoIosArrowRoundForward className="fs-4" />
              </button>
            </div>
            <div className="col-lg-6">
              <div className="training-section">
                <div className="hiro-img">
                  <img
                    className="w-100"
                    src="https://broadwayinfosys.com/uploads/slider/173987824730640.jpg"
                    alt=""
                  />
                 
                    {/* Floating Cards */}
                   <div className="floating-cards top-left shadow ">
                    <div className="d-flex align-items-center justify-content-center">
                      <div className="p-3 bg-pinky" >
                      <GrCertificate className="fs-2 text-danger"/>
                      </div>
                      <div className="ps-3">
                        <h6 >Certified Students <br /> <span className="fw-bold fs-4 text-blue">15K</span></h6>
                     
                      </div>
                    </div>
                   </div>
                   <div className="floating-cards top-right shadow ">
                    <div className="d-flex align-items-center justify-content-center">
                      <div className="p-3 bg-pinky" >
                      <RiGraduationCapFill className="fs-2 text-danger"/>
                      </div>
                      <div className="ps-3">
                        <h6 >Cources <br /> <span className="fw-bold fs-4 text-blue">152+</span></h6>
                     
                      </div>
                    </div>
                   </div>
                   
                   <div className="floating-cards bottom-center shadow ">
                    <div className="d-flex align-items-center justify-content-center">
                      <div className="p-3 bg-pinky" >
                      <FaUniversity className="fs-2 text-danger"/>
                      </div>
                      <div className="ps-3">
                        <h6 >Qualified Teachers<br /> <span className="fw-bold fs-4 text-blue">70+</span></h6>
                     
                      </div>
                    </div>
                   </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hiro;
