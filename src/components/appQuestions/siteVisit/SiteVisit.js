import { Box, Button, Container, FormControl, FormControlLabel, Radio, RadioGroup, Typography, TextField, Divider, IconButton, Paper } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import InfoIcon from "@mui/icons-material/Info";
import { useNavigate } from "react-router-dom";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import { useState } from "react";

export default function SiteVisit() {
  const navigate = useNavigate();
  const [contactPerson, setContactPerson] = useState(""); // State to track selected contact person
  const [formData, setFormData] = useState({
    title: "",
    firstName: "",
    lastName: "",
    phoneNum: "",
    email: "",
  });
  const [errors, setErrors] = useState({});
  const [publicView, setPublicView] = useState(""); // Add state for public view selection

  // Handle Input Change
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error for the specific field immediately
    setErrors(prev => ({
      ...prev,
      [name]: ""
    }));
  };

  // Add handler for contact person radio selection
  const handleContactPersonChange = (event) => {
    const value = event.target.value;
    setContactPerson(value);
    
    // Clear contact person error
    setErrors(prev => ({
      ...prev,
      contactPerson: ""
    }));
    
    // Reset form data and errors if not "other"
    if (value !== "other") {
      setFormData({
        title: "",
        firstName: "",
        lastName: "",
        phoneNum: "",
        email: "",
      });
      setErrors({});
    }
  };

  // Add handler for public view selection
  const handlePublicViewChange = (event) => {
    setPublicView(event.target.value);
    setErrors(prev => ({
      ...prev,
      publicView: ""
    }));
  };

  // **Validation Logic**
  const validateForm = () => {
    let tempErrors = {};

    // Validate Public View Selection
    if (!publicView) {
      tempErrors.publicView = "Please select whether the site can be seen from public areas";
    }

    // Validate Contact Person Selection
    if (!contactPerson) {
      tempErrors.contactPerson = "Please select a contact person";
    }

    // Validate Additional Fields if 'Other' is selected
    if (contactPerson === "other") {
      if (!formData.title.trim()) tempErrors.title = "Title is required";
      if (!formData.firstName.trim()) tempErrors.firstName = "First name is required";
      if (!formData.phoneNum.trim()) tempErrors.phoneNum = "Phone number is required";
      if (!formData.email.trim()) {
        tempErrors.email = "Email is required";
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        tempErrors.email = "Invalid email format";
      }
    }

    setErrors(tempErrors);
    if(Object.keys(tempErrors).length === 0) {
      navigate("/appQuestions/preAdvice");
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "90vh",
        bgcolor: "#f5f5f5",
      }}
    >
      {/* Back Navigation */}
      <Box sx={{ display: "flex", alignItems: "center", mb: 3, mt: 9 }}>
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

      {/* Main Content */}
      <Container
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "left",
          justifyContent: "left",
        }}
      >
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

        <Paper
          elevation={3}
          sx={{
            position: "relative",
            width: "100%",
            padding: 3,
            borderRadius: 1,
            borderColor: "#3c7168",
            borderWidth: 1,
            borderStyle: "solid",
          }}
        >
          {/* Site Visit Section */}
          <Typography
            variant="h6"
            sx={{
              display: "flex",
              alignItems: "center",
              mb: 3,
              fontWeight: "bold",
            }}
          >
            Site Visit
            <InfoIcon sx={{ ml: 1 }} />
          </Typography>

          {/* Question 1 */}
          <Typography variant="body1" sx={{ mb: 3, textAlign:"left" }}>
            Can the site be seen from a public road, public footpath, bridleway or other public land?
          </Typography>
          <FormControl component="fieldset" sx={{ mb: 4, mr:176}}>
            <RadioGroup aria-label="public-view" name="public-view" value={publicView} onChange={handlePublicViewChange}>
              <FormControlLabel value="yes" control={<Radio sx={{ color: "#3c7168" }} />} label="Yes" />
              <FormControlLabel value="no" control={<Radio sx={{ color: "#3c7168" }} />} label="No" />
            </RadioGroup>
            {errors.publicView && (
              <Typography color="error" variant="caption">
                {errors.publicView}
              </Typography>
            )}
          </FormControl>

          {/* Question 2 */}
          <Typography variant="body1" sx={{ mb: 3, textAlign:"left" }}>
            If the planning authority needs to make an appointment to carry out a site visit, whom should they contact?
          </Typography>
          <FormControl component="fieldset" sx={{ mb: 2, mr: 176 }}>
            <RadioGroup
              row 
              aria-label="contact-person"
              name="contact-person"
              value={contactPerson}
              onChange={handleContactPersonChange}
              sx={{ display: "flex", flexDirection: "row", gap: 1 }}
            >
              <FormControlLabel 
                value="agent" 
                control={<Radio sx={{ color: "#3c7168" }} />} 
                label="The agent" 
              />
              <FormControlLabel 
                value="applicant" 
                control={<Radio sx={{ color: "#3c7168" }} />} 
                label="The applicant" 
              />
              <FormControlLabel 
                value="other" 
                control={<Radio sx={{ color: "#3c7168" }} />} 
                label="Other Person" 
              />
            </RadioGroup>
            {errors.contactPerson && (
              <Typography color="error" variant="caption">
                {errors.contactPerson}
              </Typography>
            )}
          </FormControl>

          {/* Conditional Rendering for Additional Fields */}
          {contactPerson === "other" && (
            <Box sx={{ mt: 3, p: 2, bgcolor: "#f9f9f9", borderRadius: 1 }}>
              <Typography variant="body1" sx={{ mb: 2 }}>
                If Other has been selected, please provide contact details:
              </Typography>

              <TextField 
                fullWidth 
                variant="outlined" 
                name="title" 
                value={formData.title} 
                label="Title" 
                sx={{ mb: 2, bgcolor: "#9edec669", borderRadius: 1 }} 
                onChange={handleChange}
                error={!!errors.title}
                helperText={errors.title}
              />
              <Box sx={{ display: "flex", gap: 2 }}>
                <TextField 
                  fullWidth 
                  variant="outlined" 
                  name="firstName" 
                  value={formData.firstName} 
                  label="First Name" 
                  sx={{ mb: 2, bgcolor: "#9edec669", borderRadius: 1 }} 
                  onChange={handleChange}
                  error={!!errors.firstName}
                  helperText={errors.firstName}
                />
                <TextField 
                  fullWidth 
                  variant="outlined" 
                  name="lastName" 
                  value={formData.lastName} 
                  label="Last Name" 
                  sx={{ mb: 2, bgcolor: "#9edec669", borderRadius: 1 }} 
                />
              </Box>
              <Box sx={{ display: "flex", gap: 2 }}>
                <TextField 
                  fullWidth 
                  variant="outlined" 
                  name="phoneNum" 
                  value={formData.phoneNum} 
                  label="Phone Number" 
                  sx={{ mb: 2, bgcolor: "#9edec669", borderRadius: 1 }} 
                  onChange={handleChange}
                  error={!!errors.phoneNum}
                  helperText={errors.phoneNum}
                />
                <TextField 
                  fullWidth 
                  variant="outlined" 
                  name="email" 
                  value={formData.email} 
                  label="E-mail" 
                  sx={{ mb: 2, bgcolor: "#9edec669", borderRadius: 1 }} 
                  onChange={handleChange}
                  error={!!errors.email}
                  helperText={errors.email}
                />
              </Box>
            </Box>
          )}
        </Paper>

        {/* Action Buttons */}
        <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mb: 2, mt: 2 }}>
        <Button variant="outlined" sx={{ borderColor: "#3c7168", color: "#3c7168", textTransform: "none" }}>
            Save Changes
          </Button>
          <Button
            variant="outlined"
            sx={{ borderColor: "#3c7168", color: "#3c7168", textTransform: "none" }}
            onClick={() => navigate("/appQuestions/bngQues")}
          >
            Previous
          </Button>
          <Button
            variant="contained"
            sx={{ bgcolor: "#3c7168", color: "white", textTransform: "none" }}
            onClick={validateForm}
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
