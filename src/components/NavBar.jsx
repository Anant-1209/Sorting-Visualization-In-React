import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { sortingAlgorithms } from "../common/config";
import { useData } from "../common/store";
import shallow from "zustand/shallow";
import { AiFillGithub } from "react-icons/ai";

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: "#1e1e1e", // Dark background color
    color: "#ffffff", // Light text color
    padding: "10px 20px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
  },
  title: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "#ffffff", // Ensure title text is white
  },
  icon: {
    fontSize: "2rem",
    color: "#ffffff", // White icon color
    transition: "color 0.3s ease",
    "&:hover": {
      color: "#007BFF", // Blue color on hover
    },
  },
  appBar: {
    marginTop: "10px",
    backgroundColor: "#333333", // Darker background for AppBar
  },
  tab: {
    color: "#ffffff", // White text color for tabs
    "&.Mui-selected": {
      color: "#007BFF", // Blue color for selected tab
    },
    "&:hover": {
      color: "#00BFFF", // Lighter blue on hover
    },
  },
}));

export function NavBar() {
  const classes = useStyles();

  const [algorithm, setAlgorithm] = useData(
    (state) => [state.algorithm, state.setAlgorithm],
    shallow
  );

  return (
    <div className={classes.root}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h3 className={classes.title}>Sorting Algorithms Visualizer</h3>
        <a href="https://github.com/Anant-1209" target="_blank">
          <AiFillGithub className={classes.icon} />
        </a>
      </div>
      <AppBar position="static" className={classes.appBar}>
        <Tabs
          value={algorithm}
          onChange={(event, id) => setAlgorithm(id)}
          indicatorColor="primary"
          textColor="inherit"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          {sortingAlgorithms.map((algorithm, index) => (
            <Tab
              label={algorithm.title}
              {...a11yProps(index)}
              key={algorithm.title}
              className={classes.tab}
            />
          ))}
          <Tab label="All" {...a11yProps(sortingAlgorithms.length)} className={classes.tab} />
        </Tabs>
      </AppBar>
    </div>
  );
}
