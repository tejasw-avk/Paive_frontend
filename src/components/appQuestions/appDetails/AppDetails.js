import React, {useState} from "react";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Radio,
  RadioGroup,
  FormControlLabel,
  TextField,
  Typography,
  Tooltip,
  IconButton,
  Paper,
} from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";

export default function AppDetails() {
  const navigate = useNavigate();
     const [formData, setFormData] = useState({
        title: "",
        firstName: "",
        lastName: "",
        address1: "",
        address2: "",
        postalCode: "",
        townCity: "",
        country: "",
        isAgent: "",
        primaryNum: "",
        secondaryNum: "",
        faxNum: "",
        email: "",
      });
      const [errors, setErrors] = useState({});
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      // Update form data
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
      
      // Clear error for the field being typed in
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    };
  
    const validateandGo = () => {
      let tempErrors = {};
      if (!formData.title.trim()) tempErrors.title = "Title is required.";
      if (!formData.firstName.trim()) tempErrors.firstName = "First Name is required.";
      if (!formData.lastName.trim()) tempErrors.lastName = "Last Name is required.";
      if (!formData.address1.trim()) tempErrors.address1 = "Address is required.";
      if (!formData.postalCode.trim()) tempErrors.postalCode = "Postal Code is required.";
      if (!formData.townCity.trim()) tempErrors.townCity = "Town/City is required.";
      if (!formData.country.trim()) tempErrors.country = "Country is required.";
      if (!formData.primaryNum.trim()) tempErrors.primaryNum = "Primary Number is required.";
      if (!formData.email.trim()) tempErrors.email = "Email is required.";
      else if (!/\S+@\S+\.\S+/.test(formData.email)) tempErrors.email = "Email is invalid.";
  
      setErrors(tempErrors);
      if(Object.keys(tempErrors).length === 0)
      {
        navigate("/appQuestions/proposedWork") 
      }
    };
  
  

  return (
    <Box
      sx={{
        bgcolor: "white",
        display: "flex",
        justifyContent: "center",
        width: "100%",
        height: "90vh",
        overflow: "auto",
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          bgcolor: "white",
          overflow: "hidden",
          padding: 4,
        }}
      >
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

        {/* Application Details Section */}
        <Paper
          sx={{
            padding: 3,
            borderRadius: 1,
            border: 1,
            borderColor: "#3c7168",
          }}
        >
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
              Application Details
              <Tooltip title="Provide details of the applicant and application">
                <IconButton sx={{ ml: 1 }}>
                  <InfoIcon color="primary" />
                </IconButton>
              </Tooltip>
            </Typography>
          </Box>

          {/* Applicant Details */}
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              mb: 2,
              textAlign: "left",
            }}
          >
            Applicant Details
          </Typography>
          <Grid container spacing={2} mb={2}>
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                label="Title"
                variant="outlined"
                name = "title"
                value = {formData.title}
                onChange = {handleChange}
                error={!!errors.title}
                helperText={errors.title}
                size="small"
                sx={{ bgcolor: "#edf7ed" }}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                label="First Name"
                variant="outlined"
                name = "firstName"
                value = {formData.firstName}
                onChange = {handleChange}
                error={!!errors.firstName}
                helperText={errors.firstName}
                size="small"
                sx={{ bgcolor: "#edf7ed" }}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                label="Last Name"
                variant="outlined"
                name = "lastName"
                value = {formData.lastName}
                onChange = {handleChange}
                error={!!errors.lastName}
                helperText={errors.lastName}
                size="small"
                sx={{ bgcolor: "#edf7ed" }}
              />
            </Grid>
          </Grid>

          {/* Address */}
          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2, textAlign: "left" }}>
            Address
          </Typography>
          <Grid container spacing={2} mb={2}>
            <Grid item xs={12}>
              <TextField fullWidth label="Address Line 1" name="address1" value={formData.address1} error = {!!errors.address1} onChange={handleChange} helperText={errors.address1} variant="outlined" size="small" sx={{ bgcolor: "#edf7ed" }} />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth label="Address Line 2" variant="outlined" size="small" sx={{ bgcolor: "#edf7ed" }} />
            </Grid>
            <Grid item xs={6}>
              <TextField fullWidth label="Postcode" name="postalCode" value ={formData.postalCode} error={!!errors.postalCode} onChange={handleChange} helperText={errors.postalCode} variant="outlined" size="small" sx={{ bgcolor: "#edf7ed" }} />
            </Grid>
            <Grid item xs={6}>
              <TextField fullWidth label="Town/City" name="townCity" value={formData.townCity} error={!!errors.townCity} onChange={handleChange} helperText={errors.townCity} variant="outlined" size="small" sx={{ bgcolor: "#edf7ed" }} />
            </Grid>
            <Grid item xs={6}>
              <TextField fullWidth label="Country" name="country" value={formData.country} error={!!errors.country} onChange={handleChange} helperText={errors.country} variant="outlined" size="small" sx={{ bgcolor: "#edf7ed" }} />
            </Grid>
          </Grid>

          {/* Agent Acting Section */}
          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2, textAlign: "left" }}>
            Are you an agent acting on behalf of the applicant?
          </Typography>
          <RadioGroup row defaultValue="no" name="isAgent" value={formData.isAgent} onChange={handleChange}>
            <FormControlLabel value="yes" control={<Radio color="success" />} label="Yes" />
            <FormControlLabel value="no" control={<Radio color="success" />} label="No" />
          </RadioGroup>

          {/* Contact Details */}
          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2, textAlign: "left" }}>
            Contact Details
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField fullWidth label="Primary Number" name="primaryNum" value={formData.primaryNum} error={!!errors.primaryNum} onChange={handleChange} helperText={errors.primaryNum} variant="outlined" size="small" sx={{ bgcolor: "#edf7ed" }} />
            </Grid>
            <Grid item xs={6}>
              <TextField fullWidth label="Secondary Number" name="secondaryNum" value={formData.secondaryNum} onChange={handleChange} variant="outlined" size="small" sx={{ bgcolor: "#edf7ed" }} />
            </Grid>
            <Grid item xs={6}>
              <TextField fullWidth label="Fax Number (Optional)" name="faxNum" value={formData.faxNum} onChange={handleChange} variant="outlined" size="small" sx={{ bgcolor: "#edf7ed" }} />
            </Grid>
            <Grid item xs={6}>
              <TextField fullWidth label="E-mail" name="email" value={formData.email} error = {!!errors.email} onChange={handleChange} helperText={errors.email}  variant="outlined" size="small" sx={{ bgcolor: "#edf7ed" }} />
            </Grid>
          </Grid>
        </Paper>

        {/* Action Buttons */}
        <Box sx={{ display: "flex", justifyContent: "center", mt: 6}}>
          <Button
            variant="outlined"
            sx={{ mr: 2 }}
            onClick={() => navigate("/appQuestions/siteLocation")}
          >
            Previous
          </Button>
          <Button variant="outlined" sx={{ mr: 2 }}>
            Save Changes
          </Button>
          <Button
            variant="contained"
            sx={{ bgcolor: "#3c7168" }}
            onClick={validateandGo}
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
