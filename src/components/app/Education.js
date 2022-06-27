import { useEffect } from "react";
// Redux
import { connect } from "react-redux";
import { getEducations } from "../../redux/index/actions";
// Routing
import { useParams } from "react-router-dom";
// Helpers
import { longDateFormat } from "../../helpers/date";
import Markdown from "../others/Markdown";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Accordion from "../others/Accordion";

const Education = ({ educations, getEducations }) => {
  const { id } = useParams();

  useEffect(() => {
    (async () => await getEducations(id))();
  }, []);

  return (
    educations?.length > 0 && (
      <Box
        gutterBottom
        sx={{
          width: "100%",
          marginBottom: "55px",
        }}
        id="educations"
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
            Education
          </Typography>
          <Divider />
          <Box
            sx={{
              marginTop: "2rem",
            }}
          >
            {educations?.map(
              ({ school, degree, city, start_date, end_date, description }) => (
                <Accordion
                  p1={degree}
                  p2={`${school},  ${city}`}
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
const mapStateToProps = (state) => ({ educations: state.index.educations });

const mapDispatchToProps = {
  getEducations,
};

export default connect(mapStateToProps, mapDispatchToProps)(Education);
