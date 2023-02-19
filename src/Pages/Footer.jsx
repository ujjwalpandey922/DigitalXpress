import "./footer.css";
import logo from "../assets/cc02bcd9066b4675b5d9f91ea4bb7e3e.png";
import rocket from "../assets/rocket.png";
import loop from "../assets/loop.png";
import sociallogo from "../assets/social-logo.png";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <h1>Yay, not just another design agency</h1>
          <div className="footer-logos-group">
            <div className="last-button">Get Started Now</div>
            <img src={loop} alt="loop" className="loop-footer" />
            <img src={rocket} alt="rocket" className="rocket-footer" />
          </div>
        </div>
        <img src={logo} alt="logo" className="logo-footer" />
      </div>
      <div className="footer-hrefs">
        <div className="footer-services">
          <h2>Services</h2>
          <hr />
          <div className="footer-list">
            <div className="footer-list-left">
              <li>Website Development</li>
              <li>Ecommerse Solution</li>
              <li>Web Application</li>
              <li>Digital Marketing</li>
              <li>Branding</li>
            </div>
            <div className="footer-list-rigth">
              <li>Return Policy</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
              <li>Initiate Return</li>
            </div>
          </div>
        </div>
        <div className="footer-about">
          <h2>About</h2>
          <hr />
          <div className="footer-list">
            <div className="footer-list-left">
              <li>Website Development</li>
              <li>Ecommerse Solution</li>
              <li>Web Application</li>
              <li>Digital Marketing</li>
              <li>Branding</li>
            </div>
            <div className="footer-list-rigth">
              <li>Return Policy</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
              <li>Initiate Return</li>
            </div>
          </div>
        </div>
        <div className="footer-social">
          <h2>Contect Via</h2>
          <hr />
          <img src={sociallogo} alt="logo" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
