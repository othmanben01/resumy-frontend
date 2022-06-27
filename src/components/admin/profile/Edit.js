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

const Edit = ({ profile, getProfile, editProfile }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const initialFormData = {
    first_name: "",
    last_name: "",
    description: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [formImage, setFormImage] = useState(null);
  const [formBackgroundImage, setFormBackgroundImage] = useState(null);

  useEffect(() => {
    (async () => await getProfile(id))();
  }, []);

  useEffect(() => {
    if (profile) {
      const { first_name, last_name, description } = profile;
      setFormData({
        ...formData,
        first_name,
        last_name,
        description,
      });
    }
  }, [profile]);

  const handleChange = (e) => {
    if ([e.target.name] == "formImage") return setFormImage(e.target.files);
    if ([e.target.name] == "formBackgroundImage")
      return setFormBackgroundImage(e.target.files);

    setFormData({
      ...formData,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { first_name, last_name, description } = formData;

    const data = new FormData();
    data.append("first_name", first_name);
    data.append("last_name", last_name);
    data.append("description", description);
    formImage && data.append("image", formImage[0]);
    formBackgroundImage &&
      data.append("background_image", formBackgroundImage[0]);
    await editProfile({ id, data });
    navigate("/admin/profiles");
  };

  return (
    <Container component="main" sx={{ marginTop: "4rem" }}>
      <CssBaseline />
      <div>
        <Typography component="h1" variant="h5" sx={{ marginBottom: "2rem" }}>
          Edit Profile
        </Typography>
        <form noValidate>
          <Grid container spacing={2} sx={{ marginBottom: "2rem" }}>
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
            <Grid item xs={12} sx={{ marginBottom: "2rem" }}>
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
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="description"
                label="description"
                name="description"
                value={formData.description}
                autoComplete="description"
                onChange={handleChange}
                multiline
                rows={4}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography component="h1" variant="body1">
                Add Avatar:
              </Typography>
              <input
                accept="image/*"
                id="post-image"
                onChange={handleChange}
                name="formImage"
                type="file"
              />
            </Grid>
            <Grid item xs={12}>
              <Typography component="h1" variant="body1">
                Add A Background Image:
              </Typography>
              <input
                accept="image/*"
                id="post-background-image"
                onChange={handleChange}
                name="formBackgroundImage"
                type="file"
              />
            </Grid>
          </Grid>
          <Button
            sx={{ marginTop: "2rem" }}
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

export default connect(mapStateToProps, mapDispatchToProps)(Edit);
