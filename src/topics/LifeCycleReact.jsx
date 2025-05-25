import React from "react";
import {
  Container,
  Typography,
  Box,
  Table,
  TableBody,
  TableContainer,
  TableCell,
  TableRow,
  TableHead,
  Paper,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

export default function ReactLifecycleGuide() {
  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Box textAlign="center" mb={3}>
        <Typography variant="h4" component="h1" fontWeight="bold">
          🔄 Жизненный цикл компонентов React
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          От создания до удаления компонента
        </Typography>
      </Box>

      <Box className="lifecycle-phases" mt={4}>
        <Typography variant="h6" gutterBottom fontWeight="bold">
          Основные этапы жизненного цикла
        </Typography>

        <Box display="flex" gap={2} flexWrap="wrap">
          <Box
            p={2}
            bgcolor="#f9f9f9"
            borderRadius={2}
            boxShadow={1}
            flex={1}
            minWidth="200px"
          >
            <Typography fontWeight="medium">Монтирование</Typography>
            <List dense>
              <ListItem disableGutters>
                <ListItemText primary="🔹 constructor()" />
              </ListItem>
              <ListItem disableGutters>
                <ListItemText primary="🔹 render()" />
              </ListItem>
              <ListItem disableGutters>
                <ListItemText primary="🔹 componentDidMount()" />
              </ListItem>
            </List>
          </Box>

          <Box
            p={2}
            bgcolor="#f9f9f9"
            borderRadius={2}
            boxShadow={1}
            flex={1}
            minWidth="200px"
          >
            <Typography fontWeight="medium">Обновление</Typography>
            <List dense>
              <ListItem disableGutters>
                <ListItemText primary="🔹 shouldComponentUpdate()" />
              </ListItem>
              <ListItem disableGutters>
                <ListItemText primary="🔹 render()" />
              </ListItem>
              <ListItem disableGutters>
                <ListItemText primary="🔹 componentDidUpdate()" />
              </ListItem>
            </List>
          </Box>

          <Box
            p={2}
            bgcolor="#f9f9f9"
            borderRadius={2}
            boxShadow={1}
            flex={1}
            minWidth="200px"
          >
            <Typography fontWeight="medium">Размонтирование</Typography>
            <List dense>
              <ListItem disableGutters>
                <ListItemText primary="🔹 componentWillUnmount()" />
              </ListItem>
            </List>
          </Box>
        </Box>
      </Box>

      <Box className="hooks-section" mt={4}>
        <Typography variant="h6" gutterBottom fontWeight="bold">
          Хуки жизненного цикла в функциональных компонентах
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
useEffect(() => {
  // Аналог componentDidMount + componentDidUpdate
  console.log('Компонент обновлен');

  return () => {
    // Аналог componentWillUnmount
    console.log('Очистка перед удалением');
  };
}, [dependencies]);
          `}</code>
        </Box>
      </Box>

      <Box className="practical-examples" mt={4}>
        <Typography variant="h6" gutterBottom fontWeight="bold">
          📌 Практические примеры
        </Typography>

        <Box mb={3} p={2} bgcolor="#f5f5f5" borderRadius={2}>
          <Typography fontWeight="medium">
            Загрузка данных при монтировании
          </Typography>
          <Box
            component="pre"
            sx={{
              backgroundColor: "#272822",
              color: "#f8f8f2",
              padding: 2,
              borderRadius: 2,
              overflowX: "auto",
              mt: 1,
            }}
          >
            <code>{`
useEffect(() => {
  const fetchData = async () => {
    const response = await fetch('/api/data');
    const data = await response.json();
    setData(data);
  };

  fetchData();
}, []); // Пустой массив зависимостей = только при монтировании
            `}</code>
          </Box>
        </Box>

        <Box mb={3} p={2} bgcolor="#f5f5f5" borderRadius={2}>
          <Typography fontWeight="medium">Очистка подписок</Typography>
          <Box
            component="pre"
            sx={{
              backgroundColor: "#272822",
              color: "#f8f8f2",
              padding: 2,
              borderRadius: 2,
              overflowX: "auto",
              mt: 1,
            }}
          >
            <code>{`
useEffect(() => {
  const handler = () => { /* ... */ };
  window.addEventListener('resize', handler);

  return () => {
    window.removeEventListener('resize', handler);
  };
}, []);
            `}</code>
          </Box>
        </Box>
      </Box>

      <Box className="best-practices" mt={4}>
        <Typography variant="h6" gutterBottom fontWeight="bold">
          🚀 Лучшие практики работы с useEffect
        </Typography>
        <List>
          <ListItem disableGutters>
            <ListItemText primary="🔹 Используйте useEffect для побочных эффектов" />
          </ListItem>
          <ListItem disableGutters>
            <ListItemText primary="🔹 Всегда очищайте таймеры и подписки" />
          </ListItem>
          <ListItem disableGutters>
            <ListItemText primary="🔹 Оптимизируйте ререндеры с помощью зависимостей" />
          </ListItem>
          <ListItem disableGutters>
            <ListItemText primary="🔹 Избегайте устаревших методов (componentWillMount и др.)" />
          </ListItem>
          <ListItem disableGutters>
            <ListItemText primary="🔹 Разделяйте несвязанные эффекты на отдельные useEffect" />
          </ListItem>
        </List>
      </Box>

      <Box className="comparison-table" mt={4}>
        <Typography variant="h6" gutterBottom fontWeight="bold">
          📊 Сравнение с классовыми компонентами
        </Typography>
        <TableContainer component={Paper} sx={{ borderRadius: 2 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  <strong>Классовый компонент</strong>
                </TableCell>
                <TableCell>
                  <strong>Функциональный компонент</strong>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>componentDidMount</TableCell>
                <TableCell>useEffect({"() => {}"}, [])</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>componentDidUpdate</TableCell>
                <TableCell>useEffect({"() => {}"})</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>componentWillUnmount</TableCell>
                <TableCell>return{"() => {}"} в useEffect</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>shouldComponentUpdate</TableCell>
                <TableCell>React.memo или useMemo</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      <Box
        className="conclusion"
        mt={4}
        p={3}
        bgcolor="#e0f7fa"
        borderRadius={2}
      >
        <Typography>
          Подробнее о жизненном цикле в{" "}
          <a
            href="https://react.dev/learn/lifecycle-of-reactive-effects "
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#1976d2", textDecoration: "none" }}
          >
            официальной документации
          </a>
          . Практикуйтесь с разными сценариями использования эффектов!
        </Typography>
      </Box>
    </Container>
  );
}
