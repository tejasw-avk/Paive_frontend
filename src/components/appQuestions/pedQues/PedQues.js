import InfoIcon from "@mui/icons-material/Info";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import {
  Box,
  Button,
  Container,
  FormControl,
  FormControlLabel,
  Paper,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import { FormHelperText } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function PedQues() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
        vehicles: "",
        pedestrians: "",
        proposals: ""

  });
      const [errors, setErrors] = useState({});
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };

    const validateAndGo = () => {
      
      const tempErrors = {};
      if (!formData.vehicles) tempErrors.vehicles = "This field is required.";
      if (!formData.pedestrians) tempErrors.pedestrians = "This field is required.";
      if (!formData.proposals) tempErrors.proposals = "This field is required.";  

      setErrors(tempErrors);
      if(Object.keys(tempErrors).length === 0)
      {
        navigate("/appQuestions/vehParking") 
      }
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
      {/* Back Button */}
      <Box sx={{ display: "flex", justifyContent: "flex-start",alignItems: "center", mb: 2, mt: 8 }}>
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
      <Container
        maxWidth="lg"
        sx={{ bgcolor: "white", height: "100vh", position: "relative" }}
      >

        {/* Main Heading */}
        <Typography
          variant="h4"
          component="div"
          sx={{
            color: "#1b4e3b",
            fontWeight: "bold",
            mb: 3,
            mt: 23,
            textAlign: "left",
          }}
        >
          House Planning Application001
        </Typography>

        {/* Main Form Content */}
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
          <Typography
            variant="h6"
            sx={{
              display: "flex",
              alignItems: "center",
              mb: 3,
              fontWeight: "bold",
            }}
          >
            Pedestrian and Vehicle Access, Roads and Rights of Way
            <InfoIcon sx={{ ml: 1 }} />
          </Typography>

          {/* Question 1 */}
          <Typography variant="h5" sx={{ mb: 2, textAlign: "left" }}>
            Is a new or altered vehicle access proposed to or from the public
            highway?
          </Typography>
          <FormControl component="fieldset" sx={{ mb: 4, textAlign: "left", mr:124 }}>
            <RadioGroup name="vehicles" value={formData.vehicles} onChange={handleChange}>
              <FormControlLabel value="yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>
            {errors.vehicles && <FormHelperText>{errors.vehicles}</FormHelperText>}
          </FormControl>

          {/* Question 2 */}
          <Typography variant="h5" sx={{ mb: 2, textAlign: "left" }}>
            Is a new or altered pedestrian access proposed to or from the public
            highway?
          </Typography>
          <FormControl component="fieldset" sx={{ mb: 4, textAlign: "left", mr:124 }}>
            <RadioGroup name="pedestrians" value={formData.pedestrians} onChange={handleChange}>
              <FormControlLabel value="yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>
            {errors.pedestrians && <FormHelperText>{errors.pedestrians}</FormHelperText>}
          </FormControl>

          {/* Question 3 */}
          <Typography variant="h5" sx={{ mb: 2, textAlign: "left" }}>
            Do the proposals require any diversions, extinguishment and/or
            creation of public rights of way?
          </Typography>
          <FormControl component="fieldset" sx={{ mb: 4, textAlign: "left", mr:124 }}>
            <RadioGroup name="proposals" value={formData.proposals} onChange={handleChange}>
              <FormControlLabel value="yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>
            {errors.proposals && <FormHelperText>{errors.proposals}</FormHelperText>}
          </FormControl>

          {/* Additional Information */}
          <Typography variant="h5" sx={{ mb: 2, textAlign: "left" }}>
            If Yes, please mark their position on a scaled plan and state the
            reference number of any plans or drawings.
          </Typography>
          <Box
            sx={{
              width: "100%",
              height: 100,
              bgcolor: "#9edec669",
              borderRadius: 1,
              borderColor: "#3c7168",
              borderWidth: 1,
              borderStyle: "solid",
            }}
          />
        </Paper>

        {/* Buttons */}
        <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
        <Button variant="outlined" sx={{ mr: 2 }}>
            Save Changes
          </Button>
          <Button
            variant="outlined"
            sx={{ mr: 2 }}
            onClick={() => navigate("/appQuestions/treeshedges")}
          >
            Previous
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
