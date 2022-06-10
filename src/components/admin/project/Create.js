import React, { useState, useEffect } from "react";
// Redux
import { connect } from "react-redux";
import { createProject } from "../../../redux/project/actions";
// Routing
import { useNavigate } from "react-router-dom";
//MaterialUI
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

const Create = ({ createProject }) => {
  const navigate = useNavigate();

  const initialFormData = {
    name: "",
    url: "",
    description: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    await createProject(formData);
    navigate("/admin/projects");
  };

  return (
    <Container component="main" maxWidth="sm" sx={{ marginTop: "4rem" }}>
      <CssBaseline />
      <div>
        <Typography component="h1" variant="h5" sx={{ marginBottom: "2rem" }}>
          Add Project
        </Typography>
        <form noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="name"
                label="Name"
                name="name"
                autoComplete="name"
                value={formData.name}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sx={{ marginBottom: "2rem" }}>
              <TextField
                type="url"
                variant="outlined"
                fullWidth
                id="url"
                label="Url: http://www.website.com"
                name="url"
                autoComplete="url"
                value={formData.url}
                onChange={handleChange}
                multiline
                // rows={8}
              />
            </Grid>
            {/* <Grid item xs={12}>
              <TextField
                variant="outlined"
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
            </Grid> */}
          </Grid>
          <Button
            sx={{ marginTop: "2rem" }}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            onClick={handleSubmit}
          >
            Add Project
          </Button>
        </form>
      </div>
    </Container>
  );
};

// Redux config
const mapDispatchToProps = {
  createProject,
};

export default connect(null, mapDispatchToProps)(Create);
