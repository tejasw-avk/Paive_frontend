import React, { useState } from "react";
import Info from "@mui/icons-material/Info";
import CalendarToday from "@mui/icons-material/CalendarToday";
import CheckIcon from "@mui/icons-material/Check";
import InfoIcon from "@mui/icons-material/Info";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import {
  Box,
  Button,
  Checkbox,
  Container,
  Divider,
  FormControl,
  FormControlLabel,
  Grid,
  Paper,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function OwnershipCertificateForm() {
  const navigate = useNavigate();
  
  const [personalRole, setPersonalRole] = useState("");
  const [declarationDate, setDeclarationDate] = useState("");
  
  const [formData, setFormData] = useState({
    ownershipType: "",
    ownerName: "",
    houseName: "",
    houseNumber: "",
    suffix: "",
    address1: "",
    address2: "",
    postCode: "",
    townCity: "",
    declarationDate:null,
    personalRole: "",
    title: "",
    firstName: "",
    lastName: "",
    declarationDate: "",
    declarationMade: false,
  });

  const [errors, setErrors] = useState({
    ownershipType: "",
    ownerName: "",
    houseName:"",
    houseNumber: "",
    suffix: "",
    address1: "",
    address2: "",
    postCode: "",
    declarationDate: "",
    townCity: "",
    personalRole: "",
    title: "",
    firstName: "",
    lastName: "",
    declarationMade: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
    setErrors(prev => ({
      ...prev,
      [name]: ""
    }));
  };

  const validateAndNavigate = () => {
    let tempErrors = {};
    let isValid = true;

    if (!formData.ownershipType) {
      tempErrors.ownershipType = "Please select an ownership type";
      isValid = false;
    }

    if (formData.ownershipType === "notice") {
      if (!formData.ownerName.trim()) tempErrors.ownerName = "Owner/Tenant name is required";
        isValid = false;
      if (!formData.houseName.trim()) tempErrors.houseName = "House Name is required";
        isValid = false;  
      if (!formData.houseNumber.trim()) tempErrors.houseNumber = "House Number is required";
        isValid = false;
      if (!formData.suffix.trim()) tempErrors.suffix = "Suffix is required";
        isValid = false;  
      if (!formData.address1.trim()) tempErrors.address1 = "Address Line 1 is required";
        isValid = false;
      if (!formData.address2.trim()) tempErrors.address2 = "Address Line 2 is required";    
        isValid = false;
      if (!formData.postCode.trim()) tempErrors.postCode = "Postcode is required";          
        isValid = false;
      if (!formData.townCity.trim()) tempErrors.townCity = "Town/City is required";
        isValid = false;
      if (!formData.declarationDate) tempErrors.declarationDate = "Declaration Date is required";
        isValid = false;
    }
    setErrors(tempErrors);
    if (isValid) {
      navigate("/next-route");
    }
    return isValid;
  };

  const ownershipType = formData.ownershipType;

  return (
    <Box
      sx={{
        bgcolor: "white",
        display: "flex",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <Container maxWidth="lg" sx={{ bgcolor: "white", py: 15 }}>
        <Paper sx={{ p: 4, borderRadius: 2, border: 1, borderColor: "#3c7168" }}>
          <Typography variant="h5" sx={{ mb: 4, fontWeight: "bold" }}>
            Certificate of Ownership - Certificate B
          </Typography>

          <FormControl component="fieldset" sx={{ mb: 2 }} error={!!errors.ownershipType}>
            <RadioGroup
              value={formData.ownershipType}
              onChange={handleChange}
              name="ownershipType"
            >
              <FormControlLabel
                value="notice"
                control={<Radio />}
                label="I have/The applicant has given the requisite notice to everyone else (as listed below) who, on the day 21 days before the date of this application, was the owner* and/or agricultural tenant** of any part of the land or building to which this application relates."
              />
              <FormControlLabel
                value="soleOwner"
                control={<Radio />}
                label="The applicant is the sole owner of all the land or buildings to which this application relates and there are no other owners* and/or agricultural tenants**."
              />
            </RadioGroup>
            {errors.ownershipType && (
              <Typography color="error" variant="caption">
                {errors.ownershipType}
              </Typography>
            )}
          </FormControl>
          <Typography variant="body1" sx={{ mb: 2 }}>
            * "Owner" is a person with a freehold interest or leasehold interest with at
            least 7 years left to run.
          </Typography>

          <Typography variant="body1" sx={{ mb: 2 }}>
            ** "Agricultural tenant" has the meaning given in section 65(8) of the Town
            and Country Planning Act 1990.
          </Typography>

          {ownershipType === "notice" && (
            <Box sx={{ bgcolor: "#d9d9d933", borderRadius: "10px", p: 2, mb: 2 }}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Name of Owner/Agricultural Tenant"
                    name="ownerName"
                    value={formData.ownerName}
                    onChange={handleChange}
                    error={!!errors.ownerName}
                    helperText={errors.ownerName}
                    variant="outlined"
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField fullWidth
                   label="House Name"  
                   variant="outlined"
                   name="houseName"
                   value={formData.houseName}
                   onChange={handleChange}
                   error={!!errors.houseName} />
                </Grid>
                <Grid item xs={6}>
                  <TextField fullWidth 
                  label="Number" 
                  variant="outlined"
                  name="houseNumber"
                  value={formData.houseNumber}
                  onChange={handleChange}
                  error={!!errors.houseNumber}
                  helperText={errors.houseNumber}/>
                </Grid>
                <Grid item xs={6}>
                  <TextField fullWidth 
                  label="Suffix" 
                  variant="outlined"
                  name="suffix"
                  onChange={handleChange} />
                </Grid>
                <Grid item xs={12}>
                  <TextField fullWidth
                   label="Address Line 1"
                   variant="outlined"
                   name="address1"
                   value={formData.address1}
                   error={!!errors.address1}
                   helperText={errors.address1}
                   onChange={handleChange} /> 
                </Grid>
                <Grid item xs={12}>
                  <TextField fullWidth
                   label="Address Line 2" 
                   variant="outlined"
                   name="address2"
                   value={formData.address2}
                   />
                </Grid>
                <Grid item xs={6}>
                  <TextField fullWidth
                   label="Postcode"
                   variant="outlined"
                   name="postCode"
                   value={formData.postCode}
                   onChange={handleChange}
                   error={!!errors.postCode}
                   helperText={errors.postCode} 
                    />
                </Grid>
                <Grid item xs={6}>
                  <TextField fullWidth 
                   label="Town/City" 
                   variant="outlined" 
                   name="townCity"
                   value={formData.townCity}
                   onChange={handleChange}
                   error={!!errors.townCity}
                   helperText={errors.townCity}
                   />
                </Grid>
                <Grid item xs={12}>
                  <TextField fullWidth
                   label="Declaration Date"
                   variant="outlined"
                   name="declarationDate"
                   value={formData.declarationDate}
                   onChange={handleChange}
                   error={!!errors.declarationDate}
                   helperText={errors.declarationDate} 
                    />
                </Grid>
                <Grid item xs={12}>
                  <Button variant="contained" color="primary">
                    Add Another +
                  </Button>
                </Grid>
                <Grid item xs={6}>
                  <Button variant="outlined" color="primary">
                    Cancel
                  </Button>
                </Grid>
                <Grid item xs={6}>
                  <Button variant="contained" color="primary" onClick={validateAndNavigate}>
                    Save
                  </Button>
                </Grid>
              </Grid>
            </Box>
          )}

          <Typography variant="body1" sx={{ mb: 2 }}>
            Personal Role
          </Typography>

          <RadioGroup
            row
            value={formData.personalRole}
            onChange={(e) => {
              handleChange(e);
              setPersonalRole(e.target.value);
            }}
            name="personalRole"
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

          {/* User Information Fields */}
          <Grid container spacing={2} sx={{ mb: 4 }}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Title"
                name="title"
                value={formData.title}
                onChange={handleChange}
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
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
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
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                //error={!!errors.lastName}
                //helperText={errors.lastName}
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
                name="declarationDate"
                value={formData.declarationDate}
                onChange={handleChange}
                InputLabelProps={{ shrink: true }}
                variant="outlined"
                error={!!errors.declarationDate}
                helperText={errors.declarationDate}
                sx={{ bgcolor: "#9edec669" }}
              />
            </Grid>
            <Grid item xs={6} sx={{ display: "flex", alignItems: "center" }}>
              <FormControlLabel control={<Checkbox />} label="Declaration Made" />
            </Grid>
          </Grid>
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
                onClick={validateAndNavigate}
                sx={{ bgcolor: "#3c7168" }}
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
    </Box>
  );
}
