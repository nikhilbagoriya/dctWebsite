import { Link } from "react-router-dom";
import "./css/Footer.css";


function Footer() {
    return (
        <>
        <footer className="footer">
            <div className="container text-white">
                <div className="row my-5">
                    <div className="col-sm py-3">
                        <img src="images/dct logo 2.png" width="32%" alt="" />
                        <p className="text-white fs-6">Welcome to Digital Computer Technology
                            We're your ultimate destination for digital
                            solutions. Our expertise spans app, web, and
                            game development, ensuring your projects
                            are executed with precision.</p>
                    </div>
                    <div className="col-sm pt-4">
                        <ul>
                            <b>Quick Links <hr /></b>
                            <li className="list-unstyled mt-3"><Link className="text-white list-unstyled text-decoration-none" to="">Home</Link></li>
                            <li className="list-unstyled"><Link className="text-white list-unstyled text-decoration-none" to="">Services</Link></li>
                            <li className="list-unstyled"><Link className="text-white list-unstyled text-decoration-none" to="">About Us</Link></li>
                            <li className="list-unstyled"><Link className="text-white list-unstyled text-decoration-none" to="">Contact Us</Link></li>
                            <li className="list-unstyled"><Link className="text-white list-unstyled text-decoration-none" to="">Enquiry Form</Link></li>
                        </ul>
                    </div>
                    <div className="col-sm pt-4">
                        <ul>
                            <b>Quick Links <hr /></b>
                            <li className="list-unstyled mt-3"><Link className="text-white list-unstyled text-decoration-none" to="">Coding</Link></li>
                            <li className="list-unstyled"><Link className="text-white list-unstyled text-decoration-none" to="">Hacking</Link></li>
                            <li className="list-unstyled"><Link className="text-white list-unstyled text-decoration-none" to="">Basic</Link></li>
                            <li className="list-unstyled"><Link className="text-white list-unstyled text-decoration-none" to="">College courses</Link></li>
                        </ul>
                    </div>
                    <div className="col-sm py-3">
                        <b>Address <hr /></b>
                        <p>Behind Police Station, <br />
                            Sanjeevani Hospital Road, <br /> Kotputli 303108</p>
                        <p>Kotputli-Behror <br />
                            +919649911993</p>
                    </div>
                </div>
                <hr />
                <div className="row links-row">
                    <div className="col-sm">
                        <ul className="d-flex float-start">
                            <li className="list-unstyled"><Link className="text-white list-unstyled text-decoration-none" to="">Privacy </Link>| &nbsp; </li>
                            <li className="list-unstyled"><Link className="text-white list-unstyled text-decoration-none" to="">Articles </Link>| &nbsp;</li>
                            <li className="list-unstyled"><Link className="text-white list-unstyled text-decoration-none" to="">Sitemap </Link></li>
                        </ul>
                    </div>
                    <div className="col-sm py-3">
                        <ul className="d-flex float-end">
                        <li className="list-unstyled"><Link className="text-white list-unstyled text-decoration-none" to="https://www.linkedin.com/company/digitalcomputertechnology/"><img src="images/Digital Computer Technology Kotputli linkedin.png" alt="" /></Link></li>
                        <li className="list-unstyled"><Link className="text-white list-unstyled text-decoration-none" to="https://twitter.com/dctkotputli"><img src="images/Digital Computer Technology Kotputli twitter.png" alt="" /></Link></li>
                        <li className="list-unstyled"><Link className="text-white list-unstyled text-decoration-none" to="https://www.instagram.com/digitalcomputerkotputli/"><img src="images/Digital Computer Technology Kotputli instagram.png" alt="" /></Link></li>
                        <li className="list-unstyled"><Link className="text-white list-unstyled text-decoration-none" to="https://www.facebook.com/DigitalComputerTechnology"><img src="images/Digital Computer Technology Kotputli facebook.png" alt="" /></Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <p className="text-center text-white">&copy;Copyright 2007-2023. DCT</p>
            </footer>
        </>
    );
}

export default Footer;