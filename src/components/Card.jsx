import "./card.css";
import Vector5 from "../assets/Vector 6.png";
import Vector6 from "../assets/Vector 5.png";
import Group18 from "../assets/Group 18.png";
import right from "../assets/right.png";
const Card = () => {
  return (
    <div className="card">
      <div className="colorDesign">
        <img src={Vector5} alt="V5" id="leftGradient" />
        <img src={Vector6} alt="V5" id="rigthGradient" />
      </div>
      <div className="content-card">
        <img src={Group18} alt="18" />
        <h2>Website Design</h2>
        <hr />
        <p>
          Search engine optimization is the process of improving the quality and
          quantity.
        </p>
      </div>
      <img src={right} alt="right" className="right" />
    </div>
  );
};

export default Card;
