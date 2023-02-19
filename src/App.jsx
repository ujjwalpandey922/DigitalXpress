import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./Pages/Footer";
import Home from "./Pages/Home";
import Industries from "./Pages/Industries";
import Last from "./Pages/Last";
import Packages from "./Pages/Packages";
import Portfolio from "./Pages/Portfolio";
import Second from "./Pages/Second";
import Services from "./Pages/Services";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Second />
      <Services />
      <Portfolio />
      <Packages />
      <Industries />
      <Last />
      <Footer />
    </div>
  );
}

export default App;
