import React from "react";

function Skills() {
  return (
    <>
      <section className="py-4 light-green">
        <div className="container">
          <h3 className="fw-bold text-center">Why upskill at Broadway</h3>
          <p className="text-center">
            We provide industry aligned training with practical sessions &
            mentorship. Grow with our rich <br /> portfolio of skill enhancement
            courses & highly successful placements.
          </p>
          <div className="row py-3">
            <div className="col-lg-3 ">
              <div className="shadow p-3 bg-white text-center rounded">
                <img src="https://broadwayinfosys.com/uploads/homepage-whyus/1740117660.skillicon.svg" alt="" />
                <h4 className="py-2">Rich History</h4>
                <p>
                  With over 16 years of excellence in IT training, we’ve
                  transformed a myriad of careers with quality training &
                  innovations.
                </p>
              </div>
            </div>
            <div className="col-lg-3 ">
              <div className="shadow p-3 bg-white text-center rounded">
                <img src="https://broadwayinfosys.com/uploads/homepage-whyus/1740117660.skillicon2.svg" alt="" />
                <h4 className="py-2">Qualified Trainers</h4>
                <p>
                Our faculty comprises experienced industry experts with a deep understanding of the real world experience & skills.
                </p>
              </div>
            </div>{" "}
            <div className="col-lg-3 ">
              <div className="shadow p-3 bg-white text-center rounded">
                <img src="https://broadwayinfosys.com/uploads/homepage-whyus/1740117660.skillicon3.svg" alt="" />
                <h4 className="py-2">Support Excellence</h4>
                <p>
                Our dedicated support team guides you all the way to the learning to placement process including growth opportunities.
                </p>
              </div>
            </div>{" "}
            <div className="col-lg-3 ">
              <div className="shadow p-3 bg-white text-center rounded">
                <img src="https://broadwayinfosys.com/uploads/homepage-whyus/1740117660.skillicon4.svg" alt="" />
                <h4 className="py-2">Successful Alumnis</h4>
                <p>
                Our graduates excel at big companies with their presence, itself being the testament to the reputed quality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Skills;
