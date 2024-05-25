import React from 'react'
import { Link } from 'react-router-dom'

export default function Service() {
  return (
    <><div>
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
            <h1 className="display-4 text-white mb-4 animated slideInRight">Our Services</h1>
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
    {/* Service Start */}
    <div className="container-fluid bg-light py-5">
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-5 wow fadeIn text-center" data-wow-delay="0.1s">
            <div className="btn btn-sm border rounded-pill text-primary px-3 mb-3">Our Services</div>
            <h1 className="mb-4">Our Excellent Data Analysis Solutions for Your Business</h1>
            <p className="mb-4" />
            {/* <a class="btn btn-primary rounded-pill px-4" href="">Read More</a> */}
          </div>
          <div className="row g-5 align-items-center">
            <div className="col-12">
              <div className="row g-4">
                <div className="col-lg-3 col-md-6 wow fadeIn" data-wow-delay="0.3s">
                  <div className="service-item d-flex flex-column justify-content-center text-center rounded">
                    <div className="service-icon btn-square">
                      <i className="fa fa-home fa-2x" />
                    </div>
                    <h5 className="mb-3">Process Automation</h5>
                    <p>Process Automation involves using technology to automate repetitive and routine tasks, improving efficiency and accuracy. It streamlines workflows, reduces human error, and frees up employees to focus on more strategic activities, enhancing overall productivity.
                    </p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 wow fadeIn" data-wow-delay="0.5s">
                  <div className="service-item d-flex flex-column justify-content-center text-center rounded">
                    <div className="service-icon btn-square">
                      <i className="fa fa-home fa-2x" />
                    </div>
                    <h5 className="mb-3">Data Visualization</h5>
                    <p>Data visualization transforms complex data into clear, interactive visual representations, making it easier to identify patterns, trends, and insights. It enhances decision-making by presenting data in an accessible, visually appealing format.</p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 wow fadeIn" data-wow-delay="0.7s">
                  <div className="service-item d-flex flex-column justify-content-center text-center rounded">
                    <div className="service-icon btn-square">
                      <i className="fa fa-home fa-2x" />
                    </div>
                    <h5 className="mb-3">Data Integration &amp; ETL</h5>
                    <p>Data Integration &amp; ETL (Extract, Transform, Load) services streamline data movement across systems, ensuring seamless integration, transformation, and loading. We optimize data workflows to enhance efficiency and enable insightful decision-making.</p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 wow fadeIn" data-wow-delay="1.3s">
                  <div className="service-item d-flex flex-column justify-content-center text-center rounded">
                    <div className="service-icon btn-square">
                      <i className="fa fa-home fa-2x" />
                    </div>
                    <h5 className="mb-3">Process Optimization</h5>
                    <p>Process Optimization enhances efficiency by streamlining operations, reducing waste, and improving productivity. It leverages data analysis and advanced algorithms to identify and implement the best practices. This leads to cost savings .</p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 wow fadeIn" data-wow-delay="1.5s">
                  <div className="service-item d-flex flex-column justify-content-center text-center rounded">
                    <div className="service-icon btn-square">
                      <i className="fa fa-home fa-2x" />
                    </div>
                    <h5 className="mb-3">Statistical Analysis</h5>
                    <p>Statistical analysis involves collecting, exploring, and presenting large amounts of data to discover underlying patterns and trends. It helps in making informed decisions by interpreting complex data sets. This process is essential for creating predictive models and validating experimental results.</p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 wow fadeIn" data-wow-delay="1.9s">
                  <div className="service-item d-flex flex-column justify-content-center text-center rounded">
                    <div className="service-icon btn-square">
                      <i className="fa fa-home fa-2x" />
                    </div>
                    <h5 className="mb-3">Machine Learning</h5>
                    <p>Machine learning trains algorithms to recognize patterns and make predictions from data, enabling systems to learn and improve without explicit programming. This drives innovations in personalized recommendations, autonomous vehicles, and more.</p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 wow fadeIn" data-wow-delay="2.1s">
                  <div className="service-item d-flex flex-column justify-content-center text-center rounded">
                    <div className="service-icon btn-square">
                      <i className="fa fa-home fa-2x" />
                    </div>
                    <h5 className="mb-3">Financial Models</h5>
                    <p>Financial models are tools used to forecast a company's financial performance by analyzing historical data and market trends. They help in decision-making by simulating different scenarios. These models are essential for budgeting, investment analysis, and strategic planning.</p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 wow fadeIn" data-wow-delay="2.7s">
                  <div className="service-item d-flex flex-column justify-content-center text-center rounded">
                    <div className="service-icon btn-square">
                      <i className="fa fa-home fa-2x" />
                    </div>
                    <h5 className="mb-3">Natural Language Processing</h5>
                    <p>Natural Language Processing (NLP) empowers machines to comprehend human language, automate text analysis tasks, and significantly enhance user interactions through the implementation of chatbots and virtual assistants,lexical analysis and many more.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Service End */}
      {/* Testimonial Start */}
      <div className="container-xxl py-5">
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-5 wow fadeIn" data-wow-delay="0.1s">
              <div className="btn btn-sm border rounded-pill text-primary px-3 mb-3">Testimonial</div>
              <h1 className="mb-4">What Say Our Clients!</h1>
              <p className="mb-4" />
            </div>
            <div className="col-lg-7 wow fadeIn" data-wow-delay="0.5s">
              <div className="owl-carousel testimonial-carousel border-start border-primary">
                <div className="testimonial-item ps-5">
                  <i className="fa fa-quote-left fa-2x text-primary mb-3" />
                  <p className="fs-4">Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor eirmod magna dolore erat amet</p>
                  <div className="d-flex align-items-center">
                    <img className="img-fluid flex-shrink-0 rounded-circle" src="img/testimonial-1.jpg" style={{"width":"60px","height":"60px"}} />
                    <div className="ps-3">
                      <h5 className="mb-1">Client Name</h5>
                      <span>Profession</span>
                    </div>
                  </div>
                </div>
                <div className="testimonial-item ps-5">
                  <i className="fa fa-quote-left fa-2x text-primary mb-3" />
                  <p className="fs-4">Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor eirmod magna dolore erat amet</p>
                  <div className="d-flex align-items-center">
                    <img className="img-fluid flex-shrink-0 rounded-circle" src="img/testimonial-2.jpg" style={{"width":"60px","height":"60px"}} />
                    <div className="ps-3">
                      <h5 className="mb-1">Client Name</h5>
                      <span>Profession</span>
                    </div>
                  </div>
                </div>
                <div className="testimonial-item ps-5">
                  <i className="fa fa-quote-left fa-2x text-primary mb-3" />
                  <p className="fs-4">Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor eirmod magna dolore erat amet</p>
                  <div className="d-flex align-items-center">
                    <img className="img-fluid flex-shrink-0 rounded-circle" src="img/testimonial-3.jpg" style={{"width":"60px","height":"60px"}} />
                    <div className="ps-3">
                      <h5 className="mb-1">Client Name</h5>
                      <span>Profession</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Testimonial End */}
      {/* Footer Start */}
      <div className="container-fluid bg-dark text-white-50 footer pt-5">
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-md-4 wow fadeIn" data-wow-delay="0.1s">
            <Link to="/" className="navbar-brand">
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
      </div>    {/* Footer End */}
      {/* Back to Top */}
      <Link to="/" className="btn btn-lg btn-primary btn-lg-square back-to-top pt-2"><i className="bi bi-arrow-up" /></Link>
      {/* JavaScript Libraries */}
      {/* Template Javascript */}
    </div></div></>
  )
}
