import React, { useRef } from "react";
import {
  Box,
  Button,
  Paper,
  Typography,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";

export default function UploadDocs() {
  const navigate = useNavigate();
  const fileInputRef1 = useRef(null);
  const fileInputRef2 = useRef(null);
  const fileInputRef3 = useRef(null);

  // Function to trigger file input when button is clicked
  const handleUploadClick = (ref) => {
    if (ref.current) {
      ref.current.click();
    }
  };

  return (
    <Box bgcolor="white" display="flex" justifyContent="center" width="100%">
      <Box bgcolor="white" width={1440} height={1780} position="relative">
        <Box sx={{ display: "flex", alignItems: "center", mb: 2, mt: 8, ml: 1 }}>
          <ArrowBackIcon />
          <Typography variant="h6" sx={{ ml: 2, textAlign: "left" }}onClick={() => navigate("/appOverview")}>
            Back to application overview
          </Typography>
        </Box>
        <Typography
          variant="h4"
          color="#1b4e3b"
          fontWeight="600"
          position="absolute"
          top={180}
          left={72}
        >
          House Planning Application001
        </Typography>

        <Paper
          elevation={1}
          sx={{
            width: 1304,
            height: 520,
            position: "absolute",
            top: 260,
            left: 65,
            borderRadius: 2,
            border: "1px solid #3c7168",
          }}
        >
          <Typography
            variant="h5"
            fontWeight="bold"
            position="absolute"
            top={22}
            left={37}
          >
            Minimum Requirements
          </Typography>

          {/* First Upload Section */}
          <Paper
            elevation={1}
            sx={{
              width: 1200,
              height: 147,
              position: "absolute",
              top: 110,
              left: 43,
              borderRadius: 2,
              border: "1px solid #b3b3b3",
            }}
          >
            <Typography
              variant="h6"
              fontWeight="bold"
              position="absolute"
              top={5}
              left={17}
            >
              Plans and drawings
            </Typography>

            <Typography
              variant="body1"
              position="absolute"
              width={562}
              top={53}
              left={17}
              textAlign="left"
            >
              Comprehensive plans and drawings, including site/block plans,
              elevations, and sections, are essential to accurately describe the
              subject of your application. All plans must be drawn to a clearly
              defined scale.
            </Typography>

            <input
              type="file"
              ref={fileInputRef1}
              style={{ display: "none" }}
              accept=".pdf,.png,.jpg,.jpeg"
            />

            <Button
              variant="outlined"
              sx={{
                position: "absolute",
                top: 27,
                left: 889,
                width: 226,
                borderColor: "#3c7168",
              }}
              onClick={() => handleUploadClick(fileInputRef1)}
            >
              Upload Documents
            </Button>

            <Typography
              variant="body2"
              color="#757575"
              position="absolute"
              width={222}
              top={81}
              left={893}
            >
              *10MB maximum file upload size
              <br />
              &nbsp;&nbsp; PDFs, PNGs, JPGs or JPEGs
            </Typography>
          </Paper>

          {/* Second Upload Section */}
          <Paper
            elevation={1}
            sx={{
              width: 1200,
              height: 168,
              position: "absolute",
              top: 293,
              left: 43,
              borderRadius: 2,
              border: "1px solid #b3b3b3",
            }}
          >
            <Typography
              variant="h6"
              fontWeight="bold"
              position="absolute"
              top={5}
              left={17}
            >
              Location plan
            </Typography>

            <Typography
              variant="body1"
              position="absolute"
              width={562}
              top={53}
              left={17}
              textAlign="left"
            >
              Your application must include a plan clearly identifying the land
              it pertains to, with the site outlined in red. The plan should: be
              drawn to a specified scale, indicate the direction of North, and
              provide enough detail (such as road names) to accurately define
              the location.
            </Typography>

            <input
              type="file"
              ref={fileInputRef2}
              style={{ display: "none" }}
              accept=".pdf,.png,.jpg,.jpeg"
            />

            <Button
              variant="outlined"
              sx={{
                position: "absolute",
                top: 38,
                left: 889,
                width: 226,
                borderColor: "#3c7168",
              }}
              onClick={() => handleUploadClick(fileInputRef2)}
            >
              Upload Document
            </Button>

            <Typography
              variant="body2"
              color="#757575"
              position="absolute"
              width={222}
              top={90}
              left={889}
            >
              *10MB maximum file upload size
              <br />
              &nbsp;&nbsp; PDF, PNG, JPG or JPEG
            </Typography>
          </Paper>
        </Paper>

        <Paper
          elevation={1}
          sx={{
            width: 1304,
            height: 467,
            position: "absolute",
            top: 820,
            left: 65,
            borderRadius: 2,
            border: "1px solid #3c7168",
          }}
        >
          <Typography
            variant="h5"
            fontWeight="bold"
            position="absolute"
            top={22}
            left={37}
          >
            Additional Documents
          </Typography>

          {/* Third Upload Section */}
          <Paper
            elevation={1}
            sx={{
              width: 1200,
              height: 147,
              position: "absolute",
              top: 100,
              left: 34,
              borderRadius: 2,
              border: "1px solid #b3b3b3",
            }}
          >
            <Typography
              variant="h6"
              fontWeight="bold"
              position="absolute"
              top={52}
              left={26}
            >
              Energy Performance Certificate
            </Typography>

            <input
              type="file"
              ref={fileInputRef3}
              style={{ display: "none" }}
              accept=".pdf,.png,.jpg,.jpeg"
            />

            <Button
              variant="outlined"
              sx={{
                position: "absolute",
                top: 27,
                left: 898,
                width: 226,
                borderColor: "#3c7168",
              }}
              onClick={() => handleUploadClick(fileInputRef3)}
            >
              Upload Document
            </Button>

            <Typography
              variant="body2"
              color="#757575"
              position="absolute"
              width={222}
              top={79}
              left={898}
            >
              *10MB maximum file upload size
              <br />
              &nbsp;&nbsp; PDF, PNG, JPG or JPEG
            </Typography>
          </Paper>
        </Paper>
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
}
