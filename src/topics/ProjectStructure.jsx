import {
  Container,
  Typography,
  Box,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

export default function ProjectStructure() {
  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Box textAlign="center" mb={3}>
        <Typography variant="h4" component="h1" fontWeight="bold">
          📁 Структура проекта на React
        </Typography>
        <Typography variant="subtitle1" color="textSecondary" mt={1}>
          Как правильно организовать файлы и папки в React-приложении.
        </Typography>
      </Box>

      <Box className="project-description" mt={3}>
        <Typography>
          Чтобы начать разрабатывать приложение на React, важно правильно
          организовать файлы и папки. Ниже приведён пример типичной структуры
          проекта:
        </Typography>

        <Box
          component="pre"
          sx={{
            backgroundColor: "#272822",
            color: "#f8f8f2",
            padding: 2,
            borderRadius: 2,
            overflowX: "auto",
            fontSize: "0.9rem",
          }}
        >
          <code>{`src/
├── assets/           # Изображения, шрифты, JSON и другие статические файлы
├── components/       # Повторно используемые компоненты (например: кнопка, заголовок)
│   ├── Header.jsx
│   └── Sidebar.jsx
├── topics/            # Компоненты страниц (Главная, Тема 1, Профиль и т.д.)
│   ├── Home.jsx
│   └── TopicPage.jsx
├── App.jsx           # Главный компонент, содержит маршруты
└── main.jsx          # Точка входа, рендерит App в DOM`}</code>
        </Box>
      </Box>

      <Box className="folder-structure" mt={4}>
        <Typography variant="h6" gutterBottom fontWeight="bold">
          🔍 Основные папки и их назначение:
        </Typography>
        <List>
          <ListItem disableGutters>
            <ListItemText primary="📁 assets — хранение изображений, JSON, видео и других статических ресурсов." />
          </ListItem>
          <ListItem disableGutters>
            <ListItemText primary="🧩 components — здесь находятся небольшие переиспользуемые компоненты." />
          </ListItem>
          <ListItem disableGutters>
            <ListItemText primary="📄 pages — большие компоненты, отвечающие за отдельные экраны или разделы." />
          </ListItem>
          <ListItem disableGutters>
            <ListItemText primary="⚙️ App.jsx — главный файл, где подключаются маршруты и основные компоненты." />
          </ListItem>
          <ListItem disableGutters>
            <ListItemText primary="🏁 main.jsx — точка входа, запускает приложение." />
          </ListItem>
        </List>
      </Box>

      <Box className="component-example" mt={4}>
        <Typography variant="h6" gutterBottom fontWeight="bold">
          📦 Пример компонента:
        </Typography>
        <Typography>Вот как может выглядеть простой компонент:</Typography>

        <Box
          component="pre"
          sx={{
            backgroundColor: "#272822",
            color: "#f8f8f2",
            padding: 2,
            borderRadius: 2,
            overflowX: "auto",
            mb: 2,
          }}
        >
          <code>{`// src/components/Button.jsx
import React from 'react';

function Button({ text }) {
  return <button>{text}</button>;
}

export default Button;`}</code>
        </Box>

        <Typography>Использование в другом компоненте:</Typography>

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
          <code>{`// src/pages/Home.jsx
import React from 'react';
import Button from '../components/Button';

function Home() {
  return (
    <div>
      <h2>Главная</h2>
      <Button text="Нажми меня" />
    </div>
  );
}

export default Home;`}</code>
        </Box>
      </Box>

      <Box className="routing-section" mt={4}>
        <Typography variant="h6" gutterBottom fontWeight="bold">
          🔄 Роутинг (навигация между страницами)
        </Typography>
        <Typography>
          Для создания разных страниц используется <code>react-router-dom</code>
          .
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
          <code>{`// src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import TopicPage from './pages/TopicPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/topic1" element={<TopicPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;`}</code>
        </Box>
      </Box>

      <Box className="next-steps" mt={4}>
        <Typography variant="h6" gutterBottom fontWeight="bold">
          🏁 Что дальше?
        </Typography>
        <Typography>
          После освоения базовой структуры попробуй добавить:
        </Typography>
        <List>
          <ListItem disableGutters>
            <ListItemText primary="📌 Сайдбар с меню" />
          </ListItem>
          <ListItem disableGutters>
            <ListItemText primary="📌 useState — для управления состоянием" />
          </ListItem>
          <ListItem disableGutters>
            <ListItemText primary="📌 fetch / axios — для работы с API" />
          </ListItem>
          <ListItem disableGutters>
            <ListItemText primary="📌 useContext / zustand — для управления глобальным состоянием" />
          </ListItem>
        </List>
      </Box>

      <Box
        className="conclusion"
        mt={4}
        p={3}
        bgcolor="#e0f7fa"
        borderRadius={2}
      >
        <Typography>
          React — это не сложно, если двигаться шаг за шагом. Удачи в
          разработке!
        </Typography>
      </Box>
    </Container>
  );
}
