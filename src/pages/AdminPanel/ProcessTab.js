import {
  Autocomplete,
  Box,
  Button,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  Switch,
  TextField,
  Typography,
} from "@material-ui/core";

const countries = [
  { text: "Jersey", value: "JE" },
  { text: "Jordan", value: "JO" },
  { text: "Kazakhstan", value: "KZ" },
  { text: "Kenya", value: "KE" },
  { text: "Kiribati", value: "KI" },
  { text: "Korea, Democratic People'S Republic of", value: "KP" },
  { text: "Korea, Republic of", value: "KR" },
  { text: "Kuwait", value: "KW" },
  { text: "Kyrgyzstan", value: "KG" },
  { text: "Lao People'S Democratic Republic", value: "LA" },
];

const ProcessTab = () => (
  <Box
    sx={{
      backgroundColor: "background.paper",
      minHeight: "100%",
      p: 3,
    }}
  >
    <form onSubmit={(event) => event.preventDefault()}>
      <CardHeader title="Profile" />
      <CardContent>
        <Grid container spacing={4}>
          <Grid item md={6} xs={12}>
            <TextField fullWidth label="Name" name="name" variant="outlined" />
          </Grid>
          <Grid item md={6} xs={12}>
            <TextField
              fullWidth
              label="Email Address"
              name="email"
              required
              type="email"
              variant="outlined"
            />
          </Grid>
        </Grid>
      </CardContent>
      <Divider />
      <CardActions
        sx={{
          justifyContent: "flex-end",
          p: 2,
        }}
      >
        <Button color="primary" type="submit" variant="contained">
          Next
        </Button>
      </CardActions>
    </form>
  </Box>
);

export default ProcessTab;
