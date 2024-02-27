import { Box, Button, TextField, Grid } from "@mui/material";
import React, { useState } from "react";
import ViewClasses from "./ViewAdminClasses";

const AdminClasses = ({ drawerWidth }) => {
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [showViewClass, setShowViewClass] = useState(false);

  const [id, setId] = useState("");
  const [className, setClassName] = useState("");
  const [subject, setSubject] = useState("");
  const [teacher, setTeacher] = useState("");
  const [classSchedule, setClassSchedule] = useState("");
  const [classroom, setClassroom] = useState("");
  const [maxCapacity, setMaxCapacity] = useState("");
  const [classDescription, setClassDescription] = useState("");
  const [fees, setFees] = useState("");
  const [duration, setDuration] = useState("");

  const [classes, setClasses] = useState([]);

  const [editClass, setEditClass] = useState(null);

  const handleEdit = (classItem) => {
    setEditClass(classItem);
    setShowCreateForm(true); 
  };

  const handleCreateClick = () => {
    setShowCreateForm(true);
    setShowViewClass(false);
  };

  const handleCancelClick = () => {
    setShowCreateForm(false);
    setShowViewClass(false);
  };

  const handleViewClassClick = () => {
    setShowCreateForm(false);
    setShowViewClass(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowCreateForm(false);
    const newClass = {
      id,
      className,
      subject,
      teacher,
      classSchedule,
      classroom,
      maxCapacity,
      classDescription,
      fees,
      duration,
    };
    setClasses([...classes, newClass]);
  };

  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        p: 10,
        paddingTop: 16,
        width: { sm: `calc(100% - ${drawerWidth}px)` },
      }}
    >
      <div className="create-class">
        <h1>Create Class</h1>
        {!showCreateForm && (
          <Button variant="contained" onClick={handleCreateClick}>
            Create
          </Button>
        )}
        {showCreateForm && (
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Class ID"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  value={editClass ? editClass.id : id}
                  onChange={(e) => setId(e.target.value)}
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Class Name"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  value={editClass ? editClass.className : className}
                  onChange={(e) => setClassName(e.target.value)}
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Subject"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  value={editClass ? editClass.subject : subject}
                  onChange={(e) => setSubject(e.target.value)}
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Teacher"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  value={editClass ? editClass.teacher :teacher}
                  onChange={(e) => setTeacher(e.target.value)}
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Class Schedule"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  value={editClass ? editClass.classSchedule :classSchedule}
                  onChange={(e) => setClassSchedule(e.target.value)}
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Classroom"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  value={editClass ? editClass.classroom :classroom}
                  onChange={(e) => setClassroom(e.target.value)}
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Maximum Capacity"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  value={editClass ? editClass.maxCapacity :maxCapacity}
                  onChange={(e) => setMaxCapacity(e.target.value)}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Class Description"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  multiline
                  rows={4}
                  value={editClass ? editClass.classDescription :classDescription}
                  onChange={(e) => setClassDescription(e.target.value)}
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Fees"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  value={editClass ? editClass.fees :fees}
                  onChange={(e) => setFees(e.target.value)}
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Duration"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  value={editClass ? editClass.duration :duration}
                  onChange={(e) => setDuration(e.target.value)}
                  required
                />
              </Grid>
              <Grid item xs={12} sx={{ marginTop: 2 }}>
                <Button variant="contained" onClick={handleCancelClick}>
                  Cancel
                </Button>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  sx={{ marginLeft: 2 }}
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        )}
      </div>
      <div className="view-class">
        <h1>View Classes</h1>
        {!showViewClass && (
          <Button variant="contained" onClick={handleViewClassClick}>
            View
          </Button>
        )}
        {showViewClass && (
          <ViewClasses classes={classes} setClasses={setClasses} handleEdit={handleEdit} />
        )}
      </div>
    </Box>
  );
};

export default AdminClasses;
