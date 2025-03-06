import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CloseIcon from "@mui/icons-material/Close";
import image from "@mui/icons-material/Star";
import vector2 from "@mui/icons-material/Star";
import vector3 from "@mui/icons-material/Star";
import vector from "@mui/icons-material/Star";
import { Box, Button, IconButton, Paper, Typography } from "@mui/material";
import React from "react";

export default function UploadComp() {
  return (
    <Box bgcolor="white" display="flex" justifyContent="center" width="100%">
      <Box
        bgcolor="white"
        overflow="hidden"
        width={1440}
        height={1971}
        position="relative"
      >
        <Typography
          variant="h4"
          fontWeight="600"
          color="#1b4e3b"
          position="absolute"
          top={228}
          left={72}
        >
          House Planning Application001
        </Typography>

        <Paper
          elevation={1}
          sx={{
            width: 1304,
            height: 763,
            position: "absolute",
            top: 333,
            left: 65,
            borderRadius: 1,
            border: "1px solid #3c7168",
          }}
        >
          <Typography
            variant="h5"
            fontWeight="bold"
            color="black"
            position="absolute"
            top={22}
            left={37}
          >
            Minimum Requirements
          </Typography>

          <Paper
            elevation={1}
            sx={{
              width: 1200,
              height: 313,
              position: "absolute",
              top: 110,
              left: 43,
              bgcolor: "white",
              borderRadius: 1,
              border: "1px solid #b3b3b3",
            }}
          >
            <Button
              variant="outlined"
              sx={{
                width: 226,
                position: "absolute",
                top: 27,
                left: 889,
                borderRadius: 1,
                border: "1px solid #3c7168",
              }}
            >
              Upload Documents
            </Button>

            <Typography
              variant="body2"
              color="#757575"
              position="absolute"
              top={81}
              left={893}
            >
              *10MB maximum file upload size
              <br />
              &nbsp;&nbsp; PDFs, PNGs, JPGs or JPEGs
            </Typography>

            <Typography
              variant="h6"
              fontWeight="bold"
              color="black"
              position="absolute"
              top={5}
              left={17}
            >
              Plans and drawings
            </Typography>

            <Typography
              variant="body1"
              color="black"
              position="absolute"
              top={40}
              left={15}
              textAlign="left"
            >
              Comprehensive plans and drawings, including site/block plans,
              elevations, and sections,<br></br> are essential to accurately describe the
              subject of your application.<br></br> All plans must be drawn to a clearly
              defined scale.
            </Typography>

            <Box
              sx={{
                width: 1198,
                height: 54,
                position: "absolute",
                top: 141,
                left: 0,
                bgcolor: "neutral.100",
              }}
            >
              <IconButton
                sx={{
                  position: "absolute",
                  top: 15,
                  left: 1150,
                  width: 24,
                  height: 24,
                }}
              >
                <CloseIcon />
              </IconButton>
              <Typography
                variant="body1"
                color="black"
                position="absolute"
                top={15}
                left={53}
              >
                Proposed Plan and Elevation 01.pdf
              </Typography>
              <img
                style={{
                  position: "absolute",
                  top: 15,
                  left: 17,
                  width: 20,
                  height: 24,
                }}
                alt="Vector"
                src={vector}
              />
            </Box>

            <Box
              sx={{
                width: 1198,
                height: 54,
                position: "absolute",
                top: 199,
                left: 0,
                bgcolor: "neutral.100",
              }}
            >
              <IconButton
                sx={{
                  position: "absolute",
                  top: 13,
                  left: 1150,
                  width: 24,
                  height: 24,
                }}
              >
                <CloseIcon />
              </IconButton>
              <Typography
                variant="body1"
                color="black"
                position="absolute"
                top={13}
                left={53}
              >
                Proposed and Existing Roof Plan.pdf
              </Typography>
              <img
                style={{
                  position: "absolute",
                  top: 13,
                  left: 17,
                  width: 20,
                  height: 24,
                }}
                alt="Vector"
                src={image}
              />
            </Box>

            <Box
              sx={{
                width: 1198,
                height: 54,
                position: "absolute",
                top: 257,
                left: 0,
                bgcolor: "neutral.100",
                borderRadius: "0 0 10px 10px",
              }}
            >
              <IconButton
                sx={{
                  position: "absolute",
                  top: 11,
                  left: 1150,
                  width: 24,
                  height: 24,
                }}
              >
                <CloseIcon />
              </IconButton>
              <Typography
                variant="body1"
                color="black"
                position="absolute"
                top={11}
                left={53}
              >
                Existing Floorplan.pdf
              </Typography>
              <img
                style={{
                  position: "absolute",
                  top: 11,
                  left: 17,
                  width: 20,
                  height: 24,
                }}
                alt="Vector"
                src={vector2}
              />
            </Box>
          </Paper>

          <Paper
            elevation={1}
            sx={{
              width: 1200,
              height: 207,
              position: "absolute",
              top: 480,
              left: 37,
              bgcolor: "white",
              borderRadius: 1,
              border: "1px solid #b3b3b3",
            }}
          >
            <Typography
              variant="h6"
              fontWeight="bold"
              color="black"
              position="absolute"
              top={5}
              left={17}
            >
              Location plan
            </Typography>

            <Typography
              variant="body1"
              color="black"
              position="absolute"
              top={40}
              left={15}
              textAlign="left"
            >
              Your application must include a plan clearly identifying the land
              it pertains to, with the site outlined in red. The <br></br>plan should: be
              drawn to a specified scale, indicate the direction of North,<br></br> and
              provide enough detail (such as road names) to accurately define
              the location.
            </Typography>

            <Typography
              variant="body2"
              color="#757575"
              position="absolute"
              top={92}
              left={899}
            >
              *10MB maximum file upload size
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;PDF, PNG, JPG or JPEG
            </Typography>

            <Button
              variant="outlined"
              sx={{
                width: 226,
                position: "absolute",
                top: 10,
                left: 899,
                borderRadius: 1,
                border: "1px solid #3c7168",
              }}
            >
              Upload Document
            </Button>

            <Box
              sx={{
                width: 1198,
                height: 54,
                position: "absolute",
                top: 151,
                left: 0,
                bgcolor: "neutral.100",
                borderRadius: "0 0 10px 10px",
              }}
            >
              <IconButton
                sx={{
                  position: "absolute",
                  top: 15,
                  left: 1150,
                  width: 24,
                  height: 24,
                }}
              >
                <CloseIcon />
              </IconButton>
              <Typography
                variant="body1"
                color="black"
                position="absolute"
                top={15}
                left={53}
              >
                Location Plan_1-500_Rev-001 1.pdf
              </Typography>
              <img
                style={{
                  position: "absolute",
                  top: 15,
                  left: 17,
                  width: 20,
                  height: 24,
                }}
                alt="Vector"
                src={vector3}
              />
            </Box>
          </Paper>
        </Paper>

        <Paper
          elevation={1}
          sx={{
            width: 1304,
            height: 333,
            position: "absolute",
            top: 1269,
            left: 65,
            borderRadius: 1,
            border: "1px solid #3c7168",
          }}
        >
          <Typography
            variant="h5"
            fontWeight="bold"
            color="black"
            position="absolute"
            top={22}
            left={37}
          >
            Additional Documents
          </Typography>

          <Paper
            elevation={1}
            sx={{
              width: 1200,
              height: 147,
              position: "absolute",
              top: 100,
              left: 34,
              bgcolor: "white",
              borderRadius: 1,
              border: "1px solid #b3b3b3",
            }}
          >
            <Typography
              variant="h6"
              fontWeight="500"
              color="black"
              position="absolute"
              top={52}
              left={26}
            >
              Energy Performance Certificate
            </Typography>

            <Typography
              variant="body2"
              color="#757575"
              position="absolute"
              top={86}
              left={899}
            >
              *10MB maximum file upload size
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;PDF, PNG, JPG or JPEG
            </Typography>

            <Button
              variant="outlined"
              sx={{
                width: 226,
                position: "absolute",
                top: 34,
                left: 899,
                borderRadius: 1,
                border: "1px solid #3c7168",
              }}
            >
              Upload Document
            </Button>
          </Paper>
        </Paper>

        <IconButton
          sx={{
            position: "absolute",
            top: 106,
            left: 27,
            width: 32,
            height: 32,
          }}
        >
          <ArrowBackIcon />
        </IconButton>
        <Typography
          variant="h6"
          fontWeight="500"
          color="black"
          position="absolute"
          top={109}
          left={60}
        >
          Back to application overview
        </Typography>

        <Button
          variant="contained"
          sx={{
            width: 218,
            position: "absolute",
            top: 1155,
            left: 1154,
            bgcolor: "#3c7168",
            borderRadius: 1,
            border: "1px solid #3c7168",
          }}
        >
          Continue
        </Button>
            <Typography
              variant="caption"
              color="white"
              position="absolute"
              top={0}
              left={29}
            >
              2
            </Typography>
          </Box>
        </Box>
  );
};