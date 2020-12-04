import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Navbar from "./Components/Navbar"

function App() {
  return (
    <Router>
      <Navbar />
    </Router>
  );
}

export default App;
