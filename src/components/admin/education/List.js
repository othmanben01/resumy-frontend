import React, { useEffect } from "react";
// Redux
import { connect } from "react-redux";
import { getEducations } from "../../../redux/education/actions";
// Routing
import { useNavigate } from "react-router-dom";
//
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const List = ({ educations, getEducations }) => {
  const navigate = useNavigate();

  useEffect(() => {
    (async () => await getEducations())();
  }, []);

  if (!educations || educations.length === 0)
    return (
      <React.Fragment>
        <Container item xs={12} sx={{ marginBottom: "2rem" }}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => navigate(`create`)}
          >
            New Education
          </Button>
        </Container>
        <Container item xs={12}>
          <Typography component="h1" variant="body1">
            Can not find any educations, sorry
          </Typography>
        </Container>
      </React.Fragment>
    );
  return (
    <React.Fragment>
      <Container maxWidth="md" component="main">
        <Paper>
          <TableContainer>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell align="left">School</TableCell>
                  <TableCell align="left">Degree</TableCell>
                  <TableCell align="left">City</TableCell>
                  <TableCell align="left">Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {educations?.map((education) => {
                  return (
                    <TableRow key={education.id}>
                      <TableCell component="th" scope="row">
                        {education.id}
                      </TableCell>
                      <TableCell align="left">{education.school}</TableCell>
                      <TableCell align="left">{education.degree}</TableCell>
                      <TableCell align="left">{education.city}</TableCell>

                      <TableCell align="left">
                        <Link
                          color="textPrimary"
                          onClick={() => navigate(`${education.id}/edit`)}
                        >
                          <EditIcon
                            sx={{ cursor: "pointer", mr: "1rem" }}
                          ></EditIcon>
                        </Link>
                        <Link
                          color="textPrimary"
                          onClick={() => navigate(`${education.id}/delete`)}
                        >
                          <DeleteForeverIcon
                            sx={{ cursor: "pointer" }}
                          ></DeleteForeverIcon>
                        </Link>
                      </TableCell>
                    </TableRow>
                  );
                })}
                <TableRow>
                  <TableCell colSpan={5} align="right">
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => navigate(`create`)}
                    >
                      New Education
                    </Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Container>
    </React.Fragment>
  );
};

// Redux config
const mapStateToProps = (state) => ({
  educations: state.educations.educations,
});

const mapDispatchToProps = {
  getEducations,
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
