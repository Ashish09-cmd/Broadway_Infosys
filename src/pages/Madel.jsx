import React from "react";
import { PiMedalBold } from "react-icons/pi";

function Madel() {
  return (
    <>
      <section className="py-5 bg-white ">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 position-relative">
              <img
                src="https://broadwayinfosys.com/uploads/homepage/17337266571332872138.png"
                className="border-radius w-400"
                alt=""
              />
              <img
                src="https://broadwayinfosys.com/uploads/homepage/17337266579526010355.png"
                className="border-radius overlay-img w-400"
                alt=""
              />
            </div>
            <div className="col-lg-6 ps-3">
              <h2 ><PiMedalBold className="pe-2 fs-1"/>#1</h2>
              <p>Professional IT Training Institute in Nepal</p>
              <div className="d-flex">
                <p className="fw-bold  fs-4 ">1</p>
                <div className="ps-3">
                  <h5 className="fw-bold">Training</h5>
                  <p>
                    Broadway Infosys offers IT training in Nepal, covering web
                    development, software development, programming, hardware,
                    and networking, both online and in-person.
                  </p>
                </div>
              </div>
              <div className="d-flex">
                <p className="fw-bold fs-4">2</p>
                <div className="ps-3">
                  <h5 className="fw-bold">Project Work</h5>
                  <p>
                    Broadway Infosys helps trainees apply their knowledge
                    through practical projects.
                  </p>
                </div>
              </div>{" "}
              <div className="d-flex">
                <p className="fw-bold  fs-4 ">3</p>
                <div className="ps-3">
                  <h5 className="fw-bold">Evaluation</h5>
                  <p>
                  Broadway Infosys evaluates project work to identify talent and skills. This evaluation helps trainees secure job placements with leading companies.
                  </p>
                </div>
              </div>{" "}
              <div className="d-flex">
                <p className="fw-bold fs-4 ">4</p>
                <div className="ps-3">
                  <h5 className="fw-bold">Internship / Placement</h5>
                  <p>
                  Broadway Infosys helps trainees find internships and jobs in IT.
                  </p>
                </div>
              </div>
          
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Madel;
