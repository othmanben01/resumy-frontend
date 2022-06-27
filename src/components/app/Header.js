import { useEffect } from "react";
// Redux
import { connect } from "react-redux";
import { getProfile } from "../../redux/index/actions";
// Routing
import { useParams } from "react-router-dom";

import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

const Header = ({ profile, getProfile }) => {
  const { id } = useParams();

  useEffect(() => {
    (async () => await getProfile(id))();
  }, []);
  console.log(profile?.image);
  return (
    profile && (
      <Box
        gutterBottom
        sx={{
          width: "100%",
          height: "150px",
          backgroundColor: "aliceblue",
          backgroundImage: `url(${profile?.background_image?.split("?")[0]})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          position: "relative",
          marginBottom: "90px",
          borderRadius: "5px",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            transform: "translate(3%, 50%)",
            bottom: "0",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Avatar
            alt="Remy Sharp"
            src={profile?.image.split("?")[0] || "/static/images/avatar/1.jpg"}
            sx={{
              width: "80px",
              height: "80px",
            }}
          />
          <Typography
            component="h1"
            variant="h5"
            sx={{
              marginLeft: "1rem",
              fontSize: "1.7rem",
              backgroundColor: "#f0f8ffd9",
            }}
          >
            {`${profile.first_name} ${profile.last_name}`}
          </Typography>
        </Box>
      </Box>
    )
  );
};

// Redux config
const mapStateToProps = (state) => ({ profile: state.index.profile });

const mapDispatchToProps = {
  getProfile,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
