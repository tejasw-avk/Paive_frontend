import InfoIcon from "@mui/icons-material/Info";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import { useNavigate } from "react-router-dom";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Link,
  IconButton,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import React,{useState} from "react";

export default function VehParkingYes() {
const navigate = useNavigate(); 

 const [formData, setFormData] = useState({
        vehicleType: "",
        existingSpaces: "",
        proposed: "",
        diffSpaces: "",
      });
      const [errors, setErrors] = useState({});
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const validateandGo = () => {
      let tempErrors = {};
      if (!formData.vehicleType.trim()) tempErrors.vehicleType = "Vehicle Type is required.";
      if (!formData.existingSpaces.trim()) tempErrors.existingSpaces = "This field is required.";
      if (!formData.proposed.trim()) tempErrors.proposed = "This field is required.";
      if (!formData.diffSpaces.trim()) tempErrors.diffSpaces = "This field is required.";

  
      setErrors(tempErrors);
      if(Object.keys(tempErrors).length === 0)
      {
        navigate("/appQuestions/bngQues");
      }
    };

  return (
    <Container maxWidth="xl" sx={{ bgcolor: "white", py: 4 }}>
      <Box sx={{ display: "flex", alignItems: "center", mb: 3, mt:9 }}>
            <IconButton sx={{ mr: 1, color: "black" }}>
              <ArrowBackIcon />
            </IconButton>
            <Typography
              variant="h4"
              sx={{
                fontFamily: "Inter",
                fontWeight: 500,
                color: "black",
              }}
            >
              Back to application overview
            </Typography>
          </Box>

        <Typography variant="h4" fontWeight="bold" sx={{ mb: 4, textAlign:"left"}}>
          House Planning Application001
        </Typography>

        {/* Form Container */}
        <Box
          sx={{
            width: "100%",
            height: "100%",
            border: "1px solid #ccc",
            borderRadius: "8px",
            p: 4,
            bgcolor: "#f8f8f8",
          }}
        >
          {/* Header */}
          <Box sx={{ position: "relative" }}>
            <Typography variant="h5" fontWeight="medium" sx={{ mb: 2, textAlign:"left"}}>
              Vehicle Parking
            </Typography>
            <InfoIcon sx={{ color: "#005f46", ml: 1 }} />
          </Box>

          <Typography variant="h5" sx={{ mb: 2, textAlign:"left"}}>
            Please note: This question is specific to applications within the Greater London area.
            The Mayor can request relevant information about spatial planning in Greater London under{" "}
            <Link
              href="https://www.legislation.gov.uk/ukpga/1999/29/section/346"
              target="_blank"
              underline="hover"
            >
              Section 346 of the Greater London Authority Act 1999
            </Link>
            .
          </Typography>

          <Link
            href="https://www.london.gov.uk/what-we-do/planning/london-plan/london-development-database/london-development-database-automation-project"
            target="_blank"
            underline="hover"
            sx={{ display: "block", mb: 4, textAlign:"left" }}
          >
            View more information on the collection of this additional data and assistance with
            providing an accurate response.
          </Link>

          {/* Radio Buttons */}
          <Typography variant="h5" sx={{ mb: 2, textAlign:"left"}}>
            Does the site have any existing vehicle/cycle parking spaces or will the proposed
            development add/remove any parking spaces?
          </Typography>
          <RadioGroup defaultValue="yes" sx={{ mb: 4 }}>
            <Grid container spacing={2}>
              <Grid item>
                <Radio
                  value="yes"
                  icon={<RadioButtonUncheckedIcon />}
                  checkedIcon={<CheckCircleIcon />}
                  sx={{ "& .MuiSvgIcon-root": { fontSize: "20px" } }}
                />
                <Typography variant="body1" component="span">
                  Yes
                </Typography>
              </Grid>
              <Grid item>
                <Radio
                  value="no"
                  icon={<RadioButtonUncheckedIcon />}
                  checkedIcon={<CheckCircleIcon />}
                  sx={{ "& .MuiSvgIcon-root": { fontSize: "20px" } }}
                />
                <Typography variant="body1" component="span">
                  No
                </Typography>
              </Grid>
            </Grid>
          </RadioGroup>

          {/* Form Fields */}
          <Box
            sx={{
              bgcolor: "#e0f2f1",
              borderRadius: 1,
              p: 4,
              mt: 4,
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            <TextField
              name="vehicleType"
              onChange={handleChange}
              error={!!errors.vehicleType}
              helperText={errors.vehicleType}
              label="Vehicle Type"
              variant="outlined"
              fullWidth
              sx={{ bgcolor: "white", borderRadius: 1 }}
            />
            <TextField
              name="existingSpaces"
              onChange={handleChange}
              error={!!errors.existingSpaces}
              helperText={errors.existingSpaces}
              label="Existing number of spaces"
              variant="outlined"
              fullWidth
              sx={{ bgcolor: "white", borderRadius: 1 }}
            />
            <TextField
              name="proposed"
              onChange={handleChange}
              error={!!errors.proposed}
              helperText={errors.proposed}
              label="Total proposed (including spaces retained)"
              variant="outlined"
              fullWidth
              sx={{ bgcolor: "white", borderRadius: 1 }}
            />
            <TextField
              name="diffSpaces"
              onChange={handleChange}
              error={!!errors.diffSpaces}
              helperText={errors.diffSpaces}
              label="Difference in spaces"
              variant="outlined"
              fullWidth
              sx={{ bgcolor: "white", borderRadius: 1 }}
            />
            <Box sx={{ display: "flex", gap: 2, mt: 2, textAlign:"left" }}>
              <Button variant="outlined" sx={{ borderColor: "#3c7168", color: "#3c7168" }}>
                Add Another +
              </Button>
              <Button variant="outlined" sx={{ borderColor: "#3c7168", color: "#3c7168" }}>
                Cancel
              </Button>
              <Button variant="contained" sx={{ bgcolor: "#3c7168", color: "white"  }}>
                Save
              </Button>
            </Box>
          </Box>
        </Box>

        {/* Footer Buttons */}
        <Box sx={{ display: "flex", gap: 2, mt: 4 }}>
          <Button variant="outlined" sx={{ borderColor: "#3c7168", color: "#3c7168" }}>
            Save Changes
          </Button>
          <Button variant="outlined" sx={{ borderColor: "#3c7168", color: "#3c7168" }}>
            Previous
          </Button>
          <Button variant="contained" sx={{ bgcolor: "#3c7168", color: "white" }} onClick={validateandGo}>
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
};