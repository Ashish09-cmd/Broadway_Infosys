import React from 'react'
import Hiro from './Hiro'
import { IoMdArrowForward } from "react-icons/io";
import { Cources } from '../Category/Data';
import { Link } from 'react-router-dom';
import Madel from './Madel';
import Patners from './Patners';
import Skills from './Skills';
import Transformation from './Transformation';
import StdImpact from './StdImpact';

function Home() {
  let aa = Cources.filter(a=>a.coursCategory == 'Popular in Coding')
  let bb = Cources.filter(a=>a.coursCategory=='Popular in Designing')
  let cc = Cources.filter(a=>a.coursCategory=='Popular in Data and AI')
  let dd = Cources.filter(a=>a.coursCategory=='Popular in Cloud, Networking, Security & DevOps')
  let ee = Cources.filter(a=>a.coursCategory=='AutoCAD 2D & 3D, SketchUp, Estimating & Costing')
  let ff = Cources.filter(a=>a.coursCategory=='Other Popular Cources')



  

  
  return (
    <>
    <Hiro/>
   
   {/* Explore Top rate Courses  */}
   <section className='py-4 blue text-white'>
    <div className="container">
      <div className='row align-items-center'>
        <div className='col-lg-8'>
          <h4 className='fw-bold'>Explore top-rated courses to accelerate your career</h4>
          <p>Join Our Highly-Demanded Courses and Gain the Skills to Secure Your Dream Job.</p>
          
        </div>
        <div className='col-lg-4 d-flex justify-content-end'>
          <button className=' text-white btn btn1 skyblue '>View All Popular Cources <IoMdArrowForward className='fs-5 '/></button>
        </div>
      </div>

      <div className="row  ">
          {Cources.slice(0,6).map(a=>(
             <div className="col-lg-2 py-3 col-md-4 image-ful  col-sm-6 " key={a.id}>
             
              <div className="shadow p-3   m bg-white ">
               <img className='w-100' src={a.image} alt="" />
               <h6 className='text-dark d-none d-md-block pt-3'>{a.category}</h6>
               <p className='text-danger d-none d-lg-block'>{a.duration} </p>
              </div>
              </div>
          ))}
          
        </div>
      
    </div>
   </section>
     
     {/* Choose your case */}

     <section className='py-5 bg-white'>
      <div className="container">
        <h3 className='fw-bold'>Choose your course and set your career in motion</h3>
        <p>Enroll in our highly-rated courses and learn all you need to land the job you want.</p>
      
      {/* Popular in coding */}
          <div className="row py-4">
          <h5 className='fw-bold pb-3'>Popular In Coding</h5>
          {aa.map(a=>(
              <div className="col-lg-3 duration-top-right" key={a.id}>
                <div className="scale-img">
              <img className='w-100 dp'  src={a.image} alt="" />
              </div>
              <h6 className='fw-bold pt-3'>{a.title}</h6>
               <p className='duration-absolute-top-right bg-danger px-2 text-white '>{a.duration}</p>
            </div>
          ))}
        </div>
        {/* Popular in Designing */}
        <div className="row py-4">
          <h5 className='fw-bold pb-3'>Popular In Designing</h5>
          {bb.map(a=>(
              <div className="col-lg-3 duration-top-right" key={a.id}>
                <div className="scale-img">
              <img className='w-100 dp'  src={a.image} alt="" />
              </div>
              <h6 className='fw-bold pt-3'>{a.title}</h6>
               <p className='duration-absolute-top-right bg-danger px-2 text-white '>{a.duration}</p>
            </div>
          ))}
        </div>

        {/* Popular in Data and AI */}
        <div className="row py-4">
          <h5 className='fw-bold pb-3'>Popular in Data and AI</h5>
          {cc.map(a=>(
              <div className="col-lg-3 duration-top-right" key={a.id}>
                <div className="scale-img">
              <img className='w-100 dp'  src={a.image} alt="" />
              </div>
              <h6 className='fw-bold pt-3'>{a.title}</h6>
               <p className='duration-absolute-top-right bg-danger px-2 text-white '>{a.duration}</p>
            </div>
          ))}
        </div>

        {/* Popular in Cloud, Networking, Security & DevOps */}
        <div className="row py-4">
          <h5 className='fw-bold pb-3'>Popular in Cloud, Networking, Security & DevOps</h5>
          {dd.slice(0,4).map(a=>(
              <div className="col-lg-3 duration-top-right" key={a.id}>
                <div className="scale-img">
              <img className='w-100 dp'  src={a.image} alt="" />
              </div>
              <h6 className='fw-bold pt-3'>{a.title}</h6>
               <p className='duration-absolute-top-right bg-danger px-2 text-white '>{a.duration}</p>
            </div>
          ))}
        </div>
       {/* AutoCAD 2D & 3D, SketchUp, Estimating & Costing */}
       <div className="row py-4">
          <h5 className='fw-bold pb-3'>Popular in Cloud, Networking, Security & DevOps</h5>
          {ee.slice(0,4).map(a=>(
              <div className="col-lg-3 duration-top-right" key={a.id}>
                <div className="scale-img">
              <img className='w-100 dp'  src={a.image} alt="" />
              </div>
              <h6 className='fw-bold pt-3'>{a.title}</h6>
               <p className='duration-absolute-top-right bg-danger px-2 text-white '>{a.duration}</p>
            </div>
          ))}
        </div>
        {/* Other Popular Courses */}
        <div className="row py-4">
          <h5 className='fw-bold pb-3'>Other Popular Courses</h5>
          {ff.map(a=>(
              <div className="col-lg-3 duration-top-right" key={a.id}>
                <div className="scale-img">
              <img className='w-100 dp'  src={a.image} alt="" />
              </div>
              <h6 className='fw-bold pt-3'>{a.title}</h6>
               <p className='duration-absolute-top-right bg-danger px-2 text-white '>{a.duration}</p>
            </div>
          ))}
        </div>

      </div>
     </section>

     <Transformation/>

     <Madel/>
     <StdImpact/>

     <Patners/>

     <Skills/>
     
     {/* Our privious clients start */}
      <section className='bg-white py-4'>
        <div className="container">
          <h3 className='fw-bold'>Our Precious Clients</h3>
          <div className="row pt-3">
            <div className="col">
              <div className="shadow">
              <img className='client-img' src="https://broadwayinfosys.com/uploads/ourclients/1724141682.jpg" alt="" />
              </div>
            </div>
            <div className="col">
              <div className="shadow">
              <img className='client-img'  src="https://broadwayinfosys.com/uploads/ourclients/1695977532.jpg" alt="" />
              </div>
            </div>
            <div className="col">
              <div className="shadow">
              <img className='client-img'  src="https://broadwayinfosys.com/uploads/ourclients/1695977569.jpg" alt="" />
              </div>
            </div>
            <div className="col">
              <div className="shadow">
              <img className='client-img'  src="https://broadwayinfosys.com/uploads/ourclients/1695977623.jpg" alt="" />
              </div>
            </div>
            <div className="col">
              <div className="shadow">
              <img className='client-img '  src="https://broadwayinfosys.com/uploads/ourclients/1690964243.jpg" alt="" />
              </div>
            </div>
            <div className="col">
              <div className="shadow">
              <img className='client-img'  src="https://broadwayinfosys.com/uploads/ourclients/1687090454.png" alt="" />
              </div>
            </div>
            <div className="col">
              <div className="shadow">
              <img className='client-img'  src="https://broadwayinfosys.com/uploads/ourclients/1692176290.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>



    </>
  )
}

export default Home