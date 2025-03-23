import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import { AiOutlineMenu } from "react-icons/ai";
import { IoSearch } from "react-icons/io5";
import { IoIosArrowRoundForward } from "react-icons/io";
import { category, category1 } from '../Category/Data';
import Detail from '../Category/Detail';
import SuccessGallery from '../pages/successGallery/SuccessGallery';
import StudentTestimonial from '../pages/studentTestimonial/StudentTestimonial';
import UpcomingClass from '../pages/upcomingclasses/UpcomingClass';
import { CgMathDivide } from 'react-icons/cg';


function Header() {
  return (
    <>
            {/* Header Section Start */}
   
    <header className='py-2 bg-lightgray sticky  border-bottom header '>
        <div className="container">
           <div className="row align-items-center ">
            <div className="col-lg-2 col-md-2 col-4 col-sm-3">
              <Link to={'/'}>
              <img className='logo w-100' src="https://broadwayinfosys.com/uploads/logo/1705900306_15549.svg" alt="" />
              </Link>
            </div>

            <div className="col-lg-2 col-md-3 col-sm-4 col-4 ">
              <div className='d-flex align-items-center dropdown cursor-pointer  gap-3'data-bs-toggle="dropdown">
            <AiOutlineMenu  className='fs-5'/> <h5 className='mt-2'>All Cources</h5>
           <ul className="dropdown-menu">
               <div className='shadow '>
                {category.map(a=>(
                 
                  <li className="p-2" key={a}>
                    
                    <Link className="dropdown-item" to={`/category/`}>
                    {/* <Link to={`/${a}`}> */}
                  {a}
                  {/* </Link> */}
                  
                  </Link></li>
                  
                ))}
                {/* <Link to="/aa">fgfr</Link> */}
                 
                 </div>

                 
           </ul>

           
           </div>
           {/* <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown button
  </button>
  <ul class="dropdown-menu">
  {category1.map(a=>(
    <li><Link class="dropdown-item" to={a.slug}>{a.name}</Link></li>
  ))}
     
  </ul>
</div> */}
            </div>
            <div className="col-lg-3 col-md-1 col-sm-2 d-none d-sm-block ">
              <div className="input-group">
                 <input   type="text" className="form-control header d-none d-lg-block" placeholder="What do you want to learn today ? " aria-label="Recipient's username" aria-describedby="basic-addon2" />
                  <span className="input-group-text blue text-white" id="basic-addon2"><IoSearch /></span>
               </div>

            </div>
            <div className="col-lg-5 col-md-6 col-4 col-sm-3 d-flex gap-3 justify-content-end">
              
              <ul className='d-none d-md-block'>
                <li className='fw-semibold'>Inquiry Hotline:+977-9841002000</li>
                <li className='fw-semibold'>+977-9808724535 /+977-1-4111849</li>
              </ul>
              <button className='blue border-0 rounded text-white px-2'>
                Send Inquiry <IoIosArrowRoundForward className='fs-5' />
              </button>

            </div>
           </div>
        </div>
    </header>
     
     {/* Navbar Start */}
       <nav className="navbar border-bottom bg-lightgray">
            <div className="container">
    {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button> */}
      <ul className="d-flex align-items-center  gap-4">
        <li>
          <Link className="nav-link fw-semibold light-black "  to={'/student/success-gallery'}>Success Gallery</Link>
        </li>
        <li>
          <Link className="nav-link fw-semibold light-black " to={'/student/testimonial'}>Student Testimonials</Link>
        </li>
        <li>
          <Link className="nav-link fw-semibold light-black " to={'/upcoming-classes'}>Upcoming Classes (46)</Link>
        </li>
        <li>
          <a className="nav-link fw-semibold light-black" href="#">Career Blog</a>
        </li>
        <li>
          <a className="nav-link fw-semibold light-black" href="#"> Blog</a>
        </li>
      </ul>
  </div>
</nav>

    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/category/:catid' element={<Detail/>}/>
        <Route path='/student/success-gallery' element={<SuccessGallery/>}/>
        <Route path='/student/testimonial' element={<StudentTestimonial/>}/>
        <Route path='/upcoming-classes' element={<UpcomingClass/>}/>
    </Routes>
    </>
  )
}

export default Header