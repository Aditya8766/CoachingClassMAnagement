import "./student-dashboard.scss";
import React, { useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import students from "../../../assets/students.png";
import teacher from "../../../assets/teacher.png";
import attendance from "../../../assets/attendant.png";
import assignments from "../../../assets/assignment.png";
import { Box, Divider, Paper } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import MiniDrawer from "../../side-drawer/SideDrawer";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const StudentDashboard = ({ setToken }) => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleSubjectsClick = () => {
    // Handle click for Subjects
    console.log("Subjects clicked");
  };

  const handleAttendenceClicked = () => {
    // Handle click for Teachers
    console.log("Attendence clicked");
  };

  const handleNoticesClick = () => {
    // Handle click for Notices
    console.log("Notices clicked");
  };
  const handleProfileClick = () => {
    // Handle click for Notices
    console.log("Profile clicked");
  };
  return (
    <div className="admin-dashboard">
      <Box sx={{ display: "flex" }}>
        <Divider />
        <CssBaseline />
        <AppBar position="fixed" open={open}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{
                marginRight: 5,
                ...(open && { display: "none" }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              Student Dashboard
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "rtl" ? (
                <ChevronRightIcon />
              ) : (
                <ChevronLeftIcon />
              )}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <MiniDrawer
            setToken={setToken}
            items={["Home", "Subjects", "Attendance", "Notices"]}
            userItems={["Profile", "Logout"]}
            onSubjectsClick={handleSubjectsClick}
            onAttendenceClicked={handleAttendenceClicked}
            onNoticesClick={handleNoticesClick}
            onProfileClicked={handleProfileClick}
            open={open}
          />
        </Drawer>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 10,
            paddingTop: 16,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
          }}
        >
          <div className="dashboard-cards">
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6} md={3}>
                <Card>
                  <div className="card-images">
                    <img width={50} height={50} src={students} alt="students" />
                  </div>
                  <CardContent>
                    <Typography
                      className="card-text"
                      gutterBottom
                      variant="h5"
                      component="div"
                    >
                      Total Subjects
                    </Typography>
                    <Typography
                      className="counter"
                      variant="body2"
                      color="text.secondary"
                    >
                      0
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Card>
                  <div className="card-images">
                    <img
                      width={50}
                      height={50}
                      src={assignments}
                      alt="assignments"
                    />
                  </div>
                  <CardContent>
                    <Typography
                      className="card-text"
                      gutterBottom
                      variant="h5"
                      component="div"
                    >
                      Total Assignments
                    </Typography>
                    <Typography
                      className="counter"
                      variant="body2"
                      color="text.secondary"
                    >
                      0
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Card>
                  <div className="card-images">
                    <img width={50} height={50} src={teacher} alt="teacher" />
                  </div>
                  <CardContent>
                    <Typography
                      className="card-text"
                      gutterBottom
                      variant="h5"
                      component="div"
                    >
                      Total Tests
                    </Typography>
                    <Typography
                      className="counter"
                      variant="body2"
                      color="text.secondary"
                    >
                      0
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Card>
                  <div className="card-images">
                    <img
                      width={50}
                      height={50}
                      src={attendance}
                      alt="attendance"
                    />
                  </div>
                  <CardContent>
                    <Typography
                      className="card-text"
                      gutterBottom
                      variant="h5"
                      component="div"
                    >
                      Total Attendance
                    </Typography>
                    <Typography
                      className="counter"
                      variant="body2"
                      color="text.secondary"
                    >
                      0
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </div>
          <div className="notices-card">
            <Grid item xs={12} md={12} lg={12}>
              <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
                <Typography
                  className="card-text"
                  gutterBottom
                  variant="h5"
                  component="div"
                >
                  Notices
                </Typography>
              </Paper>
            </Grid>
          </div>
        </Box>
      </Box>
    </div>
  );
};

export default StudentDashboard;
