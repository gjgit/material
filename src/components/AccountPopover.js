import { useRef, useState } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";

import {
  Avatar,
  Box,
  Button,
  ButtonBase,
  Divider,
  Popover,
  Typography,
} from "@material-ui/core";

const AccountPopover = () => {
  const anchorRef = useRef(null);
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const user = {
    avatar: "/static/images/avatars/avatar_6.png",
    jobTitle: "Senior Developer",
    name: "Ramanaa",
    plan: "Free",
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleLogout = async () => {
    alert("logout succesfully");
  };

  return (
    <>
      <Box
        component={ButtonBase}
        onClick={handleOpen}
        ref={anchorRef}
        sx={{
          alignItems: "center",
          display: "flex",
        }}
      >
        <Avatar
          src={user.avatar}
          sx={{
            height: 32,
            width: 32,
          }}
        />
      </Box>
      <Popover
        anchorEl={anchorRef.current}
        anchorOrigin={{
          horizontal: "center",
          vertical: "bottom",
        }}
        getContentAnchorEl={null}
        keepMounted
        onClose={handleClose}
        open={open}
        PaperProps={{
          sx: { width: 240 },
        }}
      >
        <Box sx={{ p: 2 }}>
          <Typography color="textPrimary" variant="subtitle2">
            {user.name}
          </Typography>
          <Typography color="textSecondary" variant="subtitle2">
            Devias IO
          </Typography>
        </Box>
        <Divider />
        <Box sx={{ p: 2 }}>
          <Button
            color="primary"
            fullWidth
            onClick={handleLogout}
            variant="outlined"
          >
            Logout
          </Button>
        </Box>
      </Popover>
    </>
  );
};

export default AccountPopover;
