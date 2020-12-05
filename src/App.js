import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar"
import Index from "./Pages/Index"

function App() {
  return (
    <Router>
      <Navbar />
      <Route exact path="/" component={Index} />
      <Footer />
    </Router>
  );
}

export default App;
