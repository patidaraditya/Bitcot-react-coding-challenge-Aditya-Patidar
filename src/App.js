import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Movies from "./Components/Movies";
import Series from "./Components/Series";
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Series" element={<Series />} />
        <Route exact path="/Movies" element={<Movies />} />
      </Routes>
    </Router>
  );
}

export default App;
