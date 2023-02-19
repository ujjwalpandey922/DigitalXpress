import "./navbar.css"
import logo from "../assets/cc02bcd9066b4675b5d9f91ea4bb7e3e.png";
import drop from "../assets/Combined-Shape.png";
import call from "../assets/Fill-1.png";
const Navbar = () => {
  return (
    <div className="nav">
        <div className="logo">
            <img src={logo} alt="LOGO" />
        </div>
            <div className="menu">
                <li>Home</li>
                <li>Services</li>
                <li>Portfolio</li>
                <li>Packages</li>
                <li>Combo Packages</li>
                <li>About Us</li>
                <li>Industries</li>
                <li>Contact Us</li>
            </div>
         <div className="buttons">
            
                <div className="live_btn">
                    <img src={drop} alt="drop" />
                     <span>Live Discuss</span></div>
                <div className="contact_btn" style={{zIndex:"0"}}>
                <img src={call} alt="drop" />
                     <span>+8773130324</span>
                    </div>
        </div>   
    </div>  
   
  )
}

export default Navbar