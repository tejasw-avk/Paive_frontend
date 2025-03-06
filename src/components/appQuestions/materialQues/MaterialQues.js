import InfoIcon from "@mui/icons-material/Info";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import {
  Box,
  Button,
  Container,
  Divider,
  FormControl,
  FormControlLabel,
  Paper,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function MaterialQues() {
  const navigate = useNavigate();
  
  // State to track radio selection
  const [materialsRequired, setMaterialsRequired] = useState(null);
  
  // State to manage dynamic fields
  const [materialEntries, setMaterialEntries] = useState([
    { type: "", 
      existing: "", 
      proposed: "" }
  ]);

  const [errors, setErrors] = useState([]);

  // Handle adding a new entry
  const handleAddAnother = () => {
    setMaterialEntries([
      ...materialEntries,
      { type: "", existing: "", proposed: "" }
    ]);
  };

  // Handle removing an entry
  const handleCancel = (index) => {
    const updatedEntries = materialEntries.filter((_, i) => i !== index);
    setMaterialEntries(updatedEntries);
  };

  const validateandGo = () => {
    let tempErrors = {};

    // Validate Contact Person Selection
    if (!materialsRequired) tempErrors.materialsRequired = "Please select an option.";

    // Validate Additional Fields if 'Other' is selected
    if (materialsRequired === "yes") {
      materialEntries.forEach((entry, index) => {
      if (!entry.type.trim()) tempErrors[`type-${index}`] = "Type is required.";
      if (!entry.existing.trim()) tempErrors[`existing-${index}`] = "This field is required.";
      if (!entry.proposed.trim()) tempErrors[`proposed-${index}`] = "This field is required.";
    });
    }

    setErrors(tempErrors);
    if(Object.keys(tempErrors).length === 0){
      navigate("/appQuestions/treeshedges");
    } 
 
  };

  // Update the material radio handler
  const handleMaterialsRequiredChange = (event) => {
    setMaterialsRequired(event.target.value);
    // Clear errors when selection changes
    setErrors(prev => ({
      ...prev,
      materialsRequired: ""
    }));
  };

  // Update the TextField onChange handlers
  const handleFieldChange = (index, field, value) => {
    const updatedEntries = [...materialEntries];
    updatedEntries[index][field] = value;
    setMaterialEntries(updatedEntries);

    // Clear error for the specific field
    setErrors(prev => ({
      ...prev,
      [`${field}-${index}`]: ""
    }));
  };

  return (
    <Container maxWidth="md" sx={{ bgcolor: "white", p: 4 }}>
      {/* Back to Application Overview */}
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

      {/* Title Section */}
      <Typography
                variant="h4"
                component="div"
                sx={{
                  fontWeight: "bold",
                  color: "#1b4e3b",
                  mb: 4,
                  mt: 4,
                  textAlign: "left",
                }}
              >
                House Planning Application001
              </Typography>

      {/* Materials Question Section */}
      <Paper
        elevation={3}
        sx={{
          p: 3,
          borderColor: "#3c7168",
          borderWidth: 1,
          borderStyle: "solid",
          borderRadius: 1,
        }}
      >
        <Typography
          variant="h6"
          sx={{
            mb: 2,
            textAlign: "left",
            display: "flex",       
            alignItems: "center",  
          }}
        >
          Materials
          <InfoIcon sx={{ ml: 1 }} /> 
        </Typography>

        <Typography variant="body1" sx={{ mb: 3 }}>
          Does the proposed development require any materials to be used externally?
        </Typography>

        {/* Radio Group */}
        <FormControl component="fieldset">
          <RadioGroup
            row
            value={materialsRequired}
            onChange={handleMaterialsRequiredChange}
          >
            <FormControlLabel value="yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="no" control={<Radio />} label="No" />
          </RadioGroup>
          {errors.materialsRequired && (
            <Typography color="error" variant="caption">
              {errors.materialsRequired}
            </Typography>
          )}
        </FormControl>

        {/* Conditional Rendering for Material Details */}
        {materialsRequired === "yes" && (
          <Box sx={{ mt: 3, p: 2, bgcolor: "#f9f9f9", borderRadius: 1 }}>
            <Typography variant="body1" sx={{ mb: 2 }}>
              Please provide a description of existing and proposed materials and finishes to be used externally 
              (including type, colour, and name for each material).
            </Typography>

            {/* Loop through material entries and render the fields */}
            {materialEntries.map((entry, index) => (
              <Box key={index} sx={{ mb: 3 }}>
                <TextField
                  fullWidth
                  variant="outlined"
                  label="Type"
                  name={`type-${index}`}
                  value={entry.type}
                  onChange={(e) => handleFieldChange(index, 'type', e.target.value)}
                  error={!!errors[`type-${index}`]}
                  helperText={errors[`type-${index}`]}
                  sx={{ mb: 2, bgcolor: "#9edec669", borderRadius: 1 }}
                />
                <TextField
                  fullWidth
                  variant="outlined"
                  label="Existing materials and finishes"
                  name={`existing-${index}`}
                  value={entry.existing}
                  onChange={(e) => handleFieldChange(index, 'existing', e.target.value)}
                  error={!!errors[`existing-${index}`]}
                  helperText={errors[`existing-${index}`]}
                  sx={{ mb: 2, bgcolor: "#9edec669", borderRadius: 1 }}
                />
                <TextField
                  fullWidth
                  variant="outlined"
                  label="Proposed materials and finishes"
                  name={`proposed-${index}`}
                  value={entry.proposed}
                  onChange={(e) => handleFieldChange(index, 'proposed', e.target.value)}
                  error={!!errors[`proposed-${index}`]}
                  helperText={errors[`proposed-${index}`]}
                  sx={{ mb: 2, bgcolor: "#9edec669", borderRadius: 1 }}
                />

                {/* Cancel button to remove the entry */}
                {index > 0 && (
                  <Button
                    variant="outlined"
                    sx={{ borderColor: "#3c7168", color: "#3c7168" }}
                    onClick={() => handleCancel(index)}
                  >
                    Cancel
                  </Button>
                )}
              </Box>
            ))}

            {/* Add Another button */}
            <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
            <Button
              variant="outlined"
              sx={{ borderColor: "#3c7168", color: "#3c7168" }}
              onClick={handleAddAnother}
            >
              Add Another +
            </Button>
              <Button variant="contained" sx={{ bgcolor: "#3c7168", color: "white" }}>
                Save
              </Button>
            </Box>
          </Box>
        )}

        {/* Additional Information Section */}
        <Divider sx={{ my: 3 }} />
        <Typography variant="body1" sx={{ mb: 3 }}>
          Are you supplying additional information on submitted plans, drawings, or a design and access statement?
        </Typography>

        <FormControl component="fieldset">
          <RadioGroup row>
            <FormControlLabel value="yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="no" control={<Radio />} label="No" />
          </RadioGroup>
        </FormControl>
      </Paper>

      {/* Action Buttons */}
      <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
        <Button variant="outlined" sx={{ mr: 2 }}>
          Save Changes
        </Button>
        <Button variant="outlined" sx={{ mr: 2 }} onClick={() => navigate("/appQuestions/devDates")}>
          Previous
        </Button>
        <Button variant="contained" sx={{ bgcolor: "#3c7168" }} onClick={validateandGo}>
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
  );
}
