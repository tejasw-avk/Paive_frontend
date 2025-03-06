import { Box, Button, Typography } from "@mui/material";
import React from "react";
import Pic1 from "./Pic1.jpg";
import { useNavigate } from "react-router-dom";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";

export default function LandingPage() {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        bgcolor: "white",
        display: "flex",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <Box
        sx={{
          bgcolor: "white",
          overflowX: "hidden",
          width: "1440px",
          height: "1251px",
          position: "relative",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            width: "1751px",
            height: "1121px",
            top: "130px",
            left: "-73px",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              width: "1751px",
              height: "1121px",
              top: 0,
              left: 0,
            }}
          >
            <Box
              sx={{
                position: "absolute",
                width: "1751px",
                height: "903px",
                top: "218px",
                left: 0,
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  width: "424px",
                  height: "424px",
                  top: 16,
                  left: 0,
                  bgcolor: "#fcdc101a",
                  borderRadius: "212px",
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  width: "424px",
                  height: "424px",
                  top: "303px",
                  left: "1327px",
                  bgcolor: "#0077b614",
                  borderRadius: "212px",
                }}
              />
              <Typography
                sx={{
                  position: "absolute",
                  top: "191px",
                  left: "171px",
                  fontFamily: "Inter-Regular, Helvetica",
                  fontSize: "2rem",
                  color: "black",
                }}
              >
                Get Started Now..
              </Typography>
              <Box
                sx={{
                  position: "absolute",
                  width: "1269px",
                  height: "213px",
                  top: "335px",
                  left: "145px",
                  borderRadius: "10px",
                  border: "0.5px solid #3e7e55",
                  boxShadow: "0px 4px 4px #00000040",
                }}
              />
              <Typography
                sx={{
                  position: "absolute",
                  top: "366px",
                  left: "193px",
                  fontFamily: "Inter-Medium, Helvetica",
                  fontSize: "2rem",
                  color: "black",
                }}
              >
                Planning Applications
              </Typography>
              <Typography
                sx={{
                  position: "absolute",
                  width: "556px",
                  top: "417px",
                  left: "193px",
                  fontFamily: "Inter-Regular, Helvetica",
                  fontSize: "1.25rem",
                  color: "black",
                }}
              >
                Vivamus fermentum convallis convallis. Nunc diam eros,
                vestibulum et nunc luctus, fermentum fermentum eros.
              </Typography>
              <Box
                sx={{
                  position: "absolute",
                  width: "100px",
                  height: "100px",
                  top: 0,
                  left: "334px",
                  bgcolor: "#0077b614",
                  borderRadius: "50px",
                }}
              />
              <Button
                sx={{
                  position: "absolute",
                  top: "381px",
                  left: "1071px",
                  bgcolor: "#3c7168",
                  borderRadius: "var(--size-radius-200)",
                  border: "1px solid",
                  width: "240px",
                  height: "48px",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Inter-Medium, Helvetica",
                    fontSize: "1rem",
                    color: "white",
                  }}
                  onClick={() => navigate("/newApplication")}
                >
                  New Application
                </Typography>
              </Button>
              <Button
                sx={{
                  position: "absolute",
                  top: "442px",
                  left: "1072px",
                  borderRadius: "var(--size-radius-200)",
                  border: "1px solid #3c7168",
                  width: "240px",
                  height: "48px",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Inter-Medium, Helvetica",
                    fontSize: "1rem",
                    color: "#3c7168",
                  }}
                  onClick={() => navigate("/myApplications")}
                >
                  Manage Application
                </Typography>
              </Button>
            </Box>
            <img
              src={Pic1}
              alt="Pic1"
              style={{
                position: "absolute",
                width: "590px",
                height: "470px",
                top: "70px",
                left: "833px",
              }}
            />
          </Box>
          <Typography
            sx={{
              position: "absolute",
              top: "37px",
              left: "153px",
              fontFamily: "Inter-Regular, Helvetica",
              fontSize: "1.75rem",
              color: "black",
            }}
          >
            Welcome to Paive
          </Typography>
          <Typography
            sx={{
              position: "absolute",
              top: "76px",
              left: "153px",
              fontFamily: "Inter-Regular, Helvetica",
              fontSize: "1.25rem",
              color: "black",
            }}
          >
            AI-powered platform designed to simplify and accelerate the
            submission of planning applications to local councils.
          </Typography>
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
  );
}
