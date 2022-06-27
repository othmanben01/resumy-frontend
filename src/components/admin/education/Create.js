import React, { useState, useEffect } from "react";
// Redux
import { connect } from "react-redux";
import { createEducation } from "../../../redux/education/actions";
// Routing
import { useNavigate } from "react-router-dom";
// Helpers
import { formatDate } from "../../../helpers/date";
//MaterialUI
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Create = ({ createEducation }) => {
  const navigate = useNavigate();

  const initialFormData = {
    school: "",
    degree: "",
    city: "",
    start_date: null,
    end_date: null,
    description: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  const dateHandleChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      ...formData,
      start_date: formData.start_date ? formatDate(formData.start_date) : null,
      end_date: formData.end_date ? formatDate(formData.end_date) : null,
    };

    await createEducation(data);
    navigate("/admin/educations");
  };

  return (
    <Container component="main" sx={{ marginTop: "4rem" }}>
      <CssBaseline />
      <div>
        <Typography component="h1" variant="h5" sx={{ marginBottom: "2rem" }}>
          Add Education
        </Typography>
        <form noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="school"
                label="School"
                name="school"
                autoComplete="school"
                value={formData.school}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="degree"
                label="Degree"
                name="degree"
                autoComplete="degree"
                value={formData.degree}
                onChange={handleChange}
                multiline
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="city"
                label="City"
                name="city"
                autoComplete="city"
                value={formData.city}
                onChange={handleChange}
                multiline
              />
            </Grid>
            <Grid item>
              <Typography component="h6" variant="body2">
                Start date:
              </Typography>
              <Grid item xs={12} sx={{ display: "flex" }}>
                <DatePicker
                  selected={formData.start_date || new Date()}
                  onChange={(date) => dateHandleChange("start_date", date)}
                  class="date-picker"
                />
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => dateHandleChange("start_date", null)}
                >
                  Clear
                </Button>
              </Grid>
            </Grid>
            <Grid item>
              <Typography component="h6" variant="body2">
                End date:
              </Typography>
              <Grid item xs={12} sx={{ display: "flex" }}>
                <DatePicker
                  selected={formData.end_date || new Date()}
                  onChange={(date) => dateHandleChange("end_date", date)}
                  class="date-picker"
                />
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => dateHandleChange("end_date", null)}
                >
                  Clear
                </Button>
              </Grid>
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
          </Grid>
          <Button
            sx={{ marginTop: "2rem" }}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            onClick={handleSubmit}
          >
            Add Education
          </Button>
        </form>
      </div>
    </Container>
  );
};

// Redux config
const mapDispatchToProps = {
  createEducation,
};

export default connect(null, mapDispatchToProps)(Create);
