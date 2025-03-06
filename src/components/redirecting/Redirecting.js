import { Box, CircularProgress, Container, Typography, Button } from "@mui/material";
import React from "react";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";

export default function Redirecting() {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
      <Box sx={{ width: "1300px", bgcolor: "white", textAlign: "center", padding: "100px 20px" }}>
        
        {/* Main Message */}
        <Typography variant="h5" sx={{ fontWeight: "bold", color: "black", marginBottom: "10px" }}>
          Redirecting to...
        </Typography>
        
        {/* Subtext */}
        <Typography variant="body1" sx={{ color: "#a0a0a0", marginBottom: "30px" }}>
          Please do not close this window or press back
        </Typography>

        {/* Loading Spinner */}
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <CircularProgress />
        </Box>

      </Box>
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
};