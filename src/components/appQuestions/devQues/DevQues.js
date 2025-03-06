import InfoIcon from "@mui/icons-material/Info";
import ArrowBackIcon from "@mui/icons-material/ArrowBack"; 
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import {
  Box,
  Button,
  Divider,
  Link,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

export default function DevQues() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
        grossInternal: "",
        bedrooms: "",
        bathrooms: ""

  });
      const [errors, setErrors] = useState({});
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };

    const validateAndGo = () => {
      
      const tempErrors = {};
      if (!formData.grossInternal) tempErrors.grossInternal = "This field is required.";
      if (!formData.bedrooms) tempErrors.bedrooms = "This field is required.";
      if (!formData.bathrooms) tempErrors.bathrooms = "This field is required.";  

      setErrors(tempErrors);
      if(Object.keys(tempErrors).length === 0)
      {
        navigate("/appQuestions/devDates") 
      }
    };

  return (
    <Box bgcolor="white" display="flex" justifyContent="center" width="100%">
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

      <Box bgcolor="white" width="800px" padding="10px" height="180%">
        <Typography
          variant="h4"
          component="div"
          sx={{ fontWeight: "bold", color: "#1b4e3b", mb: 2, mt:20, textAlign:"left" }}
        >
          House Planning Application001
        </Typography>

        <Paper
          elevation={3}
          sx={{
            padding: "18px",
            borderRadius: "10px",
            border: "1px solid #3c7168",
          }}
        >
          <Typography
  variant="h5"
  component="p"
  sx={{
    fontWeight: "bold",
    color: "black",
    mb: 1,
    mt: 1,
    textAlign: "left",
    display: "flex",   // Use flex to align text and icon in one line
    alignItems: "center", // Vertically align the icon and text in the center
  }}
>
  Further information about the Proposed Development
  <InfoIcon
    sx={{
      fontSize: "32px",
      color: "black",  
      ml: 1,           
      height: "32px",   
    }}
  />
</Typography>

          <Typography
            variant="body1"
            component="p"
            sx={{ color: "black", mb: 2, mt:2, textAlign:"left"}}
          >
            Please note: This question is specific to applications within the
            Greater London area. The Mayor can request relevant information
            about spatial planning in Greater London under {" "}
            <Link
              href="https://www.legislation.gov.uk/ukpga/1999/29/section/346"
              target="_blank"
              underline="hover"
            >
              Section 346 of the Greater London Authority Act 1999
            </Link>
            .
            <br />
            <br />
            <Link
              href="https://www.london.gov.uk/what-we-do/planning/london-plan/london-development-database/london-development-database-automation-project"
              target="_blank"
              underline="hover"
            >
              View more information on the collection of this additional data
              and assistance with providing an accurate response
            </Link>
            .
          </Typography>

          <Divider sx={{ my: 2 }} />

          <Box sx={{ mt: 2 }}>
            <Typography variant="body1" component="p" sx={{ mb: 1, textAlign:"left" }}>
              What is the Gross Internal Area to be added to the development?
            </Typography>
            <TextField
              fullWidth
              variant="outlined"
              label="Gross Internal Area"
              name="grossInternal"
              value={formData.grossInternal}
              onChange={handleChange}
              error={!!errors.grossInternal}
              helperText={errors.grossInternal}              
              sx={{
                backgroundColor: "#9edec669",
                borderRadius: "4px",
                border: "1px solid #3c7168",
              }}
            />
          </Box>

          <Box sx={{ mt: 2 }}>
            <Typography variant="body1" component="p" sx={{ mb: 1 , textAlign:"left"}}>
              Number of additional bedrooms proposed
            </Typography>
            <TextField
              fullWidth
              variant="outlined"
              label="Bedrooms"
              name="bedrooms"
              value={formData.bedrooms}
              onChange={handleChange}
              error={!!errors.bedrooms}
              helperText={errors.bedrooms}             
              sx={{
                backgroundColor: "#9edec669",
                borderRadius: "4px",
                border: "1px solid #3c7168",
              }}
            />
          </Box>

          <Box sx={{ mt: 2 }}>
            <Typography variant="body1" component="p" sx={{ mb: 1, textAlign:"left"}}>
              Number of additional bathrooms proposed
            </Typography>
            <TextField
              fullWidth
              variant="outlined"
              label="Bathrooms"
              name="bathrooms"
              value={formData.bathrooms}
              onChange={handleChange}
              error={!!errors.bathrooms}
              helperText={errors.bathrooms}

              sx={{
                backgroundColor: "#9edec669",
                borderRadius: "4px",
                border: "1px solid #3c7168",
              }}
            />
          </Box>
        </Paper>

        <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 5, mb:5 }}>
        <Button
            variant="outlined"
            sx={{
              marginRight: 2,
              borderColor: "#3c7168",
              color: "#3c7168",
              borderRadius: "4px",
            }}
          >
            Save Changes
          </Button>
          <Button
            variant="outlined"
            sx={{
              marginRight: 2,
              borderColor: "#3c7168",
              color: "#3c7168",
              borderRadius: "4px",
            }}
            onClick={() => navigate("/appQuestions/siteInfo")}
          >
            Previous
          </Button>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#3c7168",
              color: "white",
              borderRadius: "4px",
            }}
            onClick={validateAndGo}
          >
            Next
          </Button>
        </Box>
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
    </Box>
  );
};