import React from "react";
import { Box, Paper, Typography, Button, IconButton } from "@mui/material";
import RotateLeftIcon from "@mui/icons-material/RotateLeft";
import DownloadIcon from "@mui/icons-material/Download";
import MenuIcon from "@mui/icons-material/Menu";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";

export default function Applicant(){
  return (
    <Box width="100%" height="100vh" display="flex" flexDirection="column">
      {/* Main Content */}
      <Box display="flex" flexGrow={1} bgcolor="#f5f5f5">
        {/* Left Side - PDF Viewer */}
        <Box
          flex={3}
          display="flex"
          flexDirection="column"
          bgcolor="white"
          boxShadow={2}
          m={2}
          p={2}
        >
          {/* Toolbar */}
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            bgcolor="#323639"
            color="white"
            p={1}
            borderRadius="4px"
          >
            <Box display="flex" alignItems="center">
              <IconButton>
                <MenuIcon sx={{ color: "white" }} />
              </IconButton>
              <Typography fontWeight="600" fontSize="1rem" ml={1}>
                HousePlanningApplication001
              </Typography>
            </Box>
            <Box>
              <IconButton>
                <RotateLeftIcon sx={{ color: "white" }} />
              </IconButton>
              <IconButton>
                <DownloadIcon sx={{ color: "white" }} />
              </IconButton>
            </Box>
          </Box>

          {/* PDF Viewer */}
          <Box flex={1} mt={2} overflow="hidden">
            <iframe
              src="path_to_your_pdf.pdf"
              width="100%"
              height="100%"
              style={{ border: "none" }}
            ></iframe>
          </Box>
        </Box>

        {/* Right Side - Comments Section */}
        <Box
          flex={1}
          bgcolor="white"
          boxShadow={2}
          m={2}
          p={2}
          display="flex"
          flexDirection="column"
        >
          {/* Comments Header */}
          <Box display="flex" justifyContent="space-between" mb={2}>
            <Typography fontWeight="500" fontSize="1.125rem">
              Comments
            </Typography>
            <Button variant="contained" sx={{ bgcolor: "#3c7168", color: "white" }}>
              Share
            </Button>
          </Box>

          {/* Comment 1 */}
          <Paper
            elevation={1}
            sx={{
              p: 2,
              mb: 2,
              borderRadius: "10px",
              border: "1px solid #9edec6",
            }}
          >
            <Typography fontWeight="500" fontSize="0.875rem">
              John Doe
            </Typography>
            <Typography fontSize="0.875rem">Description of proposed work</Typography>
            <Typography fontSize="0.875rem" mt={1}>
              Nam aliquet, nunc eget posuere accumsan, velit nibh tincidunt tortor...
            </Typography>
            <Typography fontSize="0.75rem" color="#b3b3b3" textAlign="right">
              12:23 24/01/2025
            </Typography>
          </Paper>

          {/* Comment 2 */}
          <Paper
            elevation={1}
            sx={{
              p: 2,
              borderRadius: "10px",
              border: "1px solid #9edec6",
            }}
          >
            <Typography fontWeight="500" fontSize="0.875rem">
              John Doe
            </Typography>
            <Typography fontSize="0.875rem">Development Dates</Typography>
            <Typography fontSize="0.875rem" mt={1}>
              Ut eget gravida neque. Proin nibh eros, tempor in nulla at...
            </Typography>
            <Typography fontSize="0.75rem" color="#b3b3b3" textAlign="right">
              01:13 24/01/2025
            </Typography>
          </Paper>
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

