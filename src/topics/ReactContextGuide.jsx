import React from "react";
import {
  Container,
  Typography,
  Box,
  List,
  ListItem,
  ListItemText,
  Table,
  TableBody,
  TableRow,
  TableCell,
  TableHead,
  Paper,
  TableContainer,
} from "@mui/material";

export const ThemeContext = React.createContext({
  theme: "light",
  toggleTheme: () => {},
});

export default function ReactContextGuide() {
  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Box textAlign="center" mb={3}>
        <Typography variant="h4" component="h1" fontWeight="bold">
          🌐 React Context API
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          Управление глобальным состоянием приложения
        </Typography>
      </Box>

      <Box className="section" mt={4}>
        <Typography variant="h6" gutterBottom fontWeight="bold">
          Что такое Context?
        </Typography>
        <Typography paragraph>
          <strong>Context</strong> — это механизм для передачи данных через
          дерево компонентов без явной передачи пропсов. Он решает проблему{" "}
          <strong>пропс-дриллинга</strong> и позволяет легко делиться данными
          между компонентами.
        </Typography>
      </Box>

      <Box className="create-context" mt={4}>
        <Typography variant="h6" gutterBottom fontWeight="bold">
          Создание контекста
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
// ThemeContext.js
import { createContext } from 'react';

export const ThemeContext = createContext({
  theme: 'light',
  toggleTheme: () => {},
});
          `}</code>
        </Box>
      </Box>

      <Box className="provider-consumer" mt={4}>
        <Typography variant="h6" gutterBottom fontWeight="bold">
          Поставщик и потребитель
        </Typography>

        <Box mb={3}>
          <Typography fontWeight="medium">Поставщик (Provider):</Typography>
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
function App() {
  const [theme, setTheme] = useState('light');
  
  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const value = useMemo(() => ({ theme, toggleTheme }), [theme]);

  return (
    <ThemeContext.Provider value={value}>
      <Header />
      <MainContent />
    </ThemeContext.Provider>
  );
}
          `}</code>
          </Box>
        </Box>

        <Box mb={3}>
          <Typography fontWeight="medium">Потребитель (useContext):</Typography>
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
function ThemeButton() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  
  return (
    <button onClick={toggleTheme} className={\`theme-btn \${theme}\`}>
      Текущая тема: {theme}
    </button>
  );
}
          `}</code>
          </Box>
        </Box>
      </Box>

      <Box className="optimization-section" mt={4}>
        <Typography variant="h6" gutterBottom fontWeight="bold">
          🛠 Оптимизация с помощью useMemo
        </Typography>
        <Typography paragraph>
          Чтобы избежать лишних ререндеров, оборачивайте объекты в{" "}
          <code>useMemo()</code>.
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
// Чтобы избежать лишних ререндеров
<ThemeContext.Provider 
  value={useMemo(() => ({ theme, toggleTheme }), [theme])}
>
          `}</code>
        </Box>
      </Box>

      <Box className="use-cases" mt={4}>
        <Typography variant="h6" gutterBottom fontWeight="bold">
          📋 Типичные сценарии использования:
        </Typography>
        <List>
          <ListItem disableGutters>
            <ListItemText primary="🔹 Темы оформления (light/dark)" />
          </ListItem>
          <ListItem disableGutters>
            <ListItemText primary="🔹 Данные аутентификации (user, token)" />
          </ListItem>
          <ListItem disableGutters>
            <ListItemText primary="🔹 Локализация (языковые настройки)" />
          </ListItem>
          <ListItem disableGutters>
            <ListItemText primary="🔹 Глобальные настройки (например, размер шрифта)" />
          </ListItem>
          <ListItem disableGutters>
            <ListItemText primary="🔹 Кеширование данных (например, userPreferences)" />
          </ListItem>
        </List>
      </Box>

      <Box className="custom-hook" mt={4}>
        <Typography variant="h6" gutterBottom fontWeight="bold">
          🔧 Кастомный хук для контекста
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
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme должен использоваться внутри ThemeProvider');
  }
  return context;
};
          `}</code>
        </Box>
      </Box>

      <Box className="comparison-table" mt={4}>
        <Typography variant="h6" gutterBottom fontWeight="bold">
          📊 Context API vs Redux
        </Typography>
        <TableContainer
          component={Paper}
          sx={{ boxShadow: 1, borderRadius: 2 }}
        >
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  <strong>Context API</strong>
                </TableCell>
                <TableCell>
                  <strong>Redux</strong>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>Встроен в React</TableCell>
                <TableCell>Сторонняя библиотека</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Простая настройка</TableCell>
                <TableCell>Сложная конфигурация</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Лучше для статичных данных</TableCell>
                <TableCell>Оптимизирован для частых изменений</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      <Box className="best-practices" mt={4}>
        <Typography variant="h6" gutterBottom fontWeight="bold">
          🚀 Лучшие практики работы с Context
        </Typography>
        <List>
          <ListItem disableGutters>
            <ListItemText primary="🔹 Разделяйте контексты по функционалу (не один на всё приложение)" />
          </ListItem>
          <ListItem disableGutters>
            <ListItemText primary="🔹 Используйте кастомные хуки для доступа к контексту" />
          </ListItem>
          <ListItem disableGutters>
            <ListItemText primary="🔹 Мемоизируйте значение провайдера через useMemo()" />
          </ListItem>
          <ListItem disableGutters>
            <ListItemText primary="🔹 Избегайте вложенных провайдеров" />
          </ListItem>
          <ListItem disableGutters>
            <ListItemText primary="🔹 Не используйте для высокочастотных обновлений" />
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
          Изучите продвинутые техники работы с Context в{" "}
          <a
            href="https://react.dev/reference/react/useContext "
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#1976d2", textDecoration: "none" }}
          >
            официальной документации
          </a>
          . Практикуйтесь с разными типами глобальных данных!
        </Typography>
      </Box>
    </Container>
  );
}
