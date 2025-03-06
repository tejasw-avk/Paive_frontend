import React,{useState} from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
  Tooltip,
  IconButton,
  Paper,
} from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import { useNavigate } from "react-router-dom";

export default function SiteLocation() {

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
        propertyName: "",
        address1: "",
        address2: "",
        postalCode: "",
        townCity: "",
        easting: "",
        northing: "",
        description: "",
  });
      const [errors, setErrors] = useState({});
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };

    const validateAndGo = () => {
      
      const tempErrors = {};
      if (!formData.propertyName) tempErrors.propertyName = "Property Name is required.";
      if (!formData.address1) tempErrors.address1 = "Address Line 1 is required.";
      if (!formData.address2) tempErrors.address2 = "Address Line 2 is required.";
      if (!formData.postalCode) tempErrors.postalCode = "Postcode is required.";
      if (!formData.townCity) tempErrors.townCity = "Town/City is required.";
      if (!formData.easting) tempErrors.easting = "Easting Co-ordinates cannot be empty.";
      else if (!/^\d{6,7}$/.test(formData.easting)) tempErrors.easting = "Invalid format.";
      if (!formData.northing) tempErrors.northing = "Northing Co-ordinates cannot be empty.";
      else if (!/^\d{6,7}$/.test(formData.northing)) tempErrors.northing = "Invalid format.";  
      if (!formData.description) tempErrors.description = "Description is required.";    

      setErrors(tempErrors);
      if(Object.keys(tempErrors).length === 0)
      {
        navigate("/appQuestions/appDetails")
      }
    };



  return (
    <Box
      sx={{
        bgcolor: "white",
        display: "flex",
        justifyContent: "center",
        width: "100%",
        height: "80vh",
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
        {/* Back Navigation */}
        <Box sx={{ display: "flex", alignItems: "center", mb: 2, mt: 8 }}>
          <ArrowBackIcon
            style={{ position: "absolute", top: "108px", left: "27px" }}
          />
          <Typography
            position="absolute"
            top="106px"
            left="60px"
            variant="h6"
            fontWeight="medium"
            onClick={() => navigate("/appOverview")}
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

        {/* Form Card */}
        <Paper
          sx={{
            padding: 3,
            borderRadius: 1,
            border: 1,
            borderColor: "#3c7168",
          }}
        >
          {/* Section Title */}
          <Typography
            variant="h6"
            sx={{
              mb: 2,
              textAlign: "left",
              display: "flex",
              alignItems: "center",
              fontWeight:"bold"
            }}
          >
            Site Location
            <Tooltip title="Provide details of the site location">
              <IconButton sx={{ color:"black"}}>
                <InfoIcon color="black" />
              </IconButton>
            </Tooltip>
          </Typography>

          {/* Property Name */}
          <Grid container spacing={2} mb={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Property Name"
                variant="outlined"
                name="propertyName"
                value={formData.propertyName}
                onChange={handleChange}
                error={!!errors.proprtyName}
                helperText={errors.proprtyName}
                size="small"
                
                InputProps={{ style: { backgroundColor: "#edf7ed" } }}
              />
            </Grid>
          </Grid>

          {/* Address Fields */}
          <Grid container spacing={2} mb={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Address Line 1"
                variant="outlined"
                name="address1"
                value={formData.address1}
                onChange={handleChange}
                error={!!errors.address1}
                helperText={errors.address1}
                size="small"
                InputProps={{ style: { backgroundColor: "#edf7ed" } }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Address Line 2"
                variant="outlined"
                name="address2"
                value={formData.address2}
                onChange={handleChange}
                error={!!errors.address2}
                helperText={errors.address2}
                size="small"
                InputProps={{ style: { backgroundColor: "#edf7ed" } }}
              />
            </Grid>
          </Grid>

          {/* Postcode and Town/City */}
          <Grid container spacing={2} mb={2}>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Postcode"
                variant="outlined"
                name="postalCode"
                value={formData.postalCode}
                onChange={handleChange}
                error={!!errors.postalCode}
                helperText={errors.postalCode}
                size="small"
                InputProps={{ style: { backgroundColor: "#edf7ed" } }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Town/City"
                variant="outlined"
                name="townCity"
                value={formData.townCity}
                onChange={handleChange}
                error={!!errors.townCity}
                helperText={errors.townCity}
                size="small"
                InputProps={{ style: { backgroundColor: "#edf7ed" } }}
              />
            </Grid>
          </Grid>

          {/* Description of Site Location */}
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              mb: 2,
              mt: 3,
              textAlign: "left",
            }}
          >
            Description of Site Location
          </Typography>

          <Grid container spacing={2} mb={2}>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Easting (x)"
                variant="outlined"
                name="easting"
                value={formData.easting}
                onChange={handleChange}
                error={!!errors.easting}
                helperText={errors.easting}
                size="small"
                InputProps={{ style: { backgroundColor: "#edf7ed" } }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Northing (y)"
                variant="outlined"
                name="northing"
                value={formData.northing}
                onChange={handleChange}
                error={!!errors.northing}
                helperText={errors.northing}
                size="small"
                InputProps={{ style: { backgroundColor: "#edf7ed" } }}
              />
            </Grid>
          </Grid>

          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Description"
                variant="outlined"
                name="description"
                value={formData.description}
                onChange={handleChange}
                error={!!errors.description}
                helperText={errors.description}
                size="small"
                InputProps={{ style: { backgroundColor: "#edf7ed" } }}
              />
            </Grid>
          </Grid>
        </Paper>

        {/* Action Buttons */}
        <Box sx={{ display: "flex", justifyContent: "center", mt: 8 }}>
          <Button variant="outlined" sx={{ mr: 2 }}>
            Save Changes
          </Button>
          <Button
            variant="contained"
            sx={{ bgcolor: "#3c7168" }}
            onClick={validateAndGo}
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