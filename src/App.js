import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar"
import Index from "./Pages/Index"
import Portfolio from "./Pages/Portfolio"
import Contact from "./Pages/Contact"

function App() {
  return (
    <Router>
      <Navbar />
      <Route exact path="/" component={Index} />
      <Route exact path="/portfolio" component={Portfolio} />
      <Route exact path="/contact" component={Contact} />
      <Footer />
    </Router>
  );
}

export default App;
