import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import { AuthProvider } from "./Context/auth";
import RequireAuth from "./RequireAuth";

function App() {
  return (
    <AuthProvider>
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/" element={<RequireAuth><Home/></RequireAuth>}></Route>
          <Route path="/Cart" element={<RequireAuth><Cart/></RequireAuth>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
    </AuthProvider>
  );
}

export default App;
