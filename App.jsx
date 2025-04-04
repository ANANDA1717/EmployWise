import { Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import Login from "./assets/Components/pages/Login.jsx";
import UserList from "./assets/Components/pages/UserList.jsx";
import EditUser from "./assets/Components/pages/EditUser.jsx";
import Sidebar from "./assets/Components/Sidebar.jsx";
import { Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const isLoggedIn = sessionStorage.getItem("token");

  return (
    <div>
      {isLoggedIn && (
        <Button onClick={() => setSidebarOpen(true)} sx={{ position: "absolute", top: 10, left: 10 }}>
          <MenuIcon />
        </Button>
      )}
      <Sidebar isOpen={sidebarOpen} toggleSidebar={() => setSidebarOpen(false)} />
      
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/users" element={isLoggedIn ? <UserList /> : <Navigate to="/" />} />
        <Route path="/edit/:id" element={isLoggedIn ? <EditUser /> : <Navigate to="/" />} />
      </Routes>
    </div>
  );
};

export default App;
