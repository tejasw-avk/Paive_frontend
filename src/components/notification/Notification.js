import { Box, Divider, Typography } from "@mui/material";
import React from "react";

export default function Notification() {
  return (
    <Box display="flex" justifyContent="center" width="100%" bgcolor="white">
      <Box
        bgcolor="white"
        border={1}
        borderColor="#3c7168"
        width={364}
        height={547}
        position="relative"
      >
        <Typography
          variant="body2"
          fontWeight="medium"
          color="black"
          position="absolute"
          top={5}
          left={17}
          width={294}
        >
          Your payment for House Planning Application 001
          <br />
          was successful. Your application is under review now.
        </Typography>

        <Typography
          variant="body2"
          color="#757575"
          position="absolute"
          top={39}
          left={317}
        >
          13:36
        </Typography>

        <Typography
          variant="body2"
          fontWeight="medium"
          color="black"
          position="absolute"
          top={100}
          left={17}
        >
          Your application was successfully submitted
        </Typography>

        <Typography
          variant="body2"
          color="#1e1e1e"
          position="absolute"
          top={115}
          left={17}
          width={300}
        >
          Please complete the payment to ensure your application is reviewed by
          the LPA.
        </Typography>

        <Typography
          variant="body2"
          color="#757575"
          position="absolute"
          top={150}
          left={293}
        >
          Yesterday
        </Typography>

        <Box position="absolute" top={195} left={4} width={333} height={44}>
          <Typography
            variant="body2"
            color="black"
            position="absolute"
            top={0}
            left={0}
            width={301}
          >
            Etiam eleifend justo ac pretium sagittis. Praesent vel quam dui.
          </Typography>

          <Typography
            variant="body2"
            color="#757575"
            position="absolute"
            top={29}
            left={276}
          >
            Yesterday
          </Typography>
        </Box>

        <Typography
          variant="body2"
          color="black"
          position="absolute"
          top={268}
          left={17}
        >
          Ut eu cursus elit, a aliquet lacus
        </Typography>

        <Typography
          variant="body2"
          color="#1e1e1e"
          position="absolute"
          top={283}
          left={17}
          width={300}
        >
          Praesent fermentum nisl est, a laoreet tellus dictum in. Etiam aliquet
          convallis nulla ac....
        </Typography>

        <Typography
          variant="body2"
          color="#757575"
          position="absolute"
          top={318}
          left={287}
        >
          2 days ago
        </Typography>

        <Divider
          sx={{
            position: "absolute",
            top: 79,
            left: 0,
            width: "100%",
          }}
        />

        <Divider
          sx={{
            position: "absolute",
            top: 175,
            left: 0,
            width: "100%",
          }}
        />

        <Divider
          sx={{
            position: "absolute",
            top: 343,
            left: 0,
            width: "100%",
          }}
        />

        <Divider
          sx={{
            position: "absolute",
            top: 249,
            left: 0,
            width: "100%",
          }}
        />
      </Box>
    </Box>
  );
};
