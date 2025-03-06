import React from "react";
import { Box, Button, Typography, Card, CardContent, Grid, IconButton } from "@mui/material";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom"; 
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";

export default function CreateApplication() {
  const navigate = useNavigate(); 

  return (
    <Box sx={{ fontFamily: "Roboto, Arial", backgroundColor: "#f4f4f4", minHeight: "79.5vh" }}>
      {/* Back Button with Navigation */}
      <Box sx={{ display: "flex", alignItems: "center", mb: 2, mt: 8, ml: 1 }}>
        <ArrowBackIcon />
        <Typography
          variant="h6"
          sx={{ ml: 2, textAlign: "left", cursor: "pointer" }}
          onClick={() => navigate("/newApplication")} // Navigate back to Home
        >
          Back to application overview
        </Typography>
      </Box>

      <Card
        sx={{
          borderRadius: "14px",
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
          margin: "5% auto",
          maxWidth: "60%",
        }}
      >
        <CardContent>
          <Typography variant="h5" sx={{ fontWeight: "bold", mb: 3, textAlign: "center" }}>
            Application Summary
          </Typography>

          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h6" sx={{ fontWeight: "medium", textAlign: "left" }}>
                <strong>Name:</strong> House Planning Application001
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h6" sx={{ fontWeight: "medium", textAlign: "left" }}>
                <strong>Application Type:</strong> Householder Planning Permission
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h6" sx={{ fontWeight: "medium", textAlign: "left" }}>
                <strong>Address:</strong> 123, ABC, Brushfield House, 11 Brushfield Street, London, E1 6AN
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h6" sx={{ fontWeight: "medium", textAlign: "left" }}>
                <strong>Easting:</strong> 533414
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h6" sx={{ fontWeight: "medium", textAlign: "left" }}>
                <strong>Northing:</strong> 181742
              </Typography>
            </Grid>
          </Grid>

          {/* Note (Moved Inside CardContent) */}
          <Typography sx={{ mt: 2, color: "red", fontSize: "1rem", textAlign: "right" }}>
            Note: Above details cannot be modified once the application is created.
          </Typography>
        </CardContent>
      </Card>

      {/* Buttons */}
      <Box sx={{ mt: 3, display: "flex", gap: 2, justifyContent: "center", alignItems: "center" }}>
        <Button variant="outlined" color="primary" sx={{ borderRadius: "8px" }} onClick={() => navigate("/newApplication")}>
          Edit Details
        </Button>
        <Button variant="contained" color="primary" sx={{ borderRadius: "8px" }} onClick={() => navigate("/myApplications")}>
          Create Application
        </Button>
      </Box>

      {/* Floating Chat Button */}
      <IconButton
        sx={{
          position: "fixed",
          bottom: "16px",
          left: "16px",
          backgroundColor: "#2e7d32",
          color: "white",
          boxShadow: "0px 4px 6px rgba(0,0,0,0.2)",
        }}
      >
        <ChatBubbleIcon />
      </IconButton>
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
