import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./component/Login";
import Home from "./component/Home";
import Cart from "./component/Cart";
import CrudForm from "./component/CrudForm";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/crud" element={<CrudForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
