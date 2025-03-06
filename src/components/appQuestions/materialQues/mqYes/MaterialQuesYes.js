import React from "react";
import {
  Box,
  Button,
  Container,
  CssBaseline,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";

export default function MaterialQuesYes() {
  return (
    <Box
      sx={{
        bgcolor: "white",
        display: "flex",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <CssBaseline />
      <Container
        maxWidth="lg"
        sx={{ bgcolor: "white", height: "100%", position: "relative" }}
      >
        <Typography
          variant="h4"
          sx={{
            position: "absolute",
            top: "40px",
            left: "72px",
            fontFamily: "Inter-SemiBold",
            color: "#1b4e3b",
          }}
        >
          House Planning Application001
        </Typography>

        <Box
          sx={{
            position: "absolute",
            width: "1304px",
            top: "100px",
            left: "65px",
            borderRadius: "10px",
            border: "1px solid #3c7168",
            padding: "32px",
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontFamily: "Inter-Medium",
              marginBottom: "16px",
            }}
          >
            Materials
          </Typography>

          <Typography
            variant="body1"
            sx={{ fontFamily: "Inter-Regular", marginBottom: "16px" }}
          >
            Does the proposed development require any materials to be used externally?
          </Typography>

          <FormControl component="fieldset" sx={{ marginBottom: "32px" }}>
            <RadioGroup row>
              <FormControlLabel
                value="yes"
                control={<Radio />}
                label="Yes"
                sx={{ fontFamily: "Inter-Regular" }}
              />
              <FormControlLabel
                value="no"
                control={<Radio />}
                label="No"
                sx={{ fontFamily: "Inter-Regular" }}
              />
            </RadioGroup>
          </FormControl>

          <Typography
            variant="body1"
            sx={{ fontFamily: "Inter-Regular", marginBottom: "16px" }}
          >
            Please provide a description of existing and proposed materials and finishes to
            be used externally (including type, colour and name for each material).
          </Typography>

          <Box sx={{ marginBottom: "16px" }}>
            <Typography variant="body1" sx={{ marginBottom: "8px" }}>
              Type
            </Typography>
            <TextField
              fullWidth
              variant="outlined"
              sx={{ bgcolor: "#9edec669", borderRadius: "4px" }}
            />
          </Box>

          <Box sx={{ marginBottom: "16px" }}>
            <Typography variant="body1" sx={{ marginBottom: "8px" }}>
              Existing materials and finishes
            </Typography>
            <TextField
              fullWidth
              variant="outlined"
              multiline
              rows={4}
              sx={{ bgcolor: "#9edec669", borderRadius: "4px" }}
            />
          </Box>

          <Box sx={{ marginBottom: "32px" }}>
            <Typography variant="body1" sx={{ marginBottom: "8px" }}>
              Proposed materials and finishes
            </Typography>
            <TextField
              fullWidth
              variant="outlined"
              multiline
              rows={4}
              sx={{ bgcolor: "#9edec669", borderRadius: "4px" }}
            />
          </Box>

          <Box sx={{ display: "flex", gap: "16px" }}>
            <Button
              variant="outlined"
              sx={{
                borderColor: "#3c7168",
                color: "#3c7168",
              }}
            >
              Add Another +
            </Button>
            <Button
              variant="outlined"
              sx={{
                borderColor: "#3c7168",
                color: "#3c7168",
              }}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              sx={{
                bgcolor: "#3c7168",
                "&:hover": { bgcolor: "#3c7168" },
              }}
            >
              Save
            </Button>
          </Box>

          <Typography
            variant="body1"
            sx={{ fontFamily: "Inter-Regular", marginTop: "32px" }}
          >
            Are you supplying additional information on submitted plans, drawings or a
            design and access statement?
          </Typography>

          <FormControl component="fieldset" sx={{ marginTop: "16px" }}>
            <RadioGroup row>
              <FormControlLabel
                value="yes"
                control={<Radio />}
                label="Yes"
                sx={{ fontFamily: "Inter-Regular" }}
              />
              <FormControlLabel
                value="no"
                control={<Radio />}
                label="No"
                sx={{ fontFamily: "Inter-Regular" }}
              />
            </RadioGroup>
          </FormControl>
        </Box>

        <Box sx={{ display: "flex", justifyContent: "flex-end", marginTop: "32px" }}>
          <Button
            variant="outlined"
            sx={{
              borderColor: "#3c7168",
              color: "#3c7168",
              marginRight: "16px",
            }}
          >
            Previous
          </Button>
          <Button
            variant="contained"
            sx={{
              bgcolor: "#3c7168",
              "&:hover": { bgcolor: "#3c7168" },
            }}
          >
            Next
          </Button>
        </Box>
      </Container>
    </Box>
  );
};