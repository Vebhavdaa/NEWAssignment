import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../Context/auth";

import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";

const Login = () => {
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const location = useLocation();
  const redirectPath = location.path?.path || "/";

  const auth = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    if (email === "admin@gmail.com" && password === "Abcd@1234") {
      auth.login(email);
      navigate(redirectPath, { replace: true });
    } else {
      alert("INVALID EMAIL OR PASSWORD");
      setemail("");
    }
  };

  return (
    <div
      className="form-container"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <form
        onSubmit={handleLogin}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          margin: "25px",
        }}
      >
        <TextField
          id="filled-basic"
          label="Email"
          variant="filled"
          type="email"
          placeholder="admin@gmail.com"
          value={email}
          required
          onChange={(e) => setemail(e.target.value)}
          style={{ margin: "15px" }}
        />
        <TextField
          id="outlined-basic"
          label="Password"
          variant="filled"
          type="text"
          placeholder="Abcd@1234"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
          style={{ margin: "15px" }}
        />
        <Button
          variant="contained"
          startIcon={<LoginIcon />}
          style={{ margin: "25px" }}
          type="submit"
        >
          Login
        </Button>
      </form>
    </div>
  );
};

export default Login;
