import React, { useState } from "react";
import { Box, Paper, Typography, TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";

export default function ResetPassword() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleResetPassword = () => {
    if (!newPassword || !confirmPassword) {
      setError("Please fill in both fields.");
      return;
    }
    if (newPassword !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    
    // Call API to reset password (placeholder, replace with actual API call)
    console.log("Password reset successfully");
    alert("Your password has been reset successfully!");
    navigate("/"); // Redirect to login page
  };

  return (
    <Box sx={{ mt: 1, position: "relative" }}>
      <img
        src="https://c.animaapp.com/nvy0a5FD/img/mask-group.png"
        alt="Background"
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
          Reset Your Password
        </Typography>
        <Typography variant="body1" align="center" gutterBottom>
          Enter your new password below.
        </Typography>
        <Box sx={{ mt: 2 }}>
          <TextField
            fullWidth
            label="New Password"
            type="password"
            variant="outlined"
            margin="normal"
            sx={{ backgroundColor: "#9edec669", borderRadius: 1 }}
            onChange={(e) => setNewPassword(e.target.value)}
            value={newPassword}
          />
          <TextField
            fullWidth
            label="Confirm Password"
            type="password"
            variant="outlined"
            margin="normal"
            sx={{ backgroundColor: "#9edec669", borderRadius: 1 }}
            onChange={(e) => setConfirmPassword(e.target.value)}
            value={confirmPassword}
          />
          {error && (
            <Typography color="error" sx={{ mt: 1, textAlign: "center" }}>
              {error}
            </Typography>
          )}
          <Button
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, backgroundColor: "#3c7168", color: "white" }}
            onClick={handleResetPassword}
          >
            Reset Password
          </Button>
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