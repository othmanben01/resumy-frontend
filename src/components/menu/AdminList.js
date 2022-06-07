import * as React from "react";
// Rounting
import { useNavigate, useLocation } from "react-router-dom";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleIcon from "@mui/icons-material/People";
import BarChartIcon from "@mui/icons-material/BarChart";
import LayersIcon from "@mui/icons-material/Layers";
import AssignmentIcon from "@mui/icons-material/Assignment";

const List = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;
  console.log(location);

  const items = [
    { id: 1, label: "Profile", lookup: "profiles", to: "/admin/profiles" },
    {
      id: 2,
      label: "Education",
      lookup: "educations",
      to: "/admin/educations",
    },
    {
      id: 3,
      label: "Employment",
      lookup: "employments",
      to: "/admin/employments",
    },
    { id: 4, label: "Project", lookup: "projects", to: "/admin/projects" },
  ];

  const shouldBackground = (lookup) => pathname?.includes(lookup);

  return items?.map(({ id, label, lookup, to }) => (
    <ListItemButton
      key={id}
      sx={shouldBackground(lookup) ? { backgroundColor: "aliceblue" } : {}}
      onClick={() => navigate(to)}
    >
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary={label} />
    </ListItemButton>
  ));
};

export default <List />;
