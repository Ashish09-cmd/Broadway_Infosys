import React from "react";
import { StdTestimonial } from "../../Category/Data";
import { IoIosArrowRoundForward } from "react-icons/io";
import { BiSearch } from "react-icons/bi";

function StudentTestimonial() {
  return (
    <>
      <section className="py-5 light-green">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 ">
              <h1 className="fw-bold">
                Trusted by{" "}
                <span className="text-blue"> thousands of students</span>
              </h1>
              <h1 className="fw-bold">
                for their <span className="orange">learning</span>{" "}
              </h1>
              <p>
                Real stories, real results. Our students expressing their words
                and voices.
              </p>
              <button className="btn btn-primary text-white">
                Read more testimonials{" "}
                <IoIosArrowRoundForward className="fs-4" />
              </button>
            </div>
            <div className="col-lg-5">
              <div className="row g-4">
                {StdTestimonial.slice(0, 4).map((a) => (
                  <div className="col-lg-6" key={a.id}>
                    <div className="shadow p-3 bg-white rounded ">
                      <p>
                        {a.testimonial}
                        <br />
                        <a href="#">Read more</a>
                      </p>
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
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-4">
        <div className="container">
          <h3 className="text-center">
            Search Student/Course to see what our students say about it
          </h3>
          {/* Search */}
          <div className="input-group inp-search pt-4">
            <input
              type="text"
              className="form-control"
              placeholder="Student / Cources"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <span
              className="input-group-text blue text-white"
              id="basic-addon2"
            >
              <BiSearch />
            </span>
          </div>

          <div className="row mt-4 g-4">
            {StdTestimonial.slice(4,10).map(a=>(
                  <div className="col-lg-4" key={a.id}>
                  <div className="shadow p-3 rounded fix-height ">
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
              </div>
            ))}
          
          </div>
        </div>
      </section>
    </>
  );
}

export default StudentTestimonial;
