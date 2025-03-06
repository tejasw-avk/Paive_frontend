import { Box, Button, Paper, Typography } from "@mui/material";
import React from "react";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";

export default function PaymentSuccess() {
  return (
    <Box sx={{ bgcolor: "white", display: "flex", justifyContent: "center", width: "100%" }}>
      <Box sx={{ width: "1300px", textAlign: "center", padding: "80px 20px", position: "relative" }}>
        
        {/* Confetti Background */}
        <Box
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            top: 0,
            left: 0,
            backgroundImage: "url('/path-to-confetti-image.png')", // Replace with actual confetti image path
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            zIndex: -1,
          }}
        />

        {/* Main Card */}
        <Paper sx={{ width: "80%", maxWidth: "750px", margin: "0 auto", padding: "30px", borderRadius: "10px", border: "1px solid #3c7168" }}>
          
          {/* Title */}
          <Typography variant="h5" sx={{ fontWeight: "bold", color: "#1b4e3b", marginBottom: "15px" }}>
            House Planning Application001
          </Typography>

          {/* Status */}
          <Typography sx={{ fontWeight: "500", fontSize: "1.2rem" }}>
            <strong>Status:</strong> <span style={{ fontWeight: "600" }}>Payment Successful</span>
          </Typography>

          {/* Date & Time */}
          <Typography sx={{ fontWeight: "500", fontSize: "1.2rem", marginBottom: "15px" }}>
            <strong>Date and time:</strong> 08-01-2025 17:08:55 GMT
          </Typography>

          {/* Success Message */}
          <Typography sx={{ fontSize: "1.1rem", color: "black", marginBottom: "20px" }}>
            Your payment has been <strong>successful</strong>, please proceed with application submission.
          </Typography>

          {/* Button */}
          <Button
            variant="outlined"
            sx={{
              borderColor: "#3c7168",
              color: "#3c7168",
              textTransform: "none",
              padding: "8px 20px",
              fontSize: "1rem",
            }}
          >
            Application Overview
          </Button>

        </Paper>
      </Box>
    </Box>
  );
};