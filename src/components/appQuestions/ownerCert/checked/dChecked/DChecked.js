import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Checkbox,
  Container,
  Divider,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  Paper,
  Radio,
  RadioGroup,
  TextField,
  Typography,
  InputAdornment,
  IconButton,
} from "@mui/material";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import InfoIcon from "@mui/icons-material/Info";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";

export default function DChecked() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    stepsTaken: "",
    newspaperName: "",
    publicationDate: "",
    personalRole: "",
    title: "",
    firstName: "",
    lastName: "",
    declarationDate: "",
    declarationMade: false,
  });

  const [errors, setErrors] = useState({ 
    stepsTaken: "",
    newspaperName: "", 
    publicationDate: "",
    personalRole: "",
    title: "",
    firstName: "",
    lastName: "",
    declarationDate: "",
    declarationMade: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }
  };

  const validateAndNavigate = () => {
    let tempErrors = {};
    let isValid = true;

    // Validate personal role
    if (!formData.stepsTaken.trim()) tempErrors.stepsTaken = "This field is required.";
      isValid = false;
    if (!formData.newspaperName.trim()) tempErrors.newspaperName = "This field is required.";
      isValid = false;
    if (!formData.publicationDate) tempErrors.publicationDate = "This field is required.";
      isValid = false;
    if (!formData.personalRole.trim()) tempErrors.personalRole = "Please select one option.";
      isValid = false;
    if (!formData.title.trim()) tempErrors.title = "This field is required.";
      isValid = false;
    if (!formData.firstName.trim()) tempErrors.firstName = "This field is required.";
      isValid = false;
    if (!formData.declarationDate) tempErrors.declarationDate = "This field is required.";
      isValid = false;
    if (!formData.declarationMade) tempErrors.declarationMade = "This field is required.";
      isValid = false;

     setErrors(tempErrors);
  
      if (isValid) {
        navigate("/next-route"); // Replace with actual next route
      }

    };

  return (
    <Container maxWidth="md" sx={{ bgcolor: "white", py: 10 }}>
      <Paper sx={{ p: 4, borderRadius: 2, border: 1, borderColor: "#3c7168" }}>
        <Typography variant="h6" fontWeight="bold" sx={{ mt: 2 }}>
          Certificate Of Ownership - Certificate D
        </Typography>
        <Divider sx={{ my: 2 }} />

        <Typography variant="body2" sx={{ mb: 2, textAlign: "left" }}>
          I certify/The applicant certifies that:
          <br />
          - Neither Certificate A nor B can be issued for this application.
          <br />
          - All reasonable steps have been taken to find out the names and
          addresses of everyone else who, on the day 21 days before the date of
          this application, was the owner or agricultural tenant of any part of
          the land to which this application relates, but I have been unable to
          do so.
          <br />
          <br />
          * "Owner" is a person with a freehold interest or leasehold interest
          with at least 7 years left to run.
          <br />
          ** "Agricultural tenant" has the meaning given in section 65(8) of
          the Town and Country Planning Act 1990.
        </Typography>

        {/* Steps Taken */}
        <Box sx={{ mb: 3 }}>
          <Typography variant="body2">The steps taken were:</Typography>
          <TextField
            name="stepsTaken"
            value={formData.stepsTaken}
            error={!!errors.stepsTaken}
            helperText={errors.stepsTaken}
            onChange={handleChange}
            variant="outlined"
            multiline
            rows={3}
            sx={{bgcolor: "#9edec669"}}
            fullWidth
          />
        </Box>

        {/* Newspaper Notice */}
        <Box sx={{ mb: 3 }}>
          <Typography variant="body2">
            Notice of the application has been published in the following
            newspaper (circulating in the area where land is situated):
          </Typography>
          <TextField
            name="newspaperName"
            value={formData.newspaperName}
            error={!!errors.newspaperName}
            helperText={errors.newspaperName}
            onChange={handleChange}
            variant="outlined"
            sx={{bgcolor: "#9edec669"}}
            fullWidth
          />
        </Box>

        {/* Publication Date */}
        <Box sx={{ mb: 3 }}>
          <Typography variant="body2">
            On the following date (must be at least 21 days before the date of
            the application):
          </Typography>
          <TextField
            name="publicationDate"
            type="date"
            error={!!errors.publicationDate}
            helperText={errors.publicationDate}
            sx={{bgcolor: "#9edec669"}}
            value={formData.publicationDate}
            onChange={handleChange}
            variant="outlined"
            fullWidth
            InputLabelProps={{ shrink: true }}
          />
        </Box>

        {/* Personal Role */}
        <Box sx={{ mb: 3 }}>
          <Typography variant="body2">Personal Role</Typography>
          <FormControl component="fieldset">
            <RadioGroup
              row
              name="personalRole"
              error={!!errors.personalRole}
              helperText={errors.personalRole}
              value={formData.personalRole}
              onChange={handleChange}
            >
              <FormControlLabel value="agent" control={<Radio />} label="The agent" />
              <FormControlLabel value="applicant" control={<Radio />} label="The applicant" />
            </RadioGroup>
            {errors.personalRole && (
            <Typography color="error" variant="caption">
              {errors.personalRole}
            </Typography>
  )}
          </FormControl>
        </Box>

        {/* Name Fields */}
        <Grid container spacing={2} sx={{ mb: 3}}>
          <Grid item xs={12}>
            <TextField
              name="title"
              value={formData.title}
              error={!!errors.title}
              helperText={errors.title}
              onChange={handleChange}
              variant="outlined"
              sx={{bgcolor: "#9edec669"}}
              fullWidth
              label="Title"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              name="firstName"
              value={formData.firstName}
              error={!!errors.firstName}
              helperText={errors.firstName}
              onChange={handleChange}
              variant="outlined"
              sx={{bgcolor: "#9edec669"}}
              fullWidth
              label="First Name"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              error={!!errors.lastName}
              helperText={errors.lastName}
              variant="outlined"
              sx={{bgcolor: "#9edec669"}}
              fullWidth
              label="Last Name"
            />
          </Grid>
        </Grid>

        {/* Declaration Date */}
        <Box sx={{ mb: 3 }}>
          <Typography variant="body2">Declaration Date</Typography>
          <TextField
            name="declarationDate"
            type="date"
            error={!!errors.declarationDate}
            helperText={errors.declarationDate}
            value={formData.declarationDate}
            onChange={handleChange}
            variant="outlined"
            sx={{bgcolor: "#9edec669"}}
            fullWidth
            InputLabelProps={{ shrink: true }}
          />
        </Box>

        {/* Declaration Checkbox */}
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                name="declarationMade"
                error={!!errors.declarationMade}
                helperText={errors.declarationMade}
                checked={formData.declarationMade}
                onChange={handleChange}
              />
            }
            label="Declaration Made"
          />
           {errors.declarationMade && (
           <Typography color="error" variant="caption">
             {errors.declarationMade}
           </Typography>
      )}
        </FormGroup>

        {/* Buttons */}
        <Box sx={{ display: "flex", justifyContent: "space-between", mt: 3 }}>
          <Button variant="outlined">Save Changes</Button>
          <Button variant="outlined">Previous</Button>
          <Button variant="contained" onClick={validateAndNavigate}>Finish</Button>
        </Box>
      </Paper>
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
