import Home from "./pages/Home";
import "./App.css";
import NavbarComponent from "./components/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
        {/* <NavbarComponent /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} /> */}
          {/* <Route path="/contact" element={<Contact />} /> */}
          {/* Add more routes as needed */}
        </Routes>
      </Router>
    </>
  );
};

export default App;
