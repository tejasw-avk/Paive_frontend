import React, { useState, useRef, useEffect } from "react";
import CheckIcon from "@mui/icons-material/Check";
import EditIcon from "@mui/icons-material/Edit";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import {
  Box,
  Button,
  Checkbox,
  Divider,
  IconButton,
  Paper,
  Tab,
  Tabs,
  TextField,
  Typography,
} from "@mui/material";

export default function ESign() {
  const [selectedTab, setSelectedTab] = useState(0);
  const [typedSignature, setTypedSignature] = useState("");
  const [uploadedSignature, setUploadedSignature] = useState(null);

  // Canvas ref for drawing signature
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);

  useEffect(() => {
    if (selectedTab === 0 && canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      ctx.strokeStyle = "#000";
      ctx.lineWidth = 2;
    }
  }, [selectedTab]);

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const handleFileUpload = (event) => {
    if (event.target.files && event.target.files[0]) {
      const fileURL = URL.createObjectURL(event.target.files[0]);
      setUploadedSignature(fileURL);
    }
  };

  // Drawing functionality
  const startDrawing = (e) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    setIsDrawing(true);
  };

  const draw = (e) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    ctx.stroke();
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  return (
    <Box
      sx={{
        bgcolor: "white",
        display: "flex",
        justifyContent: "center",
        width: "100%",
        minHeight: "100vh",
        paddingTop: "80px",
        paddingBottom: "50px",
      }}
    >
      <Box sx={{ bgcolor: "white", width: "100%", maxWidth: 1440, height: "auto", position: "relative" }}>
        <Typography
          sx={{
            textAlign: "center",
            fontFamily: "Inter-SemiBold, Helvetica",
            fontWeight: "bold",
            color: "#1b4e3b",
            fontSize: "1.75rem",
            marginBottom: 3,
          }}
        >
          House Planning Application001
        </Typography>

        <Paper sx={{ width: "80%", margin: "auto", bgcolor: "#f5f5f5", padding: 3 }}>
          <Typography sx={{ textAlign: "center", fontSize: "1.25rem", fontWeight: "medium" }}>
            E-Signature Required
          </Typography>
          <Typography sx={{ marginTop: 2, fontSize: "1rem", textAlign: "center", width: "80%", margin: "auto" }}>
            To complete your application submission, please provide your e-signature. By signing, you confirm that all
            information provided is accurate. This serves as your formal agreement to the application process.
          </Typography>

          <Box sx={{ marginTop: 4, border: "2px dashed #4faa84", padding: 2 }}>
            <Tabs value={selectedTab} onChange={handleTabChange} centered>
              <Tab label="Draw" />
              <Tab label="Type" />
              <Tab label="Upload" />
            </Tabs>
            <Divider sx={{ bgcolor: "#4faa84", marginTop: 1 }} />

            {selectedTab === 0 && (
              <Box sx={{ position: "relative", marginTop: 2, padding: 2, textAlign: "center" }}>
                <Typography sx={{ color: "#757575", marginBottom: 1 }}>Draw your signature here</Typography>
                <Box
                  sx={{
                    width: "100%",
                    height: 200,
                    border: "1px dashed #4faa84",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    position: "relative",
                  }}
                >
                  <canvas
                    ref={canvasRef}
                    width={500}
                    height={150}
                    style={{ border: "1px solid #4faa84", background: "#fff" }}
                    onMouseDown={startDrawing}
                    onMouseMove={draw}
                    onMouseUp={stopDrawing}
                    onMouseLeave={stopDrawing}
                  />
                  <IconButton onClick={clearCanvas} sx={{ position: "absolute", top: 10, right: 10 }}>
                    <EditIcon />
                  </IconButton>
                </Box>
              </Box>
            )}

            {selectedTab === 1 && (
              <Box sx={{ marginTop: 2 }}>
                <Typography sx={{ color: "#757575", textAlign: "center", marginBottom: 1 }}>
                  Type your signature
                </Typography>
                <TextField
                  fullWidth
                  placeholder="Enter signature"
                  value={typedSignature}
                  onChange={(e) => setTypedSignature(e.target.value)}
                />
              </Box>
            )}

            {selectedTab === 2 && (
              <Box sx={{ marginTop: 2, textAlign: "center" }}>
                <Typography sx={{ color: "#757575", marginBottom: 1 }}>Upload your signature image</Typography>
                <input type="file" accept="image/*" onChange={handleFileUpload} />
                {uploadedSignature && (
                  <img src={uploadedSignature} alt="Signature Preview" style={{ marginTop: 10, width: "100%" }} />
                )}
              </Box>
            )}

            <Box sx={{ display: "flex", alignItems: "center", marginTop: 4 }}>
              <Checkbox icon={<CheckIcon />} checkedIcon={<CheckIcon sx={{ color: "white" }} />} sx={{ padding: 0, marginRight: 1 }} />
              <Typography sx={{ fontSize: "1rem" }}>
                By submitting this planning application with an electronic signature, I agree that such signature will be as valid as handwritten signatures to the extent allowed by local law.
              </Typography>
            </Box>
          </Box>

          <Box sx={{ display: "flex", justifyContent: "space-between", marginTop: 4 }}>
            <Button variant="outlined" sx={{ width: 161, borderColor: "#3c7168", color: "#3c7168" }}>
              Cancel
            </Button>
            <Button variant="contained" sx={{ width: 161, bgcolor: "#3c7168", color: "white" }}>
              Accept and Sign
            </Button>
          </Box>
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
    </Box>
  );
}
