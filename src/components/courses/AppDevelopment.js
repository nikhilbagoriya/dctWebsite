import Footer from "../Footer";
import Header from "../Header";
import { Link } from "react-router-dom";
import "../css/Courses.css";
function AppDevelopment() {
    return ( 
        <>
        <section className="courses-first-section pt-4" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/1.png)`, backgroundRepeat:"no-repeat", backgroundSize:"cover"}}>
        <Header/>
            <div className="container my-5">
            <div className="row text-center">
            <h1 className="text-uppercase fw-bolder fs-2 text-white bg-black bg-opacity-25">A powerful professional course that is easy to use for app development.</h1>
            <p className="mt-2 text-white bg-black bg-opacity-25">Discover our specialized web development services in <b>Kotputli</b>, focusing on <b>Digital Computer Technology.</b> We craft tailored strategies using advanced tech to boost online presence and efficiency. Elevate your digital footprint with our expertise in <b>Kotputli</b> and beyond.<br/>
            <button type="button" class="btn my-4 fw-bold">Explore Courses</button>
            </p>
            <img src="./images/digital_computer_technology_kotputli_coursepage_heade_student_bg.png" alt=""/>
  </div>
            </div>
        </section>


        <section className="courses-secound-section my-5 pt-5">
            <div className="container mt-5">
            <div className="row">
    <div className="first col-sm p-5">
    <h2 className="text-uppercase fw-bolder">Course Deteails</h2>
    <button type="button" className="btn text-white fw-bold px-4 my-3 rounded-pill">DURATION: 6 MONTHS</button>
    <button type="button" className="btn text-white fw-bold px-4 my-3 mx-3 rounded-pill">FEES: 50,000/- Only</button>
      <p className="pe-5">
        <div className="d-flex">
        <ul className="text-uppercase" style={{width:"40%"}}>
          <li>INTRODUCTION</li>
          <li>Html/css</li>
          <li>Tailwind ui</li>
        </ul>
        <ul className="text-uppercase">
          <li>bootstrap</li>
          <li>React</li>
          <li>React/React-Netive</li>
        </ul>
        </div>Embark on your app development journey in Kotputli with our comprehensive course. Learn to create mobile applications using cutting-edge digital computer technology. Master app design, development, and deployment, tailored for Kotputli's tech enthusiasts. Ideal for aspiring developers and professionals looking to enhance their skills in the vibrant digital landscape of Kotputli. Gain practical experience with industry-standard tools and frameworks. Enroll today to unlock your potential and contribute to the innovative app ecosystem of Kotputli.</p>
    </div>
    <div className="secound col-sm header-img">
    <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
      <img src="./images/digital_computer_technology_kotputli_webdevelopment_slide1.jpeg" class="d-block w-100" height={"465px"} alt="..."/>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src="./images/digital_computer_technology_kotputli_webdevelopment_slide2.jpeg" class="d-block w-100" height={"465px"} alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="./images/digital_computer_technology_kotputli_webdevelopment_slide3.jpeg" class="d-block w-100" height={"465px"} alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
      <img className="p-0 cdd" src="./images/digital_computer_technology_kotputli_digital1.png" alt=""/>
    </div>
  </div>
            </div>
        </section>

        <section className="courses-third-section my-5 pt-5">
            <div className="container text-center">
            <div className="row">
              <h1 className="text-center fw-semibold text-uppercase main-heading">Courses Category / Details</h1>
              <img className="greenline" src="./images/digital_computer_technology_kotputli_greenline.png" alt=""/>
              <p className="text-center fs-5 mt-3 mb-5 main-paragraph">Onlearing  is one powerful online software suite that combines all the tools <br/> needed to run a successful school or office.
              </p>
    <div className="col-sm py-3 me-2 shadow bg-body-tertiary rounded">
      <img src="./images/digital_computer_technology_kotputli_web-design_icon1.png" width={"100px"} alt=""/>
      <h5 className="mt-4 mb-2 text-uppercase fw-bold">INTRODUCTION</h5>
      <p>Introduction to app development in Kotputli. Learn Digital Computer Technology for creating mobile applications with modern frameworks and user-friendly interfaces.</p>
    </div>
    <div className="col-sm py-3 me-2 shadow bg-body-tertiary rounded">
      <img src="./images/digital_computer_technology_kotputli_web-design_icon2.png" width={"100px"} alt=""/>
      <h5 className="mt-4 mb-2 text-uppercase fw-bold">Html</h5>
      <p>Master HTML in Kotputli's app development course. Learn Digital Computer Technology to create structured web pages for effective online presence and user interaction.</p>
    </div>
    <div className="col-sm py-3 me-2 shadow bg-body-tertiary rounded">
      <img src="./images/digital_computer_technology_kotputli_web-design_icon3.png" width={"100px"} alt=""/>
      <h5 className="mt-4 mb-2 text-uppercase fw-bold">css</h5>
      <p>Explore CSS in Kotputli's app development course. Utilize Digital Computer Technology to style and enhance the appearance of web pages for optimal user experience.</p>
    </div>
    <div className="col-sm py-3 me-2 shadow bg-body-tertiary rounded">
      <img src="./images/digital_computer_technology_kotputli_web-design_icon4.png" width={"100px"} alt=""/>
      <h5 className="mt-4 mb-2 text-uppercase fw-bold">tailwind ui</h5>
      <p>Discover Tailwind UI in Kotputli's app development. Learn Digital Computer Technology for rapid and efficient UI development with utility-first CSS framework.</p>
    </div>
  </div>
  <div className="row my-4">
    <div className="col-sm py-3 me-2 shadow bg-body-tertiary rounded">
      <img src="./images/digital_computer_technology_kotputli_web-design_icon5.png" width={"100px"} alt=""/>
      <h5 className="mt-4 mb-2 text-uppercase fw-bold">Bootstrap</h5>
      <p>Master Bootstrap in Kotputli's app development course. Utilize Digital Computer Technology for responsive and efficient app design with Bootstrap framework.</p>
    </div>
    <div className="col-sm py-3 me-2 shadow bg-body-tertiary rounded">
      <img src="./images/digital_computer_technology_kotputli_web-design_icon6.png" width={"100px"} alt=""/>
      <h5 className="mt-4 mb-2 text-uppercase fw-bold">react</h5>
      <p>Master React in Kotputli's app development. Utilize Digital Computer Technology for building efficient and responsive user interfaces in modern web applications.</p>
    </div>
    <div className="col-sm py-3 me-2 shadow bg-body-tertiary rounded">
      <img src="./images/digital_computer_technology_kotputli_web-design_icon7.png" width={"100px"} alt=""/>
      <h5 className="mt-4 mb-2 text-uppercase fw-bold">React-netive</h5>
      <p>Explore React Native in Kotputli's app development. Utilize Digital Computer Technology for cross-platform mobile app development with native-like performance and user experience.</p>
    </div>
    <div className="col-sm py-3 me-2 shadow bg-body-tertiary rounded">
      <img src="./images/digital_computer_technology_kotputli_web-design_icon8.png" width={"100px"} alt=""/>
      <h5 className="mt-4 mb-2 text-uppercase fw-bold">final result</h5>
      <p>Achieve polished app development results in Kotputli. Utilize Digital Computer Technology for user-friendly interfaces and efficient functionalities, ensuring optimal user experience and performance.</p>
    </div>
  </div>
            </div>
        </section>

        <section className="courses-fourth-section">
            <div className="container">
            <div className="row">
    <div className="first col-sm py-3 px-5">
    <h2 className="fw-bold ms-4">Get Student ID card</h2><br/>
    <ul className="me-5 ps-0">
      <li className="list-unstyled d-flex align-items-center me-5"><img src="./images/vector.png" width={"30px"} alt=""/>&nbsp; Access: Enables entry to coaching facilities and resources.
      </li>
      <li className="list-unstyled d-flex align-items-center"><img src="./images/vector.png" width={"30px"} alt=""/>&nbsp; Identification: Easily identifies students within the coaching center.
      </li>
      <li className="list-unstyled d-flex align-items-center"><img src="./images/vector.png" width={"30px"} alt=""/>&nbsp; Discounts: Offers potential discounts on study materials or additional courses.
      </li>
      <li className="list-unstyled d-flex align-items-center"><img src="./images/vector.png" width={"30px"} alt=""/>&nbsp; Attendance: Facilitates easy tracking of attendance during coaching sessions,
      </li><br/>
      
    </ul>
    </div>
    <div className="secound col-sm py-5 px-0 text-center">
      <a target="blank" href="./images/digital_computer_technology_kotputli_front_id_card.jpg"><img className="me-5 border border-5 rounded border-white" src="./images/digital_computer_technology_kotputli_front_id_card.jpg" width={"30%"} alt=""/></a>
      <a target="blank" href="./images/digital_computer_technology_kotputli_back_id_card.jpg"><img className="me-5 border border-5 rounded border-white" src="./images/digital_computer_technology_kotputli_back_id_card.jpg" width={"30%"} alt=""/></a>
    </div>
  </div>
            </div>
        </section>


        <section className="courses-third-section my-5">
            <div className="container">
            <div className="row p-0">
              <h1 className="text-center fw-semibold text-uppercase main-heading mb-5">Popular Courses</h1>
    <div className="col-sm  popular-courses shadow bg-body-tertiary rounded">
    <Link to="/rscit"><img src="./images/digital_computer_technology_kotputli_app-development.jpeg" width={"100%"} alt=""/></Link>
    <Link className="text-decoration-none" to="/rscit"><h5 className="mt-4 mx-3 text-uppercase fw-bold fs-5">Rs-Cit</h5></Link>
    <div className="my-4 mx-3 fw-bold"><span className="bg-light px-2 py-1 rounded">DURATION: 3 Months</span><span className="float-end bg-light px-2 py-1 rounded">Fees: 3,200/-</span></div>
      <p className="mt-2 mx-3">RS-CIT course in Kotputli introduces Digital Computer Technology, covering essential skills for efficient computing and enhancing professional opportunities.</p>
      <button className="btn mb-3 mx-3"><Link className="text-decoration-none" to="/rscit">MORE...</Link></button>
    </div>
    <div className="col-sm mx-3 popular-courses shadow bg-body-tertiary rounded">
    <Link to="/account"><img src="./images/digital_computer_technology_kotputli_game-development.jpeg" width={"100%"} alt=""/></Link>
    <Link className="text-decoration-none" to="/account"><h5 className="mt-4 mx-3 text-uppercase fw-bold fs-5">ACCOUNT</h5></Link>
    <div className="my-4 mx-3 fw-bold"><span className="bg-light px-2 py-1 rounded">DURATION: 9 Months</span><span className="float-end bg-light px-2 py-1 rounded">Fees: 15,000/-</span></div>
      <p className="mt-2 mx-3">Explore accounting essentials in Kotputli, integrating Digital Computer Technology for comprehensive financial management skills essential in modern business environments.</p>
      <button className="btn mb-3 mx-3"><Link className="text-decoration-none" to="/account">MORE...</Link></button>
    </div>
    <div className="col-sm  popular-courses shadow bg-body-tertiary rounded">
    <Link to="/tallywithgst"><img src="./images/digital_computer_technology_kotputli_ethical-hacking.jpeg" width={"100%"} alt=""/></Link>
    <Link className="text-decoration-none" to="/tallywithgst"><h5 className="mt-4 mx-3 text-uppercase fw-bold fs-5">Tally-With-Gst</h5></Link>
    <div className="my-4 mx-3 fw-bold"><span className="bg-light px-2 py-1 rounded">DURATION: 3 Months</span><span className="float-end bg-light px-2 py-1 rounded">Fees: 5,000/-</span></div>
      <p className="mt-2 mx-3">Enroll in Tally-with-GST course in Kotputli to learn Digital Computer Technology integration for proficient accounting and tax management skills in modern business environments.</p>
      <button className="btn mb-3 mx-3"><Link className="text-decoration-none" to="/tallywithgst">MORE...</Link></button>
    </div>

  </div>
  <div className="row p-0 my-5">
  <div className="col-sm  popular-courses shadow bg-body-tertiary rounded">
    <Link to="/webdesigner"><img src="./images/digital_computer_technology_kotputli_app-development.jpeg" width={"100%"} alt=""/></Link>
    <Link className="text-decoration-none" to="/webdesigner"><h5 className="mt-4 mx-3 text-uppercase fw-bold fs-5">Web designer</h5></Link>
    <div className="my-4 mx-3 fw-bold"><span className="bg-light px-2 py-1 rounded">DURATION: 9 Months</span><span className="float-end bg-light px-2 py-1 rounded">Fees: 50,000/-</span></div>
      <p className="mt-2 mx-3">Master web design in Kotputli with a focus on Digital Computer Technology. Learn UI/UX principles and tools for creating visually appealing and functional websites.</p>
      <button className="btn mb-3 mx-3"><Link className="text-decoration-none" to="/webdesigner">MORE...</Link></button>
    </div>
    <div className="col-sm mx-3 popular-courses shadow bg-body-tertiary rounded">
    <Link to="/ethicalheacking"><img src="./images/digital_computer_technology_kotputli_cyber-security.jpeg" width={"100%"} alt=""/></Link>
    <Link className="text-decoration-none" to="/ethicalheacking"><h5 className="mt-4 mx-3 text-uppercase fw-bold fs-5">Ethical Heacking</h5></Link>
    <div className="my-4 mx-3 fw-bold"><span className="bg-light px-2 py-1 rounded">DURATION: 9 Months</span><span className="float-end bg-light px-2 py-1 rounded">Fees: 50,000/-</span></div>
      <p className="mt-2 mx-3">Learn ethical hacking in Kotputli, integrating Digital Computer Technology. Acquire skills in cybersecurity, penetration testing, and ethical hacking techniques for secure digital environments.</p>
      <button className="btn mb-3 mx-3"><Link className="text-decoration-none" to="/ethicalheacking">MORE...</Link></button>
    </div>
    <div className="col-sm  popular-courses shadow bg-body-tertiary rounded">
    <Link to="/codingforkids"><img src="./images/digital_computer_technology_kotputli_app-development.jpeg" width={"100%"} alt=""/></Link>
    <Link className="text-decoration-none" to="/codingforkids"><h5 className="mt-4 mx-3 text-uppercase fw-bold fs-5">Coding For Cids</h5></Link>
    <div className="my-4 mx-3 fw-bold"><span className="bg-light px-2 py-1 rounded">DURATION: 3 Months</span><span className="float-end bg-light px-2 py-1 rounded">Fees: 3,000/-</span></div>
      <p className="mt-2 mx-3">Introduce kids in Kotputli to coding with Digital Computer Technology. Engaging courses in programming basics to foster creativity and logical thinking in young learners.</p>
      <button className="btn mb-3 mx-3"><Link className="text-decoration-none" to="/codingforkids">MORE...</Link></button>
    </div>
  </div>
  <div className="row p-0 my-5">
    <div className="col-sm popular-courses shadow bg-body-tertiary rounded">
    <Link to="/webdevelopment"><img src="./images/digital_computer_technology_kotputli_game-development.jpeg" width={"100%"} alt=""/></Link>
    <Link className="text-decoration-none" to="/webdevelopment"><h5 className="mt-4 mx-3 text-uppercase fw-bold fs-5">web development</h5></Link>
    <div className="my-4 mx-3 fw-bold"><span className="bg-light px-2 py-1 rounded">DURATION: 9 Months</span><span className="float-end bg-light px-2 py-1 rounded">Fees: 50,000/-</span></div>
      <p className="mt-2 mx-3">Explore comprehensive web development in Kotputli, integrating Digital Computer Technology. Learn HTML, CSS, JavaScript, and more for creating dynamic and interactive websites.</p>
      <button className="btn mb-3 mx-3"><Link className="text-decoration-none" to="/webdevelopment">MORE...</Link></button>
    </div>
    <div className="col-sm mx-3 popular-courses shadow bg-body-tertiary rounded">
    <Link to="/digitalmarketing"><img src="./images/digital_computer_technology_kotputli_cyber-security.jpeg" width={"100%"} alt=""/></Link>
    <Link className="text-decoration-none" to="/digitalmarketing"><h5 className="mt-4 mx-3 text-uppercase fw-bold fs-5">digital marketing</h5></Link>
    <div className="my-4 mx-3 fw-bold"><span className="bg-light px-2 py-1 rounded">DURATION: 9 Months</span><span className="float-end bg-light px-2 py-1 rounded">Fees: 50,000/-</span></div>
      <p className="mt-2 mx-3">Explore Digital Marketing in Kotputli, utilizing Digital Computer Technology. Master SEO, social media, and analytics for effective online presence and business growth strategies.</p>
      <button className="btn mb-3 mx-3"><Link className="text-decoration-none" to="/digitalmarketing">MORE...</Link></button>
    </div>
    <div className="col-sm popular-courses shadow bg-body-tertiary rounded">
    <Link to="/gamedevelopment"><img src="./images/digital_computer_technology_kotputli_cyber-security.jpeg" width={"100%"} alt=""/></Link>
    <Link className="text-decoration-none" to="/gamedevelopment"><h5 className="mt-4 mx-3 text-uppercase fw-bold fs-5">Game development</h5></Link>
    <div className="my-4 mx-3 fw-bold"><span className="bg-light px-2 py-1 rounded">DURATION: 9 Months</span><span className="float-end bg-light px-2 py-1 rounded">Fees: 50,000/-</span></div>
      <p className="mt-2 mx-3">Dive into game development in Kotputli with Digital Computer Technology. Learn coding, design, and animation for creating interactive and engaging games for various platforms.</p>
      <button className="btn mb-3 mx-3"><Link className="text-decoration-none" to="/gamedevelopment">MORE...</Link></button>
    </div>
  </div>
            </div>
        </section>

        <section className="courses-fiveth-section pt-4 mt-5">
            <div className="container mt-5">
            <div className="row">
    <div className="first col-sm">
      <h1 className="fw-bold my-4 text-white">DIGITAL COMPUTER TECHNOLOGY KOTPUTLI</h1>
      <ul className="p-0 my-3 lh-lg">
        <li className="list-unstyled d-flex align-items-center fw-medium text-white">
          <img src="./images/digital_computer_technology_kotputli_single-start.png" alt=""/>&nbsp;
          Teachers don’t get lost in the grid view and have a dedicated Podium space.</li>
        <li className="list-unstyled d-flex align-items-center fw-medium text-white">
          <img src="./images/digital_computer_technology_kotputli_single-start.png" alt=""/>&nbsp;
          Teachers don’t get lost in the grid view and have a dedicated Podium space.</li>
        <li className="list-unstyled d-flex align-items-center fw-medium text-white">
          <img src="./images/digital_computer_technology_kotputli_single-start.png" alt=""/>&nbsp;
          Teachers don’t get lost in the grid view and have a dedicated Podium space.</li>
      </ul>
      <button className="btn btn-outline-light mt-3 ms-4"><Link className="text-decoration-none text-light" to="">ADMISSION OPEN</Link></button>
    </div>
    <div className="secound col-sm header-img">
      <img src="./images/digital_computer_technology_kotputli_footer-girl.png" width={"100%"} alt=""/>
    </div>
  </div>
            </div>
        </section>
       


        <Footer/>
        </>
     );
}

export default AppDevelopment;