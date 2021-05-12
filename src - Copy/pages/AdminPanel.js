import { Helmet } from "react-helmet";
import {
  Box,
  Button,
  Grid,
  Container,
  Card,
  CardHeader,
  Divider,
  Tab,
  Typography,
  Tabs,
} from "@material-ui/core";
import { useState } from "react";

// import your tabs pages here
import ProcessTab from "./AdminPanel/ProcessTab";
import ModuleTab from "./AdminPanel/ModuleTab";
import JobTab from "./AdminPanel/JobTab";

const tabs = [
  { label: "process", value: "process" },
  { label: "module", value: "module" },
  { label: "jobs", value: "jobs" },
];
let settings = true;
const AdminPanel = () => {
  const [currentTab, setCurrentTab] = useState("process");

  const handleTabsChange = (event, value) => {
    setCurrentTab(value);
  };

  return (
    <>
      <Box
        sx={{
          backgroundColor: "background.default",
          minHeight: "100%",
          py: 3,
        }}
      >
        <Container maxWidth={settings.compact ? "xl" : false}>
          <Grid container justifyContent="space-between" spacing={3}>
            <Grid item>
              <Typography color="textPrimary" variant="h5">
                RTL Manager
              </Typography>
            </Grid>
          </Grid>
          <Box sx={{ mt: 3 }}>
            <Tabs
              onChange={handleTabsChange}
              textColor="primary"
              value={currentTab}
              variant="fullWidth"
            >
              {tabs.map((tab) => (
                <Tab key={tab.value} label={tab.label} value={tab.value} />
              ))}
            </Tabs>
          </Box>
          <Divider />
          <Box sx={{ mt: 3 }}>
            {currentTab === "process" && <ProcessTab />}
            {currentTab === "module" && <ModuleTab />}
            {currentTab === "jobs" && <JobTab />}
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default AdminPanel;
