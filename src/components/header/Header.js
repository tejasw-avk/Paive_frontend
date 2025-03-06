import React, { useState } from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { AppBar, Toolbar, Typography, IconButton, Box, Badge, Popover, List, ListItem, ListItemText } from "@mui/material";

export default function Header() {
  // State to control popover
  const [anchorEl, setAnchorEl] = useState(null);

  // Function to open popover
  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // Function to close popover
  const handleClose = () => {
    setAnchorEl(null);
  };

  // Check if popover is open
  const open = Boolean(anchorEl);

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "#3eb489",
        boxShadow: "none",
        paddingX: 2,
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between", alignItems: "center" }}>
        {/* Left Section - App Name */}
        <Typography variant="h6" sx={{ color: "white", fontWeight: "bold" }}>
          Paive
        </Typography>

        {/* Right Section - Icons and Text */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          {/* Notifications Button */}
          <IconButton onClick={handleOpen}>
            <Badge badgeContent={1} color="error">
              <NotificationsIcon sx={{ color: "white" }} />
            </Badge>
          </IconButton>

          {/* Notification Popover */}
          <Popover
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            <Box sx={{ p: 2, width: 250 }}>
              <Typography variant="h6" sx={{ mb: 1 }}>
                Notifications
              </Typography>
              <List>
                <ListItem button>
                  <ListItemText primary="New support ticket received" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="System maintenance scheduled" />
                </ListItem>
              </List>
            </Box>
          </Popover>

          {/* Help & Support */}
          <Typography
            variant="body1"
            sx={{ color: "white", fontWeight: "medium", cursor: "pointer" }}
          >
            Help & Support
          </Typography>

          {/* User Profile */}
          <IconButton>
            <AccountCircleIcon sx={{ color: "white" }} />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
