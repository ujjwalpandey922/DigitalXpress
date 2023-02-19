import "./last.css";
import screen from "../assets/Screenshot.png";
import ellipse from "../assets/Ellipse.png";
const Last = () => {
  return (
    <div className="last-box">
      <div className="last">
        <div className="last-info">
          <h1>Talk to our team today to:</h1>
          <p>
            Understand how we can help you boost your business Discover the
            capabilities and answers your questions Get a customized quote for
            your business
          </p>
        </div>
        <div className="last-form">
          <span>Your Name</span>
          <span>Your Email</span>
          <span>Your Phone</span>
          <span>Subject</span>
          <span className="text-Area">Your Message</span>
          <div
            className="contact_btn width"
            style={{
              marginLeft: "auto",
              marginRight: "auto",
              margin: "2rem auto",
              width: "200px",
            }}
          >
            Send
          </div>
        </div>
      </div>
      <img src={screen} alt="screenshot" className="screen" />
      <img src={ellipse} alt="ellipse" className="ellipse" />
    </div>
  );
};

export default Last;
