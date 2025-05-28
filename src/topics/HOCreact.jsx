import {
  Container,
  Typography,
  Box,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

export default function HOCreact() {
  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Box textAlign="center" mb={3}>
        <Typography variant="h4" component="h1" fontWeight="bold">
          🧩 Что такое HOC в React?
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          Повторное использование логики между компонентами
        </Typography>
      </Box>

      <Box className="description" mt={2}>
        <Typography>
          <strong>HOC</strong> (Higher-Order Component) — это функция, которая
          принимает один компонент и возвращает новый, расширенный
          дополнительной логикой или пропсами.
        </Typography>
        <Typography>
          Это один из способов <strong>повторного использования логики</strong>{" "}
          между компонентами без дублирования кода.
        </Typography>
      </Box>

      <Box className="hoc-example" mt={4}>
        <Typography variant="h6" gutterBottom fontWeight="bold">
          📌 Простой пример HOC:
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
// hoc/withCounter.js
function withCounter(WrappedComponent) {
  return function EnhancedComponent({ count }) {
    return (
      <div>
        {count > 0 && <p>Счётчик: {count}</p>}
        <WrappedComponent />
      </div>
    );
  };
}

export default withCounter;
          `}</code>
        </Box>
      </Box>

      {/* Использование HOC */}
      <Box className="hoc-usage" mt={4}>
        <Typography variant="h6" gutterBottom fontWeight="bold">
          🔄 Как применить HOC:
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
// components/MyButton.jsx
function MyButton() {
  return <button>Нажми меня</button>;
}

const ButtonWithCounter = withCounter(MyButton);

// Использование:
<ButtonWithCounter count={5} />
          `}</code>
        </Box>
      </Box>

      <Box className="when-to-use" mt={4}>
        <Typography variant="h6" gutterBottom fontWeight="bold">
          🧠 Когда использовать HOC?
        </Typography>
        <List>
          <ListItem disableGutters>
            <ListItemText primary="🔹 Добавление общего поведения всем компонентам (например, авторизация)" />
          </ListItem>
          <ListItem disableGutters>
            <ListItemText primary="🔹 Логика рендера (показ спиннера, прогресса, лоадера)" />
          </ListItem>
          <ListItem disableGutters>
            <ListItemText primary="🔹 Добавление пропсов, не связанных с UI" />
          </ListItem>
        </List>
      </Box>

      <Box className="important-notes" mt={4}>
        <Typography variant="h6" gutterBottom fontWeight="bold">
          ⚠️ Важные моменты при использовании HOC:
        </Typography>
        <List>
          <ListItem disableGutters>
            <ListItemText primary="🔸 Не мутируйте оригинальный компонент" />
          </ListItem>
          <ListItem disableGutters>
            <ListItemText primary="🔸 Передавайте все ненужные пропсы дальше через {...props}" />
          </ListItem>
          <ListItem disableGutters>
            <ListItemText primary="🔸 Избегайте чрезмерного использования HOC — они могут усложнить отладку" />
          </ListItem>
        </List>
      </Box>

      <Box className="plus-minus" mt={4}>
        <Typography variant="h6" gutterBottom fontWeight="bold">
          ✅ Плюсы HOC:
        </Typography>
        <List>
          <ListItem disableGutters>
            <ListItemText primary="🔹 Повторное использование логики" />
          </ListItem>
          <ListItem disableGutters>
            <ListItemText primary="🔹 Разделение ответственности" />
          </ListItem>
          <ListItem disableGutters>
            <ListItemText primary="🔹 Удобство тестирования" />
          </ListItem>
        </List>
      </Box>

      <Box className="alternatives" mt={4}>
        <Typography variant="h6" gutterBottom fontWeight="bold">
          🛠 Альтернативы HOC:
        </Typography>
        <List>
          <ListItem disableGutters>
            <ListItemText
              primary={
                <>
                  <strong>Хуки (Hooks)</strong> — например,{" "}
                  <code
                    style={{
                      backgroundColor: "#e0f7fa",
                      padding: "2px 6px",
                      borderRadius: "4px",
                    }}
                  >
                    useAuth()
                  </code>
                  ,{" "}
                  <code
                    style={{
                      backgroundColor: "#e0f7fa",
                      padding: "2px 6px",
                      borderRadius: "4px",
                    }}
                  >
                    useData()
                  </code>
                </>
              }
            />
          </ListItem>
          <ListItem disableGutters>
            <ListItemText
              primary={
                <>
                  <strong>Render Props</strong> — передача данных через
                  пропс-функцию
                </>
              }
            />
          </ListItem>
          <ListItem disableGutters>
            <ListItemText
              primary={
                <>
                  <strong>Custom Components</strong> — оборачивание компонентов
                  в контейнеры
                </>
              }
            />
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
        <Typography variant="h6" gutterBottom fontWeight="bold">
          🏁 Итог:
        </Typography>
        <Typography>
          HOC — мощный паттерн для расширения компонентов. Он особенно полезен,
          если ты хочешь добавить:
        </Typography>
        <List dense>
          <ListItem disableGutters>
            <ListItemText primary="🔹 Логику" />
          </ListItem>
          <ListItem disableGutters>
            <ListItemText primary="🔹 Пропсы" />
          </ListItem>
          <ListItem disableGutters>
            <ListItemText primary="🔹 Рендер-поведение" />
          </ListItem>
        </List>
        <Typography mt={2}>
          Но помни: в новых версиях React чаще используются{" "}
          <strong>хуки</strong>. Они проще и понятнее.
        </Typography>
      </Box>
    </Container>
  );
}
