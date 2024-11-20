import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./App.css"; // Import the global CSS file
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ListGroup from "./components/ListGroup";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Team from "./pages/Team"; // Ensure the file './pages/Team.tsx' exists and is correctly named
import Contact from "./pages/Contact"; // Ensure the file './pages/Contact.tsx' exists and is correctly named

function App() {
  return (
    <Router>
      <div>
        <NavBar />
      </div>
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
