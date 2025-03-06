import InfoIcon from "@mui/icons-material/Info";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import {
  Box,
  Button,
  Container,
  Link,
  Paper,
  TextField,
  Typography,
  Divider,
  Autocomplete,
} from "@mui/material";
import React,{useState} from "react";
import { useNavigate } from "react-router-dom";

export default function DevDates() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
        commenceDate: null,
        completionDate: null
  });
      const [errors, setErrors] = useState({});
  
    const handleChange = (name, value) => {
      // Convert to dayjs if it's not already
      const date = dayjs.isDayjs(value) ? value : dayjs(value);
      
      setFormData(prev => ({
        ...prev,
        [name]: date
      }));
      
      // Clear errors when value changes
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    };

    const validateAndGo = () => {
      
      const tempErrors = {};
      if (!formData.commenceDate || !dayjs.isDayjs(formData.commenceDate)) {
        tempErrors.commenceDate = "Start date is required";
      }
      
      if (!formData.completionDate || !dayjs.isDayjs(formData.completionDate)) {
        tempErrors.completionDate = "Completion date is required";
      }

      if (formData.commenceDate && formData.completionDate && 
          dayjs.isDayjs(formData.commenceDate) && dayjs.isDayjs(formData.completionDate)) {
        if (formData.completionDate.isBefore(formData.commenceDate)) {
          tempErrors.completionDate = "Completion date must be after start date";
        }
      }

      setErrors(tempErrors);
      if(Object.keys(tempErrors).length === 0)
      {
        navigate("/appQuestions/materialQues") 
      }
    };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
    <Box
      sx={{
        bgcolor: "white",
        display: "flex",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <ArrowBackIcon
        style={{ position: "absolute", top: "108px", left: "27px" }}
      />
      <Typography
        position="absolute"
        top="106px"
        left="60px"
        variant="h5"
        fontWeight="medium"
        onClick={() => navigate("/appOverview")}
      >
        Back to application overview
      </Typography>
      <Box bgcolor="white" width="800px" padding="10px" height="auto">
        <Typography
          variant="h4"
          component="div"
          sx={{
            fontWeight: "bold",
            color: "#1b4e3b",
            mb: 4,
            mt: 20,
            textAlign: "left",
          }}
        >
          House Planning Application001
        </Typography>

        <Paper
          elevation={3}
          sx={{
            padding: "18px",
            borderRadius: "10px",
            border: "1px solid #3c7168",
          }}
        >
          <Typography
            variant="h5"
            component="p"
            sx={{
              fontWeight: "bold",
              color: "black",
              mb: 1,
              mt: 1,
              textAlign: "left",
              display: "flex",   
              alignItems: "center", 
            }}
          >
            Development Dates
            <InfoIcon
              sx={{
                fontSize: "32px",
                color: "black",
                ml: 1,
                height: "32px",
              }}
            />
          </Typography>

          <Typography
            variant="h5"
            sx={{
              fontFamily: "Inter-Regular",
              color: "black",
              mb: 2,
              textAlign: "left",
            }}
          >
            Please note: This question is specific to applications within the
            Greater London area. The Mayor can request relevant information
            about spatial planning in Greater London under{" "}
            <Link
              href="https://www.legislation.gov.uk/ukpga/1999/29/section/346"
              target="_blank"
              rel="noopener noreferrer"
              underline="hover"
            >
              Section 346 of the Greater London Authority Act 1999
            </Link>
            .<br />
            <br />
            <Link
              href="https://www.london.gov.uk/what-we-do/planning/london-plan/london-development-database/london-development-database-automation-project"
              target="_blank"
              rel="noopener noreferrer"
              underline="hover"
            >
              View more information on the collection of this additional data
              and assistance with providing an accurate response
            </Link>
            .
          </Typography>

          <Divider sx={{ my: 2 }} />

          <Box sx={{ mt: 2 }}>
            <Typography
              variant="h5"
              sx={{
                fontFamily: "Inter-Regular",
                color: "black",
                mb: 3,
                fontWeight: "bold",
                textAlign: "left",
              }}
            >
              When are the building works expected to commence?
            </Typography>
            <DatePicker
          value={formData.commenceDate}
          onChange={(newValue) => handleChange('commenceDate', newValue)}
          slotProps={{
            textField: {
              error: !!errors.commenceDate,
              helperText: errors.commenceDate,
              sx: {
                bgcolor: "#9edec669",
                width: 360,
                mb: 2,
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: errors.commenceDate ? 'error.main' : "#65558f",
                  },
                },
              }
            }
          }}
        />
          </Box>

          <Box sx={{ mt: 2 }}>
            <Typography
              variant="h5"
              sx={{
                fontFamily: "Inter-Regular",
                color: "black",
                mb: 3,
                fontWeight: "bold",
                textAlign: "left",
              }}
            >
              When are the building works expected to be completed?
            </Typography>
            <DatePicker
          value={formData.completionDate}
          onChange={(newValue) => handleChange('completionDate', newValue)}
          minDate={formData.commenceDate} // Prevents selecting date before start date
          slotProps={{
            textField: {
              error: !!errors.completionDate,
              helperText: errors.completionDate,
              sx: {
                bgcolor: "#9edec669",
                width: 360,
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: "#65558f",
                  },
                },
              }
            }
          }}
        />  
         </Box>
        </Paper>

        <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 5, mb: 5 }}>
        <Button
            variant="outlined"
            sx={{
              marginRight: 2,
              borderColor: "#3c7168",
              color: "#3c7168",
              borderRadius: "4px",
            }}
          >
            Save Changes
          </Button>
          <Button
            variant="outlined"
            sx={{
              marginRight: 2,
              borderColor: "#3c7168",
              color: "#3c7168",
              borderRadius: "4px",
            }}
            onClick={() => navigate("/appQuestions/devQues")}
          >
            Previous
          </Button>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#3c7168",
              color: "white",
              borderRadius: "4px",
            }}
            onClick={validateAndGo}
          >
            Next
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
    </LocalizationProvider>
  );
}
