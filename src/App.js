import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./Components/NavBar";
import Home from "./Pages/Home";
function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
