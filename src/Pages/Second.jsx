import "./second.css";
import vector from "../assets/Vector.png";
import image2 from "../assets/Rectangle 2.png";
import image3 from "../assets/Rectangle 3.png";
import drop from "../assets/Combined-Shape-black.png";
import call from "../assets/Fill-1.png";
const Second = () => {
  return (
    <div className="sec">
      <div className="sec_logo">
        <div className="react_logo">
          <img src={vector} alt="logo" />
          <span>React</span>
        </div>
        <div className="react_logo">
          <img src={vector} alt="logo" />
          <span>React</span>
        </div>
        <div className="react_logo">
          <img src={vector} alt="logo" />
          <span>React</span>
        </div>
        <div className="react_logo">
          <img src={vector} alt="logo" />
          <span>React</span>
        </div>
        <div className="react_logo">
          <img src={vector} alt="logo" />
          <span>React</span>
        </div>
      </div>

      <div className="sec_content ">
        <div className="content">
          <div className="title">
            Ready To Transform Web Leads Into Conversions? Build Website
          </div>
          <div className="para">
            We build website and create unlimited pathways for the brand to
            capture leads and enjoy unexpected conversions. Thewebsitedesigns
            believes in delivering expectations that are doable for our experts.
            We promise nothing but perfection when it comes to website
            development. Thewebsitedesigns has a firm approach for every web
            design that is further tailored to the business niche of the brand.
            The proficient strategies for every UI/UX of our website design
            company open plentiful leads ready to be converted.
          </div>
          <div className="buttons">
            <div className="live_btn">
              <img src={drop} alt="drop" />
              <span>Live Discuss</span>
            </div>
            <div className="contact_btn">
              <img src={call} alt="call" />
              <span>+8773130324</span>
            </div>
          </div>
        </div>

        <div className="home_image">
          <img src={image2} alt="image" id="image2" />
          <img src={image3} alt="image" id="image3" />
        </div>
      </div>
    </div>
  );
};

export default Second;
