import React, { useState } from "react";
// Redux
import { connect } from "react-redux";
import { register } from "../redux/iam/actions";
// Routing
import { useNavigate, Link as RouteLink } from "react-router-dom";

//MaterialUI
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();

const SignUp = ({ register }) => {
  const navigate = useNavigate();

  const initialFormData = {
    email: "",
    user_name: "",
    password: "",
  };

  const [signUpState, setSignUpState] = useState(initialFormData);

  const handleChange = (event) => {
    setSignUpState({
      ...signUpState,
      [event.currentTarget.name]: event.currentTarget.value.trim(),
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = { ...signUpState, user_name: signUpState.email };

    await register(form, navigate);
  };

  const { email, password } = signUpState;

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12}>
                <TextField
                  type="email"
                  name="email"
                  value={email}
                  required
                  fullWidth
                  id="email"
                  label="Email"
                  autoFocus
                  autoComplete="email"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  value={password}
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link component={RouteLink} to="/login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

// Redux config
const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
  register,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
