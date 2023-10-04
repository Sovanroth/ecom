import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/HomePage/Home";
import ProductsList from "./pages/Products/ProductsList/ProductsList";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/products" element={<ProductsList />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
