import { Link } from "react-router-dom";
import { List, ListItem, ListItemText, Typography, Box } from "@mui/material";

function Sidebar() {
  const menuItems = [
    { title: "Главная", path: "/RoadMap" },
    { title: "React это", path: "/RoadMap/AboutReact" },
    { title: "С чего начать", path: "/RoadMap/StartsWith" },
    { title: "Структура проекта", path: "/RoadMap/ProjectStructure" },
    { title: "Virtual DOM", path: "/RoadMap/VirtualDOMPage" },
    { title: "Компоненты", path: "/RoadMap/Components" },
    { title: "Props", path: "/RoadMap/ReactProps" },
    { title: "State (useState)", path: "/RoadMap/StateReact" },
    { title: "Жизненный цикл", path: "/RoadMap/LyfeCycleReact" },
    { title: "События в React", path: "/RoadMap/Events" },
    {
      title: "Refs, Fragment, key, React.memo",
      path: "/RoadMap/ReactAdvancedConceptsGuide",
    },
    { title: "Context API", path: "/RoadMap/ReactContextGuide" },
    { title: "React Router v6", path: "/RoadMap/ReactRouter" },
    { title: "LocalStorage / sessionStorage", path: "/RoadMap/LocalStorage" },
    { title: "HOC", path: "/RoadMap/HOCreact" },
  ];
  // const menuItems = [
  //   { title: "Главная", path: "/" },
  //   { title: "React это", path: "/AboutReact" },
  //   { title: "С чего начать изучение", path: "/StartsWith" },
  //   { title: "Структура проекта", path: "/ProjectStructure" },
  //   { title: "Введение в Virtual DOM", path: "/VirtualDOMPage" },
  //   { title: "Компоненты", path: "/Components" },
  //   { title: "Props", path: "/ReactProps" },
  //   { title: "State (useState)", path: "/StateReact" },
  //   { title: "Жизненный цикл (useEffect)", path: "/LyfeCycleReact" },
  //   { title: "События в React", path: "/Events" },
  //   {
  //     title: "Refs, Fragment, key, React.memo",
  //     path: "/ReactAdvancedConceptsGuide",
  //   },
  //   { title: "Context API", path: "/ReactContextGuide" },
  //   { title: "React Router v6", path: "/ReactRouter" },
  //   { title: "LocalStorage / sessionStorage", path: "/LocalStorage" },
  //   { title: "HOC", path: "/HOCreact" },
  // ];

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
            button={"true"}
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
