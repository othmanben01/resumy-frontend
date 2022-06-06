// Redux
import { connect } from "react-redux";
import { deleteProfile } from "../../../redux/profile/actions";
// Routing
import { useNavigate, useParams } from "react-router-dom";
//MaterialUI
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const Delete = ({ deleteProfile }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await deleteProfile(id);
    navigate("/admin");
    // axiosInstance
    //   .delete("admin/delete/" + id)
    //   .catch(function (error) {
    //     if (error.response) {
    //       console.log(error.response.data);
    //       console.log(error.response.status);
    //       console.log(error.response.headers);
    //     }
    //   })
    //   .then(function () {
    //     history.push({
    //       pathname: "/admin/",
    //     });
    //     window.location.reload();
    //   });
  };

  return (
    <Container component="main" maxWidth="sm">
      <Box
        display="flex"
        justifyContent="center"
        m={1}
        p={1}
        // bgcolor="background.red"
      >
        <Button variant="contained" type="submit" onClick={handleSubmit}>
          Press here to confirm delete
        </Button>
      </Box>
    </Container>
  );
};

// Redux config
const mapDispatchToProps = {
  deleteProfile,
};

export default connect(null, mapDispatchToProps)(Delete);
