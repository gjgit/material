import { useEffect } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import {
  Avatar,
  Box,
  Divider,
  Drawer,
  Hidden,
  List,
  Typography,
} from "@material-ui/core";
import {
  BarChart as BarChartIcon,
  Settings as SettingsIcon,
  FileText as FileTextIcon,
  PieChart as LineageIcon,
  Database as DatabaseIcon,
} from "react-feather";
import NavItem from "./NavItem";

import Logo from "./Logo";

const user = {
  avatar: "/static/images/avatars/avatar_6.png",
  jobTitle: "Senior Developer",
  name: "Ramanaa",
  plan: "Free",
};

const items = [
  {
    href: "/app/dashboard",
    icon: BarChartIcon,
    title: "Dashboard",
  },
  {
    href: "/app/reports",
    icon: FileTextIcon,
    title: "Reports",
  },
  {
    href: "/app/linage",
    icon: LineageIcon,
    title: "Lineage",
  },
  {
    href: "/app/dataquality",
    icon: DatabaseIcon,
    title: "Data Quality",
  },
  {
    href: "/app/adminpanel",
    icon: SettingsIcon,
    title: "Admin Panel",
  },
];

const DashboardSidebar = ({ onMobileClose, openMobile }) => {
  const location = useLocation();

  useEffect(() => {
    if (openMobile && onMobileClose) {
      onMobileClose();
    }
  }, [location.pathname]);

  const content = (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      <Box>
        <List>
          {items.map((item) => (
            <NavItem
              href={item.href}
              key={item.title}
              title={item.title}
              icon={item.icon}
            />
          ))}
        </List>
      </Box>
    </Box>
  );

  return (
    <>
      <Hidden lgUp>
        <Drawer
          anchor="left"
          onClose={onMobileClose}
          open={openMobile}
          variant="temporary"
          PaperProps={{
            sx: {
              width: 256,
              height: "100%",
            },
          }}
        >
          <Box>
            <Box
              sx={{
                alignItems: "center",
                backgroundColor: "background.default",
                borderRadius: 1,
                display: "flex",
                overflow: "hidden",
                p: 2,
                height: 64,
              }}
            >
              {/* <RouterLink to="/dashboard/account">
                <Avatar
                  src={user.avatar}
                  sx={{
                    cursor: "pointer",
                    height: 48,
                    width: 48,
                  }}
                />
              </RouterLink>
              <Box sx={{ ml: 2 }}>
                <Typography color="textPrimary" variant="subtitle2">
                  {user.name}
                </Typography>
                <Typography color="textSecondary" variant="body2">
                  Your plan: {user.plan}
                </Typography>
              </Box> */}
              <RouterLink to="/">
                <Logo />
              </RouterLink>
            </Box>
          </Box>
          <Divider />
          {content}
        </Drawer>
      </Hidden>
      <Hidden lgDown>
        <Drawer
          anchor="left"
          open
          variant="persistent"
          PaperProps={{
            sx: {
              width: 256,
              top: 0,
              height: "100%",
            },
          }}
        >
          <Box>
            <Box
              sx={{
                alignItems: "center",
                backgroundColor: "background.default",
                borderRadius: 1,
                display: "flex",
                overflow: "hidden",
                p: 2,
                height: 64,
              }}
            >
              {/* <RouterLink to="/dashboard/account">
                <Avatar
                  src={user.avatar}
                  sx={{
                    cursor: "pointer",
                    height: 48,
                    width: 48,
                  }}
                />
              </RouterLink>
              <Box sx={{ ml: 2 }}>
                <Typography color="textPrimary" variant="subtitle2">
                  {user.name}
                </Typography>
                <Typography color="textSecondary" variant="body2">
                  Your plan: {user.plan}
                </Typography>
              </Box> */}
              <RouterLink to="/">
                <Logo />
              </RouterLink>
            </Box>
          </Box>
          {content}
        </Drawer>
      </Hidden>
    </>
  );
};

DashboardSidebar.propTypes = {
  onMobileClose: PropTypes.func,
  openMobile: PropTypes.bool,
};

DashboardSidebar.defaultProps = {
  onMobileClose: () => {},
  openMobile: false,
};

export default DashboardSidebar;
