import "./port.css";
import drop from "../assets/Combined-Shape-black.png";
import frame from "../assets/Frame1.png";
const Portfolio = () => {
  return (
    <div className="portfolio">
      <h1>Check out our Portfolio</h1>
      <div className="button-port">
        <div className="contact_btn">All</div>
        <div className="contact_btn2">
          Beauty & Cosmetic <img src={drop} alt="drop" />
        </div>
      </div>
      <div className="frame">
        <img src={frame} alt="frame" className="frame-img" />
        <img src={frame} alt="frame" className="frame-img" />
        <img src={frame} alt="frame" className="frame-img" />
        <img src={frame} alt="frame" className="frame-img" />
        <img src={frame} alt="frame" className="frame-img" />
        <img src={frame} alt="frame" className="frame-img" />
        <img src={frame} alt="frame" className="frame-img" />
        <img src={frame} alt="frame" className="frame-img" />
        <img src={frame} alt="frame" className="frame-img" />
      </div>
      <div className="button-port">
        <div className="contact_btn">View More</div>
      </div>
    </div>
  );
};

export default Portfolio;
