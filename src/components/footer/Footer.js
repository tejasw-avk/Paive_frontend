import React from "react";
import { Box, Typography, Grid, Container, Divider, Link } from "@mui/material";

export default function Footer() {
  return (
    <Box sx={{ backgroundColor: "#3eb489", color: "white", py: 4 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Left Section */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
              Paive
            </Typography>
            <Typography variant="body2" sx={{ lineHeight: 1.6 }}>
              Sed nec elit ut velit eleifend finibus vel ac tellus. Mauris
              aliquam ultrices pulvinar.
            </Typography>
          </Grid>

          {/* Middle Section */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
              About Us
            </Typography>
            <Link href="#" color="inherit" underline="none" display="block">
              About Us
            </Link>
            <Link href="#" color="inherit" underline="none" display="block">
              FAQs
            </Link>
            <Link href="#" color="inherit" underline="none" display="block">
              Terms and Conditions
            </Link>
          </Grid>

          {/* Right Section */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
              Contact Us
            </Typography>
            <Typography variant="body2" sx={{ lineHeight: 1.6 }}>
              hello@paive.com
            </Typography>
            <Typography variant="body2" sx={{ lineHeight: 1.6 }}>
              +44 99789xxxxx
            </Typography>
          </Grid>
        </Grid>

        {/* Divider */}
        <Divider sx={{ backgroundColor: "white", my: 3 }} />

        {/* Bottom Space */}
        <Typography variant="body2" align="center">
          © {new Date().getFullYear()} Paive. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}
