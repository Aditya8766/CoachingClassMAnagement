import React, { useState } from "react";
import "./login-form-modal.scss";
import { Box, Modal, Typography, Select, MenuItem } from "@mui/material";
import axios from 'axios';

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "30%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const LoginFormModal = (props) => {
  const { open, handleClose,setToken,handleLoginSuccess } = props;
  const [userType, setUserType] = useState(""); // Added state for user type
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleUserTypeChange = (event) => {
    setUserType(event.target.value);
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/login', {
        email,
        password
      });
      const { token } = response.data;
      setToken(token);
      handleLoginSuccess(userType)
    } catch (error) {
      console.error('Login error:', error.response.data.message);
      // Handle login error, e.g., display error message to user
    }
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
          Select User Type
        </Typography>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <Select
              value={userType}
              onChange={handleUserTypeChange}
              displayEmpty
              required
            >
              <MenuItem value="" disabled>
                Select
              </MenuItem>
              <MenuItem value="student">Student</MenuItem>
              <MenuItem value="teacher">Teacher</MenuItem>
              <MenuItem value="admin">Admin</MenuItem>
            </Select>
          </div>
          {userType && (
            <>
              <Typography variant="h6" component="h2">
                {userType.charAt(0).toUpperCase() + userType.slice(1)} Login Form
              </Typography>
                <><div className="form-group">
                  <label htmlFor="email">Email:</label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required />
                </div><div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                      type="password"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required />
                  </div><button type="submit">Login</button></>
              </>
          )}
        </form>
      </Box>
    </Modal>
  );
};

export default LoginFormModal;
