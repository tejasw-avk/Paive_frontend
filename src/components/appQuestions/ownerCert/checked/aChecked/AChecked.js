import React, { useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
  Typography,
  IconButton,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import { FormatIndentDecreaseRounded } from "@mui/icons-material";

export default function AChecked() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    personalRole: "",
    title: "",
    firstName: "",
    lastName: "",
    declarationDate: "",
    isDeclarationMade: false
  });

  const [errors, setErrors] = useState({
    personalRole: "",
    title: "",
    firstName: "",
    lastName: "",
    declarationDate: "",
    isDeclarationMade: ""
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    // Clear error when user types
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ""
      }));
    }
  };

   // Validation function
   const validateAndNavigate = () => {
    let tempErrors = {};
    let isValid = true;

    // Validate personal role
    if (!formData.personalRole) tempErrors.personalRole = "Please select your role";
      isValid = false;

    // Validate required fields
    if (!formData.title.trim()) tempErrors.title = "Title is required";
      isValid = false;

    if (!formData.firstName.trim()) tempErrors.firstName = "First name is required";
      isValid = false;
    
      if (!formData.declarationDate) {
        tempErrors.declarationDate = "Declaration date is required";
        isValid = false;
      }
  
      // Validate declaration checkbox
      if (!formData.isDeclarationMade) {
        tempErrors.isDeclarationMade = "Please confirm the declaration";
        isValid = false;
      }
  
      setErrors(tempErrors);
  
      if (isValid) {
        navigate("/next-route"); // Replace with actual next route
      }
    };


  return (
    <Container maxWidth="xl" sx={{ bgcolor: "white", py: 9 }}>
      <Box sx={{ bgcolor: "white", width: "100%", maxWidth: 1440, mx: "auto" }}>
        <Box
          sx={{
            position: "relative",
            border: 1,
            borderColor: "#3c7168",
            borderRadius: 1,
            p: 4,
            mt: 9,
          }}
        >
          <Typography variant="h5" sx={{ mb: 4, fontWeight: "bold" }}>
            Certificate of Ownership - Certificate A
          </Typography>
          <Typography variant="body1" sx={{ mb: 4, textAlign: "left" }}>
            I certify/The applicant certifies that on the day 21 days before the
            date of this application nobody except myself/ the applicant was the
            owner* of any part of the land or building to which the application
            relates, and that none of the land to which the application relates
            is, or is part of, an agricultural holding** <br /> <br />* "owner"
            is a person with a freehold interest or leasehold interest with at
            least 7 years left to run. <br /> <br />
            ** "agricultural holding" has the meaning given by reference to the
            definition of “agricultural tenant” in section 65(8) of the Act.{" "}
            <br /> <br />
            NOTE: You should sign Certificate B, C or D, as appropriate, if you
            are the sole owner of the land or building to which the application
            relates but the land is, or is part of, an agricultural holding.
          </Typography>

          {/* Personal Role Selection */}
          <Typography variant="body1" sx={{ mb: 2 }}>
            Personal Role
          </Typography>
          <RadioGroup
            row
            value={formData.personalRole}
            onChange={(e) => handleInputChange("personalRole", e.target.value)}
            sx={{ mb: 4 }}
          >
            <FormControlLabel
              value="agent"
              control={<Radio />}
              label="The agent"
              sx={{ ml: 2 }}
            />
            <FormControlLabel
              value="applicant"
              control={<Radio />}
              label="The applicant"
              sx={{ ml: 2 }}
            />
          </RadioGroup>
          {errors.personalRole && (
        <Typography color="error" variant="caption">
          {errors.personalRole}
        </Typography>
        )}


          {/* User Information Fields */}
          <Grid container spacing={2} sx={{ mb: 4 }}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Title"
                value={formData.title}
                onChange={(e) => handleInputChange("title", e.target.value)}
                error={!!errors.title}
                helperText={errors.title}
                variant="outlined"
                sx={{ bgcolor: "#9edec669" }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="First Name"
                value={formData.firstName}
                onChange={(e) => handleInputChange("firstName", e.target.value)}
                error={!!errors.firstName}
                helperText={errors.firstName}
                variant="outlined"
                sx={{ bgcolor: "#9edec669" }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Last Name"
                value={formData.lastName}
                onChange={(e) => handleInputChange("lastName", e.target.value)}
                variant="outlined"
                sx={{ bgcolor: "#9edec669" }}
              />
            </Grid>
          </Grid>

          {/* Declaration Fields */}
          <Grid container spacing={2} sx={{ mb: 4 }}>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Declaration Date"
                type="date"
                value={formData.declarationDate}
                onChange={(e) => handleInputChange("declarationDate", e.target.value)}
                error={!!errors.declarationDate}
                helperText={errors.declarationDate}
                InputLabelProps={{ shrink: true }}
                variant="outlined"
                sx={{ bgcolor: "#9edec669" }}
              />
            </Grid>
            <Grid item xs={6} sx={{ display: "flex", alignItems: "center" }}>
              <FormControlLabel control=
              {<Checkbox 
               checked={formData.isDeclarationMade}
               onChange={(e) => handleInputChange("isDeclarationMade",e.target.checked)}
               />} 
               label="Declaration Made" />
              {errors.isDeclarationMade && (
            <Typography color="error" variant="caption">
              {errors.isDeclarationMade}
            </Typography>
              )}
            </Grid>
          </Grid>
        </Box>
      </Box>
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
                onClick={validateAndNavigate}
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
