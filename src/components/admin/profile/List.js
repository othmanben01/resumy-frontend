import React, { useEffect } from "react";
// Redux
import { connect } from "react-redux";
import { getProfiles } from "../../../redux/profile/actions";
// Routing
import { useNavigate } from "react-router-dom";
import { ACCESS_TOKEN } from "../../../config/config";
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

const List = ({ profiles, getProfiles }) => {
  const navigate = useNavigate();

  useEffect(() => {
    (async () => await getProfiles())();
  }, []);

  if (!profiles || profiles.length === 0)
    return (
      <React.Fragment>
        <Container item xs={12} sx={{ marginBottom: "2rem" }}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => navigate(`create`)}
          >
            New Profile
          </Button>
        </Container>
        <Container item xs={12}>
          <Typography component="h1" variant="body1">
            Can not find any profiles, sorry
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
                  <TableCell align="left">First Name</TableCell>
                  <TableCell align="left">Last Name</TableCell>
                  <TableCell align="left">Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {profiles?.map((profile) => {
                  return (
                    <TableRow key={profile.id}>
                      <TableCell component="th" scope="row">
                        {profile.id}
                      </TableCell>
                      <TableCell align="left">{profile.first_name}</TableCell>
                      <TableCell align="left">{profile.last_name}</TableCell>

                      <TableCell align="left">
                        <Link
                          color="textPrimary"
                          onClick={() => navigate(`${profile.id}/edit`)}
                        >
                          <EditIcon
                            sx={{ cursor: "pointer", mr: "1rem" }}
                          ></EditIcon>
                        </Link>
                        <Link
                          color="textPrimary"
                          onClick={() => navigate(`${profile.id}/delete`)}
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
                      New Profile
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
const mapStateToProps = (state) => ({ profiles: state.profiles.profiles });

const mapDispatchToProps = {
  getProfiles,
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
