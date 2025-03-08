import React from 'react'
import { SuccessStd } from '../../Category/Data'

function SuccessStudent() {
  return (
    <>
    <section className='py-5 light-green'>
        <div className="container">
            <h3 className='fw-bold'>Success Gallery of Our Students</h3>
            <p>Thousands of students have completed their training with us & have been placed on jobs worldwide.</p>
            <div className="row pt-3 g-4">
                {SuccessStd.map(a=>(
                        <div className="col-lg-4 ">
                        <div className="shadow py-4 bg-white text-center rounded">
                            <img className='success-std-img' src={a.profile} alt="" />
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
                    </div>
                ))}
               
            </div>
        </div>
    </section>
    
    </>
  )
}

export default SuccessStudent