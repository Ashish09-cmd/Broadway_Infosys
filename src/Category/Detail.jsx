import React from 'react'
import { useParams } from 'react-router-dom'
import { Cources } from '../Category/Data';
import { IoArrowForwardOutline } from "react-icons/io5";


function Detail() {
    let {catid} =useParams()
    let det = Cources.filter(a=>a.category==catid)
  return (
    <>
    <section className='blue py-5 text-white'>
        <div className="container">
            
                {det.map(a=>(
                    <div className="row">
                    <div className="col-lg-8" key={a.id}>
                   <h1 className='fw-bold'>Web Design Training in Nepal</h1>
                   <div className='d-flex gap-3 py-2'>
                    <h6>{a.duration}</h6>
                    <h6>{a.title}</h6>
                    </div>
                    <p>{a.description}</p>
                    <div className='d-flex gap-4 pt-4'>
                    <button className='btn btn-primary text-white fw-bold'>ENROLL NOW <IoArrowForwardOutline  /></button>
                    <button className='btn bg-orange text-white fw-bold'>SEND AND INQUERY <IoArrowForwardOutline /></button>
                    </div>
               </div>
               <div className="col-lg-4">
                <div className='detail-image'>
                  <img  src={a.image} alt="" />
                  </div>
               </div>
            </div>
                ))}
               
              
        </div>
    </section>
    
    <section className='bg-white py-4'>
        <div className="container">
            <div className="row">

                <div className="col-lg-6">
                  <h3>What you’ll learn</h3>
                </div>
                <div className="col-lg-6 d-flex justify-content-end">
                   <button className='btn btn-primary text-white fw-semibold'>Expand All</button>
                </div>
            </div>
            {det.map(a=>(
                <p>
                    {a.syllabus}
                </p>
            ))}
            
        </div>
    </section>
    
    </>
  )
}

export default Detail