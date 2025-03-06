import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import EditIcon from "@mui/icons-material/Edit";
import InfoIcon from "@mui/icons-material/Info";
import {
  Box,
  Button,
  CircularProgress,
  Container,
  Grid,
  IconButton,
  Paper,
  Typography,
  Divider,
  LinearProgress,
} from "@mui/material";

export default function PFcheck() {
  const [comments, setComments] = useState([]);
  const navigate = useNavigate();

  const handleAddComment = () => {
    setComments([...comments, ""]);
  };

  return (
    <Container maxWidth="xl" sx={{ bgcolor: "#f8f9fa", py: 4 }}>
      <Box sx={{ width: "100%", maxWidth: 1440, mx: "auto" }}>
        {/* Back Navigation */}
        <Box sx={{ display: "flex", alignItems: "center", mb: 2, mt: 5 }}>
          <IconButton onClick={() => navigate("/myApplications")}>
            <ArrowBackIcon />
          </IconButton>
          <Typography variant="h6" sx={{ ml: 1 }}>Back to my applications</Typography>
        </Box>
        
        <Paper sx={{ p: 3, borderRadius: 2 }}>
          {/* Application Header */}
          <Box sx={{ display: "flex", justifyContent: "space-between", mb: 3 }}>
            <Box>
              <Typography variant="h5" sx={{ fontWeight: "bold", color: "#1b4e3b", textAlign:"left" }}>House Planning Application001</Typography>
              <Typography variant="subtitle1" sx={{textAlign:"left"}}>Householder Planning Permission</Typography>
              <Typography variant="body2" sx={{textAlign:"left"}}>123, ABC, Brushfield House, 11 Brushfield Street, London, E1 6AN</Typography>
              <Typography variant="body2"sx={{textAlign:"left"}}>City of London</Typography>
            </Box>
            <Box textAlign="right">
              <Typography variant="body2"sx={{textAlign:"left"}}>Application ID: xxxxxx</Typography>
              <Typography variant="body2"sx={{textAlign:"left"}}>Application Status: <strong>Draft</strong></Typography>
              <Typography variant="body2"sx={{textAlign:"left"}}>Version: 1</Typography>
              <Typography variant="body2"sx={{textAlign:"left"}}>Last Save: 26-11-2024 12:25 PM</Typography>
            </Box>
          </Box>
          
          <Grid container spacing={3}>
            {/* Left Column */}
            <Grid item xs={12} md={8}>
              <Paper sx={{ p: 3, borderRadius: 2 }}>
                {[
                  { label: "Complete Application Questions", value: "15/15 Steps Completed" },
                  { label: "BNG Metric Calculation", value: "10/10 Steps Completed" },
                  { label: "Upload Application Documents", value: "3/3 Steps Completed" },
                ].map((item, index) => (
                  <Box key={index} sx={{ mb: 2 }}>
                    <Typography variant="h6">{item.label}</Typography>
                    <LinearProgress variant="determinate" value={100} sx={{ my: 1 }} />
                    <Typography variant="body2">{item.value}</Typography>
                    <Button variant="outlined" sx={{ mt: 1 }}>Preview</Button>
                  </Box>
                ))}

                <Typography variant="h6" sx={{ mt: 2 }}>Calculate Fee</Typography>
                <Typography variant="body2">Calculate your planning application fee</Typography>
                <Typography variant="h5" sx={{ my: 1 }}>€ 258.00</Typography>
                <Button variant="contained" sx={{ mb: 3 }}>Make Payment</Button>

                <Typography variant="h6">Submit Application</Typography>
                <Typography variant="body2" sx={{ mb: 1 }}>
                  We recommend generating a pre-flight score and reviewing the application thoroughly before proceeding.
                </Typography>
                <Button variant="contained" disabled>Submit Application</Button>
              </Paper>
            </Grid>

            {/* Right Column - Pre-flight Check */}
            <Grid item xs={12} md={4}>
              <Paper sx={{ p: 3, borderRadius: 2 }}>
                <Box display="flex" alignItems="center" mb={2}>
                  <Typography variant="h6">Pre-flight Check</Typography>
                  <IconButton size="small"><InfoIcon fontSize="small" /></IconButton>
                </Box>
                <Typography variant="body2" sx={{ mb: 2 }}>
                  Conduct a pre-flight check to ensure your application is complete, accurate, and ready for successful submission.
                </Typography>
                <Button variant="contained" sx={{ mb: 3 }}>Pre-flight Check</Button>
                
                {/* Circular Progress Score */}
                <Box sx={{ position: "relative", textAlign: "center", my: 3 }}>
                  <CircularProgress variant="determinate" value={78} size={120} thickness={8} sx={{ color: "#F6B54D" }} />
                  <Typography
                    variant="h4"
                    sx={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      fontWeight: "bold",
                      color: "#F6B54D",
                    }}
                  >
                    78
                  </Typography>
                </Box>

                <Typography variant="body2" sx={{ mb: 2 }}>
                  The application is overall strong and exhibits good quality, suggesting it meets most critical requirements.
                  However, there are areas for improvement to enhance usability and acceptability.
                </Typography>
                <Button variant="contained" sx={{ mb: 2 }}>Pre-flight Suggest Edit</Button>
                <Button startIcon={<EditIcon />} sx={{ textTransform: "none" }} onClick={handleAddComment}>
                  Add Comments
                </Button>

                {comments.map((comment, index) => (
                  <Box key={index} sx={{ mt: 2 }}>
                    <Typography variant="body2">Comment {index + 1}:</Typography>
                    <Paper sx={{ p: 1, bgcolor: "#f0f0f0" }}>Add your comment...</Paper>
                  </Box>
                ))}
              </Paper>
            </Grid>
          </Grid>
        </Paper>
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
