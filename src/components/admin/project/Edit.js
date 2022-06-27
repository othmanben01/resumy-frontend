import React, { useState, useEffect } from "react";
// Redux
import { connect } from "react-redux";
import { getProject, editProject } from "../../../redux/project/actions";
// Routing
import { useNavigate, useParams } from "react-router-dom";
//MaterialUI
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

const Edit = ({ project, getProject, editProject }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const initialFormData = {
    name: "",
    url: "",
    description: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  useEffect(() => {
    (async () => await getProject(id))();
  }, []);

  useEffect(() => {
    if (project) {
      const { name, url, description } = project;
      setFormData({
        ...formData,
        name,
        url,
        description,
      });
    }
  }, [project]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await editProject({ id, data: formData });
    navigate("/admin/projects");
  };

  return (
    <Container component="main" sx={{ marginTop: "4rem" }}>
      <CssBaseline />
      <div>
        <Typography component="h1" variant="h5" sx={{ marginBottom: "2rem" }}>
          Edit Project
        </Typography>
        <form noValidate>
          <Grid container spacing={2} sx={{ marginBottom: "2rem" }}>
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
            Update Project
          </Button>
        </form>
      </div>
    </Container>
  );
};

// Redux config
const mapStateToProps = (state) => ({ project: state.projects.project });

const mapDispatchToProps = {
  getProject,
  editProject,
};

export default connect(mapStateToProps, mapDispatchToProps)(Edit);
