import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";
import { Box } from "@mui/material";

function Layout() {
  const location = useLocation();

  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Outlet />
      </Box>
    </Box>
  );
}

export default Layout;
