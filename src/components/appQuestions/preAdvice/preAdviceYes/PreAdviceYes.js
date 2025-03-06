import {
    Box,
    Button,
    Container,
    Divider,
    FormControl,
    FormControlLabel,
    Grid,
    IconButton,
    InputLabel,
    Radio,
    RadioGroup,
    TextField,
    Typography,
  } from "@mui/material";
  import React,{useState} from "react";
  import {useNavigate} from "react-router-dom";
  import ArrowBack from "@mui/icons-material/ArrowBack";
  import InfoOutlined from "@mui/icons-material/InfoOutlined";
  import CircleIcon from "@mui/icons-material/Circle";
  import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
  import CalendarToday from "@mui/icons-material/CalendarToday";
  
  export default function PreAdviceYes() {
    const navigate = useNavigate();
    const [adviceSought, setAdviceSought] = useState("");
    const [formData, setFormData] = useState({
      title: "",
      firstName: "",
      lastName: "",
      reference: "",
      date: "",
      details: "",
    });
    const [errors, setErrors] = useState({});
  
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    // Validation function
    const validateandGo = () => {
      let newErrors = {};
  
      // Validate radio button selection
      if (adviceSought === null || adviceSought === "") {
        newErrors.adviceSought = "Please select whether advice was sought";
      }
  
      // Only validate form fields if "Yes" was selected
      if (adviceSought === "yes") {
        if (!formData.title.trim()) newErrors.title = "Title is required";
        if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
        if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
        if (!formData.reference.trim()) newErrors.reference = "Reference is required";
        if (!formData.date.trim()) newErrors.date = "Date is required";
        if (!formData.details.trim()) newErrors.details = "Details are required";
      }
  
      setErrors(newErrors);
      if (Object.keys(newErrors).length === 0) {
        navigate("/appQuestions/empAuthority");
      }
    };
    return (
      <Container maxWidth="lg" sx={{ mt: 10 }}>
        {/* Back to Application Overview */}
        <Box sx={{ mb: 3, display: "flex", alignItems: "center" }}>
          <ArrowBack />
          <Typography
            component="a"
            href="#"
            variant="body1"
            sx={{ ml: 1, textDecoration: "none", color: "inherit" }}
          >
            Back to application overview
          </Typography>
        </Box>
  
        {/* Title */}
        <Typography
          variant="h4"
          sx={{ mb: 3, color: "#1b4e3b", fontWeight: 600, fontFamily: "Inter" }}
        >
          House Planning Application001
        </Typography>
  
        {/* Pre-application Advice Section */}
        <Box
          sx={{
            p: 3,
            border: "1px solid #3c7168",
            borderRadius: "10px",
            backgroundColor: "#fff",
          }}
        >
          {/* Section Header */}
          <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              Pre-application Advice
            </Typography>
            <InfoOutlined sx={{ ml: 1, color: "#3c7168" }} />
          </Box>
  
          {/* Question */}
          <Typography variant="body1" sx={{ mb: 2 }}>
            Has assistance or prior advice been sought from the local authority
            about this application?
          </Typography>
  
          {/* Radio Options */}
          <FormControl error={!!errors.adviceSought}>
            <RadioGroup row value={adviceSought} onChange={(e) => setAdviceSought(e.target.value)}>
              <FormControlLabel
                value="yes"
                control={
                  <Radio
                    icon={<CircleOutlinedIcon />}
                    checkedIcon={<CircleIcon />}
                    sx={{ color: "#3c7168" }}
                  />
                }
                label="Yes"
              />
              <FormControlLabel
                value="no"
                control={
                  <Radio
                    icon={<CircleOutlinedIcon />}
                    checkedIcon={<CircleIcon />}
                    sx={{ color: "#3c7168" }}
                  />
                }
                label="No"
              />
            </RadioGroup>
            {errors.adviceSought && (
            <Typography variant="caption" color="error">
            {errors.adviceSought}
            </Typography>
        )}
          </FormControl>
          
  
          {/* Additional Details */}
          <Typography variant="body1" sx={{ mt: 3, mb: 3 }}>
            If Yes, please complete the following information about the advice you
            were given (this will help the authority to deal with this application
            more efficiently):
          </Typography>

          {/* Form Fields */}
          {adviceSought === "yes" && (
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Officer name: Title"
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
                error={!!errors.lastName}
                helperText={errors.lastName}
                variant="outlined"
                sx={{ bgcolor: "#9edec669" }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Reference"
                name="reference"
                value={formData.reference}
                onChange={handleChange}
                error={!!errors.reference}
                helperText={errors.reference}
                variant="outlined"
                sx={{ bgcolor: "#9edec669" }}
              />
            </Grid>
            <Grid item xs={12}>
              <InputLabel sx={{ mb: 1 }}>Date (must be pre-application submission)</InputLabel>
              <TextField
                fullWidth
                placeholder="DD/MM/YYYY"
                name="date"
                value={formData.date}
                onChange={handleChange}
                error={!!errors.date} 
                helperText={errors.date}
                variant="outlined"
                sx={{ bgcolor: "#9edec669" }}
                InputProps={{
                  endAdornment: (
                    <IconButton>
                      <CalendarToday />
                    </IconButton>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Details of the pre-application advice received"
                name="details"
                value={formData.details}
                onChange={handleChange}
                error={!!errors.details}
                helperText={errors.details}
                variant="outlined"
                multiline
                rows={4}
                sx={{ bgcolor: "#9edec669" }}
              />
            </Grid>
          </Grid>
        )}
        </Box>
  
        {/* Buttons */}
        <Box sx={{ mt: 4, display: "flex", justifyContent: "center", gap: 2 }}>
          <Button
            variant="outlined"
            sx={{ textTransform: "none", borderColor: "#3c7168", color: "#3c7168" }}
          >
            Save Changes
          </Button>
          <Button
            variant="outlined"
            sx={{ textTransform: "none", borderColor: "#3c7168", color: "#3c7168" }}
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
            onClick={validateandGo}
          >
            Next
          </Button>
        </Box>
      </Container>
    );
  };