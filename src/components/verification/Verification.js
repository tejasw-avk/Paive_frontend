import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import { Box, Button, Paper, Typography } from "@mui/material";
import React from "react";

export default function Verification() {
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
          textAlign: "center",
        }}
      >
        <Typography variant="h4" fontWeight="600" color="black" mb={2}>
          Verify Your Email
        </Typography>
        <Typography variant="body1" color="black" mb={4}>
          Click on the button below to verify
        </Typography>
        <Button
          variant="contained"
          sx={{
            bgcolor: "#3c7168",
            borderRadius: "10px",
            padding: "10px 20px",
            color: "white",
            "&:hover": {
              bgcolor: "#3c7168",
            },
          }}
        >
          Verify
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