import Typography from "@mui/material/Typography";

const Copyright = (props) => (
  <Typography variant="body2" color="text.secondary" align="center" {...props}>
    {"Copyright © "}
    {"Developed by Othman Ben bouazza "}
    {new Date().getFullYear()}
    {"."}
  </Typography>
);

export default Copyright;
