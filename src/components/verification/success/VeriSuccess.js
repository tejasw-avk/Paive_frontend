import React from "react";
import { Box, Button, Paper, Typography } from "@mui/material";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";

export default function VeriSuccess() {
  return (
    <Box
      sx={{
        bgcolor: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        height: "100vh",
        position: "relative",
      }}
    >
      {/* Celebration Background */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `url('https://c.animaapp.com/nvy0a5FD/img/confetti-background.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: -1,
        }}
      />

      {/* Verification Card */}
      <Paper
        elevation={3}
        sx={{
          width: "60%",
          maxWidth: "700px",
          padding: "40px",
          textAlign: "center",
          borderRadius: "10px",
          border: "1px solid #3c7168",
          backgroundColor: "#ffffffdb",
        }}
      >
        <Typography variant="h4" fontWeight="bold" color="#1b4e3b" gutterBottom>
          Verification Successful
        </Typography>
        <Typography variant="h6" color="black" sx={{ marginBottom: "30px" }}>
          Your email is successfully verified. Please proceed with login.
        </Typography>
        <Button
          variant="outlined"
          sx={{
            borderColor: "#3c7168",
            color: "#3c7168",
            padding: "10px 30px",
          }}
        >
          Log In To Paive
        </Button>
      </Paper>

      {/* Ask Paive AI Chatbot Pop-up */}
      <Box
        sx={{
          position: "fixed",
          bottom: 16,
          left: 16,
          width: 158,
          height: 50,
          bgcolor: "#3c7168",
          marginBottom:65,
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
