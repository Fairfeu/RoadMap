import {
  Container,
  Typography,
  Box,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

export default function Home() {
  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Box textAlign="center" mb={4}>
        <Typography variant="h3" component="h1" fontWeight="bold">
          🏠 Главная страница
        </Typography>
        <Typography variant="subtitle1" color="textSecondary" mt={1}>
          Добро пожаловать в твой обучающий React-роадмап!
        </Typography>
      </Box>

      <Box className="description" mt={2}>
        <Typography>
          Здесь собраны основные темы, которые помогут тебе освоить React.
        </Typography>
        <Typography>Выбирай интересующую тебя тему слева</Typography>
      </Box>

      <Box className="topics-list" mt={4}>
        <Typography variant="h6" gutterBottom fontWeight="bold">
          Темы для изучения:
        </Typography>
        <List>
          <ListItem disableGutters>
            <ListItemText primary="🔹 Что такое React?" />
          </ListItem>
          <ListItem disableGutters>
            <ListItemText primary="🔹 Как начать изучение React?" />
          </ListItem>
          <ListItem disableGutters>
            <ListItemText primary="🔹 Структура проекта" />
          </ListItem>
          <ListItem disableGutters>
            <ListItemText primary="🔹 Virtual DOM" />
          </ListItem>
          <ListItem disableGutters>
            <ListItemText primary="🔹 Компоненты и JSX" />
          </ListItem>
          <ListItem disableGutters>
            <ListItemText primary="🔹 Props и State" />
          </ListItem>
          <ListItem disableGutters>
            <ListItemText primary="🔹 Жизненный цикл и useEffect" />
          </ListItem>
          <ListItem disableGutters>
            <ListItemText primary="🔹 React Router v6" />
          </ListItem>
          <ListItem disableGutters>
            <ListItemText primary="🔹 Context API" />
          </ListItem>
          <ListItem disableGutters>
            <ListItemText primary="🔹 HOC и Render Props" />
          </ListItem>
        </List>
      </Box>
    </Container>
  );
}
