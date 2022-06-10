import { useEffect } from "react";
// Redux
import { connect } from "react-redux";
import { getProjects } from "../../redux/index/actions";
// Routing
import { useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Accordion from "../others/Accordion";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

const Project = ({ projects, getProjects }) => {
  const { id } = useParams();

  useEffect(() => {
    (async () => await getProjects(id))();
  }, []);

  return (
    projects && (
      <Box
        gutterBottom
        sx={{
          width: "100%",
          marginBottom: "55px",
        }}
        id="projects"
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
            Project
          </Typography>
          <Divider />
          <Box
            sx={{
              marginTop: "2rem",
            }}
          >
            <List>
              {projects?.map((project) => (
                <ListItem sx={{ paddingTop: "0", paddingBottom: "0" }}>
                  <ListItemText primary={project.name} />{" "}
                  {project.url && <Link href={project.url}>Visit</Link>}
                </ListItem>
              ))}
            </List>
          </Box>
        </Paper>
      </Box>
    )
  );
};

// Redux config
const mapStateToProps = (state) => ({ projects: state.index.projects });

const mapDispatchToProps = {
  getProjects,
};

export default connect(mapStateToProps, mapDispatchToProps)(Project);
