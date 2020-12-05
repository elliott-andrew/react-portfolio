import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import Header from "./Components/Header"
import Index from "./Pages/Index"
import Portfolio from "./Pages/Portfolio"
import Contact from "./Pages/Contact"
import Resume from "./Pages/Resume";

function App() {
  return (
    <Router basename='react-portfolio/'>
      <Header />
      <Route exact path="/" component={Index} />
      <Route exact path="/portfolio" component={Portfolio} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/resume" component={Resume} />
      <Footer />
    </Router>
  );
}

export default App;
