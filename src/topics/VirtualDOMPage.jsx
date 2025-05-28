import {
  Container,
  Typography,
  Box,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

export default function VirtualDOMPage() {
  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Box textAlign="center" mb={3}>
        <Typography variant="h4" component="h1" fontWeight="bold">
          🧠 Введение в Virtual DOM
        </Typography>
        <Typography variant="subtitle1" color="textSecondary" mt={1}>
          Как React оптимизирует работу с интерфейсом.
        </Typography>
      </Box>

      <Box className="section" mt={3}>
        <Typography>
          <strong>DOM (Document Object Model)</strong> — это дерево, которое
          браузер создаёт на основе HTML. С помощью JavaScript можно изменять
          DOM: добавлять, удалять и обновлять элементы.
        </Typography>

        <Typography>
          Но прямая работа с DOM может быть медленной, особенно если интерфейс
          часто обновляется. Чтобы решить эту проблему, React использует{" "}
          <strong>Virtual DOM</strong> — лёгкую копию реального DOM.
        </Typography>
      </Box>

      <Box className="how-works" mt={4}>
        <Typography variant="h6" gutterBottom fontWeight="bold">
          🔄 Как работает Virtual DOM?
        </Typography>
        <List>
          <ListItem disableGutters>
            <ListItemText primary="1. Когда данные изменяются, React создаёт новое дерево (Virtual DOM)." />
          </ListItem>
          <ListItem disableGutters>
            <ListItemText primary="2. Сравнивает старое и новое деревья." />
          </ListItem>
          <ListItem disableGutters>
            <ListItemText primary="3. Обновляет только те части реального DOM, которые действительно изменились." />
          </ListItem>
        </List>
      </Box>

      <Box
        className="code-example"
        mt={4}
        bgcolor="#f4f4f4"
        p={2}
        borderRadius={2}
      >
        <Typography variant="h6" gutterBottom fontWeight="medium">
          🔍 Пример:
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
          <code>{`// Представим список
<ul>
  <li>Элемент 1</li>
  <li>Элемент 2</li>
  <li>Элемент 3</li>
</ul>

// После изменения
<ul>
  <li>Элемент 1</li>
  <li>Элемент 2 (обновлён)</li>
  <li>Элемент 3</li>
</ul>`}</code>
        </Box>
        <Typography mt={2}>
          React сравнивает оба состояния и обновляет только второй элемент.
          Остальная часть остаётся неизменной.
        </Typography>
      </Box>

      <Box className="advantages" mt={4}>
        <Typography variant="h6" gutterBottom fontWeight="bold">
          ✨ Преимущества Virtual DOM
        </Typography>
        <List>
          <ListItem disableGutters>
            <ListItemText primary="🔁 Быстрый рендеринг UI" />
          </ListItem>
          <ListItem disableGutters>
            <ListItemText primary="🧩 Удобство разработки" />
          </ListItem>
          <ListItem disableGutters>
            <ListItemText primary="🚀 Подходит для SPA-приложений" />
          </ListItem>
        </List>
      </Box>

      <Box className="conclusion" mt={4}>
        <Typography variant="h6" gutterBottom fontWeight="bold">
          🎯 Итог
        </Typography>
        <Typography>
          <strong>Virtual DOM</strong> — это механизм, который делает React
          таким популярным. Он эффективно управляет обновлениями, чтобы твоё
          приложение работало быстро и плавно.
        </Typography>

        <Box bgcolor="action.hover" p={2} borderRadius={2}>
          <Typography>
            Это как найти отличия между двумя картинками в игре "найди отличия".
            React делает то же самое: находит минимальные отличия и применяет
            их.
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}
