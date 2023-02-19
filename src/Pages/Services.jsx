import Card from "../components/Card";
import "./Services.css";

const Services = () => {
  return (
    <div className="Services">
      <div className="title">
        <h1>Essential Services</h1>
        <p>
          Our Set impeccable service serves as an essential part of any business
          which is transforming its operations to the online
        </p>
      </div>
      <div className="service_card">
        <div className="first">
        <Card />
        <Card />
        </div>
        <div className="Sec">
        <Card />
        <Card />
        </div>
        <div className="third">
        <Card />
        <Card />
        </div>
      </div>
    </div>
  );
};

export default Services;
