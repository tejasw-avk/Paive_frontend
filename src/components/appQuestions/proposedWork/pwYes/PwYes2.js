import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import InfoIcon from "@mui/icons-material/Info";
import {
  Box,
  Button,
  Container,
  FormControl,
  FormControlLabel,
  IconButton,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

export default function PwYes2() {
  return (
    <Box bgcolor="white" display="flex" justifyContent="center" width="100%">
      <Container maxWidth="lg">
        <Box position="relative" bgcolor="white" height="1550px">
          <Box
            position="absolute"
            top="277px"
            left="65px"
            width="1304px"
            height="827px"
            borderRadius="10px"
            border="1px solid #3c7168"
          >
            <Typography
              position="absolute"
              top="37px"
              left="47px"
              variant="h5"
              fontWeight="medium"
            >
              Description of Proposed Works
            </Typography>
            <InfoIcon
              style={{ position: "absolute", top: "9px", left: "416px" }}
            />
            <Typography
              position="absolute"
              top="242px"
              left="416px"
              variant="body1"
            >
              Has the work already been started without consent?
            </Typography>
            <FormControl
              component="fieldset"
              style={{ position: "absolute", top: "272px", left: "435px" }}
            >
              <RadioGroup
                row
                aria-label="started-consent"
                name="started-consent"
              >
                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="no" control={<Radio />} label="No" />
              </RadioGroup>
            </FormControl>
            <Typography
              position="absolute"
              top="350px"
              left="417px"
              variant="body1"
            >
              If Yes, please state when the development or work was started
              (date must be pre-application submission)
            </Typography>
            <Box
              position="absolute"
              top="401px"
              left="417px"
              width="360px"
              height="89px"
            >
              <TextField
                fullWidth
                label="Select Date"
                variant="outlined"
                InputProps={{
                  endAdornment: (
                    <IconButton>
                      <CalendarTodayIcon />
                    </IconButton>
                  ),
                }}
              />
              <Typography variant="body2" color="textSecondary">
                DD/MM/YYYY
              </Typography>
            </Box>
            <Typography
              position="absolute"
              top="510px"
              left="417px"
              variant="body1"
            >
              Has the work already been completed without consent?
            </Typography>
            <FormControl
              component="fieldset"
              style={{ position: "absolute", top: "540px", left: "435px" }}
            >
              <RadioGroup
                row
                aria-label="completed-consent"
                name="completed-consent"
              >
                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="no" control={<Radio />} label="No" />
              </RadioGroup>
            </FormControl>
            <Typography
              position="absolute"
              top="617px"
              left="417px"
              variant="body1"
            >
              If Yes, please state when the development or work was completed
              (date must be pre-application submission)
            </Typography>
            <Box
              position="absolute"
              top="668px"
              left="417px"
              width="360px"
              height="89px"
            >
              <TextField
                fullWidth
                label="Select Date"
                variant="outlined"
                InputProps={{
                  endAdornment: (
                    <IconButton>
                      <CalendarTodayIcon />
                    </IconButton>
                  ),
                }}
              />
              <Typography variant="body2" color="textSecondary">
                DD/MM/YYYY
              </Typography>
            </Box>
            <Box
              position="absolute"
              top="111px"
              left="417px"
              width="600px"
              height="126px"
            >
              <Typography variant="body1" marginRight={4}>
                Please describe the proposed works
              </Typography>
              <TextField
                fullWidth
                multiline
                rows={3}
                variant="outlined"
                style={{ backgroundColor: "#9edec669" }}
              />
            </Box>
          </Box>
          <Typography
            position="absolute"
            top="200px"
            left="72px"
            variant="h4"
            fontWeight="bold"
            color="#1b4e3b"
          >
            House Planning Application001
          </Typography>
          <Button
            variant="contained"
            color="primary"
            style={{ position: "absolute", top: "1162px", left: "814px" }}
          >
            Next
          </Button>
          <Button
            variant="outlined"
            color="primary"
            style={{ position: "absolute", top: "1162px", left: "644px" }}
          >
            Previous
          </Button>
          <Button
            variant="outlined"
            color="primary"
            style={{ position: "absolute", top: "1162px", left: "475px" }}
          >
            Save Changes
          </Button>
          <ArrowBackIcon
            style={{ position: "absolute", top: "106px", left: "27px" }}
          />
          <Typography
            position="absolute"
            top="109px"
            left="60px"
            variant="h6"
            fontWeight="medium"
          >
            Back to application overview
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};