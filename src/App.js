import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./Components/NavBar";
import Home from "./Pages/Home";
import About from "./Pages/About";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="./" element={<Home />} />
        <Route path="./about" element={<About/>}/>
      </Routes>
    </Router>
  );
}

export default App;
