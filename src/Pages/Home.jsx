import "./home.css";
import image20 from "../assets/image 20.png";
import image21 from "../assets/image 21.png";
const Home = () => {
  return (
    <div className="home">
      <div className="content">
        <div className="title">
          A Website Design Agency that belives in Excellence
        </div>
        <div className="para">
          The Website Designs comprises an innovative bunch of people bringing
          you the professional website to boost your brand identity, a custom
          website development agency based in San Francisco, CA.
        </div>
        <div className="contact_btn">
          <span>Explore Service</span>
        </div>
      </div>
      <div className="home_image">
        <img src={image21} alt="image" id="image_21"/>
        <img src={image20} alt="image" id="image_20"/>
      </div>
    </div>
  );
};

export default Home;
