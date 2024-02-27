import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Checkbox,
  Button,
} from "@mui/material";

const ViewClasses = ({ classes, setClasses, handleEdit }) => {
  const [selectedClass, setSelectedClass] = useState(null);

  const handleEditClick = (classItem) => {
    console.log("Edit class:", classItem);
    handleEdit(classItem);
  };

  const handleCheckboxChange = (classId) => {
    if (selectedClass === classId) {
      setSelectedClass(null);
    } else {
      setSelectedClass(classId);
    }
  };

  const handleDeleteClick = () => {
    setClasses(classes.filter((classItem) => classItem.id !== selectedClass));
    setSelectedClass(null);
  };

  if (!classes || classes.length === 0) {
    return <div>No classes available</div>;
  }

  const tableHeaders = Object.keys(classes[0]);

  return (
    <TableContainer component={Paper}>
      <Table aria-label="classes table">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            {tableHeaders.map((header) => (
              <TableCell key={header}>{header}</TableCell>
            ))}
            <TableCell>Edit</TableCell>
            <TableCell>Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {classes.map((classItem, index) => (
            <TableRow key={index}>
              <TableCell>
                <Checkbox
                  checked={selectedClass === classItem.id}
                  onChange={() => handleCheckboxChange(classItem.id)}
                />
              </TableCell>
              {tableHeaders.map((header) => (
                <TableCell key={header}>{classItem[header]}</TableCell>
              ))}
              <TableCell>
                <Button
                  variant="contained"
                  onClick={() => handleEditClick(classItem)}
                >
                  Edit
                </Button>
              </TableCell>
              <TableCell>
                <Button
                  variant="contained"
                  color="error"
                  onClick={handleDeleteClick}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ViewClasses;
