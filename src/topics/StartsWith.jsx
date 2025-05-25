import React from "react";
import {
  Container,
  Typography,
  Box,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

export default function StartsWith() {
  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Box className="guide-header" textAlign="center" mb={3}>
        <Typography variant="h4" component="h1" gutterBottom fontWeight="bold">
          🚀 Как начать изучать React: Пошаговый гид
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          От основ JavaScript до первого SPA-приложения
        </Typography>
      </Box>

      <Box className="step" mb={4}>
        <Typography variant="h5" component="h2" gutterBottom>
          1. Подготовительный этап
        </Typography>
        <Box
          className="step-content"
          p={2}
          bgcolor="#f9f9f9"
          borderRadius={2}
          boxShadow={1}
        >
          <Typography paragraph>
            <strong>📌 Необходимые знания:</strong>
          </Typography>
          <List>
            <ListItem disableGutters>
              <ListItemText primary="HTML/CSS (семантика, flex/grid)" />
            </ListItem>
            <ListItem disableGutters>
              <ListItemText primary="JavaScript ES6+ (стрелочные функции, деструктуризация)" />
            </ListItem>
            <ListItem disableGutters>
              <ListItemText primary="Базовое понимание npm/yarn" />
            </ListItem>
          </List>
          <Box mt={2} p={2} bgcolor="#e3f2fd" borderRadius={2}>
            <Typography>
              💡 Совет: Пройдите{" "}
              <a
                href="https://learn.javascript.ru/ "
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#1976d2", textDecoration: "none" }}
              >
                курс по современному JS
              </a>{" "}
              перед стартом
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box className="step" mb={4}>
        <Typography variant="h5" component="h2" gutterBottom>
          2. Установка окружения
        </Typography>
        <Box
          component="pre"
          sx={{
            backgroundColor: "#272822",
            color: "#f8f8f2",
            padding: 2,
            borderRadius: 2,
            overflowX: "auto",
          }}
        >
          <code>{`
# Установите Node.js с официального сайта
# Затем создайте первое приложение:
npx create-react-app my-first-app
cd my-first-app
npm start
          `}</code>
        </Box>
      </Box>

      <Box className="step" mb={4}>
        <Typography variant="h5" component="h2" gutterBottom>
          3. Основные концепции
        </Typography>

        <Box display="flex" gap={3} flexWrap="wrap">
          <Box
            className="concept-card"
            flex={1}
            minWidth="200px"
            p={2}
            bgcolor="#fff"
            borderRadius={2}
            boxShadow={1}
          >
            <Typography variant="h6" gutterBottom>
              Компоненты
            </Typography>
            <Box
              component="pre"
              sx={{
                backgroundColor: "#f4f4f4",
                padding: "10px",
                borderRadius: "8px",
                overflowX: "auto",
              }}
            >
              <code>{`
function Welcome() {
  return <h1>Привет, мир!</h1>;
}
              `}</code>
            </Box>
          </Box>

          <Box
            className="concept-card"
            flex={1}
            minWidth="200px"
            p={2}
            bgcolor="#fff"
            borderRadius={2}
            boxShadow={1}
          >
            <Typography variant="h6" gutterBottom>
              Хуки (Hooks)
            </Typography>
            <Box
              component="pre"
              sx={{
                backgroundColor: "#f4f4f4",
                padding: "10px",
                borderRadius: "8px",
                overflowX: "auto",
              }}
            >
              <code>{`
function Counter() {
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount(c => c + 1)}>
      Нажато: {count}
    </button>
  );
}
              `}</code>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box className="step" mb={4}>
        <Typography variant="h5" component="h2" gutterBottom>
          4. Практические шаги
        </Typography>
        <List>
          <ListItem disableGutters>
            <ListItemText primary="✅ Создайте компонент туду-листа" />
          </ListItem>
          <ListItem disableGutters>
            <ListItemText primary="✅ Добавьте форму ввода с управляемыми полями" />
          </ListItem>
          <ListItem disableGutters>
            <ListItemText primary="✅ Реализуйте фильтрацию элементов" />
          </ListItem>
          <ListItem disableGutters>
            <ListItemText primary="✅ Подключите localStorage для сохранения данных" />
          </ListItem>
        </List>
      </Box>

      <Box className="resources" mb={4}>
        <Typography variant="h5" component="h2" gutterBottom>
          📚 Ресурсы для обучения
        </Typography>
        <List>
          <ListItem disableGutters>
            <ListItemText
              primary={
                <a
                  href="https://react.dev/learn "
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#1976d2", textDecoration: "none" }}
                >
                  Официальная документация (React.dev)
                </a>
              }
            />
          </ListItem>
        </List>
      </Box>

      <Box
        className="motivation"
        mt={4}
        p={3}
        bgcolor="#e0f7fa"
        borderRadius={2}
      >
        <Typography variant="body1">
          🔥 Главное — начинайте практиковать сразу! Каждая ошибка делает вас
          сильнее.
        </Typography>
        <Typography variant="body1" gutterBottom>
          Создайте свой первый компонент прямо сейчас:
        </Typography>
        <Box
          component="pre"
          sx={{
            backgroundColor: "#272822",
            color: "#f8f8f2",
            padding: 2,
            borderRadius: 2,
            overflowX: "auto",
          }}
        >
          <code>{`
function FirstComponent() {
  return (
    <div>
      <h2>Моя первая React-компонента!</h2>
      <p>Поздравляю! 🎉</p>
    </div>
  );
}
          `}</code>
        </Box>
      </Box>
    </Container>
  );
}
