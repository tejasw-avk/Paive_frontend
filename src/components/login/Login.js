import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Paper, Typography, TextField, Link, Button } from "@mui/material";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";

export default function LoginSignup() {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [message, setMessage] = useState("");
  const [errors,setErrors] = useState({});
  const dispatch = useDispatch();
  const loginState = useSelector((state) => state.login);

  const onChangeEmail = (e) => {
    setUserEmail(e.target.value);
  };

  const onChangePassword = (e) => {
    setUserPassword(e.target.value);
  };


  const validate = () => {
  let tempErrors = {};
    
    if(!userEmail.trim()) tempErrors.userEmail = "Email is required.";
    else if(!/\S+@\S+\.\S+/.test(userEmail)) tempErrors.userEmail = "Email is invalid.";

    if(!userPassword.trim()) tempErrors.userPassword = "Password is required.";
    else if(userPassword.length < 6) tempErrors.userPassword = "Password must be 8 characters long.";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  }

  const onLoginClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    if(!validate()) return;
//redux is to be used in line 42 to call the api because it wont be scalable 
    try {
      const response = await fetch("http://localhost:8000/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email:userEmail, password:userPassword }),
      });

      if (!response.ok) throw new Error("Invalid username or password"); //Why not return Login failed ?

      const data = await response.json();
      dispatch({ type: "LOGIN_SUCCESS", payload: data }); 
    } catch (err) {
      console.log("Error:", err.message); // Check if error is logged
      setMessage(err.message);
      dispatch({ type: "LOGIN_FAILURE", payload: err.message });
    }
  };

  return (
    <Box sx={{ mt: 1, position: "relative" }}>
      <img
        src="https://c.animaapp.com/nvy0a5FD/img/mask-group.png"
        alt="Mask group"
        style={{ width: "100%", height: "auto" }}
      />
      <Paper
        elevation={3}
        sx={{
          position: "absolute",
          top: "40%",
          left: "50%",
          transform: "translate(-50%, -20%)",
          width: 661,
          backgroundColor: "#ffffffcc",
          borderRadius: 2,
          border: "1px solid #3e7e55",
          padding: 4,
        }}
      >
        <Typography variant="h5" align="center" fontWeight="bold" gutterBottom>
          Log In To Paive
        </Typography>
        <Box component="form" sx={{ mt: 2 }}>
          <TextField
            fullWidth
            label="Email"
            variant="outlined"
            margin="normal"
            sx={{ backgroundColor: "#9edec669", borderRadius: 1 }}
            onChange={onChangeEmail}
            value={userEmail}
            error={!!errors.userEmail}
            helperText={errors.userEmail}
          />
          <TextField
            fullWidth
            label="Password"
            type="password"
            variant="outlined"
            margin="normal"
            sx={{ backgroundColor: "#9edec669", borderRadius: 1 }}
            onChange={onChangePassword}
            value={userPassword}
            error={!!errors.userPassword}
            helperText={errors.userPassword}
          />
          <Link
            href="/forgot"
            underline="hover"
            sx={{ display: "block", textAlign: "right", mt: 1 }}
          >
            Forgot Password?
          </Link>
          <Button
            fullWidth
            variant="contained"
            sx={{
              mt: 3,
              mb: 2,
              backgroundColor: "#3c7168",
              color: "white",
            }}
            onClick={onLoginClick}
          >
            Log In
          </Button>
          <Box sx={{ textAlign: "center" }}>
            <Typography variant="body1">
              New User?{" "}
              <Link href="/signup" underline="hover">
                Sign Up
              </Link>
            </Typography>
          </Box>
        </Box>
      </Paper>

      {/* Ask Paive AI Chatbot Pop-up */}
      <Box
        sx={{
          position: "fixed",
          bottom: 16,
          left: 16,
          width: 158,
          height: 50,
          marginBottom:65,
          bgcolor: "#3c7168",
          borderRadius: 1,
          boxShadow: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Button
          variant="contained"
          startIcon={<ChatBubbleOutlineIcon />}
          sx={{ bgcolor: "#3c7168", borderRadius: 1 }}
        >
          Ask Paive AI
        </Button>
      </Box>
    </Box>
  );
  }