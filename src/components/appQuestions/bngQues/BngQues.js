import { Box, Button, Checkbox, Paper, Typography, IconButton, Container } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CheckIcon from "@mui/icons-material/Check";
import { useNavigate } from "react-router-dom";
import InfoIcon from "@mui/icons-material/Info";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";

export default function BngQues() {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        bgcolor: "white",
        display: "flex",
        justifyContent: "center",
        width: "100%",
        height:"auto"
      }}
    >
      {/* Back to application overview */}
      <Box sx={{ display: "flex", justifyContent: "flex-start",alignItems: "center", mb: 2, mt: 8 }}>
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
        </Box>

      <Container
        sx={{
          bgcolor: "white",
          width: "100%",
          maxWidth: 1440,
          paddingTop: "160px",
          paddingBottom: "100px",
        }}
      >
        {/* Page title */}
        <Typography
          variant="h4"
          component="div"
          sx={{
            color: "#1b4e3b",
            fontWeight: "bold",
            mb: 3,
            mt: 3,
            textAlign: "left",
          }}
        >
          House Planning Application001
        </Typography>

        {/* Biodiversity Net Gain card */}
        <Paper
          sx={{
            width: "100%",
            maxWidth: 1300,
            border: "1px solid #3c7168",
            borderRadius: 4,
            padding: 4,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
            <Typography
              variant="h6"
              sx={{
                fontFamily: "Inter-Medium",
                fontSize: 24,
                color: "#000",
              }}
            >
              Biodiversity Net Gain
              <InfoIcon sx={{ ml: 1, mt:1.5}} />
            </Typography>
          </Box>

          <Typography
            sx={{
              fontFamily: "Inter-Regular",
              fontSize: 20,
              color: "#000",
              mb: 2,
              lineHeight: "1.5",
            }}
          >
            Paragraph 13 of Schedule 7A of the Town and Country Planning Act 1990 sets out that every planning
            permission granted for the development of land in England shall be deemed to have been granted subject to
            the 'biodiversity gain condition' requiring development to achieve a net gain of 10% of biodiversity value.
            <br />
            <br />
            This is subject to exemptions, an exemption applies in relation to planning permission for a development
            which is the subject of a householder application, within the meaning of article 2(1) of the Town and
            Country Planning (Development Management Procedure) (England) Order (2015).
          </Typography>

          <Typography
            sx={{
              fontFamily: "Inter-Regular",
              fontSize: 20,
              color: "#000",
              mb: 3,
            }}
          >
            Applicants for planning permission are required to make a statement as to whether they believe the
            biodiversity gain condition will apply if permission is granted, please confirm:
          </Typography>

          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Checkbox
              defaultChecked
              checkedIcon={<CheckIcon sx={{ color: "white", bgcolor: "#65558f", borderRadius: "4px", p: 0.5 }} />}
              sx={{
                "&.Mui-checked": {
                  color: "#65558f",
                },
              }}
            />
            <Typography sx={{ fontFamily: "Inter-Medium", fontSize: 20, color: "#000" }}>
              It is my belief that if permission is granted for the development to which this application relates the
              biodiversity gain condition would not apply
            </Typography>
          </Box>

          <Typography
            sx={{
              fontFamily: "Inter-Regular",
              fontSize: 16,
              color: "#000",
              mt: 3,
              lineHeight: "1.5",
            }}
          >
            *A 'householder application' means an application for planning permission for development for an existing
            dwellinghouse, or development within the curtilage of such a dwellinghouse for any purpose incidental to the
            enjoyment of the dwellinghouse which is not an application for change of use or an application to change the
            number of dwellings in a building.
          </Typography>
        </Paper>

        {/* Buttons */}
        <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
          <Button variant="outlined" sx={{ mr: 2 }}>
            Save Changes
          </Button>
          <Button
            variant="outlined"
            sx={{ mr: 2 }}
            onClick={() => navigate("/appQuestions/vehParking")}
          >
            Previous
          </Button>
          <Button
            variant="contained"
            sx={{ bgcolor: "#3c7168", color: "#fff" }}
            onClick={() => navigate("/appQuestions/siteVisit")}
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
