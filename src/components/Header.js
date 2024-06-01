import "./css/Header.css";
function Header() {
    return (
        <nav class="container navbar navbar-expand-lg navbar-light bg-light p-0 rounded-pill">
        <div class="container-fluid">
          <a class="navbar-brand" href="#"><img class="dct-logo" src="images/dct logo.png" width="77px" alt="Digital Computer Technology Logo"/></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">About Us</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Courses
                </a>
                <ul class="dropdown-menu mt-4 border-0 bg-transparent" aria-labelledby="navbarDropdown">
                  <li><a class="dropdown-item" href="#"><img src="images/rscit 1.png" alt=""/>RS-CIT</a></li>
                  <li><a class="dropdown-item" href="#"><img src="images/tally-marks 1.png" alt=""/>TALLY WITH GST</a></li>
                  <li><a class="dropdown-item" href="#"><img src="images/design 1.png" alt=""/>WEB DESIGNER</a></li>
                  <li><a class="dropdown-item" href="#"><img src="images/hacking 1.png" alt=""/>ETHICAL HACKING</a></li>
                  <li><a class="dropdown-item" href="#"><img src="images/eng 1.png" alt=""/>ENGLISH SPOKEN</a></li>
                  <li><a class="dropdown-item" href="#"><img src="images/programming 1.png" alt=""/>CODING FOR KID'S</a></li>
                  <li><a class="dropdown-item" href="#"><img src="images/coding 1.png" alt=""/>WEB DEVELOPMENT</a></li>
                  <li><a class="dropdown-item" href="#"><img src="images/developer 1.png" alt=""/>APP DEVELOPMENT</a></li>
                  <li><a class="dropdown-item" href="#"><img src="images/digital-marketing.png" alt=""/>DIGITAL MARKETING</a></li>
                  <li><a class="dropdown-item" href="#"><img src="images/game-development 1.png" alt=""/>GAME DEVELOPMENT</a></li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Services
                </a>
                <ul class="dropdown-menu bg-transparent border-0 mt-4" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item" href="#"><img src="images/google ad.png" alt=""/>GOOGLE AD</a></li>
                  <li><a class="dropdown-item" href="#"><img src="images/facebook-ad.png" alt=""/>FACEBOOK AD</a></li>
                  <li><a class="dropdown-item" href="#"><img src="images/design 1.png" alt=""/>WEB DESIGN</a></li>
                  <li><a class="dropdown-item" href="#"><img src="images/ui-ux-design.png" alt=""/>UI/UX DESIGN</a></li>
                  <li><a class="dropdown-item" href="#"><img src="images/cybersecurity.png" alt=""/>CYBERSECURITY</a></li>
                  <li><a class="dropdown-item" href="#"><img src="images/programming 1.png" alt=""/>WEB SOLUTION</a></li>
                  <li><a class="dropdown-item" href="#"><img src="images/remote-it.png" alt=""/>REMOTE IT SUPPORT</a></li>
                  <li><a class="dropdown-item" href="#"><img src="images/developer 1.png" alt=""/>APP DEVELOPMENT</a></li>
                  <li><a class="dropdown-item" href="#"><img src="images/digital-marketing.png" alt=""/>DIGITAL MARKETING</a></li>
                  <li><a class="dropdown-item" href="#"><img src="images/responshiv.png" alt=""/>RESPONSHIV DESIGN</a></li>
                  <li><a class="dropdown-item" href="#"><img src="images/ecommerce 1.png" alt=""/>E-COMMERCE PLATFORMS</a></li>
                  <li><a class="dropdown-item" href="#"><img src="images/workshop 1.png" alt=""/>TRAINING AND WORKSHOPS</a></li>
                  <li><a class="dropdown-item" href="#"><img src="images/social-media 1.png" alt=""/>SOCIAL MEDIA MANAGEMENT</a></li>
                  <li><a class="dropdown-item" href="#"><img src="images/content-strategy 1.png" alt=""/>CMS</a></li>
                  <li><a class="dropdown-item" href="#"><img src="images/seo (1) 1.png" alt=""/>SEO</a></li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Contact Us</a>
              </li>
            </ul>
            <form class="d-flex">
              <button class="btn btn-outline-success"><a class="text-decoration-none" href="">ENQUIRY FORM</a></button>
            </form>
          </div>
        </div>
      </nav>
 );
}

export default Header;