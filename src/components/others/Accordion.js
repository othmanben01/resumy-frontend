import { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const AccordionItem = ({ p1, p2, p3, p4, p5 }) => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Accordion
      expanded={expanded === "panel1"}
      onChange={handleChange("panel1")}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1bh-content"
        id="panel1bh-header"
      >
        <Typography sx={{ width: "33%", flexShrink: 0 }}>{p1}</Typography>
        <Typography sx={{ color: "text.secondary" }}>{p2}</Typography>
        <Typography
          sx={{
            color: "text.secondary",
            marginLeft: "auto",
            marginRight: "1rem",
          }}
        >
          {p3}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Divider />
        <Typography sx={{ marginTop: "2rem" }} variant="body2">
          {p4}
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default AccordionItem;
