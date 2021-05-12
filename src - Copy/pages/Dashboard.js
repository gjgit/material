import { Helmet } from "react-helmet";
import { Box, Container, Grid, Typography } from "@material-ui/core";
import ProjectCreateWizard from "./Project/ProjectCreateWizard";

const Dashboard = () => (
  <>
    <Helmet>
      <title>Dashboard: Project Create | Material Kit Pro</title>
    </Helmet>
    <Box
      sx={{
        backgroundColor: "background.default",
        minHeight: "100%",
        py: 4,
      }}
    >
      <Container>
        <Grid
          alignItems="center"
          container
          justifyContent="space-between"
          spacing={3}
        >
          <Grid item>
            <Typography color="textPrimary" variant="h5">
              Create New Batch Wizard
            </Typography>
          </Grid>
        </Grid>
        <Box sx={{ mt: 3 }}>
          <ProjectCreateWizard />
        </Box>
      </Container>
    </Box>
  </>
);

export default Dashboard;
