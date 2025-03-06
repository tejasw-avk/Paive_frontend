import ArrowBack from "@mui/icons-material/ArrowBack";
import InfoOutlined from "@mui/icons-material/InfoOutlined";
import {
  Box,
  Button,
  Container,
  Divider,
  FormControl,
  FormControlLabel,
  Link,
  Paper,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

export default function YesQues() {
  return (
    <Box
      sx={{
        bgcolor: "white",
        display: "flex",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <ArrowBack
        style={{ position: "absolute", top: "108px", left: "27px" }}
      />
      <Typography
        sx={{
          position: "absolute",
          top: "106px",
          left: "60px",
          fontWeight: "medium",
        }}
        variant="h6"
      >
        Back to application overview
      </Typography>

      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Typography
          variant="h4"
          sx={{
            color: "#1b4e3b",
            fontWeight: "bold",
            mt: 15,
            mb: 2,
          }}
        >
          House Planning Application001
        </Typography>
        <Paper
          variant="outlined"
          sx={{
            p: 3,
            borderRadius: 2,
            border: "1px solid #3c7168",
            backgroundColor: "#fefefe",
          }}
        >
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold", mb: 2, textAlign: "left" }}
          >
            Site information
            <InfoOutlined
              sx={{
                position: "relative",
                left: "10px",
                top: "5px",
                width: 24,
                height: 24,
              }}
            />
          </Typography>
          <Typography
            variant="body1"
            sx={{ mt: 2, mb: 2, textAlign: "center" }}
          >
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
            .
            <br />
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
          <Typography variant="body2" sx={{ mt: 2, textAlign: "left" }}>
            Please add the title number(s) for the existing building(s) on the
            site. If the site has no title numbers, please enter "Unregistered".
          </Typography>
          <TextField
            fullWidth
            variant="outlined"
            sx={{
              mb: 2,
              backgroundColor: "#9edec669",
              borderRadius: 1,
            }}
          />
          <Button
            variant="outlined"
            sx={{
              mt: 2,
              borderColor: "#3c7168",
              color: "#3c7168",
            }}
          >
            Add Another +
          </Button>
          <Divider sx={{ my: 2 }} />
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold", mb: 2, textAlign: "left" }}
          >
            Energy Performance Certificate
          </Typography>
          <Typography variant="body2" sx={{ mt: 2, textAlign:"left" }}>
            Do any of the buildings on the application site have an Energy
            Performance Certificate (EPC)?
          </Typography>
          <FormControl component="fieldset" sx={{ mt: 2}}>
            <RadioGroup row>
              <FormControlLabel
                value="yes"
                control={<Radio />}
                label="Yes"
              />
              <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl>
          <Typography variant="body2" sx={{ mt: 2 , textAlign:"left"}}>
            Please enter the reference number from the most recent Energy
            Performance Certificate (e.g. 1234-1234-1234-1234-1234)
          </Typography>
          <TextField
            fullWidth
            variant="outlined"
            sx={{
              mb: 2,
              backgroundColor: "#9edec669",
              borderRadius: 1,
            }}
          />
        </Paper>
        <Box display="flex" justifyContent="space-between" mt={4}>
          <Button
            variant="outlined"
            sx={{
              borderColor: "#3c7168",
              color: "#3c7168",
            }}
          >
            Previous
          </Button>
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
            variant="contained"
            sx={{
              backgroundColor: "#3c7168",
              color: "white",
            }}
          >
            Next
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
