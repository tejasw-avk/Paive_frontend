import React, { useState } from "react";
import InfoOutlined from "@mui/icons-material/InfoOutlined";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import {
  Box,
  Button,
  Container,
  Divider,
  FormControl,
  FormControlLabel,
  Link,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function SiteInfo() {
  const navigate = useNavigate();
  // State to track EPC selection
  const [epcSelected, setEpcSelected] = useState(null);
  // State to track title numbers (multiple text fields)
  const [titleNumbers, setTitleNumbers] = useState([""]);
    // State to track validation errors
    const [titleNumbersErrors, setTitleNumbersErrors] = useState([""]);
    const[epcReference, setEpcReference] = useState("");
    const [epcError, setEpcError] = useState("");

  const handleAddAnother = () => {
    setTitleNumbers([...titleNumbers, ""]);
    setTitleNumbersErrors([...titleNumbersErrors, ""]);
  };
  const handleTitleNumberChange = (index, value) => {
    const newTitleNumbers = [...titleNumbers];
    newTitleNumbers[index] = value;
    setTitleNumbers(newTitleNumbers);

    // Clear error immediately when user types
    const newTitleNumbersErrors = [...titleNumbersErrors];
    newTitleNumbersErrors[index] = "";
    setTitleNumbersErrors(newTitleNumbersErrors);
  };

  const handleEpcReferenceChange = (event) => {
    const value = event.target.value;
    setEpcReference(value);
    // Clear error immediately when user types
    setEpcError("");
  };
  
  const validateAndNavigate = () => {
    let isValid = true;

    // Validate title numbers
    const newTitleNumbersErrors = titleNumbers.map((titleNumber) =>
      titleNumber.trim() ? "" : "Title number is required."
    );
    setTitleNumbersErrors(newTitleNumbersErrors);

    if (newTitleNumbersErrors.some((error) => error !== "")) {
      isValid = false;
    }

    // Validate EPC selection
    if (epcSelected === null) {
      setEpcError("Please select Yes or No");
      isValid = false;
    }

    // Validate EPC reference if Yes is selected
    if (epcSelected === "yes" && !epcReference.trim()) {
      setEpcError("EPC reference number is required.");
      isValid = false;
    }

    if (isValid) {
      navigate("/appQuestions/devQues");
    }
  };

  return (
    <Box
      sx={{
        bgcolor: "white",
        display: "flex",
        justifyContent: "center",
        width: "100%",
        height:"160%"
      }}
    >
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

      <Container
        maxWidth="lg"
        sx={{ bgcolor: "white", height: "98vh", position: "relative" }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            color: "#1b4e3b",
            textAlign: "left",
            mt: 20,
            mb: 2,
          }}
        >
          House Planning Application001
        </Typography>

        <Box
          sx={{
            width: "100%",
            borderRadius: "10px",
            border: "1px solid #3c7168",
            p: 4,
            bgcolor: "#fefefe",
          }}
        >
          <Typography
            variant="h5"
            sx={{ fontWeight: "bold", mb: 3, textAlign: "left" }}
          >
            Site information
            <InfoOutlined
              sx={{
                position: "relative",
                backgroundcolor:"black",
                left: "10px",
                top: "5px",
                width: 24,
                height: 24,
              }}
            />
          </Typography>
          <Typography variant="body1" sx={{ mt: 2, mb: 2, textAlign: "center" }}>
            Please note: This question is specific to applications within the
            Greater London area. The Mayor can request relevant information
            about spatial planning in Greater London under{" "}
            <Link
              href="https://www.legislation.gov.uk/ukpga/1999/29/section/346"
              target="_blank"
              underline="hover"
            >
              Section 346 of the Greater London Authority Act 1999
            </Link>
            .<br />
            <br />
            <Link
              href="https://www.london.gov.uk/what-we-do/planning/london-plan/london-development-database/london-development-database-automation-project"
              target="_blank"
              underline="hover"
            >
              View more information on the collection of this additional data
              and assistance with providing an accurate response
            </Link>
            .
          </Typography>
          <Divider sx={{ my: 2 }} />
          <Typography
            variant="h6"
            sx={{
              fontWeight: "medium",
              mt: 4,
              fontWeight: "bold",
              textAlign: "left",
            }}
          >
            Title number(s)
          </Typography>
          <Typography variant="body1" sx={{ mt: 2, textAlign: "left" }}>
            Please add the title number(s) for the existing building(s) on the
            site. If the site has no title numbers, please enter "Unregistered".
          </Typography>
          
          {/* Dynamically render text fields */}
          {titleNumbers.map((titleNumber, index) => (
            <TextField
              key={index}
              fullWidth
              variant="outlined"
              sx={{ mt: 2, bgcolor: "#9edec669", borderRadius: 1 }}
              value={titleNumbers[index]}
              onChange={(e) => handleTitleNumberChange(index, e.target.value)}
              error={!!titleNumbersErrors[index]}
              helperText={titleNumbersErrors[index]}
            />
          ))}

<Button
  variant="outlined"
  sx={{
    mt: 2,
    borderColor: "#3c7168",
    color: "#3c7168",
    display: "flex",
    justifyContent: "flex-end",  
    width: "14%",  
    ml:124,
  }}
  onClick={handleAddAnother}
>
  Add Another +
</Button>

          <Divider sx={{ my: 2 }} />

          {/* Energy Performance Certificate Section */}
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold", mt: 4, textAlign: "left" }}
          >
            Energy Performance Certificate
          </Typography>

          <Typography variant="body1" sx={{ mt: 2, textAlign: "left" }}>
            Do any of the buildings on the application site have an Energy
            Performance Certificate (EPC)?
          </Typography>

          {/* Radio Group */}
          <FormControl component="fieldset" sx={{ mt: 2 }} error={!!epcError && epcSelected === null}>
            <RadioGroup
              row
              aria-label="epc"
              name="epc"
              value={epcSelected}
              onChange={(event) => {
                setEpcSelected(event.target.value);
                // Clear error immediately when selection changes
                setEpcError("");
                if (event.target.value === "no") {
                  setEpcReference("");
                }
              }}
            >
              <FormControlLabel value="yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>
            {epcError && epcSelected === null && (
              <Typography color="error" variant="caption">
                {epcError}
              </Typography>
            )}
          </FormControl>

          {/* Conditionally Rendered Input Field */}
          {epcSelected === "yes" && (
            <Box sx={{ mt: 2 }}>
              <Typography variant="body1" sx={{ textAlign: "left" }}>
                Please enter the reference number from the most recent Energy
                Performance Certificate (e.g. 1234-1234-1234-1234-1234)
              </Typography>
              <TextField
                fullWidth
                variant="outlined"
                value={epcReference}
                onChange={handleEpcReferenceChange}
                error={!!epcError}
                helperText={epcError}
                sx={{ mt: 2, bgcolor: "#9edec669", borderRadius: 1 }}
              />
            </Box>
          )}
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mt: 4,
            gap:2,
          }}
        >
          <Button
            variant="outlined"
            sx={{
              borderColor: "#3c7168",
              color: "#3c7168",
            }}
          >
            Save Changes
          </Button>
          <Button
            variant="outlined"
            sx={{
              borderColor: "#3c7168",
              color: "#3c7168",
            }}
            onClick={() => navigate("/appQuestions/proposedWork")}
          >
            Previous
          </Button>
          <Button
            variant="contained"
            sx={{ bgcolor: "#3c7168", color: "white" }}
            onClick={validateAndNavigate}
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
}
