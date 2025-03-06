import React from "react";
import {
  Box,
  Button,
  Container,
  Divider,
  Typography,
} from "@mui/material";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";

export default function DetailComp() {
  return (
    <Box
      sx={{
        bgcolor: "white",
        display: "flex",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <Container
        maxWidth="lg"
        sx={{ bgcolor: "white", height: "1920px", position: "relative" }}
      >
        <Typography
          variant="h4"
          sx={{
            position: "absolute",
            top: 205,
            left: 72,
            color: "#1b4e3b",
            fontWeight: "bold",
          }}
        >
          House Planning Application001
        </Typography>

        <Box
          sx={{
            position: "absolute",
            top: 285,
            left: 65,
            width: "1304px",
            height: "1184px",
            borderRadius: 1,
            border: "1px solid #3c7168",
          }}
        >
          {[ 
            "Site Location",
            "Applicant Details",
            "Description of Proposed Works",
            "Site information",
            "Further information about the Proposed Development",
            "Development Dates",
            "Materials",
            "Trees and Hedges",
            "Pedestrian and Vehicle Access, Roads and Rights of Way",
            "Vehicle Parking",
            "Biodiversity Net Gain",
            "Site Visit",
            "Pre-application Advice",
            "Authority Employee/Member",
            "Certificates",
          ].map((text, index) => (
            <React.Fragment key={index}>
              <Typography
                variant="h6"
                sx={{ position: "absolute", top: 43 + index * 77, left: 47 }}
              >
                {text}
              </Typography>
              <Divider
                sx={{
                  position: "absolute",
                  top: 97 + index * 77,
                  left: 0,
                  width: "100%",
                }}
              />
              <Button
                variant={index < 2 ? "contained" : "outlined"}
                sx={{
                  position: "absolute",
                  top: 8 + index * 77,
                  left: 1104,
                  width: 160,
                  height: 48,
                  bgcolor: index < 2 ? "#3c7168" : "transparent",
                  color: index < 2 ? "white" : "#3c7168",
                  borderColor: "#3c7168",
                }}
              >
                {index < 2 ? "Completed" : "Incomplete"}
              </Button>
            </React.Fragment>
          ))}
        </Box>

        <Button
          variant="contained"
          sx={{
            position: "absolute",
            top: 1525,
            left: 583,
            width: 286,
            height: 54,
            bgcolor: "#3c7168",
          }}
        >
          Back to Application Overview
        </Button>
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
};
