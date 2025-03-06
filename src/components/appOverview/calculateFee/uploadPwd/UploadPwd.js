import { useState } from "react";
import {
  Box,
  Container,
  Paper,
  Typography,
  Checkbox,
  FormControlLabel,
  Button,
  Divider,
  Grid,
  IconButton,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CloseIcon from "@mui/icons-material/Close";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export default function UploadPwd() {  // ✅ Renamed to uppercase
    const [hasDisability, setHasDisability] = useState(true);
    const [documentAttached, setDocumentAttached] = useState(true);
  
    return (
      <Container maxWidth="lg" sx={{ bgcolor: "white", mt: 4, pb: 4 }}>
        {/* Back to Application Overview */}
        <Box display="flex" alignItems="center" sx={{ mb: 2, cursor: "pointer" }}>
          <ArrowBackIcon fontSize="medium" sx={{ mr: 1 }} />
          <Typography variant="h6" sx={{ fontWeight: 500 }}>
            Back to application overview
          </Typography>
        </Box>
  
        {/* Application Title */}
        <Typography variant="h4" sx={{ fontWeight: 600, color: "#1b4e3b", mb: 2 }}>
          House Planning Application001
        </Typography>
  
        {/* Fee Calculation Section */}
        <Paper elevation={1} sx={{ borderRadius: "10px", border: "1px solid #3c7168", p: 3 }}>
          <Typography variant="h5" sx={{ fontWeight: 500, color: "black" }}>
            Calculate Fee
          </Typography>
  
          <Typography variant="body1" sx={{ mt: 2, color: "black" }}>
            Application fees must be paid to the Planning Pal using the payment options provided during 
            the application process, prior to submission to the Local Planning Authority.
          </Typography>
  
          <Typography variant="body1" sx={{ mt: 2, color: "black" }}>
            As per government regulations, users with a registered disability may qualify for a fee 
            waiver. If you have any type of disability, please let us know by selecting the option below. 
            Your information will remain confidential and will only be used for this purpose. You may be 
            asked to provide relevant documentation to verify eligibility.
          </Typography>
  
          {/* Divider */}
          <Divider sx={{ mt: 4, mb: 2 }} />
  
          {/* Checkbox for Disability */}
          <FormControlLabel
            control={
              <Checkbox 
                checked={hasDisability} 
                onChange={() => setHasDisability(!hasDisability)} 
                color="success" 
              />
            }
            label="Yes, I have a disability"
            sx={{ mb: 2 }}
          />
  
          {/* Upload Document Box */}
          {hasDisability && (
            <Box 
              sx={{ 
                mt: 2, 
                bgcolor: "#9edec669", 
                borderRadius: "10px", 
                p: 2, 
                display: "flex", 
                flexDirection: "column",
                alignItems: "flex-start"
              }}
            >
              <Box display="flex" justifyContent="space-between" width="100%" alignItems="center">
                <Box>
                  <Typography variant="body1" sx={{ color: "#757575", fontWeight: 500 }}>
                    1 document attached
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#757575", mt: 1 }}>
                    *10MB maximum file upload size (PDF, PNG, JPG or JPEG)
                  </Typography>
                </Box>
                <Button variant="outlined" sx={{ borderColor: "#3c7168", color: "#3c7168" }}>
                  Upload Document
                </Button>
              </Box>
  
              {/* Attached Document */}
              {documentAttached && (
                <Box 
                  sx={{ 
                    mt: 2, 
                    width: "100%", 
                    bgcolor: "#f5f5f5", 
                    borderRadius: "5px", 
                    p: 1, 
                    display: "flex", 
                    alignItems: "center", 
                    justifyContent: "space-between"
                  }}
                >
                  <Typography variant="body1" sx={{ color: "black", ml: 1 }}>
                    proof-doc.pdf
                  </Typography>
                  <Box display="flex" alignItems="center">
                    <CheckCircleIcon sx={{ color: "green", mr: 1 }} />
                    <Typography variant="body2" sx={{ color: "green" }}>
                      Valid Document
                    </Typography>
                    <IconButton size="small" onClick={() => setDocumentAttached(false)}>
                      <CloseIcon />
                    </IconButton>
                  </Box>
                </Box>
              )}
            </Box>
          )}
  
          {/* Divider */}
          <Divider sx={{ mt: 4, mb: 2 }} />
  
          {/* Fee Calculation Details */}
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Typography variant="body1" sx={{ fontWeight: 500 }}>Application Fee</Typography>
            </Grid>
            <Grid item xs={6} sx={{ textAlign: "right" }}>
              <Typography variant="body1" sx={{ fontWeight: 500 }}>€ 258.00</Typography>
            </Grid>
  
            <Grid item xs={6}>
              <Typography variant="body1" sx={{ fontWeight: 500 }}>Exempted Fee</Typography>
            </Grid>
            <Grid item xs={6} sx={{ textAlign: "right" }}>
              <Typography variant="body1" sx={{ fontWeight: 500 }}>€ 258.00</Typography>
            </Grid>
  
            <Grid item xs={6}>
              <Typography variant="h6" sx={{ fontWeight: 600 }}>Total</Typography>
            </Grid>
            <Grid item xs={6} sx={{ textAlign: "right" }}>
              <Typography variant="h6" sx={{ fontWeight: 600 }}>€ 00.00</Typography>
            </Grid>
          </Grid>
  
          {/* Finish and Close Button */}
          <Button 
            variant="contained" 
            sx={{ 
              mt: 4, 
              width: 200, 
              bgcolor: "grey.300", 
              color: "grey.600", 
              borderRadius: "10px",
              float: "right"
            }}
          >
            Finish and Close
          </Button>
        </Paper>
      </Container>
    );
  }
  