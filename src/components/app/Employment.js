import { useEffect } from "react";
// Redux
import { connect } from "react-redux";
import { getEmployments } from "../../redux/index/actions";
// Routing
import { longDateFormat } from "../../helpers/date";
import { useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Accordion from "../others/Accordion";

const Employment = ({ employments, getEmployments }) => {
  const { id } = useParams();

  useEffect(() => {
    (async () => await getEmployments(id))();
  }, []);


  return (
    employments?.length > 0 && (
      <Box
        gutterBottom
        sx={{
          width: "100%",
          marginBottom: "55px",
        }}
        id="employments"
      >
        <Paper
          elevation={0}
          sx={{ padding: "2rem", backgroundColor: "aliceblue" }}
        >
          <Typography
            gutterBottom
            component="h1"
            variant="h5"
            sx={{
              marginBottom: "1rem",
            }}
          >
            Employment
          </Typography>
          <Divider />
          <Box
            sx={{
              marginTop: "2rem",
            }}
          >
            {employments?.map(
              ({ job, employer, city, start_date, end_date, description }) => (
                <Accordion
                  p1={job}
                  p2={`${employer}, ${city || ""}`}
                  p3={`${longDateFormat(start_date)} - ${longDateFormat(
                    end_date
                  )}`}
                  p4={description}
                />
              )
            )}
          </Box>
        </Paper>
      </Box>
    )
  );
};

// Redux config
const mapStateToProps = (state) => ({ employments: state.index.employments });

const mapDispatchToProps = {
  getEmployments,
};

export default connect(mapStateToProps, mapDispatchToProps)(Employment);
