import { Box, Button, FormControl, FormControlLabel, FormLabel, Grid, Paper, Radio, RadioGroup, TextField, Typography } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";

export default function Descriptionreview() {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
      <Box sx={{ width: "1300px", bgcolor: "white", padding: "30px" }}>
        
        {/* Title */}
        <Typography variant="h5" sx={{ fontWeight: "bold", color: "#1b4e3b", marginBottom: "20px" }}>
          House Planning Application001
        </Typography>

        {/* Main Card */}
        <Paper sx={{ padding: "25px", border: "1px solid #3c7168", borderRadius: "8px" }}>
          <Typography variant="h6" sx={{ fontWeight: "medium", marginBottom: "15px", display: "flex", alignItems: "center" }}>
            Description of Proposed Works
            <InfoIcon sx={{ marginLeft: "8px", fontSize: "20px" }} />
          </Typography>

          {/* Proposed Works Text Field */}
          <Typography variant="body1" sx={{ marginBottom: "10px" }}>
            Please describe the proposed works
          </Typography>
          <TextField
            fullWidth
            multiline
            rows={4}
            variant="outlined"
            placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
            sx={{ backgroundColor: "#fff8dc", marginBottom: "20px" }}
          />

          {/* Question: Has the work already been started? */}
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <FormControl component="fieldset">
                <FormLabel component="legend">Has the work already been started without consent?</FormLabel>
                <RadioGroup name="startedWithoutConsent">
                  <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                  <FormControlLabel value="no" control={<Radio />} label="No" />
                </RadioGroup>
              </FormControl>
            </Grid>

            {/* Suggested Box */}
            <Grid item xs={6}>
              <Paper sx={{ padding: "15px", border: "1px solid #3c7168", borderRadius: "8px", boxShadow: "0px 4px 4px #00000040" }}>
                <Typography variant="body2" sx={{ fontWeight: "bold", marginBottom: "5px" }}>Suggested</Typography>
                <Typography variant="body2">Donec non est ut purus finibus aliquet et et neque...</Typography>
              </Paper>
            </Grid>
          </Grid>

          {/* Date Input for Work Started */}
          <Box sx={{ marginTop: "20px" }}>
            <Typography variant="body1">If Yes, please state when the development or work was started (date must be pre-application submission)</Typography>
            <Box sx={{ display: "flex", alignItems: "center", marginTop: "8px" }}>
              <TextField variant="outlined" value="30/07/2024" sx={{ width: "200px", marginRight: "10px" }}
                InputProps={{ endAdornment: <CalendarTodayIcon /> }} />
              <Typography variant="body2">DD/MM/YYYY</Typography>
            </Box>
          </Box>

          {/* Question: Has the work already been completed? */}
          <Box sx={{ marginTop: "20px" }}>
            <FormControl component="fieldset">
              <FormLabel component="legend">Has the work already been completed without consent?</FormLabel>
              <RadioGroup name="completedWithoutConsent">
                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="no" control={<Radio />} label="No" />
              </RadioGroup>
            </FormControl>
          </Box>

          {/* Date Input for Work Completed */}
          <Box sx={{ marginTop: "20px" }}>
            <Typography variant="body1">If Yes, please state when the development or work was completed (date must be pre-application submission)</Typography>
            <Box sx={{ display: "flex", alignItems: "center", marginTop: "8px" }}>
              <TextField variant="outlined" value="15/12/2024" sx={{ width: "200px", marginRight: "10px" }}
                InputProps={{ endAdornment: <CalendarTodayIcon /> }} />
              <Typography variant="body2">DD/MM/YYYY</Typography>
            </Box>
          </Box>
        </Paper>

        {/* Save Changes Button */}
        <Box sx={{ textAlign: "center", marginTop: "30px" }}>
          <Button variant="contained" color="primary" sx={{ padding: "10px 30px", borderRadius: "8px" }}>
            Save Changes
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