import React, { useState } from "react";
import { Box, Button, Container, Grid, Radio, RadioGroup, FormControlLabel, TextField, Typography, IconButton, Paper, Tooltip } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";

export default function ProposedWork() {
  const navigate = useNavigate();

  // State variables to track user responses
  const [workStarted, setWorkStarted] = useState(null);
  const [showDateInput, setShowDateInput] = useState(false);
  const [workCompleted, setWorkCompleted] = useState(null);
  const [showNextQuestion, setShowNextQuestion] = useState(false);
  const [startDate, setStartDate] = useState("");
  const [completionDate, setCompletionDate] = useState("");
  const [startDateError, setStartDateError] = useState("");
  const [completionDateError, setCompletionDateError] = useState("");
  const [workDescription, setWorkDescription] = useState("");
  const [workDescriptionError, setWorkDescriptionError] = useState("");
  
  // Handle first question selection
  const handleWorkStartedChange = (event) => {
    const value = event.target.value;
    setWorkStarted(value);
    setShowDateInput(value === "yes"); // Show date input only if "Yes" is selected
    if (value === "no") {
      setStartDate("");
      setStartDateError("");
    }
  };

  // Handle second question selection
  const handleWorkCompletedChange = (event) => {
    const value = event.target.value;
    setWorkCompleted(value);
    setShowNextQuestion(value === "yes"); // Show next question if "Yes" is selected
    if (value === "no") {
      setCompletionDate("");
      setCompletionDateError("");
    }
  };

    // Handle start date change
    const handleStartDateChange = (event) => {
      const value = event.target.value;
      setStartDate(value);
      if (!value) {
        setStartDateError("Start date is required.");
      } else {
        setStartDateError("");
      }
    };
  
    // Handle completion date change
    const handleCompletionDateChange = (event) => {
      const value = event.target.value;
      setCompletionDate(value);
      if (!value) {
        setCompletionDateError("Completion date is required.");
      } else {
        setCompletionDateError("");
      }
    };

    // Add validation for work description
    const handleWorkDescriptionChange = (event) => {
      const value = event.target.value;
      setWorkDescription(value);
      if (value.trim()) {
        setWorkDescriptionError("");
      }
    };

    // Update the validation function
    const validateAndNavigate = () => {
      let isValid = true;
      
      // Validate work description
      if (!workDescription.trim()) {
        setWorkDescriptionError("Please provide a description of the proposed works");
        isValid = false;
      }
    
      // Validate work started selection
      if (!workStarted) {
        setWorkStarted("");  // Trigger error state
        isValid = false;
      }
    
      // Validate start date if work has started
      if (workStarted === "yes" && !startDate) {
        setStartDateError("Start date is required");
        isValid = false;
      }
    
      // Validate work completed selection if work has started
      if (workStarted === "yes" && !workCompleted) {
        setWorkCompleted("");  // Trigger error state
        isValid = false;
      }
    
      // Validate completion date if work is completed
      if (workCompleted === "yes" && !completionDate) {
        setCompletionDateError("Completion date is required");
        isValid = false;
      }
    
      // Validate date logic
      if (startDate && completionDate && new Date(startDate) > new Date(completionDate)) {
        setCompletionDateError("Completion date cannot be earlier than start date");
        isValid = false;
      }
    
      // Validate dates are not in the future
      const today = new Date().toISOString().split('T')[0];
      if (startDate > today) {
        setStartDateError("Start date cannot be in the future");
        isValid = false;
      }
      if (completionDate > today) {
        setCompletionDateError("Completion date cannot be in the future");
        isValid = false;
      }
    
      if (isValid) {
        navigate("/appQuestions/siteInfo");
      }
    };

  return (
    <Box sx={{ bgcolor: "white", display: "flex", justifyContent: "center", width: "100%", height: "90vh", overflow: "auto" }}>
      <Container maxWidth="lg" sx={{ bgcolor: "white", overflow: "hidden", padding: 4 }}>
        {/* Back to Application Overview */}
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

        {/* Title */}
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            color: "#1b4e3b",
            mb: 3,
            mt: 6,
            textAlign: "left",
          }}
        >
          House Planning Application001
        </Typography>

        {/* Proposed Work Section */}
        <Paper sx={{ padding: 3, borderRadius: 1, border: 1, borderColor: "#3c7168" }}>
          <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                textAlign: "left",
                display: "flex",
                alignItems: "center",
              }}
            >
              Description of Proposed Works
              <Tooltip title="Provide description of the proposed works">
                <IconButton sx={{color:"black"}}>
                  <InfoIcon color="black" />
                </IconButton>
              </Tooltip>
            </Typography>
          </Box>

          {/* Proposed Work Description */}
          <Typography variant="body1" sx={{ mb: 2, textAlign: "left" }}>
            Please describe the proposed works
          </Typography>
          <TextField
            fullWidth
            multiline
            rows={5}
            variant="outlined"
            value={workDescription}
            onChange={handleWorkDescriptionChange}
            error={!!workDescriptionError}
            helperText={workDescriptionError}
            sx={{ 
              bgcolor: "#e0f7fa", 
              marginRight: 69, 
              marginBottom: 6, 
              width: "50%" 
            }}
          />

          {/* First Question */}
          <Typography variant="body1" sx={{ marginBottom: 2, textAlign:"left"}}>
            Has the work already been started without consent?
          </Typography>
          <RadioGroup 
            row 
            value={workStarted} 
            onChange={handleWorkStartedChange}
            error={workStarted === ""}
          >
            <FormControlLabel value="yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="no" control={<Radio />} label="No" />
          </RadioGroup>
          {workStarted === "" && (
            <Typography color="error" variant="caption">
              Please select whether work has started
            </Typography>
          )}

          {/* Show date input if Yes is selected */}
          {showDateInput && (
            <Box sx={{ marginTop: 2 }}>
              <Typography variant="body1" sx={{ marginBottom: 2, textAlign:"left"}}>
                If Yes, please state when the development or work was started (date must be pre-application submission)
              </Typography>
              <TextField type="date" value={startDate} onChange={handleStartDateChange} sx={{ bgcolor: "#e0f7fa", width: "50%", marginRight:69}} error={!!startDateError} helperText={startDateError} />
            </Box>
          )}

          {/* Second Question (Appears only if Yes is selected in the first question) */}
          {showDateInput && (
            <Box sx={{ marginTop: 4 }}>
              <Typography variant="body1" sx={{ marginBottom: 2, textAlign:"left" }}>
                Has the work already been completed without consent?
              </Typography>
              <RadioGroup 
                row 
                value={workCompleted} 
                onChange={handleWorkCompletedChange}
                error={workCompleted === ""}
              >
                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="no" control={<Radio />} label="No" />
              </RadioGroup>
              {workCompleted === "" && (
                <Typography color="error" variant="caption">
                  Please select whether work has been completed
                </Typography>
              )}
            </Box>
          )}

          {/* Third Question (Appears only if Yes is selected in the second question) */}
          {showNextQuestion && (
            <Box sx={{ marginTop: 2 }}>
            <Typography variant="body1" sx={{ marginBottom: 2, textAlign:"left"}}>
              If Yes, please state when the development or work was started (date must be pre-application submission)
            </Typography>
            <TextField type="date" value={completionDate} onChange={handleCompletionDateChange} sx={{ bgcolor: "#e0f7fa", width: "50%", marginRight:69 }} error={!!completionDateError} helperText={completionDateError} />
          </Box>
          )}
        </Paper>

        {/* Action Buttons */}
        <Box sx={{ display: "flex", justifyContent: "center", gap: 2, marginTop: 4, marginBottom: 4 }}>
          <Button variant="outlined" sx={{ borderColor: "#3c7168", color: "#3c7168"}}onClick={() => navigate("/appQuestions/appDetails")}>
            Previous
          </Button>
          <Button variant="outlined" sx={{ borderColor: "#3c7168", color: "#3c7168" }}>
            Save Changes
          </Button>
          <Button
            variant="contained"
            sx={{ bgcolor: "#3c7168" }}
            onClick={validateAndNavigate}
          >
            Next
          </Button>
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
}
