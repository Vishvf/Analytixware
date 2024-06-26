import React from 'react'
import { Link } from 'react-router-dom'

export default function About () {
  return (
    <div>
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
          <h1 className="display-4 text-white mb-4 animated slideInRight">About Us</h1>
          <nav aria-label="breadcrumb">
          </nav>
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
  {/* About Start */}
  <div className="container-fluid py-5">
    <div className="container py-5">
      <div className="row g-5 align-items-center">
        <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
          <div className="about-img">
            <img className="img-fluid" src="img/about-img.jpg"alt='analyticsware'/>
          </div>
        </div>
        <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
          <div className="btn btn-sm border rounded-pill text-primary px-3 mb-3">About Us</div>
          <h1 className="mb-4">We Make Your Business Smarter with Analytixware</h1>
          <p className="mb-4">Analytixware – a small business company, started in October 2020. We aim to bring all our knowledge and expertise together and provide business intelligence solutions&nbsp;to&nbsp;our&nbsp;clients.</p>
          <p className="mb-4"> Let us empower your organization with the intelligence needed to thrive in a data-driven world.</p>
          <div className="row g-3">
            <div className="col-sm-6">
              <h6 className="mb-3"><i className="fa fa-check text-primary me-2" />Award Winning</h6>
              <h6 className="mb-0"><i className="fa fa-check text-primary me-2" />Professional Staff</h6>
            </div>
            <div className="col-sm-6">
              <h6 className="mb-3"><i className="fa fa-check text-primary me-2" />24/7 Support</h6>
              <h6 className="mb-0"><i className="fa fa-check text-primary me-2" />Fair Prices</h6>
            </div>
          </div>
          <div className="d-flex align-items-center mt-4">
            <a className="btn btn-outline-primary btn-square me-3" href="https://www.facebook.com/bhavik.mehta312?mibextid=kFxxJD
"><i className="fab fa-facebook-f" /></a>
                      <a className="btn btn-square btn-primary m-1" href="mailto:analytixware.in@gmail.com"><i className="fas fa-envelope" /></a>

            <a className="btn btn-outline-primary btn-square" href="https://www.linkedin.com/in/bhavik-mehta312/
"><i className="fab fa-linkedin-in" /></a>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* About End */}
  {/* Feature Start */}
  <div className="container-fluid bg-primary feature pt-5">
    <div className="container pt-5">
      <div className="row g-5">
        <div className="col-lg-6 align-self-center mb-md-5 pb-md-5 wow fadeIn" data-wow-delay="0.3s">
          <div className="btn btn-sm border rounded-pill text-white px-3 mb-3">Why Choose Us</div>
          <h1 className="text-white mb-4">We're Best in Data Analysis with 4 Years of Experience</h1>
          <p className="text-light mb-4">Choosing us means benefiting from our unparalleled domain expertise, which ensures that we understand the unique challenges and opportunities within your industry. Our services are designed with scalability in mind, allowing us to grow alongside your business without compromising on performance or quality. </p>
          <div className="d-flex align-items-center text-white mb-3">
            <div className="btn-sm-square bg-white text-primary rounded-circle me-3">
              <i className="fa fa-check" />
            </div>
            <span>Scalability</span>
          </div>
          <div className="d-flex align-items-center text-white mb-3">
            <div className="btn-sm-square bg-white text-primary rounded-circle me-3">
              <i className="fa fa-check" />
            </div>
            <span>Affordability</span>
          </div>
          <div className="d-flex align-items-center text-white mb-3">
            <div className="btn-sm-square bg-white text-primary rounded-circle me-3">
              <i className="fa fa-check" />
            </div>
            <span>Flexibility</span>
          </div>
          <div className="d-flex align-items-center text-white mb-3">
            <div className="btn-sm-square bg-white text-primary rounded-circle me-3">
              <i className="fa fa-check" />
            </div>
            <span>One Stop Solution</span>
          </div>
          <div className="row g-4 pt-3">
            <div className="col-sm-6">
              <div className="d-flex rounded p-3" style={{"background":"rgba(256, 256, 256, 0.1)"}}>
                <i className="fa fa-users fa-3x text-white" />
                <div className="ms-3">
                  <h2 className="text-white mb-0" data-toggle="counter-up">15</h2>
                  <p className="text-white mb-0">Happy Clients</p>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="d-flex rounded p-3" style={{"background":"rgba(256, 256, 256, 0.1)"}}>
                <i className="fa fa-check fa-3x text-white" />
                <div className="ms-3">
                  <h2 className="text-white mb-0" data-toggle="counter-up">40</h2>
                  <p className="text-white mb-0">Project Complete</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 align-self-end text-center text-md-end wow fadeIn" data-wow-delay="0.5s">
          <img className="img-fluid" src="img/feature.png"  alt='analyticsware'/>
        </div>
      </div>
    </div>
  </div>
  {/* Feature End */}
  {/* Team Start */}
  <div className="container-fluid bg-light py-5">
    <div className="container py-5">
      <div className="row g-5 align-items-center">
        <div className="col-lg-5 wow fadeIn" data-wow-delay="0.1s">
          <h1 className="mb-4">Meet Our Founder and CEO</h1>
          <p className="mb-4" />
          {/* <a class="btn btn-primary rounded-pill px-4" href="">Read More</a> */}
        </div>
        {/* <div class="col-lg-7">
              <div class="row g-4"> */}
        <div className="col-md-6">
          <div className="row g-4">
            <div className="col-12 wow fadeIn" data-wow-delay="0.1s">
              <div className="team-item bg-white text-center rounded p-4 pt-0">
                <img className="img-fluid rounded-circle p-4" src="img/team-1.jpg" alt='analyticsware'  />
                <h5 className="mb-0">Bhavik Mehta</h5>
                <small>Founder &amp; CEO</small>
                <div className="d-flex justify-content-center mt-3">
                  <a className="btn btn-square btn-primary m-1" href="https://www.facebook.com/bhavik.mehta312?mibextid=kFxxJD"><i className="fab fa-facebook-f" /></a>
                  <a className="btn btn-square btn-primary m-1" href="mailto:analytixware.in@gmail.com"><i className="fas fa-envelope" /></a>
                  <a className="btn btn-square btn-primary m-1" href="https://www.linkedin.com/in/bhavik-mehta312/ "><i className="fab fa-linkedin-in" /></a>
                </div>
              </div>
              {/* </div>
                          </div> */}
            </div>
          </div>            
        </div>
      </div>
    </div>
  </div>
  {/* Team End */}
  {/* Footer Start */}
  <div className="container-fluid bg-dark text-white-50 footer pt-5">
    <div className="container py-5">
      <div className="row g-5">
        <div className="col-md-4 wow fadeIn" data-wow-delay="0.1s">
          <Link t0="/" className="d-inline-block mb-3">
            <h1 className="text-white">Analytixware</h1>
          </Link>
          <p className="mb-0">Organizations that leverage data analytics effectively gain a competitive edge in today's data-driven world. By analyzing data, businesses can identify unique insights and trends that better understand the market and their competitors, helping them stay ahead of the competition.</p>
        </div>
        <div className="col-md-4 wow fadeIn" data-wow-delay="0.3s">
          <h5 className="text-white mb-4">Contact Us</h5>
          <p><i className="fa fa-map-marker-alt me-3" />A 1201 Ekta Festival, 132 Feet Ring Road, Naranpura, Ahmedabad</p>
          <p><i className="fa fa-phone-alt me-3" />+91 9011719639</p>
          <p><i className="fa fa-envelope me-3" />analytixware.in@gmail.com</p>
          <div className="d-flex pt-2">
            <a className="btn btn-outline-light btn-social" href="mailto:analytixware.in@gmail.com"><i className="fas fa-envelope" /></a>
            <a className="btn btn-outline-light btn-social" href="https://www.linkedin.com/company/analytixware/"><i className="fab fa-linkedin-in" /></a>
          </div>
        </div>
        <div className="col-md-4 wow fadeIn" data-wow-delay="0.5s">
          <h5 className="text-white mb-4">Popular Link</h5>
          <Link className="btn btn-link" to="/About">About Us</Link>
            <Link className="btn btn-link" to="/Contact">Contact Us</Link>
            <Link className="btn btn-link" to="/Service">Services</Link>
            <Link className="btn btn-link" to="/Project">Case Study</Link>
            <Link className="btn btn-link" to="/Feature">Feature</Link>
        </div>
      </div>
    </div>
    <div className="container wow fadeIn" data-wow-delay="0.1s">
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
</div>
  )
}
