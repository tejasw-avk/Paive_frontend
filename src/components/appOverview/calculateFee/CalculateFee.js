import { useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {
  Box,
  Button,
  Checkbox,
  Container,
  Divider,
  FormControlLabel,
  Grid,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";

export default function CalculateFee() {
  const navigate = useNavigate();
  const [hasDisability, setHasDisability] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [validatedFile, setValidatedFile] = useState(null);

  // Handle file selection
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      validateDocument(file);
    }
  };

  // Placeholder for AI validation (Future Integration)
  const validateDocument = (file) => {
    setTimeout(() => {
      setValidatedFile(file); // Simulating successful validation
    }, 2000);
  };

  return (
    <Container maxWidth="md" sx={{ bgcolor: "white", py: 7 }}>
      
      {/* Back Button */}
      <Box sx={{ display: "flex", alignItems: "center", mb: 2, mt: 8, ml: 1 }}>
        <ArrowBackIcon />
        <Typography variant="h5" sx={{ ml: 2 }}onClick={() => navigate("/appOverview")}>
          Back to application overview
        </Typography>
      </Box>

      {/* Title */}
      <Typography variant="h4" sx={{ color: "#1b4e3b", mb: 4, mt: 5 }}>
        House Planning Application001
      </Typography>

      {/* Fee Calculation Box */}
      <Box sx={{ border: 1, borderColor: "#3c7168", borderRadius: 1, p: 4, mb: 4 }}>
        <Typography variant="h5" sx={{ mb: 2, fontWeight: "bold" }}>
          Calculate Fee
        </Typography>

        <Typography variant="body1" sx={{ mb: 2 }}>
          Application fees must be paid to the Planning Pal using the payment options provided
          during the application process, prior to submission to the Local Planning Authority.
        </Typography>

        <Typography variant="body1" sx={{ mb: 2 }}>
          As per government regulations, users with a registered disability may qualify for a
          fee waiver. If you have any type of disability, please let us know by selecting the
          option below. Your information will remain confidential and will only be used for
          this purpose. You may be asked to provide relevant documentation to verify eligibility.
        </Typography>

        {/* Checkbox */}
        <FormControlLabel
          control={
            <Checkbox 
              checked={hasDisability} 
              onChange={() => setHasDisability(!hasDisability)} 
            />
          }
          label="Yes, I have a disability"
          sx={{ mb: 2 }}
        />

        {/* Upload Document Section */}
        {hasDisability && (
          <Box 
            sx={{ 
              mt: 2, 
              bgcolor: "#e3f3f1", 
              borderRadius: "10px", 
              p: 2, 
              display: "flex", 
              flexDirection: "column"
            }}
          >
            <Typography variant="body1" sx={{ color: "#757575", fontWeight: 500 }}>
              {selectedFile ? `Uploaded: ${selectedFile.name}` : "No Document attached"}
            </Typography>

            <Typography variant="body2" sx={{ color: "#757575", mt: 1 }}>
              *10MB maximum file upload size (PDF, PNG, JPG, JPEG)
            </Typography>

            <input
              type="file"
              accept=".pdf,.png,.jpg,.jpeg"
              onChange={handleFileChange}
              style={{ display: "none" }}
              id="file-upload"
            />
            <label htmlFor="file-upload">
              <Button variant="outlined" sx={{ mt: 2, borderColor: "#3c7168", color: "#3c7168" }} component="span">
                Upload Document
              </Button>
            </label>

            {/* Document Validation Result */}
            {selectedFile && (
              <Typography variant="body1" sx={{ mt: 2, fontWeight: 500, color: validatedFile ? "green" : "orange" }}>
                {validatedFile ? "Document Validated ✅" : "Validating document... ⏳"}
              </Typography>
            )}
          </Box>
        )}

        <Divider sx={{ my: 3 }} />

        {/* Planning Fee */}
        <Typography variant="h6" sx={{ mb: 2 }}>
          Planning Fee for House Planning Application
        </Typography>

        <Grid container justifyContent="space-between">
          <Typography variant="h6">Total</Typography>
          <Typography variant="h6">€ 258.00</Typography>
        </Grid>

        {/* Finish and Close Button */}
        <Button
  variant="contained"
  sx={{ mt: 4, bgcolor: "#3c7168", color: "white", borderRadius: "10px" }}
  onClick={() => navigate("/appOverview/overviewComp")} 
>
  Finish and Close
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
