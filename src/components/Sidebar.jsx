import { Link } from "react-router-dom";
import { List, ListItem, ListItemText, Typography, Box } from "@mui/material";

function Sidebar() {
  const menuItems = [
    { title: "Главная", path: "/" },
    { title: "React это", path: "/about-react" },
    { title: "С чего начать", path: "/start-with" },
    { title: "Структура проекта", path: "/project-structure" },
    { title: "Virtual DOM", path: "/virtual-dom" },
    { title: "Компоненты", path: "/components" },
    { title: "Props", path: "/props" },
    { title: "State (useState)", path: "/state" },
    { title: "useEffect", path: "/lifecycle" },
    { title: "События в React", path: "/events" },
    { title: "Refs, Fragment, key", path: "/advanced" },
    { title: "Context API", path: "/context" },
    { title: "React Router v6", path: "/react-router" },
    { title: "LocalStorage", path: "/local-storage" },
    { title: "HOC", path: "/hoc" },
  ];

  return (
    <Box sx={{ width: 250, padding: 2, background: "aliceblue" }}>
      <Typography variant="h6" gutterBottom>
        Меню
      </Typography>

      <List component="nav">
        {menuItems.map((item, index) => (
          <ListItem
            key={index}
            component="li"
            disableGutters
            sx={{
              marginBottom: "8px",
              "& a": {
                textDecoration: "none",
                color: "inherit",
                "&:hover": {
                  color: "#1976d2",
                },
              },
            }}
          >
            <Link
              to={item.path}
              style={{
                display: "block",
                padding: "10px 16px",
                color: "inherit",
              }}
            >
              {item.title}
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default Sidebar;
