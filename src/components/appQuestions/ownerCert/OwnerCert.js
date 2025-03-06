import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Box,
  Typography,
  Paper,
  Radio,
  RadioGroup,
  FormControlLabel,
  Button,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";

export default function OwnershipCertificates() {
  const navigate = useNavigate();
  const [answers, setAnswers] = useState({
    soleOwner: "",
    agriculturalHolding: "",
    noticeToOwners: "",
    noticeToSomeOwners: "",
  });

  const handleAnswerChange = (question, value) => {
    setAnswers((prev) => ({ ...prev, [question]: value }));
  };

  // Determine which certificate to display
  const determineCertificate = () => {
    const { soleOwner, agriculturalHolding, noticeToOwners, noticeToSomeOwners } = answers;

    if (soleOwner === "yes" && agriculturalHolding === "no") return "A";
    if (soleOwner === "no" && agriculturalHolding === "no" && noticeToOwners === "no") return "B";
    if (soleOwner === "yes" && agriculturalHolding === "yes" && noticeToOwners === "no" && noticeToSomeOwners === "yes") return "C";
    if (soleOwner === "yes" && agriculturalHolding === "yes" && noticeToOwners === "no" && noticeToSomeOwners === "no") return "D";

    return null;
  };

  const certificate = determineCertificate();

  // Certificate file paths
  const certificateLinks = {
    A: "/appQuestions/ownerCert/checked/aChecked",
    B: "/appQuestions/ownerCert/checked/bChecked",
    C: "/appQuestions/ownerCert/checked/cChecked",
    D: "/appQuestions/ownerCert/checked/dChecked",
  };

  return (
    <Container maxWidth="md" sx={{ bgcolor: "white", py: 3 }}>
      {/* Back Navigation */}
      <Box sx={{ display: "flex", alignItems: "center", mb: 2, mt: 8 }}>
        <ArrowBackIcon
          style={{ position: "absolute", top: "108px", left: "27px", cursor: "pointer" }}
          onClick={() => navigate("/appOverview")}
        />
        <Typography
          position="absolute"
          top="106px"
          left="60px"
          variant="h6"
          fontWeight="medium"
          onClick={() => navigate("/appOverview")}
          sx={{ cursor: "pointer" }}
        >
          Back to application overview
        </Typography>
      </Box>

      {/* Page Title */}
      <Typography
        variant="h4"
        component="div"
        sx={{
          color: "#1b4e3b",
          fontWeight: "bold",
          mb: 3,
          mt: 8,
          textAlign: "left",
        }}
      >
        House Planning Application001
      </Typography>

      <Paper elevation={2} sx={{ p: 4, borderRadius: 2, border: "1px solid #ddd" }}>
        <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
          Ownership Certificates Selection
        </Typography>

        <Box sx={{ mb: 3 }}>
          <Typography>
            Is the applicant the sole owner of all the land and has been for more than 21 days?
          </Typography>
          <RadioGroup
            row
            value={answers.soleOwner}
            onChange={(e) => handleAnswerChange("soleOwner", e.target.value)}
          >
            <FormControlLabel value="yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="no" control={<Radio />} label="No" />
          </RadioGroup>
        </Box>

        <Box sx={{ mb: 3 }}>
          <Typography>Is any of the land part of an Agricultural Holding?</Typography>
          <RadioGroup
            row
            value={answers.agriculturalHolding}
            onChange={(e) => handleAnswerChange("agriculturalHolding", e.target.value)}
          >
            <FormControlLabel value="yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="no" control={<Radio />} label="No" />
          </RadioGroup>
        </Box>

        <Box sx={{ mb: 3 }}>
          <Typography>Can you give notice to all other owners/agricultural tenants?</Typography>
          <RadioGroup
            row
            value={answers.noticeToOwners}
            onChange={(e) => handleAnswerChange("noticeToOwners", e.target.value)}
          >
            <FormControlLabel value="yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="no" control={<Radio />} label="No" />
          </RadioGroup>
        </Box>

        {answers.noticeToOwners === "no" && (
          <Box sx={{ mb: 3 }}>
            <Typography>If No, can you give notice to at least one owner?</Typography>
            <RadioGroup
              row
              value={answers.noticeToSomeOwners}
              onChange={(e) => handleAnswerChange("noticeToSomeOwners", e.target.value)}
            >
              <FormControlLabel value="yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>
          </Box>
        )}

        {certificate && (
          <Box sx={{ mt: 3 }}>
            <Typography variant="h6" fontWeight="bold">
              You need to complete{" "}
              <Button
                href={certificateLinks[certificate]}
                target="_blank"
                rel="noopener noreferrer"
              >
                Certificate {certificate}
              </Button>
            </Typography>
          </Box>
        )}
      </Paper>

      {/* Action Buttons */}
      <Box sx={{ display: "flex", justifyContent: "center", mt: 8 }}>
        <Button variant="outlined" sx={{ mr: 2 }}>
          Save Changes
        </Button>
        <Button variant="outlined" sx={{ mr: 2 }}>
          Previous
        </Button>
        <Button
          variant="contained"
          sx={{ bgcolor: "#3c7168" }}
          onClick={() => navigate("/appQuestions/appDetails")}
        >
          Next
        </Button>
      </Box>

      {/* Ask Paive AI Chatbot Pop-up */}
      <Box
        sx={{
          position: "fixed",
          bottom: 16,
          left: 16,
          width: 158,
          height: 50,
          marginBottom: 65,
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
    </Container>
  );
}
