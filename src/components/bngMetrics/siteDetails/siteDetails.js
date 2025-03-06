import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import CheckIcon from "@mui/icons-material/Check";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  InputLabel,
  Link,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, {useState} from "react";

export default function SiteDetails() {
    const [formData, setFormData] = useState({  
        planningAuthority: "",
        siteName: "",
        applicant: "",
        applicationType: "",
        applicationRef: "",
        metricName: "",
        metricJobTitle:"",
        completionDate: "",
        masterPlan: "",
        habitat: "",
        hedgegrow: "",
        watercourses: "",
        habitatUnits: "",
        hedgegrowUnits: "",
        watercoursesUnits: "",
    });

    const [errors, setErrors] = useState({});
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSave = () => {
        // Add save logic here
        console.log('Saving changes:', formData);
    };
    
    return (
        <Box
            sx={{
                border: 1,
                borderColor: "#3e7e5599",
                borderRadius: 1,
                p: 4,
                mb: 4,
            }}
        >
            <Typography variant="h5" component="h2" sx={{ mb: 2, textAlign:"left"}}>
                Personal Info
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        name="planningAuthority"
                        label="Planning Authority"
                        value={formData.planningAuthority}
                        onChange={handleChange}
                        sx={{ bgcolor: "#9edec669" ,width: "100%" }}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        name="siteName"
                        label="Site Name"
                        value={formData.siteName}
                        onChange={handleChange}
                        sx={{ bgcolor: "#9edec669" }}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        name="applicant"
                        label="Applicant"
                        value={formData.applicant}
                        onChange={handleChange}
                        sx={{ bgcolor: "#9edec669" }}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        name="applicationType"
                        label="Application Type"
                        value={formData.applicationType}
                        onChange={handleChange}
                        sx={{ bgcolor: "#9edec669" }}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        name="applicationRef"
                        label="Application Reference"
                        value={formData.applicationRef}
                        onChange={handleChange}
                        sx={{ bgcolor: "#9edec669" }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="h6" sx={{ mb: 2, mt: 2 }}>
                        Metric Completed by
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        name="metricName"
                        label="Metric Name"
                        value={formData.metricName}
                        onChange={handleChange}
                        sx={{ bgcolor: "#9edec669" }}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        name="metricJobTitle"
                        label="Metric Job Title"
                        value={formData.metricJobTitle}
                        onChange={handleChange}
                        sx={{ bgcolor: "#9edec669" }}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        type="date"
                        name="completionDate"
                        label="Completion Date"
                        value={formData.completionDate}
                        onChange={handleChange}
                        InputLabelProps={{ shrink: true }}
                        sx={{ bgcolor: "#9edec669" }}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        name="masterPlan"
                        label="Master Plan"
                        value={formData.masterPlan}
                        onChange={handleChange}
                        sx={{ bgcolor: "#9edec669" }}
                    />
                </Grid>

                <Grid item xs={12}>
                    <Typography variant="h6" sx={{ mb: 2, mt: 2 }}>
                        Metrics Information
                    </Typography>
                </Grid>

                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        name="habitat"
                        label="Habitat"
                        value={formData.habitat}
                        onChange={handleChange}
                        sx={{ bgcolor: "#9edec669" }}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        name="habitatUnits"
                        label="Habitat Units"
                        value={formData.habitatUnits}
                        onChange={handleChange}
                        sx={{ bgcolor: "#9edec669" }}
                    />
                </Grid>

                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        name="hedgegrow"
                        label="Hedgegrow"
                        value={formData.hedgegrow}
                        onChange={handleChange}
                        sx={{ bgcolor: "#9edec669" }}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        name="hedgegrowUnits"
                        label="Hedgegrow Units"
                        value={formData.hedgegrowUnits}
                        onChange={handleChange}
                        sx={{ bgcolor: "#9edec669" }}
                    />
                </Grid>

                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        name="watercourses"
                        label="Watercourses"
                        value={formData.watercourses}
                        onChange={handleChange}
                        sx={{ bgcolor: "#9edec669" }}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        name="watercoursesUnits"
                        label="Watercourses Units"
                        value={formData.watercoursesUnits}
                        onChange={handleChange}
                        sx={{ bgcolor: "#9edec669" }}
                    />
                </Grid>
            </Grid>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    mt: 4,
                    pt: 2,
                    borderTop: 1,
                    borderColor: '#3e7e5599'
                }}
            >
                <Button
                    variant="outlined"
                    sx={{
                        color: '#3e7e55',
                        borderColor: '#3e7e55',
                        '&:hover': {
                            borderColor: '#3e7e55',
                            backgroundColor: '#9edec669'
                        }
                    }}
                >
                    Previous
                </Button>
                <Button
                    variant="contained"
                    onClick={handleSave}
                    sx={{
                        backgroundColor: '#3e7e55',
                        '&:hover': {
                            backgroundColor: '#2b5c3d'
                        }
                    }}
                >
                    Save Changes
                </Button>
                <Button
                    variant="outlined"
                    sx={{
                        color: '#3e7e55',
                        borderColor: '#3e7e55',
                        '&:hover': {
                            borderColor: '#3e7e55',
                            backgroundColor: '#9edec669'
                        }
                    }}
                >
                    Next
                </Button>
            </Box>
        </Box>
    );
}

