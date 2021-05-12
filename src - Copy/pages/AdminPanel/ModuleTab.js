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

const ModuleTab = () => (
  <Box
    sx={{
      backgroundColor: "background.paper",
      minHeight: "100%",
      p: 3,
    }}
  >
    <form onSubmit={(event) => event.preventDefault()}>
      <CardHeader title="Module" />
      <CardContent></CardContent>
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

export default ModuleTab;
