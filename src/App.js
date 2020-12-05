import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar"

function App() {
  return (
    <Router>
      <Navbar />
      <Footer />
    </Router>
  );
}

export default App;
