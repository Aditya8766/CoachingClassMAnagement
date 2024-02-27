import { useEffect, useState } from "react";
import "./header.scss";
import React from "react";
import logo from "../../assets/logo2.png";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import { Alert, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import LoginFormModal from "./homepage-modals/LoginFormModal";
import RegistrationFormModal from "./homepage-modals/ReistrationFormModal";

function Header({setUserType,token,setToken}) {
  const [isOpen, setIsOpen] = useState(false);
  const [alertVisible, setAlertVisible] = useState(false);

  const [openSignUp, setOpenSignUp] = useState(false);
  const [openSignIn, setOpenSignIn] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (token) {
      setAlertVisible(true);
      const timeOut = setTimeout(() => {
        setAlertVisible(false);
      }, 1000);
      return () => clearTimeout(timeOut);
    }
  }, [token]);

  const navigate = useNavigate();

  const handleRegistrationSuccess = (type) => {
    setUserType(type);
    if (type === "admin") {
      navigate("/admin");
    }else if(type === "student"){
      navigate("/student")
    }else if("/teacher"){
      navigate("/teacher")
    }
  };

  const handleLoginSuccess = (type) => {
    setUserType(type);
    if (type === "admin") {
      navigate("/admin");
    }else if(type === "student"){
      navigate("/student")
    }else if("/teacher"){
      navigate("/teacher")
    }
  };

  return (
    <div className={`header ${isOpen ? "open" : ""}`}>
      <div className="image">
        <img src={logo} alt="loading..." />
      </div>
      <div className={`routes ${isOpen ? "open" : ""}`}>
        <div className="nav">
          <EmailIcon className="route-icons" />
          ultrasmartabacus@gmail.com
        </div>
        <div className="nav">
          <CallIcon className="route-icons" />
          8208115541
        </div>
        <div className="nav">
          <Button variant="contained" onClick={() => setOpenSignUp(true)}>
            Sign-Up
          </Button>
        </div>
        <div className="nav">
          <Button variant="contained" onClick={() => setOpenSignIn(true)}>
            Sign-In
          </Button>
        </div>
      </div>
      <div className="hamburger"></div>
      <div className={`hamburger ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      {token ? (
        <>
          {alertVisible && (
            <Alert onClose={() => setAlertVisible(false)} severity="success">
              User Logged in Successfully
            </Alert>
          )}
        </>
      ) : null}

      <RegistrationFormModal
        open={openSignUp}
        handleClose={() => setOpenSignUp(false)}
        setToken={setToken}
        handleRegistrationSuccess={handleRegistrationSuccess}
      />
      <LoginFormModal
        open={openSignIn}
        handleClose={() => setOpenSignIn(false)}
        setToken={setToken}
        handleLoginSuccess={handleLoginSuccess}
      />
    </div>
  );
}

export default Header;
