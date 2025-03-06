import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {
    Box,
    Button,
    Container,
    Divider,
    IconButton,
    List,
    ListItem,
    ListItemText,
    Typography,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom"; 
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";

export default function BngOverview() {
    const navigate = useNavigate();

    const pageRoutes = {
        "Site Details": "/appQuestions/siteLocation",
        "Assessments": "/appQuestions/appDetails",
        "Area Habitats": "/appQuestions/proposedWork",
        "Hedges and Line of Trees": "/appQuestions/siteInfo",
        "Watercourses": "/appQuestions/pwYes",
        "Results": "/appQuestions/devDates",
    };

    return (
        <Box sx={{ bgcolor: "white", display: "flex", justifyContent: "center", width: "100%" }}>
            <Container maxWidth="lg" sx={{ bgcolor: "white", height: "1250px", position: "relative" }}>
                
                {/* Back Button */}
                <Box sx={{ mt: 12, mb: 2 }}>
                    <IconButton sx={{ position: "absolute", top: 106, left: 27 }} onClick={() => navigate("/appOverview")}>
                        <ArrowBackIcon />
                    </IconButton>
                    <Typography 
                        variant="h6" 
                        sx={{ position: "absolute", top: 109, left: 60, cursor: "pointer" }}
                        onClick={() => navigate("/appOverview")}
                    >
                        Back to application overview
                    </Typography>
                </Box>
                
                <Divider sx={{ position: "absolute", top: 167, width: "100%" }} />
                
                <Typography variant="h4" sx={{ position: "absolute", top: 205, left: 72, fontWeight: "bold", color: "#1b4e3b" }}>
                    House Planning Application001
                </Typography>
                
                {/* Dynamic Navigation List */}
                <Box sx={{ position: "absolute", top: 285, left: 65, width: "calc(100% - 130px)", border: 1, borderColor: "#3c7168", borderRadius: 1, p: 2 }}>
                    <List>
                        {Object.keys(pageRoutes).map((text, index) => (
                            <React.Fragment key={text}>
                                <ListItem>
                                    <ListItemText primary={text} />
                                    <Button
                                        variant={index === 0 ? "contained" : "outlined"}
                                        color="success"
                                        sx={{ minWidth: 120 }}
                                        onClick={() => navigate(pageRoutes[text])} 
                                    >
                                        {index === 0 ? "Completed" : "Incomplete"}
                                    </Button>
                                </ListItem>
                                {index < Object.keys(pageRoutes).length - 1 && <Divider />}
                            </React.Fragment>
                        ))}
                    </List>
                </Box>

                {/* Back to Overview Button */}
                <Button
                    variant="contained"
                    color="success"
                    sx={{
                        position: "absolute",
                        top: 1170,
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: 286,
                        height: 54,
                    }}
                    onClick={() => navigate("/appOverview")}
                >
                    Back to Application Overview
                </Button>
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
}