import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import CheckIcon from "@mui/icons-material/Check";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  InputLabel,
  Link,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, {useState} from "react";

export default function Signup() {
    const [formData, setFormData] = useState({
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      age: "",
      gender: "",
      postalCode: "",
      country: "",
      address: "",
      username: "",
      password: "",
      confirmPassword: "",
    });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.firstName.trim()) tempErrors.firstName = "First Name is required.";
    if (!formData.lastName.trim()) tempErrors.lastName = "Last Name is required.";
    if (!formData.email.trim()) tempErrors.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) tempErrors.email = "Email is invalid.";
    if (!formData.phoneNumber.trim()) tempErrors.phoneNumber = "Phone Number is required.";
    if (!formData.age.trim()) tempErrors.age = "Age is required.";
    if (!formData.gender.trim()) tempErrors.gender = "Gender is required.";
    if (!formData.postalCode.trim()) tempErrors.postalCode = "Postal Code is required.";
    if (!formData.country.trim()) tempErrors.country = "Country is required.";
    if (!formData.address.trim()) tempErrors.address = "Address is required.";
    if (!formData.username.trim()) tempErrors.username = "Username is required.";
    if (!formData.password.trim()) tempErrors.password = "Password is required.";
    else if (formData.password.length < 8) tempErrors.password = "Password must be at least 8 characters.";
    if (!formData.confirmPassword.trim()) tempErrors.confirmPassword = "Confirm Password is required.";
    else if (formData.password !== formData.confirmPassword) tempErrors.confirmPassword = "Passwords do not match.";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Submit form data
      console.log("Form submitted successfully", formData);
    }
  };
  return (
    <Container maxWidth="lg" sx={{ bgcolor: "white", py: 10}}>
      {/* Title Section */}
      <Box sx={{ textAlign: "center", mb: 4, textAlign:"left", fontWeight:"bold"}}>
        <Typography variant="h4" component="h1" >
          Sign Up to Paive
        </Typography>
        <Typography variant="h6" component="p">
          Already a member?{" "}
          <Link href="/login" underline="hover">
            Login
          </Link>
        </Typography>
      </Box>

      {/* Personal Info Section */}
      <Box
        sx={{
          border: 1,
          borderColor: "#3e7e5599",
          borderRadius: 1,
          p: 4,
          mb: 4,
        }}
      >
        <Typography variant="h5" component="h2" sx={{ mb: 2, textAlign:"left"}}>
          Personal Info
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="First Name"
              variant="outlined"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              error={!!errors.firstName}
              helperText={errors.firstName}
              sx={{ bgcolor: "#9edec669" }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Last Name"
              variant="outlined"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              error={!!errors.lastName}
              helperText={errors.lastName}
              sx={{ bgcolor: "#9edec669" }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Email"
              variant="outlined"
              name="email"
              value={formData.email}
              onChange={handleChange}
              error={!!errors.email}
              helperText={errors.email}
              sx={{ bgcolor: "#9edec669" }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Phone Number"
              variant="outlined"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              error={!!errors.phoneNumber}
              helperText={errors.phoneNumber}
              sx={{ bgcolor: "#9edec669" }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Age"
              variant="outlined"
              name="age"
              value={formData.age}
              onChange={handleChange}
              error={!!errors.age}
              helperText={errors.age}
              sx={{ bgcolor: "#9edec669" }}
            />
          </Grid>
          <Grid item xs={12} sm={6} textAlign="left">
            <FormControl component="fieldset" error={!!errors.gender}>
              <FormLabel component="legend">Gender</FormLabel>
              <RadioGroup row name="gender" value={formData.gender} onChange={handleChange}>
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                />
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel
                  value="other"
                  control={<Radio />}
                  label="Other"
                />
              </RadioGroup>
              {errors.gender && <Typography color="error">{errors.gender}</Typography>}
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Postal Code"
              variant="outlined"
              name="postalCode"
              value={formData.postalCode}
              onChange={handleChange}
              error={!!errors.postalCode}
              helperText={errors.postalCode}
              sx={{ bgcolor: "#9edec669" }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Country"
              variant="outlined"
              name="country"
              value={formData.country}
              onChange={handleChange}
              error={!!errors.country}
              helperText={errors.country}
              sx={{ bgcolor: "#9edec669" }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Address"
              variant="outlined"
              name="address"
              value={formData.address}
              onChange={handleChange}
              error={!!errors.address}
              helperText={errors.address}
              multiline
              rows={4}
              sx={{ bgcolor: "#9edec669" }}
            />
          </Grid>
        </Grid>
      </Box>

      {/* Account Info Section */}
      <Box
        sx={{
          border: 1,
          borderColor: "#3e7e5599",
          borderRadius: 1,
          p: 4,
          mb: 4,
        }}
      >
        <Typography variant="h5" component="h2" sx={{ mb: 2, textAlign:"left"}}>
          Account Info
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Email/ Username"
              variant="outlined"
              name="username"
              value={formData.username}
              onChange={handleChange}
              error={!!errors.username}
              helperText={errors.username}
              sx={{ bgcolor: "#9edec669" }}
            />
          </Grid>
          <br></br>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Create Password"
              type="password"
              variant="outlined"
              name="password"
              value={formData.password}
              onChange={handleChange}
              error={!!errors.password}
              helperText={errors.password}
              sx={{ bgcolor: "#9edec669" }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Confirm Password"
              type="password"
              variant="outlined"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              error={!!errors.confirmPassword}
              helperText={errors.confirmPassword}
              sx={{ bgcolor: "#9edec669" }}
            />
          </Grid>
        </Grid>
      </Box>

      {/* Terms and Conditions Section */}
      <Box sx={{ display: "flex", alignItems: "center", mb: 4 }}>
        <Checkbox
          icon={
            <Box
              sx={{
                width: 18,
                height: 18,
                bgcolor: "#black",
                borderRadius: 1,
              }}
            />
          }
          checkedIcon={<CheckIcon sx={{ bgcolor:"green", color: "white" }} />}
        />
        <Typography variant="body1">
          "I confirm that I have read and agree to the{" "}
          <Link href="#" underline="hover">
            Privacy Policy
          </Link>{" "}
          and{" "}
          <Link href="#" underline="hover">
            Terms of Service
          </Link>
          , and consent to the collection, storage, and use of my data as
          described."
        </Typography>
      </Box>

      {/* Submit Button */}
      <Button
        variant="contained"
        color="primary"
        sx={{ display: "block", mx: "auto", mb: 4 }}
        onClick={handleSubmit}
      >
        Create Account
      </Button>
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
  );
};