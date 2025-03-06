import Info from "@mui/icons-material/Info";
import CalendarToday from "@mui/icons-material/CalendarToday";
import {
  Box,
  Button,
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
import React,{useState} from "react";
import { useNavigate } from "react-router-dom";

export default function B2() {
  const navigate = useNavigate();

  // form state
  const [formData, setFormData] = useState({
    soleOwner: "",
    agriculturalHolding: "",
    noticeToOwners: "",
    certificateType: "",
    personalRole: "",
    title: "",
    firstName: "",
    lastName: "",
    declarationDate: ""
  });

  // error state
  const [errors, setErrors] = useState({
    soleOwner: "",
    agriculturalHolding: "",
    noticeToOwners: "",
    certificateType: "",
    personalRole: "",
    title: "",
    firstName: "",
    lastName: "",
    declarationDate: ""
  });

  // helper function to clear errors
  const clearError = (field) => {
    setErrors(prev => ({
      ...prev,
      [field]: ""
    }));
  };

  // handleInputChange 
  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    clearError(field);
  };

  // validateAndNavigate function
  const validateAndNavigate = () => {
    let tempErrors = {};
    let isValid = true;

    // Validate radio buttons
    if (!formData.soleOwner) {
      tempErrors.soleOwner = "Please select whether you are the sole owner";
      isValid = false;
    }

    if (!formData.agriculturalHolding) {
      tempErrors.agriculturalHolding = "Please indicate if the land is part of an Agricultural Holding";
      isValid = false;
    }

    if (!formData.noticeToOwners) {
      tempErrors.noticeToOwners = "Please select whether you can give notice to all owners";
      isValid = false;
    }

    if (!formData.certificateType) {
      tempErrors.certificateType = "Please select a certificate type";
      isValid = false;
    }

    if (!formData.personalRole) {
      tempErrors.personalRole = "Please select your role";
      isValid = false;
    }

    // Validate text fields
    if (!formData.title?.trim()) {
      tempErrors.title = "Title is required";
      isValid = false;
    }

    if (!formData.firstName?.trim()) {
      tempErrors.firstName = "First name is required";
      isValid = false;
    }

    if (!formData.lastName?.trim()) {
      tempErrors.lastName = "Last name is required";
      isValid = false;
    }

    // Validate date
    if (!formData.declarationDate) {
      tempErrors.declarationDate = "Declaration date is required";
      isValid = false;
    }

    setErrors(tempErrors);

    if (isValid) {
      console.log("Form is valid", formData);
      // navigate("/next-route");
      return true;
    }
    return false;
  };

  return (
    
    <Box
      sx={{
        bgcolor: "white",
        display: "flex",
        justifyContent: "center",
        width: "100%",
      }}
    >
  
      
      <Container maxWidth="lg" sx={{ bgcolor: "white", position: "relative", p: 4 }}>
        <Box sx={{ position: "absolute", top: 200, left: 72 }}>
          <Typography variant="h4" color="primary">
            House Planning Application001
          </Typography>
        </Box>

        <Paper
          sx={{
            position: "absolute",
            top: 302,
            left: 68,
            width: "calc(100% - 136px)",
            p: 4,
            borderRadius: 2,
            border: 1,
            borderColor: "#3c7168",
          }}
        >
          <Typography variant="h5" fontWeight="medium" sx={{ mb: 2 }}>
            Ownership Certificates and Agricultural Land Declaration
          </Typography>
          <Info sx={{ position: "absolute", top: 22, right: 22, fontSize: 32 }} />

          <Typography variant="body1" sx={{ mb: 2 }}>
            Certificates under Article 14 - Town and Country Planning
            (Development Management Procedure) (England) Order 2015 (as amended)
            <br />
            Please answer the following questions to determine which Certificate
            of Ownership you need to complete: A, B, C or D.
          </Typography>

          <Typography variant="body1" sx={{ mb: 2 }}>
            Is the applicant the sole owner of all the land to which this
            application relates; and has the applicant been the sole owner for
            more than 21 days?
          </Typography>

          <FormControl component="fieldset" error={!!errors.soleOwner} sx={{ mb: 2 }}>
            <RadioGroup 
              row
              value={formData.soleOwner}
              onChange={(e) => handleInputChange("soleOwner", e.target.value)}
            >
              <FormControlLabel value="yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>
            {errors.soleOwner && (
              <Typography color="error" variant="caption">
                {errors.soleOwner}
              </Typography>
            )}
          </FormControl>

          <Typography variant="body1" sx={{ mb: 2 }}>
            Is any of the land to which the application relates part of an
            Agricultural Holding?
          </Typography>

          <FormControl component="fieldset" sx={{ mb: 2 }}>
            <RadioGroup 
              row
              value={formData.agriculturalHolding}
              onChange={(e) => handleInputChange("agriculturalHolding", e.target.value)}
            >
              <FormControlLabel value="yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>
            {errors.agriculturalHolding && (
              <Typography color="error" variant="caption">
                {!!errors.agriculturalHolding}
              </Typography>
            )}
          </FormControl>

          <Typography variant="body1" sx={{ mb: 2 }}>
            Can you give appropriate notice to all the other owners/agricultural
            tenants? (Select 'Yes' if there are no other owners/agricultural
            tenants)
          </Typography>

          <FormControl component="fieldset" sx={{ mb: 2 }}>
            <RadioGroup 
              row
              value={formData.noticeToOwners}
              onChange={(e) => handleInputChange("noticeToOwners", e.target.value)}
            >
              <FormControlLabel value="yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>
            {errors.noticeToOwners && (
              <Typography color="error" variant="caption">
                {errors.noticeToOwners}
              </Typography>
            )}
          </FormControl>

          <Divider sx={{ my: 2 }} />

          <Typography variant="h6" fontWeight="medium" sx={{ mb: 2 }}>
            Certificate Of Ownership - Certificate B
          </Typography>

          <Typography variant="body1" sx={{ mb: 2 }}>
            I certify/ The applicant certifies that:
          </Typography>

          <FormControl component="fieldset" sx={{ mb: 2 }}>
            <RadioGroup
              value={formData.certificateType}
              onChange={(e) => handleInputChange("certificateType", e.target.value)}
            >
              <FormControlLabel
                value="notice"
                control={<Radio />}
                label="I have/The applicant has given the requisite notice to everyone else( as listed below) who, on the day 21 days before the date of this application, was the owner* and/or agricultural tenant** of any part of the land or building to which this application relates; or"
              />
              <FormControlLabel
                value="soleOwner"
                control={<Radio />}
                label="The applicant is the sole owner of all the land or buildings to which this application relates and there are no other owners* and/or agricultural tenants**."
              />
            </RadioGroup>
            {errors.certificateType && (
              <Typography color="error" variant="caption">
                {errors.certificateType}
              </Typography>
            )}
          </FormControl>

          <Typography variant="body1" sx={{ mb: 2 }}>
            *”owner” is a person with a freehold interest or leasehold interest
            with at least 7 years left to run.
          </Typography>

          <Typography variant="body1" sx={{ mb: 2 }}>
            ** ”agricultural tenant” has the meaning given in section 65(8) of
            the Town and Country Planning Act 1990
          </Typography>

          <Typography variant="body1" sx={{ mb: 2 }}>
            Personal Role
          </Typography>

          <FormControl component="fieldset" sx={{ mb: 2 }}>
            <RadioGroup 
              row
              value={formData.personalRole}
              onChange={(e) => handleInputChange("personalRole", e.target.value)}
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

          <Grid container spacing={2} sx={{ mb: 2 }}>
            <Grid item xs={12}>
              <TextField 
              fullWidth
              label="Title"
              name="title"
              value={formData.title}
              onChange={(e) => handleInputChange("title", e.target.value)}
              error={!!errors.title}
              helperText={errors.title}
              variant="outlined"
              sx={{ bgcolor: "#9edec669" }}
              required
              />
            </Grid>
            <Grid item xs={6}>
              <TextField 
                fullWidth 
                label="First Name" 
                name="firstName"
                variant="outlined"
                value={formData.firstName}
                onChange={(e) => handleInputChange("firstName", e.target.value)}
                error={!!errors.firstName}
                helperText={errors.firstName}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField 
                fullWidth 
                label="Last Name"
                name="lastName" 
                variant="outlined"
                value={formData.lastName}
                onChange={(e) => handleInputChange("lastName", e.target.value)}
                error={!!errors.lastName}
                helperText={errors.lastName}
              />
            </Grid>
          </Grid>

          <Typography variant="body1" sx={{ mb: 2 }}>
            Declaration Date
          </Typography>

          <Grid container spacing={2} sx={{ mb: 2 }}>
            <Grid item xs={12}>
              <TextField 
                fullWidth 
                label="Declaration Date" 
                name="declarationDate"
                type="date"
                variant="outlined"
                value={formData.declarationDate}
                onChange={(e) => handleInputChange("declarationDate", e.target.value)}
                error={!!errors.declarationDate}
                helperText={errors.declarationDate}
                InputLabelProps={{ shrink: true }}
                InputProps={{ 
                  endAdornment: <CalendarToday /> 
                }}
              />
            </Grid>
          </Grid>

          <Button
            variant="contained"
            onClick={validateAndNavigate}
            sx={{ 
              bgcolor: "#3c7168",
              '&:hover': {
                bgcolor: "#2a5048"
              }
            }}
          >
            Next
          </Button>
        </Paper>
      </Container>
    </Box>
  );
};
