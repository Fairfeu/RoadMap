import React from "react";
import {
  Container,
  Typography,
  Box,
  List,
  ListItem,
  ListItemText,
  Card,
  CardContent,
  Button,
} from "@mui/material";

function AboutReact() {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Box className="react-overview">
        <Typography variant="h3" component="h1" gutterBottom>
          📘 Знакомство с React.js
        </Typography>
        <Typography variant="subtitle1" color="textSecondary" gutterBottom>
          Библиотека для создания динамических интерфейсов
        </Typography>

        <Box className="content" mt={3}>
          <Typography variant="h5" gutterBottom>
            Что такое React?
          </Typography>
          <Typography paragraph>
            <strong>React</strong> — JavaScript-библиотека с открытым исходным
            кодом, разработанная Facebook/Meta для создания{" "}
            <em>интерактивных пользовательских интерфейсов</em>. Основные
            концепции:
          </Typography>

          <List className="features-list" sx={{ pl: 2 }}>
            <ListItem disableGutters>
              <ListItemText primary="🔄 Компонентный подход" />
            </ListItem>
            <ListItem disableGutters>
              <ListItemText primary="⚡ Виртуальный DOM" />
            </ListItem>
            <ListItem disableGutters>
              <ListItemText primary="🎯 Односторонний поток данных" />
            </ListItem>
            <ListItem disableGutters>
              <ListItemText primary="🧩 JSX-синтаксис" />
            </ListItem>
          </List>

          <Card className="section" sx={{ mt: 3, mb: 3 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                💡 Декларативный подход:
              </Typography>
              <Typography paragraph>
                Описываем <em>что</em> должно отобразиться, а не <em>как</em>{" "}
                это сделать.
              </Typography>

              <Typography variant="h6" gutterBottom>
                🧱 Переиспользуемые компоненты:
              </Typography>
              <Typography>
                Создавайте независимые модули с собственной логикой и стилями.
              </Typography>
            </CardContent>
          </Card>

          <Box className="code-example" sx={{ mt: 4, mb: 4 }}>
            <Typography variant="h6" gutterBottom>
              Пример компонента:
            </Typography>
            <Box
              component="pre"
              sx={{
                backgroundColor: "#f5f5f5",
                padding: "16px",
                borderRadius: "8px",
                overflowX: "auto",
              }}
            >
              <code>
                {`
function Greeting({ name }) {
  return (
    <div className="greeting-box">
      <h2>Привет, {name}!</h2>
      <button onClick={() => alert('Добро пожаловать!')}>
        Нажми меня
      </button>
    </div>
  );
}
              `}
              </code>
            </Box>
          </Box>

          <Box className="conclusion" mt={4}>
            <Typography paragraph>
              Изучайте React через официальную&nbsp;
              <a
                href="https://react.dev/ "
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#1976d2", textDecoration: "none" }}
              >
                документацию
              </a>{" "}
              и погружайтесь в мир современных веб-технологий! 🚀
            </Typography>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}

export default AboutReact;
