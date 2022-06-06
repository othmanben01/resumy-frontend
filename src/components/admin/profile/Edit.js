import React, { useState, useEffect } from "react";
// Redux
import { connect } from "react-redux";
import { getProfile, editProfile } from "../../../redux/profile/actions";
// Routing
import { useNavigate, useParams } from "react-router-dom";
//MaterialUI
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

const Create = ({ profile, getProfile, editProfile }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const initialFormData = {
    first_name: "",
    last_name: "",
  };

  const [formData, updateFormData] = useState(initialFormData);

  useEffect(() => {
    (async () => await getProfile(id))();
  }, []);

  useEffect(() => {
    if (profile) {
      const { first_name, last_name } = profile;
      updateFormData({
        ...formData,
        first_name,
        last_name,
      });
    }
  }, [profile]);

  const handleChange = (e) =>
    updateFormData({
      ...formData,
      [e.currentTarget.name]: e.currentTarget.value,
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    const { first_name, last_name } = formData;

    const data = new FormData();
    data.append("first_name", first_name);
    data.append("last_name", last_name);

    await editProfile({ id, data });
    navigate("/admin");
  };

  return (
    <Container component="main" maxWidth="sm" sx={{ marginTop: "4rem" }}>
      <CssBaseline />
      <div>
        <Typography component="h1" variant="h5" sx={{ marginBottom: "2rem" }}>
          Edit Profile
        </Typography>
        <form noValidate>
          <Grid container spacing={2} gutterBottom>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="first_name"
                label="First Name"
                name="first_name"
                autoComplete="first_name"
                value={formData.first_name}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} gutterBottom sx={{ marginBottom: "2rem" }}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="last_name"
                label="Last Name"
                name="last_name"
                autoComplete="last_name"
                value={formData.last_name}
                onChange={handleChange}
                multiline
                // rows={8}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            onClick={handleSubmit}
          >
            Update Profile
          </Button>
        </form>
      </div>
    </Container>
  );
};

// Redux config
const mapStateToProps = (state) => ({ profile: state.profiles.profile });

const mapDispatchToProps = {
  getProfile,
  editProfile,
};

export default connect(mapStateToProps, mapDispatchToProps)(Create);
