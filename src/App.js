import { toast } from "react-toastify";
import Header from "./components/app/Header";
import Profile from "./components/app/Profile";
import Education from "./components/app/Education";
import Project from "./components/app/Project";
import Employment from "./components/app/Employment";
import Container from "@mui/material/Container";
import IndexMenu from "./layouts/IndexMenu";

const App = () => {
  return (
    <div className="App">
      <IndexMenu />
      <Container sx={{ marginTop: "1rem" }}>
        <Header />
        <Profile />
        <Employment />
        <Education />
        <Project />
        <button
          onClick={() =>
            toast(
              "Wait a minute! Wow Imane Habiba is looking at my project ! ❤️"
            )
          }
        ></button>
      </Container>
    </div>
  );
};

export default App;
