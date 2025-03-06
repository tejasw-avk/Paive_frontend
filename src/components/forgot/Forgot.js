import React,{useState} from "react";
import { Box, Paper, Typography, TextField, Link, Button } from "@mui/material";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import { useDispatch, useSelector } from 'react-redux';
import { requestPasswordReset } from '../../redux/forgotPasswordSlice';
import {setUserEmail,clearError,resetState} from '../../redux/forgotPasswordSlice';


export default function ForgotPassword() {
  const [errors, setError] = useState({});
  const dispatch = useDispatch();
  const { userEmail, isSubmitting, error, success } = useSelector(
    (state) => state.forgotPassword
  );

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const onChangeEmail = (e) => {
    dispatch(setUserEmail(e.target.value));
  };

  const onResetClick = async () => {
    if (!userEmail.trim()) {
      dispatch(setError("Email is required"));
      return;
    }

    if (!validateEmail(userEmail)) {
      dispatch(setError("Please enter a valid email address"));
      return;
    }

    dispatch(requestPasswordReset(userEmail));
  };

  return (
    <Box sx={{ mt: 5, position: "relative" }}>
      <img
        src="https://c.animaapp.com/nvy0a5FD/img/mask-group.png"
        alt="Mask group"
        style={{ width: "100%", height: "100%" }}
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
        <Typography variant="h5" align="center" gutterBottom fontWeight="bold">
          Reset Password
        </Typography>
        <Typography
          variant="body1"
          align="center"
          sx={{ color: "gray", mb: 3 }}
        >
          Create your new password.
        </Typography>
        <Box component="form" sx={{ mt: 2 }} onSubmit={(e) => e.preventDefault()}>
          <TextField
            fullWidth
            label="Email"
            variant="outlined"
            margin="normal"
            sx={{ backgroundColor: "#9edec669", borderRadius: 1 }}
            onChange={onChangeEmail}
            value={userEmail}
            error={!!error}
            helperText={error}
            required
            type="email"
            autoComplete="email"
            placeholder="Enter your email address"
          />
          <Button
            fullWidth
            variant="contained"
            sx={{
              mt: 3,
              mb: 2,
              backgroundColor: "#3c7168",
              color: "white",
              textTransform: "none",
              "&:disabled": {
                backgroundColor: "#cccccc",
              }
            }}
            onClick={onResetClick}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Reset Password"}
          </Button>
          <Box sx={{ textAlign: "center" }}>
            <Typography variant="body1">
              Remember your password?{" "}
              <Link href="/login" underline="hover">
                Back to Login
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