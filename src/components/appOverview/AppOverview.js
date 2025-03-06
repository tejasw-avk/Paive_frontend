import React from "react";
import { 
  Box, 
  Button, 
  Container, 
  Typography, 
  Divider, 
  LinearProgress, 
  IconButton 
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import InfoIcon from "@mui/icons-material/Info";
import { useNavigate } from "react-router-dom";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";

export default function OverviewComp() {
  const navigate = useNavigate();
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
        sx={{
          bgcolor: "white",
          width: 1440,
          height: 1440,
          position: "relative",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "flex-start", mb: 2, mt: 13, ml:1 }}>
      <ArrowBackIcon />
        <Typography variant="h5" sx={{ ml: 2, textAlign: "left" }} onClick={() => navigate("/myApplications")}>
          Back to my applications
        </Typography>
        </Box>
        <Divider sx={{ position: "absolute", top: 167, width: "100%" }} />
        <Typography
          variant="h4"
          sx={{
            position: "absolute",
            top: 203,
            left: 72,
            fontFamily: "Inter-SemiBold",
            color: "#1b4e3b",
          }}
        >
          House Planning Application001
        </Typography>
        <Typography
          variant="h5"
          sx={{
            position: "absolute",
            top: 265,
            left: 71,
            fontFamily: "Inter-Regular",
          }}
        >
          123, ABC, Brushfield House, 11 Brushfield Street, London, E1 6AN
        </Typography>
        <Typography
          variant="h5"
          sx={{
            position: "absolute",
            top: 314,
            left: 987,
            fontFamily: "Inter-Regular",
          }}
        >
          26-11-2024 12:25 PM
        </Typography>
        <Typography
          variant="h5"
          sx={{
            position: "absolute",
            top: 314,
            left: 889,
            fontFamily: "Inter-Regular",
          }}
        >
          Last Save:
        </Typography>
        <Typography
          variant="h5"
          sx={{
            position: "absolute",
            top: 290,
            left: 888,
            fontFamily: "Inter-Regular",
          }}
        >
          Version: 1
        </Typography>
        <Typography
          variant="h5"
          sx={{
            position: "absolute",
            top: 241,
            left: 72,
            fontFamily: "Inter-Regular",
          }}
        >
          Householder Planning Permission
        </Typography>
        <Typography
          variant="h5"
          sx={{
            position: "absolute",
            top: 290,
            left: 72,
            fontFamily: "Inter-Regular",
          }}
        >
          City of London
        </Typography>
        <Typography
          variant="h5"
          sx={{
            position: "absolute",
            top: 242,
            left: 888,
            fontFamily: "Inter-Regular",
          }}
        >
          Application ID: xxxxxx
        </Typography>
        <Typography
          variant="h5"
          sx={{
            position: "absolute",
            top: 266,
            left: 888,
            fontFamily: "Inter-Regular",
          }}
        >
          Application Status: <strong>Draft</strong>
        </Typography>
        <Box
          sx={{
            position: "absolute",
            top: 400,
            left: 50,
            width: 1300,
            height: 1004,
            borderRadius: 1,
            border: 1,
            borderColor: "#3c7168",
          }}
        >
          <Typography
            variant="h5"
            sx={{
              position: "absolute",
              top: 7,
              left: 33,
              fontFamily: "Inter-Medium",
            }}
          >
            Complete Application Questions
          </Typography>
          <LinearProgress
            variant="determinate"
            value={10}
            sx={{
              position: "absolute",
              top: 62,
              left: 37,
              width: 404,
              height: 3,
            }}
          />
          <Typography
            variant="body1"
            sx={{
              position: "absolute",
              top: 78,
              left: 34,
              fontFamily: "Inter-Regular",
            }}
          >
            1/15 Steps Completed
          </Typography>
          <Button
            variant="outlined"
            sx={{
              position: "absolute",
              top: 122,
              left: 37,
              width: 161,
              borderColor: "#3c7168",
              color: "#3c7168",
            }}
            onClick={() => navigate("/appQuestions")}
          >
            Continue
          </Button>
          <Button
            variant="outlined"
            disabled
            sx={{
              position: "absolute",
              top: 114,
              left: 601,
              width: 180,
              borderColor: "#757575",
              color: "#757575",
            }}
          >
            Generate Score
          </Button>
          <Typography
            variant="h5"
            sx={{
              position: "absolute",
              top: 7,
              left: 603,
              fontFamily: "Inter-Medium",
            }}
          >
            Pre-flight Check
          </Typography>
          <Typography
            variant="body1"
            sx={{
              position: "absolute",
              top: 59,
              left: 603,
              fontFamily: "Inter-Regular",
            }}
          >
            Application cannot be reviewed until all sections are completed.
          </Typography>
          <InfoIcon sx={{ position: "absolute", top: 10, left: 767 }} />
          <Box
            sx={{
              position: "absolute",
              top: 247,
              left: 717,
              width: 368,
              height: 368,
              borderRadius: "50%",
              border: "10px solid #9edec669",
            }}
          />
          <Typography
            variant="h5"
            sx={{
              position: "absolute",
              top: 221,
              left: 37,
              fontFamily: "Inter-Medium",
            }}
          >
            BNG Metric Calculation
          </Typography>
          <LinearProgress
            variant="determinate"
            value={10}
            sx={{
              position: "absolute",
              top: 255,
              left: 41,
              width: 404,
              height: 3,
            }}
          />
          <Typography
            variant="body1"
            sx={{
              position: "absolute",
              top: 271,
              left: 38,
              fontFamily: "Inter-Regular",
            }}
          >
            1/10 Steps Completed
          </Typography>
          <Button
            variant="outlined"
            sx={{
              position: "absolute",
              top: 315,
              left: 41,
              width: 161,
              borderColor: "#3c7168",
              color: "#3c7168",
            }}
          onClick ={()=> navigate("/bngMetrics/bngQuestionsOverview")}
          >
            Continue
          </Button>
          <Typography
            variant="h5"
            sx={{
              position: "absolute",
              top: 419,
              left: 37,
              fontFamily: "Inter-Medium",
            }}
          >
            Upload Application Documents
          </Typography>
          <LinearProgress
            variant="determinate"
            value={0}
            sx={{
              position: "absolute",
              top: 453,
              left: 41,
              width: 404,
              height: 3,
            }}
          />
          <Typography
            variant="body1"
            sx={{
              position: "absolute",
              top: 469,
              left: 38,
              fontFamily: "Inter-Regular",
            }}
          >
            0/3 Steps Completed
          </Typography>
          <Button
            variant="outlined"
            sx={{
              position: "absolute",
              top: 513,
              left: 41,
              width: 161,
              borderColor: "#3c7168",
              color: "#3c7168",
            }}
            onClick={() => navigate("/appOverview/uploadDocs")}
          >
            Continue
          </Button>
          <Button
            variant="outlined"
            sx={{
              position: "absolute",
              top: 688,
              left: 37,
              width: 161,
              borderColor: "#3c7168",
              color: "#3c7168",
            }}
            onClick={() => navigate("/appOverview/calculateFee")}
          >
            Calculate Fee
          </Button>
          <Button
            variant="outlined"
            disabled
            sx={{
              position: "absolute",
              top: 904,
              left: 37,
              width: 180,
              borderColor: "#757575",
              color: "#757575",
            }}
          >
            Submit Application
          </Button>
          <Typography
            variant="h5"
            sx={{
              position: "absolute",
              top: 620,
              left: 37,
              fontFamily: "Inter-Medium",
            }}
          >
            Calculate Fee
          </Typography>
          <Typography
            variant="body1"
            sx={{
              position: "absolute",
              top: 652,
              left: 37,
              fontFamily: "Inter-Regular",
            }}
          >
            Calculate your planning application fee
          </Typography>
          <Typography
            variant="h5"
            sx={{
              position: "absolute",
              top: 805,
              left: 37,
              fontFamily: "Inter-Medium",
            }}
          >
            Submit Application
          </Typography>
          <Typography
            variant="body1"
            sx={{
              position: "absolute",
              top: 837,
              left: 37,
              fontFamily: "Inter-Regular",
            }}
          >
            Application cannot be submitted until all sections are completed.
          </Typography>
        </Box>
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