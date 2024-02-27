import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { ListSubheader } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import ClassIcon from "@mui/icons-material/Class";
import SubjectIcon from "@mui/icons-material/Subject";
import PeopleIcon from "@mui/icons-material/People";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";

export default function MiniDrawer({
  items,
  open,
  userItems,
  setToken,
  onHomeClick,
  onClassesClick,
  onSubjectsClick,
  onTeachersClick,
  onStudentsClick,
  onNoticesClick,
  onAttendenceClicked,
  onProfileClicked,
}) {
  const navigate = useNavigate();
  const handleSignOut = () => {
    setToken("");
    navigate("/");
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Divider />
      <List>
        {items?.map((text, index) => (
          <ListItem key={text} disablePadding sx={{ display: "block" }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
              onClick={() => {
                switch (text) {
                  case "Home":
                    onHomeClick();
                    break;
                  case "Classes":
                    onClassesClick();
                    break;
                  case "Subjects":
                    onSubjectsClick();
                    break;
                  case "Teachers":
                    onTeachersClick();
                    break;
                  case "Students":
                    onStudentsClick();
                    break;
                  case "Notices":
                    onNoticesClick();
                    break;
                  case "Attendence":
                    onAttendenceClicked();
                    break;
                  default:
                    break;
                }
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                {text === "Home" && <HomeIcon />}
                {text === "Classes" && <ClassIcon />}
                {text === "Subjects" && <SubjectIcon />}
                {text === "Teachers" && <PeopleIcon />}
                {text === "Students" && <PeopleOutlineIcon />}
                {text === "Notices" && <NotificationsActiveIcon />}
                {text === "Attendance" && <PeopleIcon />}
              </ListItemIcon>
              <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <Divider />
      <ListSubheader component="div" inset>
        User
      </ListSubheader>
      <List>
        {userItems?.map((text, index) => (
          <ListItem key={text} disablePadding sx={{ display: "block" }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                {index === 0 && (
                  <AccountCircleIcon onClick={onProfileClicked} />
                )}
                {index === 1 && <LogoutIcon onClick={handleSignOut} />}
              </ListItemIcon>
              <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
