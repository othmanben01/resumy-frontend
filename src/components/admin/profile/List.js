import React, { useEffect } from "react";
// Redux
import { connect } from "react-redux";
import { getProfiles } from "../../../redux/profile/actions";
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
// import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
// import EditIcon from "@material-ui/icons/Edit";
import Button from "@mui/material/Button";

const List = ({ profiles, getProfiles }) => {
  useEffect(() => {
    (async () => await getProfiles())();
  }, []);

  if (!profiles || profiles.length === 0)
    return <p>Can not find any profiles, sorry</p>;
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
                {profiles.map((profile) => {
                  return (
                    <TableRow>
                      <TableCell component="th" scope="row">
                        {profile.id}
                      </TableCell>
                      <TableCell align="left">{profile.first_name}</TableCell>
                      <TableCell align="left">{profile.last_name}</TableCell>

                      {/* <TableCell align="left">
                        <Link
                          color="textPrimary"
                          href={"/profile/" + profile.id}
                        >
                          {profile.title}
                        </Link>
                      </TableCell> */}

                      {/* <TableCell align="left">
                        <Link
                          color="textPrimary"
                          href={"/admin/edit/" + profile.id}
                        >
                          <EditIcon></EditIcon>
                        </Link>
                        <Link
                          color="textPrimary"
                          href={"/admin/delete/" + profile.id}
                        >
                          <DeleteForeverIcon></DeleteForeverIcon>
                        </Link>
                      </TableCell> */}
                    </TableRow>
                  );
                })}
                <TableRow>
                  <TableCell colSpan={4} align="right">
                    <Button
                      href={"/admin/create"}
                      variant="contained"
                      color="primary"
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
