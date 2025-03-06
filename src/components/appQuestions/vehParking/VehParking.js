import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import InfoIcon from "@mui/icons-material/Info";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  Link,
  Radio,
  RadioGroup,
  Typography,
  IconButton,
  Paper,
  Container,
  TextField,
  Divider,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function VehParking() {
  const navigate = useNavigate();
  const [parkingRequired, setParkingRequired] = useState(null);
  const [parkingDetails, setParkingDetails] = useState([{
    vehicleType: "",
    existingSpaces: "",
    proposedSpaces: "",
    difference: ""
  }]);

  const [errors, setErrors] = useState({
    parkingRequired: "",
    parkingDetails: []
  });

// Update the parking required handler
const handleParkingRequiredChange = (event) => {
  setParkingRequired(event.target.value);
  // Clear error immediately when selection changes
  setErrors(prev => ({
    ...prev,
    parkingRequired: ""
  }));
  // Reset parking details if "no" is selected
  if (event.target.value === "no") {
    setParkingDetails([{
      vehicleType: "",
      existingSpaces: "",
      proposedSpaces: "",
      difference: ""
    }]);
  }
};

// Update the parking detail change handler
const handleParkingDetailChange = (index, field, value) => {
  const newParkingDetails = [...parkingDetails];
  newParkingDetails[index] = {
    ...newParkingDetails[index],
    [field]: value
  };
  setParkingDetails(newParkingDetails);

  // Clear error for the specific field immediately
  setErrors(prev => ({
    ...prev,
    parkingDetails: prev.parkingDetails.map((detail, i) => 
      i === index ? { ...detail, [field]: "" } : detail
    )
  }));
};


  // validation function
const validateAndNavigate = () => {
  let tempErrors = {
    parkingRequired: "",
    parkingDetails: []
  };
  let isValid = true;

  // Validate radio button selection
  if (!parkingRequired) {
    tempErrors.parkingRequired = "Please select an option";
    isValid = false;
  }

   // Validate parking details if "Yes" is selected
   if (parkingRequired === "yes") {
    const detailErrors = parkingDetails.map(detail => {
      const rowErrors = {};
      if (!detail.vehicleType?.trim()) {
        rowErrors.vehicleType = "Vehicle type is required";
        isValid = false;
      }
      if (!detail.existingSpaces?.trim()) {
        rowErrors.existingSpaces = "Existing spaces is required";
        isValid = false;
      }
      if (!detail.proposedSpaces?.trim()) {
        rowErrors.proposedSpaces = "Proposed spaces is required";
        isValid = false;
      }
      if (!detail.difference?.trim()) {
        rowErrors.difference = "Difference is required";
        isValid = false;
      }
      return rowErrors;
    });
    tempErrors.parkingDetails = detailErrors;
  }

  setErrors(tempErrors);

  if (isValid) {
    navigate("/appQuestions/bngQues");
  }
};

  // Add a new parking row
  const addParkingRow = () => {
    setParkingDetails([...parkingDetails, {
      vehicleType: "",
      existingSpaces: "",
      proposedSpaces: "",
      difference: ""
    }]);
  };

  // Remove the most recent parking row
  const removeParkingRow = () => {
    if (parkingDetails.length > 1) {
      setParkingDetails(parkingDetails.slice(0, -1));
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
        <IconButton sx={{ mr: 1, color: "#black" }}>
          <ArrowBackIcon />
        </IconButton>
        <Typography
          variant="h5"
          sx={{ fontFamily: "Inter", fontWeight: 500, color: "#black" }}
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
          variant="h5"
          component="div"
          sx={{
            color: "#black",
            fontWeight: "bold",
            mb: 3,
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
          {/* Form Section */}
          <Typography
            variant="h6"
            sx={{
              display: "flex",
              alignItems: "center",
              mb: 3,
              fontWeight: "bold",
            }}
          >
            Vehicle Parking
            <InfoIcon sx={{ ml: 1 }} />
          </Typography>

          {/* Info Text */}
          <Typography
            variant="h5"
            sx={{
              fontFamily: "Inter",
              fontWeight: 700,
              color: "#333",
              lineHeight: 1.6,
              mb: 2,
              textAlign:"left",
            }}
          >
            Please note: This question is specific to applications within the
            Greater London area. The Mayor can request relevant information
            about spatial planning in Greater London under{" "}
            <Link
              href="https://www.legislation.gov.uk/ukpga/1999/29/section/346"
              target="_blank"
              rel="noopener noreferrer"
              underline="hover"
              sx={{ color: "#005f46", fontWeight: "bold" }}
            >
              Section 346 of the Greater London Authority Act 1999
            </Link>
            .
          </Typography>
          <Typography
            variant="h5"
            sx={{
              fontFamily: "Inter",
              fontWeight: 700,
              color: "#333",
              lineHeight: 1.6,
              mb: 3,
              textAlign:"left",
            }}
          >
            <Link
              href="https://www.london.gov.uk/"
              target="_blank"
              rel="noopener noreferrer"
              underline="hover"
              sx={{ color: "#005f46", fontWeight: "bold" }}
            >
              View more information on the collection of this additional data
              and assistance with providing an accurate response
            </Link>
            .
          </Typography>
          <Divider sx={{ my: 2 }} />

          {/* Question */}
          <Typography
            variant="h5"
            sx={{ fontFamily: "Inter", fontWeight: 700, color: "#333", mb: 2, textAlign:"left"}}
            error={!!errors.parkingRequired}
            helperText={errors.parkingRequired}
          >
            Does the site have any existing vehicle/cycle parking spaces or will
            the proposed development add/remove any parking spaces?
          </Typography>

          <FormControl component="fieldset" sx={{ mb: 2 }}>
            <RadioGroup
              row
              value={parkingRequired}
              onChange={handleParkingRequiredChange}
            >
              <FormControlLabel
                value="yes"
                control={<Radio sx={{ color: "#005f46" }} />}
                label="Yes"
              />
              <FormControlLabel
                value="no"
                control={<Radio sx={{ color: "#005f46" }} />}
                label="No"
              />
            </RadioGroup>
            {errors.parkingRequired && (
          <Typography variant="caption" color="error">
               {errors.parkingRequired}
          </Typography>
            )}
          </FormControl>

          {/* Conditional Rendering for Parking Input Fields */}
          {parkingRequired === "yes" &&
            parkingDetails.map((detail, index) => (
              <Box key={index} sx={{ mt: 3, p: 2, bgcolor: "#f9f9f9", borderRadius: 1 }}>
                <Typography variant="body1" sx={{ mb: 2 }}>
                  Please provide the following details about vehicle/cycle
                  parking spaces:
                </Typography>

                <TextField
                  fullWidth
                  variant="outlined"
                  label="Vehicle Type"
                  value={detail.vehicleType}
                  onChange={(e) => handleParkingDetailChange(index, "vehicleType", e.target.value)}
                  error={!!errors.parkingDetails[index]?.vehicleType}
                  helperText={errors.parkingDetails[index]?.vehicleType}
                  sx={{ mb: 2, bgcolor: "#9edec669", borderRadius: 1 }}
                />
                <TextField
                  fullWidth
                  variant="outlined"
                  label="Existing number of spaces"
                  value={detail.existingSpaces}
                  onChange={(e) => handleParkingDetailChange(index, "existingSpaces", e.target.value)}
                  error={!!errors.parkingDetails[index]?.existingSpaces}
                  helperText={errors.parkingDetails[index]?.existingSpaces}
                  sx={{ mb: 2, bgcolor: "#9edec669", borderRadius: 1 }}
                />
                <TextField
                  fullWidth
                  variant="outlined"
                  label="Total proposed (including spaces retained)"
                  value={detail.proposedSpaces}
                  onChange={(e) => handleParkingDetailChange(index, "proposedSpaces", e.target.value)}
                  error={!!errors.parkingDetails[index]?.proposedSpaces}
                  helperText={errors.parkingDetails[index]?.proposedSpaces}
                  sx={{ mb: 2, bgcolor: "#9edec669", borderRadius: 1 }}
                />
                <TextField
                  fullWidth
                  variant="outlined"
                  label="Difference in spaces"
                  value={detail.difference}
                  onChange={(e) => handleParkingDetailChange(index, "difference", e.target.value)}
                  error={!!errors.parkingDetails[index]?.difference}
                  helperText={errors.parkingDetails[index]?.difference}
                  sx={{ mb: 2, bgcolor: "#9edec669", borderRadius: 1 }}
                />

                {/* Action Buttons for Adding/Removing Parking */}
                <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
                  <Button
                    variant="outlined"
                    sx={{ borderColor: "#005f46", color: "#005f46" }}
                    onClick={addParkingRow}
                  >
                    Add Another +
                  </Button>
                  {index > 0 && (
                    <Button
                      variant="outlined"
                      sx={{ borderColor: "#ff0000", color: "#ff0000" }}
                      onClick={removeParkingRow}
                    >
                      Cancel
                    </Button>
                  )}
                </Box>
              </Box>
            ))}
        </Paper>

        {/* Action Buttons */}
        <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mb: 2, mt:2 }}>
        <Button
            variant="outlined"
            sx={{ borderColor: "#005f46", color: "#005f46", textTransform: "none" }}
          >
            Save Changes
          </Button>
          <Button
            variant="outlined"
            sx={{ borderColor: "#005f46", color: "#005f46", textTransform: "none" }}
            onClick={() => navigate("/appQuestions/pedQues")}
          >
            Previous
          </Button>
          <Button
            variant="contained"
            sx={{ bgcolor: "#005f46", color: "white", textTransform: "none" }}
            onClick={validateAndNavigate}
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
