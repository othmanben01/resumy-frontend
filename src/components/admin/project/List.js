import React, { useEffect } from "react";
// Redux
import { connect } from "react-redux";
import { getProjects } from "../../../redux/project/actions";
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

const List = ({ projects, getProjects }) => {
  const navigate = useNavigate();

  useEffect(() => {
    (async () => await getProjects())();
  }, []);

  if (!projects || projects.length === 0)
    return (
      <React.Fragment>
        <Container item xs={12} sx={{ marginBottom: "2rem" }}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => navigate(`create`)}
          >
            New Project
          </Button>
        </Container>
        <Container item xs={12}>
          <Typography component="h1" variant="body1">
            Can not find any projects, sorry
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
                  <TableCell align="left">Name</TableCell>
                  <TableCell align="left">Url</TableCell>
                  <TableCell align="left">Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {projects?.map((project) => {
                  return (
                    <TableRow key={project.id}>
                      <TableCell component="th" scope="row">
                        {project.id}
                      </TableCell>
                      <TableCell align="left">{project.name}</TableCell>
                      <TableCell align="left">{project.url}</TableCell>

                      <TableCell align="left">
                        <Link
                          color="textPrimary"
                          onClick={() => navigate(`${project.id}/edit`)}
                        >
                          <EditIcon
                            sx={{ cursor: "pointer", mr: "1rem" }}
                          ></EditIcon>
                        </Link>
                        <Link
                          color="textPrimary"
                          onClick={() => navigate(`${project.id}/delete`)}
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
                  <TableCell colSpan={4} align="right">
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => navigate(`create`)}
                    >
                      New Project
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
  projects: state.projects.projects,
});

const mapDispatchToProps = {
  getProjects,
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
