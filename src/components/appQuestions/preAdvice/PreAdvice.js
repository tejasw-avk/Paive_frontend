import {
  Box,
  Button,
  Container,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  IconButton,
  Typography,
  TextField,
} from "@mui/material";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import InfoIcon from "@mui/icons-material/Info";
import { useNavigate } from "react-router-dom";
import React,{ useState } from "react";

export default function PreAdvice() {
  const navigate = useNavigate();
  const [preAdvice, setPreAdvice] = useState(""); // State to track the selected option
  const [formData, setFormData] = useState({
    title: "",
    firstName: "",
    lastName: "",
    reference: "",
    date: null,
    details: "",
  });
  const [errors, setErrors] = useState({});
  //Handle Radio button changes
  const handlePreAdviceChange = (event) => {
    const value = event.target.value;
    setPreAdvice(value);
    
    // Clear preAdvice error and all form errors when selection changes
    setErrors({});
    
    // Reset form data if "no" is selected
    if (value === "no") {
      setFormData({
        title: "",
        firstName: "",
        lastName: "",
        reference: "",
        date: null,
        details: "",
      });
    }
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));

    // Clear error immediately for the specific field
    setErrors(prevState => ({
      ...prevState,
      [name]: ""
    }));
  };

  const handleDateChange = (newValue) => {
    setFormData(prevState => ({
      ...prevState,
      date: newValue
    }));

  // Clear date error immediately
  setErrors(prevState => ({
    ...prevState,
    date: ""
  }));
};

    // Validation function
    const validateAndNavigate = () => {
      let tempErrors = {};
  
      // Validate radio button selection
      if (!preAdvice) {
        tempErrors.preAdvice = "Please select whether advice was sought";
      }
      
      if (preAdvice === "yes") {
        if (!formData.title.trim()) tempErrors.title = "Title is required";
        if (!formData.firstName.trim()) tempErrors.firstName = "First name is required";
        if (!formData.reference.trim()) tempErrors.reference = "Reference is required";
        if (!formData.date) tempErrors.date = "Date is required";
        if (!formData.details.trim()) tempErrors.details = "Details are required";
      }
  
      setErrors(tempErrors);

      // Only navigate if there are no errors
      if (Object.keys(tempErrors).length === 0) {
        navigate("/appQuestions/empAuthority");
      }
    };
  
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
    <Container maxWidth="lg">
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

      {/* Pre-application Advice Section */}
      <Box
        sx={{
          p: 3,
          border: "1px solid #3c7168",
          borderRadius: "8px",
          backgroundColor: "white",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
          <Typography variant="h6" sx={{ fontFamily: "Inter-Medium", fontWeight: "bold" }}>
            Pre-application Advice
          </Typography>
          <InfoIcon sx={{ color: "#black" , ml:1}} />
        </Box>

        <Typography variant="h6" sx={{ fontFamily: "Inter-Regular", mb: 3, textAlign:"left"}}>
          Has assistance or prior advice been sought from the local authority about this application?
        </Typography>

        <FormControl error={!!errors.preAdvice} component="fieldset">
          <RadioGroup
            row
            value={preAdvice}
            onChange={handlePreAdviceChange}
          >
            <FormControlLabel
              value="yes"
              control={<Radio />}
              label="Yes"
              sx={{ color: "#3c7168" }}
            />
            <FormControlLabel
              value="no"
              control={<Radio />}
              label="No"
              sx={{ color: "#3c7168" }}
            />
          </RadioGroup>
          {errors.preAdvice &&(
            <Typography variant="caption" color="error">
              {errors.preAdvice}
            </Typography>
          )}
        </FormControl>

        {/* Conditional Rendering for Additional Fields */}
        {preAdvice === "yes" && (
          <Box sx={{ mt: 3, p: 2, bgcolor: "#f9f9f9", borderRadius: 1 }}>
            <Typography variant="body1" sx={{ mb: 2 }}>
              If Yes, please complete the following information about the advice you were given (this will help the
              authority to deal with this application more efficiently):
            </Typography>

            <TextField fullWidth variant="outlined" name="title" value={formData.title} onChange={handleChange} error={!!errors.title} helperText={errors.title} label="Title" sx={{ mb: 2, bgcolor: "#9edec669", borderRadius: 1 }} />
            <Box sx={{ display: "flex", gap: 2 }}>
              <TextField fullWidth variant="outlined" name="firstName" value={formData.firstName} onChange={handleChange} error={!!errors.firstName} helperText={errors.firstName} label="First Name" sx={{ mb: 2, bgcolor: "#9edec669", borderRadius: 1 }} />
              <TextField fullWidth variant="outlined" name="lastName" value={formData.lastName} onChange={handleChange} label="Last Name" sx={{ mb: 2, bgcolor: "#9edec669", borderRadius: 1 }} />
            </Box>
            <TextField fullWidth variant="outlined" name="reference" value={formData.reference} onChange={handleChange} error={!!errors.reference} helperText={errors.reference} label="Reference" sx={{ mb: 2, bgcolor: "#9edec669", borderRadius: 1 }} />
            <DatePicker
            label="Date (must be pre-application submission)"
            value={formData.date}
            onChange={handleDateChange}
            maxDate={dayjs()} // Prevents selecting future dates
            format="DD/MM/YYYY"
            slotProps={{
              textField: {
                fullWidth: true,
                error: !!errors.date,
                helperText: errors.date,
                sx: { 
                  mb: 2, 
                  bgcolor: "#9edec669", 
                  borderRadius: 1,
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: errors.date ? 'error.main' : '#3c7168',
                    },
                  },
                }
              }
            }}
          />
            <TextField
              fullWidth
              variant="outlined"
              name="details"
              value={formData.details}
              onChange={handleChange}
              error={!!errors.details}
              helperText={errors.details}
              label="Details of the pre-application advice received"
              multiline
              rows={3}
              sx={{ mb: 2, bgcolor: "#9edec669", borderRadius: 1 }}
            />
          </Box>
        )}
      </Box>

      {/* Buttons Section */}
      <Box sx={{ mt: 4, mb:4, display: "flex", justifyContent: "center", gap: 2 }}>
      <Button variant="outlined" sx={{ textTransform: "none", borderColor: "#3c7168", color: "#3c7168" }}>
          Save Changes
        </Button>
        <Button
          variant="outlined"
          sx={{ textTransform: "none", borderColor: "#3c7168", color: "#3c7168" }}
          onClick={() => navigate("/appQuestions/siteVisit")}
        >
          Previous
        </Button>
        <Button
          variant="contained"
          sx={{ textTransform: "none", backgroundColor: "#3c7168", color: "white" }}
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
    </LocalizationProvider>
  );
}
