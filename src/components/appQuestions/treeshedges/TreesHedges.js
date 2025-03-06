import {
    Box,
    Button,
    Container,
    FormControl,
    FormControlLabel,
    Radio,
    RadioGroup,
    TextField,
    Typography,
    Paper,
  } from "@mui/material";
  import React,{useState} from "react";
  import { useNavigate } from "react-router-dom";
  import ArrowBackIcon from "@mui/icons-material/ArrowBack";
  import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
  import InfoIcon from "@mui/icons-material/Info";
  
export default function TreesHedges() {
  const navigate = useNavigate();

  const [treesHedges, setTreesHedges] = useState("");
  const [removePrune, setRemovePrune] = useState("");
  const [treesDetails, setTreesDetails] = useState("");
  const [pruneDetails, setPruneDetails] = useState("");
  const [errors, setErrors] = useState({
    treesDetails: false,
    pruneDetails: false,
    treesHedges: false,
    removePrune: false
  });
 
   // Separate handlers for each radio group
   const handleTreesHedgesChange = (e) => {
    setTreesHedges(e.target.value);
    setErrors(prev => ({
      ...prev, 
      treesHedges: false,
      treesDetails: false
    }));
    if (e.target.value === "no") {
      setTreesDetails("");
    }
  };

  const handleRemovePruneChange = (e) => {
    setRemovePrune(e.target.value);
    setErrors(prev => ({
      ...prev, 
      removePrune: false,
      pruneDetails: false
    }));
    if (e.target.value === "no") {
      setPruneDetails("");
    }
  };
    
  // Separate handlers for each text field
  const handleTreesDetailsChange = (event) => {
    const value = event.target.value;
    setTreesDetails(value);
    // Clear error immediately when user types
    setErrors(prev => ({
      ...prev,
      treesDetails: false
    }));
  };

  const handlePruneDetailsChange = (event) => {
    const value = event.target.value;
    setPruneDetails(value);
    // Clear error immediately when user types
    setErrors(prev => ({
      ...prev,
      pruneDetails: false
    }));
  };

   // Validation and navigation
   const validateAndNavigate = () => {
    const newErrors = {
      treesHedges: !treesHedges,
      removePrune: !removePrune,
      treesDetails: treesHedges === "yes" && !treesDetails.trim(),
      pruneDetails: removePrune === "yes" && !pruneDetails.trim()
    };

    setErrors(newErrors);

    if (!Object.values(newErrors).some(Boolean)) {
      navigate("/appQuestions/pedQues");
    }
  };


  return(
      <Box
        sx={{
          bgcolor: "white",
          display: "flex",
          justifyContent: "center",
          width: "100%",
          height: "80vh",
          overflow: "auto",
        }}
      >
        <Container
          maxWidth="lg"
          sx={{
            bgcolor: "white",
            overflow: "hidden",
            padding: 4,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", mb: 2, mt: 8 }}>
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
          <Typography
            variant="h4"
            component="div"
            sx={{
              color: "#1b4e3b",
              fontWeight: "bold",
              mb: 3,
              mt:6,
              textAlign:"left"
            }}
          >
            House Planning Application001
          </Typography>
  
          <Paper
            sx={{
              padding: 3,
              borderRadius: 1,
              border: 1,
              borderColor: "#3c7168",
            }}
          >
            <Typography
  variant="h6"
  sx={{
    mb: 2,
    textAlign: "left",
    display: "flex",       
    alignItems: "center",  
    fontWeight:"bold",
  }}
>
  Trees and Hedges
  <InfoIcon sx={{ ml: 0 }} /> 
</Typography>
  
            <Typography variant="body1" sx={{ mb: 2, textAlign:"left" }}>
              Are there any trees or hedges on the property or on adjoining
              properties which are within falling distance of the proposed
              development?
            </Typography>
  
            <FormControl 
              component="fieldset" 
              sx={{ mb: 4, mr: 120 }}
              error={errors.treesHedges}
            >
              <RadioGroup 
                row 
                aria-label="trees-hedges" 
                name="trees-hedges" 
                value={treesHedges} 
                onChange={handleTreesHedgesChange}
              >
                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="no" control={<Radio />} label="No" />
              </RadioGroup>
              {errors.treesHedges && (
                <Typography color="error" variant="caption" sx={{ ml: 1 }}>
                  Please select whether there are trees or hedges within falling distance
                </Typography>
              )}
            </FormControl>
  
            {treesHedges === "yes" && (
              <>
            <Typography variant="body1" sx={{ mb: 2, textAlign:"left" }}>
              If Yes, please mark their position on a scaled plan and state the
              reference number of any plans or drawings.
            </Typography>

              <TextField
                fullWidth
                variant="outlined"
                sx={{ mb: 4, bgcolor: "#9edec669" }}
                value={treesDetails}
                onChange={handleTreesDetailsChange}
                error={errors.treesDetails}
                helperText={errors.treesDetails ? "This field is required" : ""}
              />
              </>
            )}
            <Typography variant="body1" sx={{ mb: 2, textAlign:"left"}}>
              Will any trees or hedges need to be removed or pruned in order to
              carry out your proposal?
            </Typography>
  
            <FormControl 
              component="fieldset" 
              sx={{ mb: 4, mr: 120 }}
              error={errors.removePrune}
            >
              <RadioGroup 
                row 
                aria-label="remove-prune" 
                name="remove-prune" 
                value={removePrune} 
                onChange={handleRemovePruneChange}
              >
                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="no" control={<Radio />} label="No" />
              </RadioGroup>
              {errors.removePrune && (
                <Typography color="error" variant="caption" sx={{ ml: 1 }}>
                  Please select whether trees or hedges need to be removed or pruned
                </Typography>
              )}
            </FormControl>
            {removePrune === "yes" && (
              <>
            <Typography variant="body1" sx={{ mb: 2, textAlign:"left"}}>
              If Yes, please mark their position on a scaled plan and state the
              reference number of any plans or drawings.
            </Typography>

              <TextField
                fullWidth
                variant="outlined"
                sx={{ mb: 4, bgcolor: "#9edec669" }}
                value={pruneDetails}
                onChange={handlePruneDetailsChange}
                error={errors.pruneDetails}
                helperText={errors.pruneDetails ? "This field is required" : ""}
              />
              </>
            )}
          </Paper>
  
          <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
          <Button variant="outlined" sx={{ mr: 2 }}>
                      Save Changes
                    </Button>
            <Button
              variant="outlined"
              sx={{ mr:2 }}onClick={() => navigate("/appQuestions/materialQues")}
            >
              Previous
            </Button>
            <Button
              variant="contained"
              sx={{ bgcolor: "#3c7168" }}onClick={validateAndNavigate}
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
  };