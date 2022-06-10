import { useEffect } from "react";
// Redux
import { connect } from "react-redux";
import { getProfile } from "../../redux/index/actions";
// Routing
import { useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

const Profile = ({ profile, getProfile }) => {
  const { id } = useParams();

  useEffect(() => {
    (async () => await getProfile(id))();
  }, []);

  return (
    profile && (
      <Box
        gutterBottom
        sx={{
          width: "100%",
          marginBottom: "55px",
        }}
        id="profile"
      >
        <Paper
          elevation={0}
          sx={{ padding: "2rem", backgroundColor: "aliceblue" }}
        >
          <Typography gutterBottom component="h1" variant="h5">
            Profile
          </Typography>
          <Typography component="p" variant="body1">
            {profile?.description}
          </Typography>
        </Paper>
      </Box>
    )
  );
};

// Redux config
const mapStateToProps = (state) => ({ profile: state.index.profile });

const mapDispatchToProps = {
  getProfile,
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
