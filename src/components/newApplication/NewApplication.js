import React, { useState } from "react";
import axios from 'axios';
import {
  TextField,
  MenuItem,
  Button,
  Typography,
  Grid,
  Paper,
} from "@mui/material";
import { Box } from "@mui/system"; 
import { useDispatch,useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import { setApplicationName, setSitePostCode,setSiteAddress, setApplicationType } from "../../redux/createApplicationSlice";
import createApplicationReducer from "../../redux/createApplicationSlice";


const applicationTypes = [
  "House Holder Planning Application",
  "Other Type 1",
  "Other Type 2",
];

const NewApplication = () => {
  const navigate = useNavigate();// Hook for navigation
  const dispatch = useDispatch();

  const { applicationName, sitePostCode, siteAddress, applicationType } = useSelector(
    (state) => state.createApplication
  );

  /*const [applicationName, setApplicationName] = useState(
    "House Planning Application001"
  );
  const [sitePostCode, setSitePostCode] = useState("E1 6AN");
  const [siteAddress, setSiteAddress] = useState(
    "123, ABC, Brushfield House, 11 Brushfield Street, London"
  );
  const [applicationType, setApplicationType] = useState(
    "House Holder Planning Application"
  );*/

  const applicationTypes = [
    "House Holder Planning Application",
    "Other Type 1",
    "Other Type 2",
  ];
  
  const handleSubmit = async () => {
    try {
      const token = localStorage.getItem("token"); // Ensure token is available
      const response = await axios.put(
        "http://localhost:8000/create-user-applications",
        { application_type_id: parseInt(applicationType,12) }, // ✅ Send correct field name
        {
          headers: { Authorization: `Bearer ${token}` }, // ✅ Include Authorization
        }
      );
      console.log("Application submitted successfully:", response.data);
      navigate("/createApplication");
    } catch (error) {
      console.error("Error submitting application:", error.response ? error.response.data : error);
    }
  };
  
  /*const handleSubmit = async () => {
    try {
      const response = await axios.put("http://localhost:8000/create-user-applications", {
        applicationName,
        sitePostCode,
        siteAddress,
        applicationType,
      });
      console.log("Application submitted successfully:", response.data);
      navigate("/createApplication");
    } catch (error) {
      console.error("Error submitting application:", error);
    }
  };*/

  return (
    <Box sx={{ padding: 4 }}>
      <Typography
        variant="h5"
        sx={{ marginTop: 7, marginBottom: 4, fontWeight: 600, textAlign: "left" }}
      >
        Start a New Application
      </Typography>

      <Grid container spacing={3}>
        {/* Left Section - Information */}
        <Grid item xs={12} md={4}>
          <Paper sx={{ padding: 3, textAlign: "left" }}>
            <Typography variant="h6" fontWeight={600}>
              What information will I need?
            </Typography>
            <Typography variant="body2" sx={{ marginTop: 2 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget pellentesque justo, non euismod urna. Ut eu est orci.<br></br>
            Sed bibendum diam id diam dignissim, id facilisis dui hendrerit. Nam dignissim non libero ultrices sagittis. <br></br>
            <br></br>
            Duis sollicitudin imperdiet porttitor. Nam dapibus vestibulum libero. <br></br>
            <br></br>
            Maecenas et urna vehicula, pretium velit ac, feugiat augue. Aenean commodo eros vitae sem dictum porttitor. <br></br> <br></br>
            Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin quis ligula. <br></br>
            </Typography>
            <Button variant="outlined" sx={{ marginTop: 2 }}>
              Click here for more info
            </Button>
          </Paper>
        </Grid>

        {/* Right Section - Application Form */}
        <Grid item xs={12} md={8}>
          <Paper sx={{ padding: 1, height: "100%", width: "100%", textAlign: "left" }}>
            {/* Application Name */}
            <Typography variant="h6" fontWeight={600}>Application Name</Typography>
            <br />
            <Typography variant="body2" sx={{ marginBottom: 1 }}>
              Give your application a name
            </Typography>
            <br />
            <Typography>
              Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
              Sed quis lectus sit amet orci commodo bibendum interdum eu purus. Nam nec rhoncus tortor, ut tincidunt neque.
              <br />
              Eg: HouseApp1
            </Typography>
            <br />
            <Typography variant="body2" sx={{ marginBottom: 1 }}>
              Enter Application Name
            </Typography>
            <TextField
              fullWidth
              variant="outlined"
              value={applicationName}
              onChange={(e) => dispatch(setApplicationName(e.target.value))}
              sx={{ marginBottom: 3 }}
            />

            {/* Site Location */}
            <Typography variant="h6" fontWeight={600}>Site Location</Typography>
            <br />
            <Typography variant="body2">Enter site post code</Typography>
            <TextField
              fullWidth
              variant="outlined"
              value={sitePostCode}
              onChange={(e) => dispatch(setSitePostCode(e.target.value))}
              sx={{ marginBottom: 2 }}
            />
            <Typography variant="body2">Enter site address</Typography>
            <TextField
              fullWidth
              variant="outlined"
              value={siteAddress}
              onChange={(e) => dispatch(setSiteAddress(e.target.value))}
              disabled
              sx={{ marginBottom: 1 }}
            />
            <Typography variant="caption" color="error">
              *The address you enter here cannot be changed later.
            </Typography>

            {/* Application Type */}
            <Typography variant="h6" fontWeight={600} sx={{ marginTop: 3 }}>Application Type</Typography>
            <br />
            <TextField
              select
              fullWidth
              variant="outlined"
              value={applicationType}
              onChange={(e) => dispatch(setApplicationType(e.target.value))}
              sx={{ marginBottom: 2 }}
            >
              {applicationTypes.map((type) => (
                <MenuItem key={type} value={type}>
                  {type}
                </MenuItem>
              ))}
            </TextField>
            <Button variant="outlined" sx={{ marginBottom: 2, marginTop: 2 }}>
              Find Your Application Type
            </Button>
            <br />

            {/* Site Boundary */}
            <Typography variant="h6" fontWeight={600} sx={{ marginTop: 3 }}>Site Boundary</Typography>
            <br />
            <Typography variant="body2">Draw your Site Boundary</Typography>
            <br />
            <Typography>
              Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
            </Typography>
            <Button variant="outlined" sx={{ marginBottom: 2, marginTop: 2 }}>
              Draw Site Boundary
            </Button>
            <br />
            <Typography>
              Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
            </Typography>
            <br />
            <Button variant="outlined">
              Upload Geospatial File
            </Button>
          </Paper>
        </Grid>
      </Grid>

      {/* Navigation Buttons */}
      <Box sx={{ textAlign: "right", marginTop: 3 }}>
        <Button
          variant="outlined"
          sx={{ marginRight: 2 }}
          onClick={() => navigate("/landingPage")} // Navigate back to Landing Page
        >
          Back to Home
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit} // Navigate to CreateApplication page
        >
          Continue
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
    </Box>
  );
};

// from here it goes to createApplication.js -> we need to get this state there.s
export default NewApplication;