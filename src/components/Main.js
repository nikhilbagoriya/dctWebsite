import React, { useState, useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";
import "./css/Main.css";
import { Link } from "react-router-dom";


function Main() {
  const [currentHeadingIndex, setCurrentHeadingIndex] = useState(0);
  const [prevHeadingIndex, setPrevHeadingIndex] = useState(null);
  const [animating, setAnimating] = useState(false);

  const headings = [
    "A Simple Question",
    "Learning for a JOB?",
    "Get Job in 180 Days",
    "or 100% Moneyback Guarantee",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setPrevHeadingIndex(currentHeadingIndex);
      setAnimating(true);
    }, 500); // Change heading every 3 seconds

    return () => clearInterval(interval);
  }, [currentHeadingIndex]);

  useEffect(() => {
    if (animating) {
      const timer = setTimeout(() => {
        setCurrentHeadingIndex((prevIndex) =>
          prevIndex === headings.length - 1 ? 0 : prevIndex + 1
        );
        setAnimating(false);
      }, 2000); // Match the animation duration

      return () => clearTimeout(timer);
    }
  }, [animating]);

  return (
    <>
      <section className="first-section" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/main-bg.png)`}}><br />
        <Header></Header>
        <div className="container mt-1 pt-5">
        <img className="d-sm-none d-md-none img-fluid" src="images/Digital Computer Technology Kotputli tag name.png" alt="" />
          <div className="row">
            <div className="col-sm text-center order-sm-last"> {/* This will be displayed first on small screens */}
              <div className="img-column img-column-1 text-center">
                <img className="image-1 mx-1" src="images/Digital Computer Technology Kotputli student 1.png" alt="" />
                <img className="image-2 mx-1" src="images/Digital Computer Technology Kotputli student 2.png" alt="" />
                <img className="image-3 mx-1" src="images/Digital Computer Technology Kotputli student 3.png" alt="" />
              </div>
              <div className="img-column text-center">
                <img className="image-4 mx-1" src="images/Digital Computer Technology Kotputli student 4.png" alt="" />
                <img className="image-5 mx-1" src="images/Digital Computer Technology Kotputli student 5.png" alt="" />
                <img className="image-6 mx-1" src="images/Digital Computer Technology Kotputli student 6.png" alt="" />
              </div>
            </div>
            <div className="col-sm teg-name order-sm-first"> {/* This will be displayed second on small screens */}
              <img className="d-none d-sm-block img-fluid" src="images/Digital Computer Technology Kotputli tag name.png" alt="" />
             <div className="d-sm-none d-md-none mb-4" />
              
              <div className="heading-container">
                {prevHeadingIndex !== null && (
                  <h1 className={`heading ${animating ? "heading-exit" : ""}`}>
                    {headings[prevHeadingIndex]}
                  </h1>
                )}
                <h1 className={`heading ${animating ? "heading-enter" : ""}`}>
                  {headings[currentHeadingIndex]}
                </h1>
              </div>
              <p className="text-start">Discover our online & offline courses in app/web/game development, digital marketing & ethical hacking. Job offers from day one. Basic courses start at INR 5000. Call now for details & offers.</p>
              <button className="btn btn-outline-success"><Link className="text-decoration-none" to="">ENQUIRY FORM</Link></button>
            </div>
          </div>
        </div>
    </section >

      <section className="secound-section">
        <div className="container">
          <div className="row">
            <div className="col-sm img-col">
              <b className="about-text">ABOUT US</b>
              <h3 className="mt-2 mb-2"><b>DIGITAL</b> COMPUTER TECHNOLOGY</h3>
              <p className="fs-6">Welcome to Digital Computer Technology We're your ultimate destination for digital solutions. Our expertise spans app, web, and game development, ensuring your projects are executed with precision. Security is paramount, and our ethical hacking and cybersecurity services safeguard your digital assets. We believe in empowering individuals; our courses in HTML, Bootstrap, and digital marketing provide essential skills for success in today's digital landscape. Whether you're a business seeking to enhance your online presence, an aspiring developer eager to learn, or an organization in need of cybersecurity measures, Digital Computer Technology is here for you. Join us as we pave the way for a brighter, more secure digital future.</p>
              <button className="btn btn-outline-success mt-2"><Link className="text-decoration-none" to="">Read More</Link></button>
            </div>
            <div className="col-sm text-center">
              <img className="img-fluid" src="images/Digital Computer Technology Kotputli about.png" alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className="third-section">
        <div className="container">
          <div className="row">
            <div className="col-sm third-first-col">
              <b>OUR PROFILE</b>
              <p>We offer a wide range of IT services ranging from Software
                development, Website designing, e-commerce online solutions
                and Android App.</p>
              <ul className="p-0">
                <li className="list-unstyled"><img src="images/vector.png" alt="" /> We deliver financing solutions that streamline.</li>
                <li className="list-unstyled"><img src="images/vector.png" alt="" /> Operations and expedite change for auto, equipment.</li>
                <li className="list-unstyled"><img src="images/vector.png" alt="" /> Commercial, consumer and real estate finance.</li>
              </ul>
              <button className="btn btn-outline-success mt-2"><Link className="text-decoration-none" to="">Read More</Link></button>
            </div>
            <div className="col-sm third-secound-col">
              <div>
                <img src="images/Digital Computer Technology Kotputli ellipse 7.png" width="27%" alt="" />
                <img className="position-relative" src="images/Digital Computer Technology Kotputli 18.png" width="22%" alt="" />
                <h2 className="d-inline">YEAR OF<br /> <b>EXPERIENCE</b></h2>
              </div>
            </div>
          </div>
          <div className="container mt-5 pt-5">
            <div className="row placement">
              <div className="col-sm text-center">
                <img src="images/Digital Computer Technology Kotputli gradient-half-elipse 1.png" width="50%" alt="" />
                <p className="fs-5 mt-4">Placement Support</p>
              </div>
              <div className="col-sm text-center">
                <img src="images/Digital Computer Technology Kotputli gradient-half-elipse 1.png" width="50%" alt="" />
                <p className="fs-5 mt-4">Practical Knowledge</p>
              </div>
              <div className="col-sm text-center">
                <img src="images/Digital Computer Technology Kotputli gradient-half-elipse 1.png" width="50%" alt="" />
                <p className="fs-5 mt-4">Skill Development</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="fourth-section py-5">
        <div className="container">
          <div className="row first-row py-5">
            <div className="col-sm fourth-one">
              <b>OUR MISSION</b>
              <h3>We Offer Online and Offline
                Services</h3>
            </div>
            <div className="col-sm fourth-two">
              <p className="px-5">Crafting compelling content for a software development company involves effectively showcasing the company's expertise, services, and values to attract potential clients and stakeholders.</p>
            </div>

          </div>
          <div className="row">
            <div className="col-sm fourth-three text-center">
              <b className="position-absolute text-light m-4">Web Design</b>
              <img src="images/dct_web_design.png" height="420px" width="100%" alt="" />
              <img className="position-relative hover-hide" src="images/dct_web_design_1.png" alt="" />
              <div className="hover-courses border">
                <b className="position-absolute text-light m-4">Web Design</b>
                <p>Documents, images, videos,
                  applications, and more, stored
                  and managed over the internet
                  through cloud computing
                  services. The "cloud" refers to
                  emote servers and storage</p>
                <Link to=""><img src="images/arrow-course.png" width="30px" alt="" /></Link>
              </div>
            </div>
            <div className="col-sm fourth-three text-center">
              <b className="position-absolute text-light m-4">Development</b>
              <img src="images/dct_development.png" height="420px" width="100%" alt="" />
              <img className="position-relative hover-hide" src="images/dcr_courses_design.png" alt="" />
              <div className="hover-courses border">
                <b className="position-absolute text-light m-4">Development</b>
                <p>Documents, images, videos,
                  applications, and more, stored
                  and managed over the internet
                  through cloud computing
                  services. The "cloud" refers to
                  emote servers and storage</p>
                <Link to=""><img src="images/arrow-course.png" width="30px" alt="" /></Link>
              </div>
            </div>
            <div className="col-sm fourth-three text-center">
              <b className="position-absolute text-light m-4">Marketing</b>
              <img src="images/dct_marketing.png" height="420px" width="100%" alt="" />
              <img className="position-relative hover-hide" src="images/dcr_courses_design.png" alt="" />
              <div className="hover-courses border">
                <b className="position-absolute text-light m-4">Marketing</b>
                <p>Documents, images, videos,
                  applications, and more, stored
                  and managed over the internet
                  through cloud computing
                  services. The "cloud" refers to
                  emote servers and storage</p>
                <Link to=""><img src="images/arrow-course.png" width="30px" alt="" /></Link>
              </div>
            </div>
            <div className="col-sm fourth-three text-center">
              <b className="position-absolute text-light m-4">Ethical Hacking</b>
              <img src="images/dct_ethical_hacking.png" height="420px" width="100%" alt="" />
              <img className="position-relative hover-hide" src="images/dcr_courses_design.png" alt="" />
              <div className="hover-courses border">
                <b className="position-absolute text-light m-4">Ethical Hacking</b>
                <p>Documents, images, videos,
                  applications, and more, stored
                  and managed over the internet
                  through cloud computing
                  services. The "cloud" refers to
                  emote servers and storage</p>
                <Link to=""><img src="images/arrow-course.png" width="30px" alt="" /></Link>
              </div>
            </div>


          </div>
          <div className="row secound-row py-5">
            <div className="col-sm fourth-three text-center">
              <b className="position-absolute text-light m-4">Coding For Kid's</b>
              <img src="images/coding kids.jpg" height="420px" width="100%" alt="" />
              <img className="position-relative hover-hide" src="images/dcr_courses_design.png" alt="" />
              <div className="hover-courses border">
                <b className="position-absolute text-light m-4">Coding For Kid's</b>
                <p>Documents, images, videos,
                  applications, and more, stored
                  and managed over the internet
                  through cloud computing
                  services. The "cloud" refers to
                  emote servers and storage</p>
                <Link to=""><img src="images/arrow-course.png" width="30px" alt="" /></Link>
              </div>
            </div>
            <div className="col-sm fourth-three text-center">
              <b className="position-absolute text-light m-4">English Spoken</b>
              <img src="images/english spoken.jpg" height="420px" width="100%" alt="" />
              <img className="position-relative hover-hide" src="images/dcr_courses_design.png" alt="" />
              <div className="hover-courses border">
                <b className="position-absolute text-light m-4">English Spoken</b>
                <p>Documents, images, videos,
                  applications, and more, stored
                  and managed over the internet
                  through cloud computing
                  services. The "cloud" refers to
                  emote servers and storage</p>
                <Link to=""><img src="images/arrow-course.png" width="30px" alt="" /></Link>
              </div>
            </div>
            <div className="col-sm fourth-three text-center">
              <b className="position-absolute text-light m-4">Game Development</b>
              <img src="images/game.jpg" height="420px" width="100%" alt="" />
              <img className="position-relative hover-hide" src="images/dcr_courses_design.png" alt="" />
              <div className="hover-courses border">
                <b className="position-absolute text-light m-4">Game Development</b>
                <p>Documents, images, videos,
                  applications, and more, stored
                  and managed over the internet
                  through cloud computing
                  services. The "cloud" refers to
                  emote servers and storage</p>
                <Link to=""><img src="images/arrow-course.png" width="30px" alt="" /></Link>
              </div>
            </div>
            <div className="col-sm fourth-three text-center">
              <b className="position-absolute text-light m-4">Learn Javascript</b>
              <img src="images/learn js.jpg" height="420px" width="100%" alt="" />
              <img className="position-relative hover-hide" src="images/dcr_courses_design.png" alt="" />
              <div className="hover-courses border">
                <b className="position-absolute text-light m-4">Learn Javascript</b>
                <p>Documents, images, videos,
                  applications, and more, stored
                  and managed over the internet
                  through cloud computing
                  services. The "cloud" refers to
                  emote servers and storage</p>
                <Link to=""><img src="images/arrow-course.png" width="30px" alt="" /></Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="fifth-section">
        <div className="container text-center">
          <h3 className="fw-bold">CAREER OPPORTUNITIES WITH DIGITAL COMPUTER TECHNOLOGY?</h3>
          <div className="row justify-content-evenly">
            <div className="col-sm py-5 my-3 bg-white m-0">
              <h1>30+</h1>
              <h2 className="mt-3">INDUSTRIES</h2>
            </div>
            <div className="col-sm py-5 mx-sm-3 my-3 bg-white m-0">
              <h1>44+</h1>
              <h2 className="mt-3">SPECIALIZATION</h2>
            </div>
            <div className="col-sm py-5 my-3 bg-white m-0">
              <h1>144+</h1>
              <h2 className="mt-3">CAREER FIELDS</h2>
            </div>

          </div>
        </div>
      </section>

      <section className="sixth-section">
        <div>
          <b className="fs-5">OUR GOAL</b>
          <h3>Ptac Software: A One-Stop Shop
            for a Global Digital Platform!</h3>
          <p>DCT has been providing Software Development services for over
            18 years. We are located in Aligarh and Noida. We offer a wide range of IT
            services ranging from Software development, Website designing, e-commerce
            online solutions and Android App, We understand the planning and strategy of
            our client before developing a Software. Our extensive and varied experience
            allows us to offer our clients a wide range of systems and services which
            maximizes efficiency, increases productivity and delivers security, while
            also being cost-effective and adding real business value.</p>
          <button className="btn btn-outline-success mt-2"><Link className="text-decoration-none" to="">Read More</Link></button>
        </div>
      </section>

      <section className="seventh-section">
        <div className="container">
          <b className="text-center d-block">WHAT WE DO</b>
          <h3 className="fw-bold text-center">DCT Serving From Last 18 Years</h3>
          <div className="row">
            <div className="col-sm py-3 bg-white border">
              <img className="icon-img" src="images/graphic-design 2.png" alt="" />
              <img className="badge-img float-end " src="images/Digital Computer Technology Kotputli Rectangle.png" width="15%" height="70px" alt="" />
              <h2>01</h2>
              <h1>Website Designing</h1>
              <p>Creating compelling content for a website involves
                a strategic approach aimed at engaging the target
                audience.</p>
            </div>
            <div className="col-sm py-3 bg-white border">
              <img className="icon-img" src="images/Digital Computer Technology Kotputli web-development.png" alt="" />
              <img className="badge-img float-end " src="images/Digital Computer Technology Kotputli Rectangle.png" width="15%" height="70px" alt="" />
              <h2>02</h2>
              <h1>Web Development</h1>
              <p>Developing a successful website requires careful
                planning and execution. It starts by defining the
                website's objectives.</p>
            </div>
            <div className="col-sm py-3 bg-white border">
              <img className="icon-img" src="images/Digital Computer Technology Kotputli development.png" alt="" />
              <img className="badge-img float-end " src="images/Digital Computer Technology Kotputli Rectangle.png" width="15%" height="70px" alt="" />
              <h2>03</h2>
              <h1>Mobile App Development</h1>
              <p>Creating a mobile app involves a structured
                process to develop a functional, user-friendly,
                and engaging application.</p>
            </div>

          </div>
          <div className="secound-row row">
            <div className="col-sm py-3 bg-white border">
              <img className="icon-img" src="images/Digital Computer Technology Kotputli search-engine.png" alt="" />
              <img className="badge-img float-end " src="images/Digital Computer Technology Kotputli Rectangle.png" width="15%" height="70px" alt="" />
              <h2>04</h2>
              <h1>Search Engine Optimization</h1>
              <p>Conduct thorough research to identify relevant
                keywords and phrases that potential users might
                use to search for your products or services.</p>
            </div>
            <div className="col-sm py-3 bg-white border">
              <img className="icon-img" src="images/Digital Computer Technology Kotputli digital-marketing.png" alt="" />
              <img className="badge-img float-end " src="images/Digital Computer Technology Kotputli Rectangle.png" width="15%" height="70px" alt="" />
              <h2>05</h2>
              <h1>Digital Marketing</h1>
              <p>Define specific, measurable, achievable, relevant,
                and time-bound (SMART) goals for your digital
                marketing efforts, </p>
            </div>
            <div className="col-sm py-3 bg-white border">
              <img className="icon-img" src="images/Digital Computer Technology Kotputli software testing.png" alt="" />
              <img className="badge-img float-end " src="images/Digital Computer Technology Kotputli Rectangle.png" width="15%" height="70px" alt="" />
              <h2>06</h2>
              <h1>Software Testing</h1>
              <p>Understand and analyze the software
                requirements to identify the scope of testing, key
                functionalities, and expected outcomes.</p>
            </div>
          </div>
          <div className="text-center mt-5"><button className="btn btn-outline-success mt-2"><Link className="text-decoration-none" to="">Read More</Link></button></div>
        </div>
      </section>

      <section className="eight-section">
        <div className="container">
          <h3 className="fw-bold text-center"><b className="text-center d-block fw-bold">WHAT WE DO</b></h3>
          <div className="row">
            <div className="col-sm py-3 bg-white">
              <img className="float-end" src="images/men1 1.png" alt="" />
              <h2 className="d-inline fs-5 fw-bold">Nitesh Gupta</h2>
              <img className="link-img" src="images/LinkedIn.png" alt="" />
              <p className="my-3">Software Development Engineer</p>
              <img className="mt-2" src="images/amazon 1.png" width="30%" alt="" />
            </div>
            <div className="col-sm py-3 bg-white">
              <img className="float-end" src="images/men1 1 (1).png" alt="" />
              <h2 className="d-inline fs-5 fw-bold">Nikhil Bansal</h2>
              <img className="link-img" src="images/LinkedIn.png" alt="" />
              <p className="my-3">Software Development Engineer</p>
              <img className="mt-2" src="images/amazon 1 (1).png" width="30%" alt="" />
            </div>
            <div className="col-sm py-3 bg-white">
              <img className="float-end" src="images/men1 1 (2).png" alt="" />
              <h2 className="d-inline fs-5 fw-bold">Arohi Arora</h2>
              <img className="link-img" src="images/LinkedIn.png" alt="" />
              <p className="my-3">Software Development Engineer</p>
              <img className="mt-2" src="images/image 14.png" width="30%" alt="" />
            </div>


          </div>
        </div>
      </section>

      <section className="nineth-section">
        <div className="container">
          <h3 className="fw-bold text-center"><b className="text-center d-block fw-bold">WHAT WE DO</b></h3>
          <div className="row">


          </div>
        </div>
      </section>


      <section className="tenth-section">
        <div className="container text-center">
          <h1>Book Free Counselling Session with Experts</h1>
          <p className="fw-bold my-4">Enter your mobile number and recieve a call from our expert</p>
          <form>
            <input type="number" placeholder="Mobile No..." min="10" max="13" />
            <input type="submit" value="Contact Us" />

          </form>
          <img className="icon-img1 float-start" src="images/Digital Computer Technology Kotputli session-art.png" alt="" />
          <img className="icon-img2 float-end" src="images/Digital Computer Technology Kotputli session-art2.png" width="10%" alt="" />
          <img className="icon-img3 float-end" src="images/Digital Computer Technology Kotputli footer-plant.png " width="2%" alt="" />
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Main;