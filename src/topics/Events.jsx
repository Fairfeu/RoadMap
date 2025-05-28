import {
  Container,
  Typography,
  Box,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  List,
  ListItem,
  ListItemText,
  Paper,
} from "@mui/material";

export default function ReactEventsGuide() {
  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Box textAlign="center" mb={3}>
        <Typography variant="h4" component="h1" fontWeight="bold">
          🎯 Обработка событий в React
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          Работа с синтетическими событиями
        </Typography>
      </Box>

      <Box className="section" mt={4}>
        <Typography variant="h6" gutterBottom fontWeight="bold">
          Основы обработки событий
        </Typography>
        <Typography>В React события пишутся в camelCase:</Typography>

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
// onClick — клик по кнопке
<button onClick={handleClick}>
  Нажми меня
</button>

// onChange + onFocus
<input 
  onChange={handleInputChange} 
  onFocus={handleFocus}
/>
          `}</code>
        </Box>
      </Box>

      <Box className="parameter-section" mt={4}>
        <Typography variant="h6" gutterBottom fontWeight="bold">
          Передача параметров в обработчики
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
// Через стрелочную функцию
<button onClick={(e) => handleDelete(id, e)}>
  Удалить
</button>

// Через bind
<button onClick={handleEdit.bind(null, item)}>
  Редактировать
</button>
          `}</code>
        </Box>
      </Box>

      <Box className="synthetic-event" mt={4}>
        <Typography variant="h6" gutterBottom fontWeight="bold">
          Синтетические события
        </Typography>
        <Typography>
          React оборачивает нативные события браузера в{" "}
          <code>SyntheticEvent</code> для кросс-браузерной совместимости.
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
function handleSubmit(e) {
  e.preventDefault();
  console.log(e.target.elements.username.value);
}
          `}</code>
        </Box>
      </Box>

      <Box className="events-table" mt={4}>
        <Typography variant="h6" gutterBottom fontWeight="bold">
          📋 Распространённые события в React
        </Typography>

        <TableContainer component={Paper} sx={{ borderRadius: 2 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  <strong>Событие</strong>
                </TableCell>
                <TableCell>
                  <strong>Описание</strong>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>onClick</TableCell>
                <TableCell>Клик мышью</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>onChange</TableCell>
                <TableCell>Изменение значения формы</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>onKeyDown</TableCell>
                <TableCell>Нажатие клавиши</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>onSubmit</TableCell>
                <TableCell>Отправка формы</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>onMouseOver</TableCell>
                <TableCell>Наведение курсора</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      <Box className="optimization" mt={4}>
        <Typography variant="h6" gutterBottom fontWeight="bold">
          ⚙️ Оптимизация обработчиков
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
// Использование useCallback для мемоизации
const handleClick = useCallback((e) => {
  // Логика обработки
}, [dependencies]);
          `}</code>
        </Box>
      </Box>

      <Box className="best-practices" mt={4}>
        <Typography variant="h6" gutterBottom fontWeight="bold">
          🏆 Лучшие практики
        </Typography>

        <List>
          <ListItem disableGutters>
            <ListItemText primary="🔹 Избегайте inline-функций в рендере для частых ререндеров" />
          </ListItem>
          <ListItem disableGutters>
            <ListItemText primary="🔹 Используйте делегирование событий для списков" />
          </ListItem>
          <ListItem disableGutters>
            <ListItemText primary="🔹 Очищайте таймеры и подписки в useEffect" />
          </ListItem>
          <ListItem disableGutters>
            <ListItemText primary="🔹 Именуйте обработчики с префиксом handle (handleClick, handleChange)" />
          </ListItem>
          <ListItem disableGutters>
            <ListItemText primary="🔹 Для форм используйте управляемые компоненты" />
          </ListItem>
        </List>
      </Box>

      <Box className="advanced-techniques" mt={4}>
        <Typography variant="h6" gutterBottom fontWeight="bold">
          🔍 Продвинутые техники
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
// Кастомный хук для обработки событий
function useEventListener(eventName, handler, element = window) {
  useEffect(() => {
    element.addEventListener(eventName, handler);
    return () => element.removeEventListener(eventName, handler);
  }, [eventName, handler, element]);
}
          `}</code>
        </Box>
      </Box>

      <Box
        className="conclusion"
        mt={4}
        p={3}
        bgcolor="#e0f7fa"
        borderRadius={2}
      >
        <Typography>
          События — важная часть любого динамического приложения. Практикуйтесь!
        </Typography>
      </Box>
    </Container>
  );
}
