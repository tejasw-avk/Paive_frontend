import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import DateRangeIcon from "@mui/icons-material/DateRange";
import InfoIcon from "@mui/icons-material/Info";
import {
  Box,
  Button,
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  Paper,
  Radio,
  RadioGroup,
  TextField,
  Typography,
  IconButton,
  Divider,
} from "@mui/material";
import React from "react";

export default function PwYes() {
  return (
    <Box sx={{ bgcolor: "white", display: "flex", justifyContent: "center", width: "100%" }}>
      <Container maxWidth="lg" sx={{ bgcolor: "white", height: "1394px", position: "relative" }}>
        <Paper
          sx={{
            position: "absolute",
            top: 277,
            left: 65,
            width: 1304,
            height: 679,
            borderRadius: 1,
            border: 1,
            borderColor: "#3c7168",
            p: 3,
          }}
        >
          <Typography variant="h5" sx={{ mb: 2 }}>
            Description of Proposed Works
            <IconButton sx={{ ml: 1 }}>
              <InfoIcon />
            </IconButton>
          </Typography>
          <TextField fullWidth multiline rows={4} variant="outlined" placeholder="Please describe the proposed works" sx={{ mb: 3, bgcolor: "#9edec669" }} />
          <FormControl component="fieldset" sx={{ mb: 3 }}>
            <FormLabel component="legend">Has the work already been started without consent?</FormLabel>
            <RadioGroup row>
              <FormControlLabel value="yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl>
          <Typography sx={{ mb: 1 }}>
            If Yes, please state when the development or work was started (date must be pre-application submission)
          </Typography>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Select Date"
            InputProps={{
              endAdornment: (
                <IconButton>
                  <DateRangeIcon />
                </IconButton>
              ),
            }}
            sx={{ mb: 3, bgcolor: "#9edec669" }}
          />
          <FormControl component="fieldset" sx={{ mb: 3 }}>
            <FormLabel component="legend">Has the work already been completed without consent?</FormLabel>
            <RadioGroup row>
              <FormControlLabel value="yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl>
        </Paper>
        <Typography variant="h4" sx={{ position: "absolute", top: 200, left: 72, color: "#1b4e3b", fontWeight: "bold" }}>
          House Planning Application001
        </Typography>
        <Button variant="contained" sx={{ position: "absolute", top: 1006, left: 814, bgcolor: "#3c7168" }}>Next</Button>
        <Button variant="outlined" sx={{ position: "absolute", top: 1006, left: 644, borderColor: "#3c7168" }}>Previous</Button>
        <Button variant="outlined" sx={{ position: "absolute", top: 1006, left: 475, borderColor: "#3c7168" }}>Save Changes</Button>
        <IconButton sx={{ position: "absolute", top: 106, left: 27 }}>
          <ArrowBackIcon />
        </IconButton>
        <Typography sx={{ position: "absolute", top: 109, left: 60, fontWeight: "medium", fontSize: "1.25rem" }}>
          Back to application overview
        </Typography>
        <Divider sx={{ position: "absolute", top: 167, left: 0, width: "100%" }} />
      </Container>
    </Box>
  );
};
