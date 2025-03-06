import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Typography,
  Divider,
  IconButton,
  Modal,
  Checkbox,
  Link,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import InfoIcon from "@mui/icons-material/Info";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";

const PreFlightScoreTnc = ({ open, onClose }) => {
  const [checked, setChecked] = useState(false);

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        border={1}
        borderColor="#3c7168"
        width={918}
        height={544}
        position="absolute"
        top="50%"
        left="50%"
        bgcolor="white"
        style={{ transform: "translate(-50%, -50%)", padding: "20px" }}
      >
        <Typography variant="h5" textAlign="center" fontWeight="medium">
          Pre-flight Score
        </Typography>

        <Typography variant="body1" width="90%" margin="20px auto">
          The pre-flight score is a diagnostic tool designed to help you improve your
          application. It identifies areas for enhancement and provides actionable feedback.
        </Typography>

        <Typography variant="body1" width="90%" margin="10px auto">
          - The pre-flight score does not determine whether your application will be accepted or rejected.
          <br />
          - The sole purpose of this tool is to highlight areas for improvement.
          <br />
          - Use the feedback to revise your application before final submission.
          <br />
          - For more info, access our{" "}
          <Link href="#" underline="hover" target="_blank">
            guides
          </Link>{" "}
          or{" "}
          <Link href="#" underline="hover" target="_blank">
            FAQs
          </Link>
          .
        </Typography>

        {/* Checkbox Section */}
        <Box display="flex" alignItems="center" margin="20px">
          <Checkbox checked={checked} onChange={(e) => setChecked(e.target.checked)} />
          <Typography variant="body1">
            I have read and understood the purpose of the pre-flight score and agree to proceed.
          </Typography>
        </Box>

        {/* Continue Button */}
        <Box textAlign="center" marginTop="20px">
          <Button variant="contained" color="primary" disabled={!checked} onClick={onClose} sx={{ bgcolor: "#3c7168" }}>
            Continue
          </Button>
        </Box>

        {/* Close Icon */}
        <IconButton style={{ position: "absolute", top: 10, right: 10 }} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </Box>
    </Modal>
  );
};

export default function OverviewComp() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  return (
    <Box sx={{ bgcolor: "white", display: "flex", justifyContent: "center", width: "100%" }}>
      <Container sx={{ bgcolor: "white", maxWidth: "1200px", padding: "20px" }}>
        {/* Back Navigation */}
        <Box sx={{ display: "flex", alignItems: "center", mb: 2, mt: 3 }}>
          <IconButton onClick={() => navigate("/myApplications")}>
            <ArrowBackIcon />
          </IconButton>
          <Typography variant="h6" sx={{ ml: 1, cursor: "pointer" }} onClick={() => navigate("/myApplications")}>
            Back to my applications
          </Typography>
        </Box>

        <Divider />

        {/* Application Details */}
        <Box sx={{ mt: 3, display: "flex", justifyContent: "space-between", alignItems: "flex-start", textAlign: "left" }}>
          <Box>
            <Typography variant="h6" sx={{ fontWeight: "bold", color: "#1b4e3b" }}>
              House Planning Application001
            </Typography>
            <Typography variant="body2">Householder Planning Permission</Typography>
            <Typography variant="body2">
              123, ABC, Brushfield House, 11 Brushfield Street, London, E1 6AN
            </Typography>
            <Typography variant="body2">City of London</Typography>
          </Box>

          <Box sx={{ textAlign: "left" }}>
            <Typography variant="body2"><strong>Application ID:</strong> xxxxxx</Typography>
            <Typography variant="body2"><strong>Application Status:</strong> <span style={{ fontWeight: "bold" }}>Draft</span></Typography>
            <Typography variant="body2"><strong>Version:</strong> 1</Typography>
            <Typography variant="body2"><strong>Last Save:</strong> 26-11-2024 12:25 PM</Typography>
          </Box>
        </Box>

        {/* Main Section */}
        <Box sx={{ display: "flex", border: "1px solid #d4e7df", borderRadius: "10px", mt: 3, p: 3 }}>
          <Box sx={{ flex: 1, pr: 3 }}>
            {/* Steps Sections */}
            {["Complete Application Questions", "BNG Metric Calculation", "Upload Application Documents"].map((step, index) => (
              <Box key={index} sx={{ mb: 3 }}>
                <Typography variant="subtitle1" fontWeight="bold">{step}</Typography>
                <Box sx={{ width: "100%", height: 2, bgcolor: "#3c7168", my: 0.5 }} />
                <Typography variant="body2" sx={{ mb: 1 }}>{index + 10}/10 Steps Completed</Typography>
                <Button variant="outlined">Preview</Button>
              </Box>
            ))}

            {/* Calculate Fee */}
            <Box sx={{ mb: 3 }}>
              <Typography variant="subtitle1" fontWeight="bold">Calculate Fee</Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>Calculate your planning application fee</Typography>
              <Button variant="outlined">Calculate Fee</Button>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1, mt: 1 }}>
                <Box sx={{ bgcolor: "#d8f0df", px: 2, py: 0.5, borderRadius: 1 }}>
                  <Typography variant="body1">€ 258.00</Typography>
                </Box>
                <Button variant="contained" sx={{ bgcolor: "#3c7168" }}>Make Payment</Button>
              </Box>
            </Box>

            {/* Submit Application */}
            <Box>
              <Typography variant="subtitle1" fontWeight="bold">Submit Application</Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                We recommend generating a pre-flight score and reviewing the application thoroughly before proceeding
              </Typography>
              <Button variant="contained" disabled sx={{ bgcolor: "#d3d3d3" }}>Submit Application</Button>
            </Box>
          </Box>

          {/* Right Section - Pre-flight Check */}
          <Box sx={{ flex: 1, pl: 3, borderLeft: "1px solid #d4e7df", textAlign: "left" }}>
            <Typography variant="subtitle1" fontWeight="bold">
              Pre-flight Check <InfoIcon fontSize="small" />
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Conduct a pre-flight check to ensure your application is complete, accurate, and ready for submission.
            </Typography>
            <Button variant="contained" sx={{ bgcolor: "#3c7168", mb: 3 }} onClick={() => setOpen(true)}>
              Generate Score
            </Button>
            <Box sx={{ width: 180, height: 180, borderRadius: "50%", border: "10px solid #d4e7df", mx: "auto" }} />
          </Box>
        </Box>
      </Container>

      {/* Pre-flight Score Modal */}
      <PreFlightScoreTnc open={open} onClose={() => setOpen(false)} />
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

