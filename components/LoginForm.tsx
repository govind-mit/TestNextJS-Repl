// components/LoginForm.tsx

import { useState } from "react";
import { Button, TextField } from "@mui/material";

const LoginForm = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Here you can make the request to the fake login API
    // For demo purposes, we will just log the username and password
    console.log("Username:", username);
    console.log("Password:", password);
    onLogin(); // You can handle the login logic in the parent component
  };

  return (
    <div>
      <TextField
        label="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <TextField
        type="password"
        label="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button variant="contained" onClick={handleLogin}>
        Login
      </Button>
    </div>
  );
};

export default LoginForm;
