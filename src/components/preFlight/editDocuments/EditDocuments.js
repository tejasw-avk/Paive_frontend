import React from "react";
import { AppBar, Toolbar, Typography, Container, Card, CardContent, Button, Box, Grid, Paper, IconButton, Alert } from "@mui/material";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";

export default function EditDocuments() {
  return (
    <Box sx={{ backgroundColor: "#f8f8f8", minHeight: "100vh" }}>
      {/* Header */}
      <AppBar position="static" sx={{ backgroundColor: "#4CAF50" }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Paive
          </Typography>
          <IconButton color="inherit">
            <HelpOutlineIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Container maxWidth="md" sx={{ mt: 3 }}>
        {/* Back Button */}
        <Typography sx={{ color: "blue", cursor: "pointer", mb: 2 }}>
          ← Back to application overview
        </Typography>

        {/* Application Details */}
        <Card variant="outlined">
          <CardContent>
            <Typography variant="h6">
              <FolderOpenIcon sx={{ mr: 1 }} /> Planning Application001
            </Typography>
            <Typography color="textSecondary">
              Household Planning Permission
            </Typography>
            <Typography sx={{ fontSize: 14, color: "gray", mt: 1 }}>
              23, The High Street, Whitechapel, London, E1 6AN
            </Typography>
            <Typography sx={{ fontSize: 12, color: "gray" }}>
              City of London
            </Typography>
            <Box sx={{ mt: 2 }}>
              <Typography variant="body2">
                <strong>Application ID:</strong> xxxxxx
              </Typography>
              <Typography variant="body2">
                <strong>Application Status:</strong> Draft
              </Typography>
              <Typography variant="body2">
                <strong>Version:</strong> 1
              </Typography>
              <Typography variant="body2">
                <strong>Last Save:</strong> 21-12-2024 12:25 PM
              </Typography>
            </Box>
          </CardContent>
        </Card>

        {/* Tab Section */}
        <Paper sx={{ mt: 3, p: 2 }}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                Application Questions
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="subtitle1" sx={{ fontWeight: "bold", borderBottom: "2px solid black" }}>
                Application Documents
              </Typography>
            </Grid>
          </Grid>
        </Paper>

        {/* File Upload Section */}
        <Box sx={{ mt: 3, p: 2, backgroundColor: "white", borderRadius: "5px", boxShadow: 1 }}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Plans and Drawings
          </Typography>

          {/* File List */}
          <Paper sx={{ p: 2, mb: 2, backgroundColor: "#e8f5e9" }}>
            <Typography variant="body1">
              📄 Proposed Plan and Elevation 01.pdf
            </Typography>
          </Paper>

          <Paper sx={{ p: 2, mb: 2, backgroundColor: "#fffde7", border: "1px solid #ff9800" }}>
            <Typography variant="body1">
              📄 Proposed and Existing Roof Plan.pdf
            </Typography>
            <Alert severity="warning" sx={{ mt: 1 }}>
              This document cannot be assessed as it lacks clear roof edges. Please upload a new version with necessary adjustments.
            </Alert>
            <Button variant="contained" color="warning" sx={{ mt: 1 }} startIcon={<UploadFileIcon />}>
              Re-upload Document
            </Button>
          </Paper>

          <Paper sx={{ p: 2, mb: 2, backgroundColor: "#e8f5e9" }}>
            <Typography variant="body1">
              📄 Existing Floorplan.pdf
            </Typography>
          </Paper>

          <Typography variant="h6" sx={{ mt: 3 }}>
            Location Plan
          </Typography>

          <Paper sx={{ p: 2, mb: 2, backgroundColor: "#e8f5e9" }}>
            <Typography variant="body1">
              📄 Location-Plan-1:500-Nov-001 1.pdf
            </Typography>
          </Paper>
        </Box>
      </Container>

      {/* Footer */}
      <Box sx={{ mt: 5, p: 3, backgroundColor: "#4CAF50", color: "white", textAlign: "center" }}>
        <Typography>Paive - Send and edit applications easily</Typography>
        <Typography>About Us | FAQs | Terms and Conditions</Typography>
        <Typography>Contact: help@paive.com | +44 987654321</Typography>
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