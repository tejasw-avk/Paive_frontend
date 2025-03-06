import { useState } from "react";
import { 
    Box, 
    Container, 
    Paper, 
    Typography, 
    Checkbox, 
    FormControlLabel, 
    Button 
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function Pwd() {
    const [hasDisability, setHasDisability] = useState(false);

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
                    Application fees must be paid to the Planning Pal using the payment 
                    options provided during the application process, prior to submission 
                    to the Local Planning Authority.
                </Typography>

                <Typography variant="body1" sx={{ mt: 2, color: "black" }}>
                    As per government regulations, users with a registered disability may 
                    qualify for a fee waiver. If you have any type of disability, please 
                    let us know by selecting the option below. Your information will remain 
                    confidential and will only be used for this purpose. You may be asked 
                    to provide relevant documentation to verify eligibility.
                </Typography>

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
                    sx={{ mt: 2 }}
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
                            justifyContent: "space-between",
                            alignItems: "center"
                        }}
                    >
                        <Box>
                            <Typography variant="body1" sx={{ color: "#757575", fontWeight: 500 }}>
                                No Document attached
                            </Typography>
                            <Typography variant="body2" sx={{ color: "#757575", mt: 1 }}>
                                *10MB maximum file upload size (PDF, PNG, JPG or JPEG)
                            </Typography>
                        </Box>
                        <Button variant="outlined" sx={{ borderColor: "#3c7168", color: "#3c7168" }}>
                            Upload Document
                        </Button>
                    </Box>
                )}

                {/* Fee Calculation Details */}
                <Typography variant="h6" sx={{ mt: 4, fontWeight: 500, color: "black" }}>
                    Planning Fee for House Planning Application
                </Typography>
                
                <Box display="flex" justifyContent="space-between" alignItems="center" sx={{ mt: 1 }}>
                    <Typography variant="h6" sx={{ fontWeight: 500, color: "black" }}>
                        Total
                    </Typography>
                    <Typography variant="h6" sx={{ fontWeight: 500, color: "black" }}>
                        € 258.00
                    </Typography>
                </Box>

                {/* Finish and Close Button */}
                <Button 
                    variant="contained" 
                    disabled 
                    sx={{ 
                        mt: 4, 
                        width: 200, 
                        bgcolor: "grey.300", 
                        color: "grey.600", 
                        borderRadius: "10px" 
                    }}
                >
                    Finish and Close
                </Button>
            </Paper>
        </Container>
    );
};