import InfoOutlined from "@mui/icons-material/InfoOutlined";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import {
  Box,
  Button,
  Container,
  FormControl,
  FormControlLabel,
  Radio,
  IconButton,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function EmpAuthority() {
  const navigate = useNavigate();
  const [radioValue, setRadioValue] = useState("");
  const [textInput, setTextInput] = useState("");
  const [errors, setErrors] = useState({});

  // Handle radio button change
  const handleRadioChange = (event) => {
    setRadioValue(event.target.value);
    setErrors({ ...errors, radioValue: "" });
  };

  // Handle text input change
  const handleTextInputChange = (event) => {
    setTextInput(event.target.value);
    setErrors({ ...errors, textInput: "" });
  };

  // Validation and navigation
  const validateAndNavigate = () => {
    let newErrors = {};
    
    if (!radioValue) {
      newErrors.radioValue = "Please select an option.";
    }

    if (radioValue === "yes" && !textInput.trim()) {
      newErrors.textInput = "Details are required if 'Yes' is selected.";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      navigate("/appQuestions/ownerCert");
    }
  };


  return (
    <Container maxWidth="lg" sx={{ mt: 10 }}>
      {/* Back Navigation */}
      <Box sx={{ display: "flex", alignItems: "left", mb: 3, mt: 9 }}>
        <IconButton sx={{ mr: 1, color: "#000" }}>
          <ArrowBackIcon />
        </IconButton>
        <Typography
          variant="h5"
          sx={{ fontFamily: "Inter", fontWeight: 500, color: "#000" }}
          onClick={() => navigate("/appOverview")}
        >
          Back to application overview
        </Typography>
      </Box>

      {/* Main Heading */}
      <Typography
          variant="h4"
          component="div"
          sx={{
            color: "#1b4e3b",
            fontWeight: "bold",
            mb: 3,
            mt: 3,
            textAlign: "left",
          }}
        >
          House Planning Application001
        </Typography>

      {/* Main Content */}
      <Box
        sx={{
          p: 3,
          border: "1px solid #3c7168",
          borderRadius: "10px",
          backgroundColor: "#fff",
        }}
      >
        {/* Section Title */}
        <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            Authority Employee/Member
          </Typography>
          <InfoOutlined sx={{ ml: 1, color: "#black" }} />
        </Box>

        {/* Description */}
        <Typography variant="h6" sx={{ mb: 2, lineHeight: 1.7, textAlign:"left" }}>
          With respect to the Authority, is the applicant and/or agent one of
          the following:
        </Typography>
        <Typography variant="h6" sx={{ ml: 2, mb: 2, textAlign:"left"}}>
          (a) a member of staff <br />
          (b) an elected member <br />
          (c) related to a member of staff <br />
          (d) related to an elected member
        </Typography>
        <Typography variant="h6" sx={{ mb: 2, lineHeight: 1.7, textAlign:"left"}}>
          It is an important principle of decision-making that the process is
          open and transparent. 
          <br></br><br></br>For the purposes of this question, "related to"
          means related, by birth or otherwise, closely enough that a
          fair-minded and informed observer, having considered the facts, would
          conclude that there was bias on the part of the decision-maker in the Local Planning Authority.
          <br></br>
        </Typography>

        {/* Radio Buttons */}
        <Typography variant="h6" sx={{ mb: 2, textAlign:"left" }}>
          Do any of the above statements apply?
        </Typography>
        <FormControl>
          <RadioGroup row value={radioValue} onChange={handleRadioChange}>
            <FormControlLabel
              value="yes"
              control={<Radio sx={{ color: "#3c7168"}} />}
              label="Yes"
            />
            <FormControlLabel
              value="no"
              control={<Radio sx={{ color: "#3c7168" }} />}
              label="No"
            />
          </RadioGroup>
          {errors.radioValue && (
            <Typography color="error" variant="caption">
              {errors.radioValue}
            </Typography>
          )}
        </FormControl>

        {/* Text Input */}
        {radioValue === "yes" && (
        <TextField
          fullWidth
          placeholder="If yes, please provide details of their name, role, and how they are related:"
          variant="outlined"
          sx={{ mt: 3, bgcolor: "#9edec669" }}
          value={textInput}
          onChange={handleTextInputChange}
          error={!!errors.textInput}
          helperText={errors.textInput}
          multiline
          rows={4}
        />
      )}
      </Box>

      {/* Buttons */}
      <Box sx={{ mt: 4, display: "flex", justifyContent: "center", gap: 2, mb:4 }}>
      <Button
          variant="outlined"
          sx={{ textTransform: "none", borderColor: "#3c7168", color: "#3c7168" }}
        >
          Save Changes
        </Button>
      <Button
          variant="outlined"
          sx={{ textTransform: "none", borderColor: "#3c7168", color: "#3c7168" }}onClick={() => navigate("/appQuestions/preAdvice")}
        >
          Previous
        </Button>
        <Button
          variant="contained"
          sx={{
            textTransform: "none",
            backgroundColor: "#3c7168",
            color: "white",
            "&:hover": { backgroundColor: "#3c7168" },
          }}
          onClick={() => validateAndNavigate()}
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
    </Container>
  );
};