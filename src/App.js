import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import Nav from "./Components/NavBar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Technologies from "./Pages/TechStack";
function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>}/>
        <Route path="/technologies" element={<Technologies/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
