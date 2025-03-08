import React from 'react'
import { Cources } from '../../Category/Data'
import { SlCalender } from "react-icons/sl";
import { IoMdTime } from "react-icons/io";

function UpcomingClass() {
  return (
    <>
    <section className='py-5 light-green '>
        <div className="container">
            <h3 className='fw-bold'>Find Our Upcoming Class Schedule Here!</h3>
            <p>Feel free to browse through our courses and their timings.</p>
            <div className="row g-4">
                {Cources.map(a=>(
                        <div className="col-lg-3" key={a.id}>
                        <div className="shadow p-3 up-card duration-top-right bg-white rounded">
                        <div className="scale-img">
                        <img className='w-100 dp'  src={a.image} alt="" />
                        </div>
                        <h6 className='fw-bold pt-3'>{a.title}</h6>
                        <ul>
                            <li className='fw-semibold'>{a.upcomingclass}</li>
                            <li><SlCalender  className='fs-5 me-2'/>{a.date}</li>
                            <li><IoMdTime className='fs-5 me-2' />{a.time}</li>
                        </ul>
                   <p className='duration-absolute-top-right bg-danger px-2 text-white '>{a.duration}</p>
                    </div>
                    </div>
                ))}
               
            </div>
        </div>
    </section>
    
    </>
  )
}

export default UpcomingClass