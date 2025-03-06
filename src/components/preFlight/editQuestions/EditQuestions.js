import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  IconButton,
  Paper,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom"; 
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import DescriptionIcon from "@mui/icons-material/Description";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";

const Section = ({ title, status }) => (
  
  <Paper
    sx={{
      backgroundColor: status === "Review" ? "#f6df4d66" : "#9edec669",
      padding: "20px",
      marginBottom: "10px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    }}
  >
    <Typography variant="body1">{title}</Typography>
    <Button
      variant="contained"
      sx={{
        backgroundColor: status === "Review" ? "#f6b54d" : "#3c7168",
        color: "#fff",
        "&:hover": {
          backgroundColor: status === "Review" ? "#d49a3a" : "#2b5a4e",
        },
      }}
    >
      {status}
    </Button>
  </Paper>
);

export default function EditQuestions() {
  const [activeTab, setActiveTab] = useState("questions");
  const [uploadedFile, setUploadedFile] = useState(null);

  const handleFileUpload = (event) => {
    if (event.target.files && event.target.files.length > 0) {
      setUploadedFile(event.target.files[0]);
    }
  };

  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <Container maxWidth="lg" sx={{ mt: 12 }}>
        {/* Back Button */}
        <Box display="flex" alignItems="center" mb={2}>
          <IconButton>
            <ArrowBackIcon />
          </IconButton>
          <Typography variant="h6">Back to application overview</Typography>
        </Box>
        <Divider />

        {/* Application Details */}
<Box mt={2}>
  <Grid container spacing={2} alignItems="center">
    {/* Left Section - Application Info */}
    <Grid item xs={8}>
      <Typography variant="h5" color="#1b4e3b" textAlign="left">
        House Planning Application001
      </Typography>
      <Typography variant="body1" textAlign="left">
        Householder Planning Permission
      </Typography>
      <Typography variant="body1" textAlign="left">
        123, ABC, Brushfield House, 11 Brushfield Street, London, E1 6AN
      </Typography>
      <Typography variant="body1" textAlign="left">City of London</Typography>
    </Grid>

    {/* Right Section - Application Metadata */}
    <Grid item xs={4} textAlign="right">
      <Typography variant="body1">Application ID: xxxxxx</Typography>
      <Typography variant="body1">
        Application Status: <strong>Draft</strong>
      </Typography>
      <Typography variant="body1">Version: 1</Typography>
      <Typography variant="body1">Last Save: 26-11-2024 12:25 PM</Typography>
    </Grid>
  </Grid>
</Box>


        {/* Pre-flight Suggested Edits */}
        <Box mt={4} mb={2} display="flex" justifyContent="space-between">
          <Typography variant="h6" color="#1b4e3b" textAlign="center">
            Pre-flight Suggested Edits
          </Typography>
          <Button variant="outlined">Re-calculate Score</Button>
        </Box>

        {/* Tabs for Questions & Documents */}
        <Box display="flex" mb={2}>
          <Typography
            variant="h6"
            sx={{
              mr: 2,
              cursor: "pointer",
              borderBottom: activeTab === "questions" ? "2px solid #3eb489" : "",
            }}
            onClick={() => setActiveTab("questions")}
          >
            Application Questions
          </Typography>
          <Typography variant="h6">|</Typography>
          <Typography
            variant="h6"
            sx={{
              ml: 2,
              cursor: "pointer",
              borderBottom: activeTab === "documents" ? "2px solid #3eb489" : "",
            }}
            onClick={() => setActiveTab("documents")}
          >
            Application Documents
          </Typography>
        </Box>
        <Divider sx={{ mb: 2 }} />

        {/* Conditional Rendering Based on Selected Tab */}
        {activeTab === "questions" ? (
          <Box>
            <Section title="Site Location" status="Completed" />
            <Section title="Applicant Details" status="Completed" />
            <Section title="Description of Proposed Works" status="Review" />
            <Section title="Site Information" status="Completed" />
            <Section
              title="Further Information about the Proposed Development"
              status="Completed"
            />
            <Section title="Development Dates" status="Review" />
            <Section title="Trees and Hedges" status="Completed" />
            <Section
              title="Pedestrian and Vehicle Access, Roads and Rights of Way"
              status="Completed"
            />
            <Section title="Vehicle Parking" status="Completed" />
            <Section title="Biodiversity Net Gain" status="Completed" />
            <Section title="Site Visit" status="Completed" />
            <Section title="Pre-application Advice" status="Completed" />
            <Section title="Authority Employee/Member" status="Completed" />
            <Section title="Certificates" status="Completed" />
            <Section title="Materials" status="Review" />
          </Box>
        ) : (
          <Box>
            {/* Application Documents Section */}
            <Paper sx={{ padding: 2, mb: 2 }}>
              <Typography variant="h6">Plans and Drawings</Typography>

              <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
                <DescriptionIcon />
                <Typography variant="body1" sx={{ ml: 1 }}>
                  Proposed Plan and Elevation 01.pdf
                </Typography>
              </Box>

              {/* File Upload Section */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  mt: 2,
                  bgcolor: "#f6df4d66",
                  p: 2,
                }}
              >
                <DescriptionIcon />
                <Typography variant="body1" sx={{ ml: 1 }}>
                  Proposed and Existing Roof Plan.pdf
                </Typography>
                <Button component="label" variant="outlined" sx={{ ml: "auto" }}>
                  Re-upload Document
                  <input
                    type="file"
                    hidden
                    onChange={handleFileUpload}
                    accept=".pdf,.doc,.docx,.png,.jpg"
                  />
                </Button>
              </Box>
              {uploadedFile && (
                <Typography variant="body2" sx={{ mt: 1 }}>
                  Uploaded: {uploadedFile.name}
                </Typography>
              )}

              <Typography variant="body2" sx={{ mt: 2 }}>
                Note: This document cannot be accepted as it includes roof plans
                that do not align with the provided specifications.
              </Typography>
            </Paper>

            <Paper sx={{ padding: 2 }}>
              <Typography variant="h6">Location Plan</Typography>
              <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
                <DescriptionIcon />
                <Typography variant="body1" sx={{ ml: 1 }}>
                  Location Plan_1-500_Rev-001 1.pdf
                </Typography>
              </Box>
            </Paper>
          </Box>
        )}
      </Container>
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
