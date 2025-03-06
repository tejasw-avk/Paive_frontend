import DehazeIcon from "@mui/icons-material/Dehaze";
import RotateLeftIcon from "@mui/icons-material/RotateLeft";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import {
  AppBar,
  Autocomplete,
  Box,
  Divider,
  IconButton,
  Link,
  Paper,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import image1 from "./image-1.png";
import image2 from "./image-2.png";
import image3 from "./image-3.png";


export default function External()
 {
  return (
    <Box display="flex" justifyContent="center" width="100%">
      <Box width="100%" maxWidth="1440px" height="1060px" position="relative">
        <Box
          width="100%"
          height="264px"
          position="absolute"
          top="796px"
          left="0"
          bgcolor="#3eb489"
        >
          <Typography
            position="absolute"
            top="41px"
            left="779px"
            fontFamily="Inter-SemiBold, Helvetica"
            fontWeight="600"
            color="white"
            fontSize="1.25rem"
          >
            About Us
          </Typography>
          <Typography
            position="absolute"
            top="41px"
            left="1179px"
            fontFamily="Inter-SemiBold, Helvetica"
            fontWeight="600"
            color="white"
            fontSize="1.25rem"
          >
            Contact Us
          </Typography>
          <Link
            href="mailto:hello@planningpal.com"
            rel="noopener noreferrer"
            target="_blank"
            position="absolute"
            top="68px"
            left="1179px"
            fontFamily="Inter-Regular, Helvetica"
            fontWeight="400"
            color="white"
            fontSize="1.25rem"
            underline="hover"
          >
            hello@paive.com
          </Link>
          <Typography
            position="absolute"
            top="71px"
            left="779px"
            fontFamily="Inter-SemiBold, Helvetica"
            fontWeight="600"
            color="white"
            fontSize="1.25rem"
          >
            FAQs
          </Typography>
          <Typography
            position="absolute"
            top="101px"
            left="779px"
            fontFamily="Inter-SemiBold, Helvetica"
            fontWeight="600"
            color="white"
            fontSize="1.25rem"
          >
            Terms and Conditions
          </Typography>
          <Typography
            position="absolute"
            top="39px"
            left="8px"
            fontFamily="Inter-Medium, Helvetica"
            fontWeight="500"
            color="white"
            fontSize="2rem"
          >
            Paive
          </Typography>
          <Typography
            position="absolute"
            top="68px"
            left="8px"
            fontFamily="Inter-Regular, Helvetica"
            fontWeight="400"
            color="white"
            fontSize="1.25rem"
          >
            Sed nec elit ut velit eleifend finibus vel ac tellus. Mauris aliquam
            ultrices pulvinar.
          </Typography>
          <Typography
            position="absolute"
            top="99px"
            left="1179px"
            fontFamily="Inter-Regular, Helvetica"
            fontWeight="400"
            color="white"
            fontSize="1.25rem"
          >
            +44 99789xxxxx
          </Typography>
          <Divider
            position="absolute"
            top="206px"
            left="80px"
            width="800px"
            sx={{ bgcolor: "white" }}
          />
        </Box>

        <Box
          width="369px"
          height="716px"
          position="absolute"
          top="20px"
          left="1072px"
          bgcolor="white"
        >
          <Typography
            position="absolute"
            top="26px"
            left="22px"
            fontFamily="Inter-Medium, Helvetica"
            fontWeight="500"
            color="black"
            fontSize="1.125rem"
          >
            Add Comments
          </Typography>
          <Box
            width="300px"
            height="81px"
            position="absolute"
            top="118px"
            left="5px"
            sx={{
              backgroundImage: "url(/textarea-field.svg)",
              backgroundSize: "100% 100%",
            }}
          >
            <Typography
              position="absolute"
              top="8px"
              left="12px"
              fontFamily="Inter-Regular, Helvetica"
              fontWeight="400"
              color="#757575"
              fontSize="0.875rem"
            >
              Enter your text here..
            </Typography>
          </Box>
          <Paper
            elevation={1}
            sx={{
              width: "322px",
              height: "192px",
              position: "absolute",
              top: "250px",
              left: "21px",
              borderRadius: "10px",
              border: "1px solid #9edec6",
              padding: "16px",
            }}
          >
            <Typography
              fontFamily="Inter-Medium, Helvetica"
              fontWeight="500"
              color="black"
              fontSize="0.875rem"
            >
              John Doe
            </Typography>
            <Typography
              fontFamily="Inter-Regular, Helvetica"
              fontWeight="400"
              color="black"
              fontSize="0.875rem"
              mt="8px"
            >
              Description of proposed work
            </Typography>
            <Typography
              fontFamily="Inter-Light, Helvetica"
              fontWeight="300"
              color="black"
              fontSize="0.875rem"
              mt="8px"
              textAlign="justify"
            >
              Nam aliquet, nunc eget posuere accumsan, velit nibh tincidunt
              tortor, sed ornare sem est lacinia orci. Donec rutrum dolor quis
              risus pulvinar condimentum. In at libero laoreet, bibendum purus
              sit amet, pellentesque risus.
            </Typography>
            <Typography
              fontFamily="Inter-Regular, Helvetica"
              fontWeight="400"
              color="#b3b3b3"
              fontSize="0.75rem"
              mt="8px"
            >
              11 minutes ago
            </Typography>
          </Paper>
          <Autocomplete
            options={[]}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Type or select section"
                variant="outlined"
                sx={{
                  width: "299px",
                  position: "absolute",
                  top: "73px",
                  left: "21px",
                  bgcolor: "#9edec669",
                  borderRadius: "var(--size-radius-200)",
                  border: "1px solid #d9d9d933",
                }}
              />
            )}
          />
        </Box>

        <Box
          width="1071px"
          height="716px"
          position="absolute"
          top="20px"
          left="0"
          bgcolor="#d9d9d933"
          overflow="hidden"
          sx={{ overflowY: "scroll" }}
        >
          <img
            width="799px"
            height="456px"
            style={{ position: "absolute", top: "1140px", left: "136px" }}
            alt="Image"
            src={image3}
          />
          <img
            width="800px"
            height="572px"
            style={{ position: "absolute", top: "547px", left: "135px" }}
            alt="Image"
            src={image2}
          />
          <img
            width="799px"
            height="457px"
            style={{ position: "absolute", top: "79px", left: "136px" }}
            alt="Image"
            src={image1}
          />
          <AppBar
            position="absolute"
            top="0"
            left="0"
            sx={{ width: "1071px", height: "56px", bgcolor: "#323639" }}
          >
            <Toolbar>
              <Box display="flex" alignItems="center" gap="8px">
                <IconButton>
                  <DehazeIcon sx={{ color: "white" }} />
                </IconButton>
                <Typography
                  fontFamily="Poppins-SemiBold, Helvetica"
                  fontWeight="600"
                  color="white"
                  fontSize="1rem"
                >
                  HousePlaningApplication001
                </Typography>
              </Box>
              <Box
                display="flex"
                alignItems="center"
                gap="8px"
                marginLeft="auto"
                marginRight="auto"
              >
                <Box display="flex" alignItems="center" gap="8px">
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    width="32px"
                    height="32px"
                    bgcolor="#191b1c"
                    borderRadius="4px"
                  >
                    <Typography
                      fontFamily="Poppins-SemiBold, Helvetica"
                      fontWeight="600"
                      color="white"
                      fontSize="1rem"
                    >
                      1
                    </Typography>
                  </Box>
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    paddingX="16px"
                    bgcolor="#323639"
                    boxShadow="1px 0px 0px #bdbdc7"
                  >
                    <Typography
                      fontFamily="Poppins-SemiBold, Helvetica"
                      fontWeight="600"
                      color="white"
                      fontSize="1rem"
                    >
                      /&nbsp;&nbsp; 45
                    </Typography>
                  </Box>
                </Box>
                <Box display="flex" alignItems="center" gap="8px">
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    paddingX="16px"
                    bgcolor="#323639"
                    boxShadow="1px 0px 0px #bdbdc7"
                  >
                    <Typography
                      fontFamily="Poppins-SemiBold, Helvetica"
                      fontWeight="600"
                      color="white"
                      fontSize="1rem"
                    >
                      -
                    </Typography>
                  </Box>
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    width="32px"
                    height="32px"
                    bgcolor="#191b1c"
                    borderRadius="4px"
                  >
                    <Typography
                      fontFamily="Poppins-SemiBold, Helvetica"
                      fontWeight="600"
                      color="white"
                      fontSize="1rem"
                    >
                      100%
                    </Typography>
                  </Box>
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    paddingX="16px"
                    bgcolor="#323639"
                    boxShadow="1px 0px 0px #bdbdc7"
                  >
                    <Typography
                      fontFamily="Poppins-SemiBold, Helvetica"
                      fontWeight="600"
                      color="white"
                      fontSize="1rem"
                    >
                      +
                    </Typography>
                  </Box>
                </Box>
                <IconButton>
                  <RotateLeftIcon sx={{ color: "white" }} />
                </IconButton>
              </Box>
            </Toolbar>
          </AppBar>
        </Box>

        <AppBar
          position="absolute"
          top="0"
          left="0"
          sx={{ width: "1440px", height: "80px", bgcolor: "#3eb489" }}
        >
          <Toolbar>
            <Typography
              fontFamily="Inter-Medium, Helvetica"
              fontWeight="500"
              color="white"
              fontSize="2rem"
              marginLeft="8px"
            >
              Paive
            </Typography>
            <Box marginLeft="auto" marginRight="16px">
              <IconButton>
                <Box
                  width="44px"
                  height="44px"
                  borderRadius="22px"
                  border="2px solid white"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Typography
                    fontFamily="Inter-Regular, Helvetica"
                    fontWeight="400"
                    color="white"
                    fontSize="2rem"
                  >
                    ?
                  </Typography>
                </Box>
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
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
  );
};