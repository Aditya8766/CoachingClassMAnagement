import React, { useState } from "react";
import { Box, Typography, Select, MenuItem } from "@mui/material";
import Modal from "@mui/material/Modal";
import "./registration-modal.scss";
import axios from "axios";

const style = {
  position: "absolute",
  left: "50%",
  bottom: "-43%",
  overflowY: "auto",
  transform: "translate(-50%, -50%)",
  width: "70%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function RegistrationFormModal(props) {
  const { open, handleClose, setToken,handleRegistrationSuccess  } = props;

  const [userType, setUserType] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [createPassword, setCreatePassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [std, setStd] = useState("");
  const [dob, setDob] = useState("");
  const [mobile, setMobile] = useState("");
  const [referral, setReferral] = useState("");
  const [adminId, setAdminId] = useState("");
  const [teacherId, setTeacherId] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios
        .post("http://localhost:3000/register", {
          userType,
          name,
          email,
          password: createPassword,
          std,
          dob,
          mobile,
          referral,
          adminId,
          teacherId,
        })
        .then((response) => {
          const { token } = response.data;
          setToken(token);
          handleRegistrationSuccess(userType)
        });
      } catch (error) {
        console.error("Registration error:", error.response.data.message);
      }
     
  };

  const handleCancel = () => {
    setUserType("");
    setName("");
    setEmail("");
    setCreatePassword("");
    setConfirmPassword("");
    setStd("");
    setDob("");
    setMobile("");
    setReferral("");
    setAdminId("");
    setTeacherId("");
    handleClose();
  };

  return (
    <Modal
      className="mui-modal"
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style} className="modal">
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Registration Form
        </Typography>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="userType">User Type:</label>
            <Select
              id="userType"
              value={userType}
              onChange={(e) => setUserType(e.target.value)}
              required
            >
              <MenuItem value="">Select</MenuItem>
              <MenuItem value="student">Student</MenuItem>
              <MenuItem value="teacher">Teacher</MenuItem>
              <MenuItem value="admin">Admin</MenuItem>
            </Select>
          </div>
          {userType && (
            <>
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="createPassword">Create Password:</label>
                <input
                  type="password"
                  id="createPassword"
                  value={createPassword}
                  onChange={(e) => setCreatePassword(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="confirmPassword">Confirm Password:</label>
                <input
                  type="password"
                  id="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="mobile">Mobile:</label>
                <input
                  type="tel"
                  id="mobile"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="referral">Referral:</label>
                <input
                  type="text"
                  id="referral"
                  value={referral}
                  onChange={(e) => setReferral(e.target.value)}
                />
              </div>
              {userType === "admin" && (
                <div className="form-group">
                  <label htmlFor="adminId">Admin ID:</label>
                  <input
                    type="text"
                    id="adminId"
                    value={adminId}
                    onChange={(e) => setAdminId(e.target.value)}
                  />
                </div>
              )}
              {userType === "teacher" && (
                <div className="form-group">
                  <label htmlFor="teacherId">Teacher ID:</label>
                  <input
                    type="text"
                    id="teacherId"
                    value={teacherId}
                    onChange={(e) => setTeacherId(e.target.value)}
                  />
                </div>
              )}
              {userType === "student" && (
                <>
                  <div className="form-group">
                    <label htmlFor="std">Standard:</label>
                    <input
                      type="text"
                      id="std"
                      value={std}
                      onChange={(e) => setStd(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="dob">Date of Birth:</label>
                    <input
                      type="date"
                      id="dob"
                      value={dob}
                      onChange={(e) => setDob(e.target.value)}
                    />
                  </div>
                </>
              )}
            </>
          )}
          <div className="form-group-button">
            <button type="submit" className="submit">
              Submit
            </button>
            <button type="button" className="cancel" onClick={handleCancel}>
              Cancel
            </button>
          </div>
        </form>
      </Box>
    </Modal>
  );
}

export default RegistrationFormModal;
