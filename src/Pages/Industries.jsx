import "./industries.css";
import industries from "../assets/industries.png";
import industries1 from "../assets/industries1.png";
import industries1mobile from "../assets/industries1-mobile.png";
import industries2 from "../assets/industries2.png";
import industries3 from "../assets/industries3.png";
import industries4 from "../assets/industries4.png";
import industries5 from "../assets/industries5.png";
import row21 from "../assets/row2.png";
import row2dog from "../assets/row2dog.png";
import row2girl from "../assets/row2girl.png";
import row2last from "../assets/row2last.png";
import row2phone from "../assets/row2phone.png";
import row2phoneweb from "../assets/row2phonenweb.png";
const Industries = () => {
  return (
    <div className="industries">
      <img src={industries} alt="indus" className="industries-logo" />
      <div className="row1">
        <img src={industries1} alt="industries1" />
        <img
          src={industries1mobile}
          alt="industries1-mobile"
          id="industries1mobile"
        />
        <img src={industries2} id="industries2" />
        <img src={industries3} id="industries3" />
        <img src={industries4} id="industries4" />
        <img src={industries5} id="industries5" />
      </div>
      <div className="row2">
        <img src={row21} alt="row21" id="row21" />
        <img src={row2dog} alt="row2dog" id="row2dog" />
        <img src={row2girl} alt="row2girl" id="row2girl" />
        <img src={row2phone} alt="row2phone" id="row2phone" />
        <img src={row2phoneweb} alt="row2phoneweb" id="row2phoneweb" />
        <img src={row2last} alt="row2last" id="row2last" />
      </div>
      <div
        className="contact_btn width"
        style={{ marginLeft: "auto", marginRight: "auto", margin: "5rem auto" }}
      >
        View More
      </div>
    </div>
  );
};

export default Industries;
