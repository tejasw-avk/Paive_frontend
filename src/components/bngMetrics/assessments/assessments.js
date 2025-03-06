import { 
  Box, 
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
  Typography 
} from "@mui/material";
import React, { useState } from "react";

export default function Assessments() {
    const [formData, setFormData] = useState({  
        siteName: "",
        devType: "",
        area: "",
        designatedSite: "",
        priorityHabitat: "",
        listPriorityHabitats: "",
        infoSources:"",
        isEuroProtected: "",
        siteWalkover: "", 
        walkoverDateFrom: "",
        walkoverDateTo: "", 
        walkerName: "",
        walkerJob: "",
        walkerDetails: "",
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
                Assessment Details
            </Typography>
            <Grid container spacing={3}>
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
                        name="devType"
                        label="Development Type"
                        value={formData.devType}
                        onChange={handleChange}
                        sx={{ bgcolor: "#9edec669" }}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth 
                        name="area"
                        label="Area"
                        value={formData.area}
                        onChange={handleChange}
                        sx={{ bgcolor: "#9edec669" }}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormControl fullWidth>
                        <FormLabel>Designated Site</FormLabel>
                        <RadioGroup
                            name="designatedSite"
                            value={formData.designatedSite}
                            onChange={handleChange}
                        >
                            <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                            <FormControlLabel value="no" control={<Radio />} label="No" />
                        </RadioGroup>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormControl fullWidth>
                        <FormLabel>Priority Habitat</FormLabel>
                        <RadioGroup
                            name="priorityHabitat"
                            value={formData.priorityHabitat}
                            onChange={handleChange}
                        >
                            <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                            <FormControlLabel value="no" control={<Radio />} label="No" />
                        </RadioGroup>
                    </FormControl>
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        multiline
                        rows={4}
                        name="listPriorityHabitats"
                        label="List Priority Habitats"
                        value={formData.listPriorityHabitats}
                        onChange={handleChange}
                        sx={{ bgcolor: "#9edec669" }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        multiline
                        rows={4}
                        name="infoSources"
                        label="Information Sources"
                        value={formData.infoSources}
                        onChange={handleChange}
                        sx={{ bgcolor: "#9edec669" }}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormControl fullWidth>
                        <FormLabel>European Protected Species</FormLabel>
                        <RadioGroup
                            name="isEuroProtected"
                            value={formData.isEuroProtected}
                            onChange={handleChange}
                        >
                            <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                            <FormControlLabel value="no" control={<Radio />} label="No" />
                        </RadioGroup>
                    </FormControl>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="h6" sx={{ mb: 2, mt: 2 }}>
                        Site Walkover Details
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        type="date"
                        name="walkoverDateFrom"
                        label="Walkover Date From"
                        value={formData.walkoverDateFrom}
                        onChange={handleChange}
                        InputLabelProps={{ shrink: true }}
                        sx={{ bgcolor: "#9edec669" }}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        type="date"
                        name="walkoverDateTo"
                        label="Walkover Date To"
                        value={formData.walkoverDateTo}
                        onChange={handleChange}
                        InputLabelProps={{ shrink: true }}
                        sx={{ bgcolor: "#9edec669" }}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        name="walkerName"
                        label="Walker Name"
                        value={formData.walkerName}
                        onChange={handleChange}
                        sx={{ bgcolor: "#9edec669" }}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        name="walkerJob"
                        label="Walker Job Title"
                        value={formData.walkerJob}
                        onChange={handleChange}
                        sx={{ bgcolor: "#9edec669" }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        multiline
                        rows={4}
                        name="walkerDetails"
                        label="Walker Details"
                        value={formData.walkerDetails}
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
