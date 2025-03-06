import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import SearchIcon from "@mui/icons-material/Search";
import {
  Box,
  Button,
  Container,
  IconButton,
  InputAdornment,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import LinearProgress from "@mui/material/LinearProgress";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function MyApplications() {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        bgcolor: "white",
        display: "flex",
        justifyContent: "center", // Centers horizontally
        alignItems: "center", // Centers vertically
        minHeight: "90vh",
      }}
    >
      <Container
        sx={{
          bgcolor: "white",
          overflow: "hidden",
          maxWidth: "80%", // Ensures responsiveness
          height: "90vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center", // Centers content inside the container
          position: "relative",
        }}
      >
        {/* Page Title */}
        <Typography
          variant="h4"
          sx={{
            marginTop: "11rem",
            fontFamily: "Inter-Medium",
            fontWeight: "bold",
            color: "black",
            textAlign: "left", 
          }}
        >
          My Applications
        </Typography>

        {/* Search and Buttons Section */}
        <Box
          sx={{
            marginTop: "2rem",
            width: "100%",
            maxWidth: "900px", // Centers within a max width
            height: "80px",
            bgcolor: "#9edec669",
            borderRadius: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 20px",
          }}
        >
          <Button
            variant="contained"
            sx={{
              bgcolor: "white",
              border: "1px solid #3c7168",
              borderRadius: 1,
              textTransform: "none",
            }}
            onClick={() => navigate("/newApplication")}
          >
            Start a New Application
          </Button>

          <TextField
            variant="outlined"
            placeholder="Search"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            sx={{
              width: "50%",
              bgcolor: "white",
              borderRadius: 1,
              border: "1px solid #3c7168",
            }}
          />

          <Box>
            <Button
              variant="contained"
              sx={{
                bgcolor: "white",
                border: "1px solid #3c7168",
                borderRadius: 1,
                textTransform: "none",
                marginRight: 1,
              }}
            >
              Sort
            </Button>
            <Button
              variant="contained"
              sx={{
                bgcolor: "white",
                border: "1px solid #3c7168",
                borderRadius: 1,
                textTransform: "none",
              }}
            >
              Filter
            </Button>
          </Box>
        </Box>

        {/* Application Card */}
        <Paper
          sx={{
            marginTop: "2rem",
            width: "100%",
            maxWidth: "900px", // Keeps card centered
            height: "250px",
            borderRadius: 1,
            border: "1px solid #3c7168",
            padding: 2,
            position: "relative",
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontFamily: "Inter-SemiBold",
              fontWeight: "bold",
              color: "#1b4e3b",
              textAlign: "left",
              mb: 1,
            }}
            onClick={() => navigate("/appOverview")}
          >
            House Planning Application001
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontFamily: "Inter-Regular", color: "black", textAlign: "left", mb: 1 }}
          >
            123, ABC, Brushfield House, 11 Brushfield Street, London, E1 6AN
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontFamily: "Inter-Regular", color: "black", textAlign: "left", mb: 1 }}
          >
            Householder Planning Permission
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontFamily: "Inter-Regular", color: "black", textAlign: "left", mb: 1 }}
          >
            City of London
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontFamily: "Inter-Regular", color: "black", textAlign: "left", mb: 1 }}
          >
            Application ID: xxxxxx
          </Typography>

          {/* Progress Section */}
          <Box
            sx={{
              position: "absolute",
              bottom: 10,
              left: 15,
              width: "95%",
              height: 64,
              bgcolor: "#9edec669",
              borderRadius: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "0px 10px",
            }}
          >
            <Typography variant="body1" sx={{ fontFamily: "Inter-Regular", color: "black" }}>
              Draft
            </Typography>
            <Typography variant="body1" sx={{ fontFamily: "Inter-Regular", color: "black" }}>
              10%
            </Typography>
            <LinearProgress
              variant="determinate"
              value={10}
              sx={{
                width: "40%",
                height: 5,
              }}
            />
            <Typography variant="body1" sx={{ fontFamily: "Inter-Regular", color: "black" }}>
              Last Save: 26-11-2024 12:25 PM
            </Typography>
            <Typography variant="body1" sx={{ fontFamily: "Inter-Regular", color: "black" }}>
              Version: 1
            </Typography>
          </Box>

          {/* Options Button */}
          <IconButton sx={{ position: "absolute", top: 10, right: 10 }}>
            <MoreHorizIcon />
          </IconButton>
        </Paper>
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
