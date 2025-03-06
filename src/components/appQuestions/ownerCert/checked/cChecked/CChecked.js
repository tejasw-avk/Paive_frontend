import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import CheckIcon from "@mui/icons-material/Check";
import InfoIcon from "@mui/icons-material/Info";
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  IconButton,
  Paper,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState, useRef, forwardRef, useImperativeHandle } from "react";

export default function CertificateCChecked() {
  const [personalRole, setPersonalRole] = useState("");
  const [declarationMade, setDeclarationMade] = useState(false);
  const ownerFormRef = useRef();

  // Add error state
  const [errors, setErrors] = useState({
    stepsTaken: "",
    newspaperName: "",
    publicationDate: "",
    personalRole: "",
    title: "",
    firstName: "",
    lastName: "",
    declarationDate: "",
    declarationMade: ""
  });

  // Add form state
  const [formData, setFormData] = useState({
    stepsTaken: "",
    newspaperName: "",
    publicationDate: "",
    title: "",
    firstName: "",
    lastName: "",
    declarationDate: ""
  });

  // Add handle change function
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
    // Clear error when field is updated
    setErrors(prev => ({
      ...prev,
      [name]: ""
    }));
  };

  // Add validation function
  const validateAndNavigate = () => {
    let tempErrors = {};
    let isValid = true;

    // Validate steps taken
    if (!formData.stepsTaken?.trim()) {
      tempErrors.stepsTaken = "Please describe the steps taken";
      isValid = false;
    }

    // Validate newspaper name
    if (!formData.newspaperName?.trim()) {
      tempErrors.newspaperName = "Newspaper name is required";
      isValid = false;
    }

    // Validate publication date
    if (!formData.publicationDate) {
      tempErrors.publicationDate = "Publication date is required";
      isValid = false;
    }

    // Validate personal role
    if (!personalRole) {
      tempErrors.personalRole = "Please select your role";
      isValid = false;
    }

    // Validate name fields
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

    // Validate declaration date
    if (!formData.declarationDate) {
      tempErrors.declarationDate = "Declaration date is required";
      isValid = false;
    }

    // Validate declaration checkbox
    if (!declarationMade) {
      tempErrors.declarationMade = "Please confirm the declaration";
      isValid = false;
    }

    // Validate Owner/Agricultural Tenant Form
    if (ownerFormRef.current) {
      const ownerFormValid = ownerFormRef.current.validateFields();
      if (!ownerFormValid) {
        isValid = false;
      }
    }

    setErrors(tempErrors);
    return isValid;
  };

  return (
    <Container maxWidth="md" sx={{ bgcolor: "white", py: 10 }}>
      <Paper sx={{ p: 4, borderRadius: 2, border: 1, borderColor: "#3c7168" }}>
        <Typography variant="h6" fontWeight="bold" sx={{ mt: 4, mb: 2 }}>
          Certificate Of Ownership - Certificate C
        </Typography>
        <Typography variant="body2" sx={{ mb: 3, textAlign: "left" }}>
          I certify/The applicant certifies that: <br />
          -Neither Certificate A nor B can be issued for this application. 
          <br></br>-All reasonable steps have been taken to find out the names and addresses of the other owners (owner is a person with a
          freehold interest or leasehold interest with at least 7 years left to run) of the land or building,
          or a part of it, but I have/the applicant has been unable to do so.
        </Typography>

        {/* Steps Taken */}
        <TextField 
          fullWidth 
          multiline 
          rows={4} 
          variant="outlined" 
          name="stepsTaken"
          value={formData.stepsTaken}
          onChange={handleChange}
          error={!!errors.stepsTaken}
          helperText={errors.stepsTaken}
          sx={{ mb: 4, bgcolor: "#9edec669" }} 
        />

        <Typography>I have/ the applicant has given the requisite notice 
          to the persons specified below being person who, on the day 21
          days before the date of this application, were owners/agricultural
          tenants of any part of the land to which this application
          relates.
        </Typography>

        <Typography variant="body2" sx={{ mb: 2, mt:4 }}>
          Owner/Agricultural Tenant
        </Typography>

        {/* Owner/Agricultural Tenant Form */}
        <OwnerAgriculturalTenantForm ref={ownerFormRef} />

        {/* Newspaper Notice */}
        <TextField 
          fullWidth 
          variant="outlined" 
          name="newspaperName"
          value={formData.newspaperName}
          onChange={handleChange}
          error={!!errors.newspaperName}
          helperText={errors.newspaperName}
          sx={{ mb: 3, bgcolor: "#9edec669"}}
        />

        {/* Date of Publication */}
        <TextField
          fullWidth
          label="Select Date"
          type="date"
          variant="outlined"
          name="publicationDate"
          value={formData.publicationDate}
          onChange={handleChange}
          error={!!errors.publicationDate}
          helperText={errors.publicationDate}
          InputLabelProps={{ shrink: true }}
          sx={{ mb: 3, bgcolor: "#9edec669"}}
        />

        {/* Personal Role */}
        <RadioGroup
          row
          value={personalRole}
          onChange={(e) => {
            setPersonalRole(e.target.value);
            setErrors(prev => ({ ...prev, personalRole: "" }));
          }}
          error={!!errors.personalRole}
          sx={{ mb: 3 }}
        >
          <FormControlLabel value="agent" control={<Radio />} label="The agent" />
          <FormControlLabel value="applicant" control={<Radio />} label="The applicant" />
        </RadioGroup>
        {errors.personalRole && (
          <Typography color="error" variant="caption">
            {errors.personalRole}
          </Typography>
        )}

        {/* Name & Declaration Date */}
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
              sx={{bgcolor: "#9edec669"}}
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
              sx={{bgcolor: "#9edec669"}}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField 
              fullWidth 
              label="Last Name" 
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              error={!!errors.lastName}
              helperText={errors.lastName}
              variant="outlined"  
              sx={{bgcolor: "#9edec669"}}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Declaration Date"
              type="date"
              variant="outlined"
              sx={{bgcolor: "#9edec669"}}
              InputLabelProps={{ shrink: true }}
            />
          </Grid>
          {/* Declaration Checkbox */}
        <FormControlLabel
          control={
            <Checkbox
              checked={declarationMade}
              onChange={(e) => setDeclarationMade(e.target.checked)}
              icon={<CheckIcon />}
              checkedIcon={<CheckIcon />}
            />
          }
          label="Declaration Made"
          sx={{ mb: 4, mt:4, ml:2 }}
        />
        </Grid>

        {/* Action Buttons */}
        <Box sx={{ display: "flex", justifyContent: "space-between", mt: 3 }}>
        <Button variant="outlined" >
            Save Changes
          </Button>
          <Button variant="outlined" >
            Previous
          </Button>
          <Button 
            variant="contained" 
            onClick={() => {
              if (validateAndNavigate()) {
                // Navigate to next page or submit form
                console.log("Form is valid");
              }
            }}
            sx={{ 
              bgcolor: "#3c7168",
              '&:hover': {
                bgcolor: "#2a5048"
              }
            }}
          >
            Finish
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}

