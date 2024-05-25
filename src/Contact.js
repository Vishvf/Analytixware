import React from 'react'
import { Link } from 'react-router-dom'

export default function Contact(){
  return (<><div>
    {/* Navbar Start */}
    <div className="container-fluid sticky-top">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-dark p-0">
          <Link to="/" className="navbar-brand">
            <h1 className="text-white">Analytixware</h1>
          </Link>
          <button type="button" className="navbar-toggler ms-auto me-0" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto">
            <Link to="/" className="nav-item nav-link">Home</Link>
              <Link to="/About" className="nav-item nav-link">About</Link>
              <Link to="/Service" className="nav-item nav-link">Services</Link>
              <Link to="/Project" className="nav-item nav-link">Case Study</Link>
              <Link to="/Feature" className="nav-item nav-link">Features</Link>
              <Link to="/Contact" className="nav-item nav-link">Contact</Link>
            </div>
            <button type="button" className="btn text-white p-0 d-none d-lg-block" data-bs-toggle="modal" data-bs-target="#searchModal"><i className="fa fa-search" /></button>
          </div>
        </nav>
      </div>
    </div>
    {/* Navbar End */}
    {/* Hero Start */}
    <div className="container-fluid pt-5 bg-primary hero-header">
      <div className="container pt-5">
        <div className="row g-5 pt-5">
          <div className="col-lg-6 align-self-center text-center text-lg-start mb-lg-5">
            <h1 className="display-4 text-white mb-4 animated slideInRight">Contact Us</h1>
          </div>
        </div>
      </div>
    </div>
    {/* Hero End */}
    {/* Full Screen Search Start */}
    <div className="modal fade" id="searchModal" tabIndex={-1}>
      <div className="modal-dialog modal-fullscreen">
        <div className="modal-content" style={{"background":"rgba(20, 24, 62, 0.7)"}}>
          <div className="modal-header border-0">
            <button type="button" className="btn btn-square bg-white btn-close" data-bs-dismiss="modal" aria-label="Close" />
          </div>
          <div className="modal-body d-flex align-items-center justify-content-center">
            <div className="input-group" style={{"max-width":"600px"}}>
              <input type="text" className="form-control bg-transparent border-light p-3" placeholder="Type search keyword" />
              <button className="btn btn-light px-4"><i className="bi bi-search" /></button>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Full Screen Search End */}
    {/* Contact Start */}
    <div className="container-fluid py-5">
      <div className="container py-5">
        <div className="mx-auto text-center" style={{"max-width":"500px"}}>
          <div className="btn btn-sm border rounded-pill text-primary px-3 mb-3">Contact Us</div>
          <h1 className="mb-4">If You Have Any Query, Please Contact Us</h1>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-7">
            {/* <p className="text-center mb-4">The contact form is currently inactive. Get a functional and working contact form with Ajax &amp; PHP in a few minutes. Just copy and paste the files, add a little code and you're done. <a href="https://htmlcodex.com/contact-form">Download Now</a>.</p> */}
            <div>
              <form id="contactForm" action="https://formspree.io/f/mjvndekv" method="post">
                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input type="text" className="form-control" id="name" name="name" placeholder="Your Name" required />
                      <label htmlFor="name">Your Name</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input type="email" className="form-control" id="email" name="email" placeholder="Your Email" required />
                      <label htmlFor="email">Your Email</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <input type="text" className="form-control" id="subject" name="subject" placeholder="Subject" required />
                      <label htmlFor="subject">Subject</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <textarea className="form-control" placeholder="Leave a message here" id="message" name="message" style={{"height":"150px"}} required defaultValue={""} />
                      <label htmlFor="message">Message</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <button className="btn btn-primary w-100 py-3" type="submit">Send Message</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Contact End */}
    {/* Footer Start */}
    <div className="container-fluid bg-dark text-white-50 footer pt-5">
      <div className="container py-5">
        <div className="row g-5">
          <div className="col-md-4">
            <Link to="/" className="d-inline-block mb-3">
              <h1 className="text-white">Analytixware</h1>
            </Link>
            <p className="mb-0">Organizations that leverage data analytics effectively gain a competitive edge in today's data-driven world. By analyzing data, businesses can identify unique insights and trends that better understand the market and their competitors, helping them stay ahead of the competition.</p>
          </div>
          <div className="col-md-4">
            <h5 className="text-white mb-4">Contact Us</h5>
            <p><i className="fa fa-map-marker-alt me-3" />A 1201 Ekta Festival, 132 Feet Ring Road, Naranpura, Ahmedabad</p>
            <p><i className="fa fa-phone-alt me-3" />+91 9011719639</p>
            <p><i className="fa fa-envelope me-3" />analytixware.in@gmail.com</p>
            <div className="d-flex pt-2">
              <a className="btn btn-outline-light btn-social" href="mailto:analytixware.in@gmail.com"><i className="fas fa-envelope" /></a>
              <a className="btn btn-outline-light btn-social" href="https://www.linkedin.com/company/analytixware/"><i className="fab fa-linkedin-in" /></a>
            </div>
          </div>
          <div className="col-md-4">
            <h5 className="text-white mb-4">Popular Link</h5>
            <Link className="btn btn-link" to="/About">About Us</Link>
            <Link className="btn btn-link" to="/Contact">Contact Us</Link>
            <Link className="btn btn-link" to="/Service">Services</Link>
            <Link className="btn btn-link" to="/Project">Case Study</Link>
            <Link className="btn btn-link" to="/Feature">Feature</Link>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="copyright">
          <div className="row">
            <div className="text-center text-md-start mb-3 mb-md-0">
              © <Link className="border-bottom" to="/">Analytixware</Link>, All Right Reserved.
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Footer End */}
    {/* Back to Top */}
    <Link to="/" className="btn btn-lg btn-primary btn-lg-square back-to-top pt-2"><i className="bi bi-arrow-up" /></Link>
    {/* JavaScript Libraries */}
    {/* Template Javascript */}
  </div></>
  )
}
