import React, { useState } from "react";
import Home from "./components/homepage/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AdminDashboard from "./components/dashboards/admin-dashboard/AdminDashboard";
import StudentDashboard from "./components/dashboards/student-dashboard/StudentDashboard";
import TeacherDashboard from "./components/dashboards/teacher-dashboard/TeacherDashboard";

function App() {
  const [userType, setUserType] = useState("");
  const [token, setToken] = useState("");
  return (

    <Router>
      <div className="App">
      <Routes>
          <Route path="/" element={<Home token={token} setToken={setToken} setUserType={setUserType} />} />
          {userType === "admin" && (
            <Route path="/admin" element={<AdminDashboard setToken={setToken}/>} />
          )}
          {userType === "student" && (
            <Route path="/student" element={<StudentDashboard setToken={setToken}/>} />
          )}
          {userType === "teacher" && (
            <Route path="/teacher" element={<TeacherDashboard setToken={setToken}/>} />
          )}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
