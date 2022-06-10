import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IndexMenu from "../layouts/IndexMenu";

export default () => {
  return (
    <Box>
      <IndexMenu />
      <Container component="main">
        <Typography
          gutterBottom
          component="h1"
          variant="h4"
          sx={{ marginTop: "3rem" }}
        >
          Profile Not Found.
        </Typography>
      </Container>
    </Box>
  );
};
