import { Box, Button, Container, FormControl, FormControlLabel, Grid, Radio, RadioGroup, TextField, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import React from "react";
import InfoIcon from "@mui/icons-material/Info";

export default function OtherQues() {


  return (
    <Box
      bgcolor="white"
      display="flex"
      justifyContent="center"
      width="100%"
      minHeight="100vh"
    >
      <Container maxWidth="lg">
        {/* Back to Application Overview */}
        <Box display="flex" alignItems="center" mt={4} mb={3}>
          <ArrowBackIcon />
          <Typography
            variant="body1"
            sx={{ marginLeft: 1, color: "#3c7168", fontWeight: 500 }}
          >
            Back to application overview
          </Typography>
        </Box>

        {/* Title */}
        <Typography
          variant="h4"
          sx={{ color: "#1b4e3b", fontFamily: "Inter-SemiBold", mb: 4 }}
        >
          House Planning Application001
        </Typography>

        {/* Site Visit Section */}
        <Box
          border={1}
          borderColor="#3c7168"
          borderRadius="10px"
          p={4}
          bgcolor="white"
        >
          <Box display="flex" alignItems="center" mb={2}>
            <Typography variant="h6" sx={{ fontFamily: "Inter-Medium" }}>
              Site Visit
            </Typography>
            <InfoIcon sx={{ marginLeft: 1, color: "#3c7168" }} />
          </Box>

          <Typography variant="body1" sx={{ mb: 3 }}>
            Can the site be seen from a public road, public footpath, bridleway
            or other public land?
          </Typography>
          <FormControl component="fieldset">
            <RadioGroup row name="public-view" sx={{ mb: 4 }}>
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
          </FormControl>

          <Typography variant="body1" sx={{ mb: 3 }}>
            If the planning authority needs to make an appointment to carry out
            a site visit, whom should they contact?
          </Typography>
          <FormControl component="fieldset" sx={{ mb: 4 }}>
            <RadioGroup name="contact-person">
              <FormControlLabel
                value="agent"
                control={<Radio />}
                label="The agent"
                sx={{ color: "#3c7168" }}
              />
              <FormControlLabel
                value="applicant"
                control={<Radio />}
                label="The applicant"
                sx={{ color: "#3c7168" }}
              />
              <FormControlLabel
                value="other"
                control={<Radio />}
                label="Other Person"
                sx={{ color: "#3c7168" }}
              />
            </RadioGroup>
          </FormControl>

          <Typography variant="body1" sx={{ mb: 2 }}>
            If Other has been selected, please provide contact details:
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Title"
                variant="outlined"
                sx={{
                  backgroundColor: "#9edec669",
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="First Name"
                variant="outlined"
                sx={{
                  backgroundColor: "#9edec669",
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Last Name"
                variant="outlined"
                sx={{
                  backgroundColor: "#9edec669",
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Phone Number"
                variant="outlined"
                sx={{
                  backgroundColor: "#9edec669",
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="E-mail"
                variant="outlined"
                sx={{
                  backgroundColor: "#9edec669",
                }}
              />
            </Grid>
          </Grid>
        </Box>

        {/* Buttons */}
        <Box display="flex" justifyContent="center" mt={4} gap={2}>
          <Button
            variant="outlined"
            sx={{
              borderColor: "#3c7168",
              color: "#3c7168",
              textTransform: "none",
            }}
          >
            Save Changes
          </Button>
          <Button
            variant="outlined"
            sx={{
              borderColor: "#3c7168",
              color: "#3c7168",
              textTransform: "none",
            }}
          >
            Previous
          </Button>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#3c7168",
              color: "white",
              textTransform: "none",
            }}
          >
            Next
          </Button>
        </Box>
      </Container>
    </Box>
  );
};