const OwnerAgriculturalTenantForm = forwardRef((props, ref) => {
  const [formData, setFormData] = useState({
    ownerName: "",
    houseName: "",
    number: "",
    suffix: "",
    addressLine1: "",
    addressLine2: "",
    postcode: "",
    townCity: "",
    declarationDate: "",
  });

  const [errors, setErrors] = useState({
    ownerName: "",
    addressLine1: "",
    postcode: "",
    townCity: "",
    declarationDate: ""
  });

  const validateFields = () => {
    let tempErrors = {};
    let isValid = true;

    // Required fields validation
    if (!formData.ownerName?.trim()) {
      tempErrors.ownerName = "Owner/Tenant name is required";
      isValid = false;
    }

    if (!formData.addressLine1?.trim()) {
      tempErrors.addressLine1 = "Address Line 1 is required";
      isValid = false;
    }

    if (!formData.postcode?.trim()) {
      tempErrors.postcode = "Postcode is required";
      isValid = false;
    }

    if (!formData.townCity?.trim()) {
      tempErrors.townCity = "Town/City is required";
      isValid = false;
    }

    if (!formData.declarationDate) {
      tempErrors.declarationDate = "Declaration date is required";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  useImperativeHandle(ref, () => ({
    validateFields
  }));

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when field is updated
    setErrors(prev => ({
      ...prev,
      [name]: ""
    }));
  };

  return (
    <Container maxWidth="md" sx={{ py: 3 }}>
      <Paper sx={{ p: 4, borderRadius: 2, border: "1px solid #3c7168"}}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField 
              fullWidth 
              label="Name of Owner/Agricultural Tenant" 
              name="ownerName" 
              variant="outlined" 
              value={formData.ownerName}
              onChange={handleChange}
              error={!!errors.ownerName}
              helperText={errors.ownerName}
              sx={{bgcolor: "#9edec669"}} 
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth label="House Name" name="houseName" variant="outlined" sx={{bgcolor: "#9edec669"}} value={formData.houseName} onChange={handleChange} />
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth label="Number" name="number" variant="outlined"  sx={{bgcolor: "#9edec669"}} value={formData.number} onChange={handleChange} />
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth label="Suffix" name="suffix" variant="outlined" sx={{bgcolor: "#9edec669"}} value={formData.suffix} onChange={handleChange} />
          </Grid>
          <Grid item xs={12}>
            <TextField 
              fullWidth 
              label="Address Line 1" 
              name="addressLine1" 
              variant="outlined" 
              value={formData.addressLine1}
              onChange={handleChange}
              error={!!errors.addressLine1}
              helperText={errors.addressLine1}
              sx={{bgcolor: "#9edec669"}}
              required 
            />
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth label="Address Line 2" name="addressLine2" variant="outlined" sx={{bgcolor: "#9edec669"}} value={formData.addressLine2} onChange={handleChange} />
          </Grid>
          <Grid item xs={6}>
            <TextField 
              fullWidth 
              label="Postcode" 
              name="postcode" 
              variant="outlined" 
              value={formData.postcode}
              onChange={handleChange}
              error={!!errors.postcode}
              helperText={errors.postcode}
              sx={{bgcolor: "#9edec669"}}
              required
            />
          </Grid>
          <Grid item xs={6}>
            <TextField 
              fullWidth 
              label="Town/City" 
              name="townCity" 
              variant="outlined" 
              value={formData.townCity}
              onChange={handleChange}
              error={!!errors.townCity}
              helperText={errors.townCity}
              sx={{bgcolor: "#9edec669"}}
              required
            />
          </Grid>
          <Grid item xs={6}>
            <TextField 
              fullWidth 
              label="Declaration Date" 
              name="declarationDate" 
              type="date" 
              variant="outlined" 
              value={formData.declarationDate}
              onChange={handleChange}
              error={!!errors.declarationDate}
              helperText={errors.declarationDate}
              sx={{bgcolor: "#9edec669"}}
              InputLabelProps={{ shrink: true }}
              required
            />
          </Grid>
        </Grid>
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
});
