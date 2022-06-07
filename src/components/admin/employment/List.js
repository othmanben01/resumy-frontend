import React, { useEffect } from "react";
// Redux
import { connect } from "react-redux";
import { getEmployments } from "../../../redux/employment/actions";
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

const List = ({ employments, getEmployments }) => {
  const navigate = useNavigate();

  useEffect(() => {
    (async () => await getEmployments())();
  }, []);

  if (!employments || employments.length === 0)
    return (
      <React.Fragment>
        <Container item xs={12} sx={{ marginBottom: "2rem" }}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => navigate(`create`)}
          >
            New Employment
          </Button>
        </Container>
        <Container item xs={12}>
          <Typography component="h1" variant="body1">
            Can not find any employments, sorry
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
                  <TableCell align="left">Job</TableCell>
                  <TableCell align="left">Employer</TableCell>
                  <TableCell align="left">City</TableCell>
                  <TableCell align="left">Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {employments?.map((employment) => {
                  return (
                    <TableRow key={employment.id}>
                      <TableCell component="th" scope="row">
                        {employment.id}
                      </TableCell>
                      <TableCell align="left">{employment.job}</TableCell>
                      <TableCell align="left">{employment.employer}</TableCell>
                      <TableCell align="left">{employment.city}</TableCell>
                      <TableCell align="left">
                        <Link
                          color="textPrimary"
                          onClick={() => navigate(`${employment.id}/edit`)}
                        >
                          <EditIcon
                            sx={{ cursor: "pointer", mr: "1rem" }}
                          ></EditIcon>
                        </Link>
                        <Link
                          color="textPrimary"
                          onClick={() => navigate(`${employment.id}/delete`)}
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
                      New Employment
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
  employments: state.employments.employments,
});

const mapDispatchToProps = {
  getEmployments,
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
