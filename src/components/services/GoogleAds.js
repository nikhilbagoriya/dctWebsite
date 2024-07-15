import Footer from "../Footer";
import Header from "../Header";
import { Link } from "react-router-dom";
import "../css/Services.css";
function GoogleAds() {
    return ( 
        <>
        <section className="services-first-section pt-4" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/scservices_images/digital_computer_technology_kotputli_img1.png)`, backgroundRepeat:"no-repeat", backgroundSize:"cover"}}>
        <Header/>
        <div class="container text-center">
         <div class="row align-items-center mt-5">
         <div class="col text-start text-uppercase first">
            <h1 className="px-5 fw-bolder">The <span>Smart</span> <br/>
            Choice For <span>Future</span></h1>
            <p>Elearn is a global training provider based across the UK that specialises in accredited and bespoke training courses. We crush the...</p>
        </div>
       <div class="col">
         <img src="/images/services_images/digital_computer_technology_kotputli_img1.png" width={"100%"} alt=""/>
        </div>
        </div>
        </div>
        </section>


        <section className="services-second-section mb-5">
        <div class="container text-white">
         <div class="row align-items-center">
         <div class="col px-5 pt-5 pb-4 mx-3">
            <img src="/images/services_images/digital_computer_technology_kotputli_img12.png" width={"50px"} alt=""/>
            <h4 className="d-inline-block text-uppercase ms-3">this is my heading</h4>
            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a BC, making it over 2000 years old.</p>
        </div>
       <div class="col px-5 pt-5 pb-4 mx-3">
       <img src="/images/services_images/digital_computer_technology_kotputli_img2.png" width={"50px"} alt=""/>
            <h4 className="d-inline-block text-uppercase ms-3">this is my heading</h4>
            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a BC, making it over 2000 years old.</p>
        </div>
       <div class="col px-5 pt-5 pb-4 mx-3">
       <img src="/images/services_images/digital_computer_technology_kotputli_img3.png" width={"50px"} alt=""/>
        <h4 className="d-inline-block text-uppercase ms-3">this is my heading</h4>
        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a BC, making it over 2000 years old.</p>            
        </div>
        </div>
        </div>
        </section>

        <section className="services-third-section">
        <div class="container">
            <h2 className="text-center text-uppercase fw-bold">Our Tracks</h2>
            <p className="text-center mb-4">Lorem Ipsum is simply dummy text of the printing.</p>
         <div class="row align-items-center">
         <div class="col shadow p-3 mb-5 bg-body-tertiary rounded">
            <img src="/images/services_images/digital_computer_technology_kotputli_img4.webp" width={"100%"} height={"350px"} alt=""/>
            <p className="mt-3 fw-bolder">Ads <span className="float-end"><img src="/images/services_images/digital_computer_technology_kotputli_img8.png" alt=""/></span></p>
            <h5 className="text-uppercase fw-semibold mb-2">Google Ads Demands</h5><br/>
            <Link to="#" className="text-decoration-none bg-success py-1 px-3 rounded-pill text-white"><i class="fa-solid fa-arrow-right"></i><h6 className="text-uppercase d-inline ms-2">Contect</h6></Link>
            <div className="pt-2 mt-3"><span><i class="fa-regular fa-clock"></i> Solution before 24 hours</span> </div>
        </div>
        <div class="col shadow p-3 mb-5 mx-2 bg-body-tertiary rounded">
            <img src="/images/services_images/digital_computer_technology_kotputli_img6.webp" width={"100%"} height={"350px"} alt=""/>
            <p className="mt-3 fw-bolder">Ads <span className="float-end"><img src="/images/services_images/digital_computer_technology_kotputli_img8.png" alt=""/></span></p>
            <h5 className="text-uppercase">All SOCIAL media ads</h5><br/>
            <Link to="#" className="text-decoration-none bg-success py-1 px-3 rounded-pill text-white"><i class="fa-solid fa-arrow-right"></i><h6 className="text-uppercase d-inline ms-2">Contect</h6></Link>
            <div className="pt-2 mt-3"><span><i class="fa-regular fa-clock"></i> Solution before 24 hours</span> </div>
        </div>
        <div class="col shadow p-3 mb-5 bg-body-tertiary rounded">
            <img src="/images/services_images/digital_computer_technology_kotputli_img5.webp" width={"100%"} height={"350px"} alt=""/>
            <p className="mt-3 fw-bolder">Ads <span className="float-end"><img src="/images/services_images/digital_computer_technology_kotputli_img8.png" alt=""/></span></p>
            <h5 className="text-uppercase">Custumer supports</h5><br/>
            <Link to="#" className="text-decoration-none bg-success py-1 px-3 rounded-pill text-white"><i class="fa-solid fa-arrow-right"></i><h6 className="text-uppercase d-inline ms-2">Contect</h6></Link>
            <div className="pt-2 mt-3"><span><i class="fa-regular fa-clock"></i> Solution before 24 hours</span> </div>
        </div>
        </div>
        </div>
        </section>

        <section className="services-fourth-section my-5">
        <div class="container py-5">
         <div class="row align-items-center">
         <div class="col">
            <img src="/images/services_images/digital_computer_technology_kotputli_img13.webp" alt="" width={"100%"}/>
        </div>
        <div class="col">
            <h1 className="px-5 fw-bolder">Premium <span>Learning</span> <br/>
            Experience</h1>
            <div className="d-flex px-5 mt-5 mb-4">
            <div><img src="/images/services_images/digital_computer_technology_kotputli_img14.webp" width={"70px"} alt=""/></div>
            <div className="ms-2"><h6 className="fw-bold">Easily Accessible</h6>
            <p>Learning Will fell Very Comfortable With Courslab.</p>
            </div>
            </div>
            <div className="d-flex px-5 my-4">
            <div><img src="/images/services_images/digital_computer_technology_kotputli_img15.webp" width={"70px"} alt=""/></div>
            <div className="ms-2"><h6 className="fw-bold">Easily Accessible</h6>
            <p>Learning Will fell Very Comfortable With Courslab.</p>
            </div>
            </div>
        </div>
        </div>
        </div>
        </section>

        <section className="services-fiveth-section">
        <div class="container">
            <h2 className="text-center text-uppercase fw-bold">What Client’s say</h2>
            <p className="text-center mb-5">Lorem Ipsum is simply dummy text of the printing.</p>
         <div class="row align-items-center mt-4">
         <div class="col shadow p-3 bg-body-tertiary rounded">
           <p>“Teachings of the great explore of truth, the master-builder of human happiness.no one rejects,dislikes, or avoids pleasure itself, pleasure itself Teachings of the great explore of truth, the master-builder of human happiness.no one rejects,dislikes, or avoids pleasure itself, pleasure itself”</p>
           <div className="d-flex align-items-center">
            <div><img src="/images/services_images/digital_computer_technology_kotputli_img14.webp" width={"70px"} alt=""/></div>
            <div className="ms-2"><h6 className="fw-bold">Nikhil Bagoriya</h6>
            <p>Web Developers</p>
            </div>
            </div>
           </div>
         <div class="col shadow p-3 mx-3 bg-body-tertiary rounded">
           <p>“Teachings of the great explore of truth, the master-builder of human happiness.no one rejects,dislikes, or avoids pleasure itself, pleasure itself Teachings of the great explore of truth, the master-builder of human happiness.no one rejects,dislikes, or avoids pleasure itself, pleasure itself”</p>
           <div className="d-flex align-items-center">
            <div><img src="/images/services_images/digital_computer_technology_kotputli_img15.webp" width={"70px"} alt=""/></div>
            <div className="ms-2"><h6 className="fw-bold">Nikhil Bagoriya</h6>
            <p>Web Developers</p>
            </div>
            </div>
           </div>
         <div class="col shadow p-3 bg-body-tertiary rounded">
           <p>“Teachings of the great explore of truth, the master-builder of human happiness.no one rejects,dislikes, or avoids pleasure itself, pleasure itself Teachings of the great explore of truth, the master-builder of human happiness.no one rejects,dislikes, or avoids pleasure itself, pleasure itself”</p>
           <div className="d-flex align-items-center">
            <div><img src="/images/services_images/digital_computer_technology_kotputli_img16.webp" width={"70px"} alt=""/></div>
            <div className="ms-2"><h6 className="fw-bold">Nikhil Bagoriya</h6>
            <p>Web Developers</p>
            </div>
            </div>
           </div>
        
        </div>
        </div>
        </section>

        <section>
            <div className="container">
                <marquee  onmouseover="this.stop()" onmouseout="this.start()" className="pt-5">
                <Link  className="pt-3 pb-4 px-4 bg-success text-white fs-5 text-decoration-none me-4 rounded-pill fw-bold" to="/googleads"><img className="me-3" src="images/google ad.png" alt=""/>GOOGLE ADS</Link>
                  <Link className="py-3 px-4 bg-success text-white fs-5 text-decoration-none me-4 rounded-pill fw-bold"  to="#"><img className="me-3" src="images/facebook-ad.png" alt=""/>META ADS</Link>
                  <Link className="py-3 px-4 bg-success text-white fs-5 text-decoration-none me-4 rounded-pill fw-bold"  to="#"><img className="me-3" src="images/design 1.png" alt=""/>WEB DESIGN</Link>
                  <Link className="py-3 px-4 bg-success text-white fs-5 text-decoration-none me-4 rounded-pill fw-bold"  to="#"><img className="me-3" src="images/ui-ux-design.png" alt=""/>UI/UX DESIGN</Link>
                  <Link className="py-3 px-4 bg-success text-white fs-5 text-decoration-none me-4 rounded-pill fw-bold"  to="#"><img className="me-3" src="images/cybersecurity.png" alt=""/>CYBERSECURITY</Link>
                  <Link className="py-3 px-4 bg-success text-white fs-5 text-decoration-none me-4 rounded-pill fw-bold"  to="#"><img className="me-3" src="images/programming 1.png" alt=""/>WEB SOLUTION</Link>
                  <Link className="py-3 px-4 bg-success text-white fs-5 text-decoration-none me-4 rounded-pill fw-bold"  to="#"><img className="me-3" src="images/workshop 1.png" alt=""/>TRAINING AND WORKSHOPS</Link>
                  <Link className="py-3 px-4 bg-success text-white fs-5 text-decoration-none me-4 rounded-pill fw-bold"  to="#"><img className="me-3" src="images/remote-it.png" alt=""/>REMOTE IT SUPPORT</Link>
                  <br/><br/><br/>
                  <Link className="py-3 px-4 bg-success text-white fs-5 text-decoration-none me-4 rounded-pill fw-bold"  to="#"><img className="me-3" src="images/developer 1.png" alt=""/>APP DEVELOPMENT</Link>
                  <Link className="py-3 px-4 bg-success text-white fs-5 text-decoration-none me-4 rounded-pill fw-bold"  to="#"><img className="me-3" src="images/digital-marketing.png" alt=""/>DIGITAL MARKETING</Link>
                  <Link className="py-3 px-4 bg-success text-white fs-5 text-decoration-none me-4 rounded-pill fw-bold"  to="#"><img className="me-3" src="images/responshiv.png" alt=""/>RESPONSIVE DESIGN</Link>
                  <Link className="py-3 px-4 bg-success text-white fs-5 text-decoration-none me-4 rounded-pill fw-bold"  to="#"><img className="me-3" src="images/ecommerce 1.png" alt=""/>E-COMMERCE PLATEFORMS</Link>
                  <Link className="py-3 px-4 bg-success text-white fs-5 text-decoration-none me-4 rounded-pill fw-bold"  to="#"><img className="me-3" src="images/social-media 1.png" alt=""/>SOCIAL MEDIA MANAGEMENT</Link>
                  <Link className="py-3 px-4 bg-success text-white fs-5 text-decoration-none me-4 rounded-pill fw-bold"  to="#"><img className="me-3" src="images/workshop 1.png" alt=""/>KEYWORD RESEARCH</Link>
                  <Link className="py-3 px-4 bg-success text-white fs-5 text-decoration-none me-4 rounded-pill fw-bold"  to="#"><img className="me-3" src="images/content-strategy 1.png" alt=""/>CMS</Link>
                  <Link className="py-3 px-4 bg-success text-white fs-5 text-decoration-none me-4 rounded-pill fw-bold"  to="/cheatsheet"><img className="me-3" src="images/seo (1) 1.png" alt=""/>SEO</Link>
                </marquee>
            </div>
        </section>

        <section className="services-sixth-section">
        <div class="container ">
            <h2 className="text-center">Our Staff</h2>
            <p className="text-center">Lorem Ipsum is simply dummy text of the printing.</p>
         <div class="row align-items-center">
         
        <div class="col shadow p-3 bg-body-tertiary rounded">
            <img src="/images/services_images/digital_computer_technology_kotputli_img17.jpeg" width={"100%"} height={"350px"} alt=""/>
            <div className="px-1 pt-3">
            <h5 className="fw-bold">Director</h5>
            <p className="mb-2 text-uppercase">Ramavtar Yadav</p>
            <p className="p-des">Ut enim ad minim veniam, quis nost exercitation
            ullamco laboris nisi ut allquip ex commodo.</p>
            <div className="pt-2 mt-3 border-line"><span className="fw-bold">Engineering physics</span><span className="float-end fs-5"><i class="fa-brands fa-instagram"></i></span><span className="float-end fs-5 li"><i class="fa-brands fa-linkedin-in"></i></span></div>
            </div>
        </div>
        <div class="col shadow p-3 mx-2 bg-body-tertiary rounded">
            <img src="/images/services_images/digital_computer_technology_kotputli_md_img18.jpeg" width={"100%"} height={"350px"} alt=""/>
            <div className="px-1 pt-3">
            <h5 className="fw-bold">Managing Director</h5>
            <p className="mb-2 text-uppercase">Pushpendra Kumar Yadav</p>
            <p className="p-des">Ut enim ad minim veniam, quis nost exercitation
            ullamco laboris nisi ut allquip ex commodo.</p>
            <div className="pt-2 mt-3 border-line"><span className="fw-bold">Engineering physics</span><span className="float-end fs-5"><i class="fa-brands fa-instagram"></i></span><span className="float-end fs-5 li"><i class="fa-brands fa-linkedin-in"></i></span></div>
            </div>
        </div>
        <div class="col shadow p-3 bg-body-tertiary rounded">
            <img src="/images/services_images/digital_computer_technology_kotputli_img19.jpeg" width={"100%"} height={"350px"} alt=""/>
            <div className="px-1 pt-3">
            <h5 className="fw-bold">Matthew E. McNatt</h5>
            <p className="mb-2 text-uppercase">Narendra Kumar Yadav</p>
            <p className="p-des">Ut enim ad minim veniam, quis nost exercitation
            ullamco laboris nisi ut allquip ex commodo.</p>
            <div className="pt-2 mt-3 border-line"><span className="fw-bold">Engineering physics</span><span className="float-end fs-5"><i class="fa-brands fa-instagram"></i></span><span className="float-end fs-5 li"><i class="fa-brands fa-linkedin-in"></i></span></div>
            </div>
        </div>
        </div>
        </div>
        </section>


        <section className="services-seventh-section">
        <div class="container ">
         <div class="row align-items-center text-center text-white">
            <h2 className="mb-3">Subscribe to our newsletter</h2>
            <p className="mb-5">Lorem Ipsum is simply dummy text of the printing.</p>
            <form>
                <span>
                <input className="rounded-pill" type="email" required placeholder="Email Address"/>
                <input className="rounded-pill fw-bold" type="submit" value="Submit"/>
                </span>
            </form>
        </div>
        </div>
        </section>


        <Footer/>
        </>
     );
}

export default GoogleAds;