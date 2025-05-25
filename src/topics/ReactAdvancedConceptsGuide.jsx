import React from "react";
import {
  Container,
  Typography,
  Box,
  List,
  ListItem,
  ListItemText,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";

export default function ReactAdvancedConceptsGuide() {
  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Box textAlign="center" mb={3}>
        <Typography variant="h4" component="h1" fontWeight="bold">
          ⚙️ Refs, Fragments, Keys и React.memo
        </Typography>
        <Typography variant="subtitle1" color="textSecondary" mt={1}>
          Продвинутые концепции React
        </Typography>
      </Box>

      <Box className="refs-section" mt={4}>
        <Typography variant="h6" gutterBottom fontWeight="bold">
          🔍 Refs — ссылки на DOM или значения между рендерами
        </Typography>
        <Typography paragraph>
          Используйте <code>useRef</code>, чтобы получить доступ к DOM-элементам
          или сохранить мутабельные данные.
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
function TextInput() {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <>
      <input ref={inputRef} type="text" />
      <button onClick={focusInput}>Фокус</button>
    </>
  );
}
          `}</code>
        </Box>

        <Box mt={2}>
          <Typography variant="h6" gutterBottom fontWeight="medium">
            Когда использовать:
          </Typography>
          <List dense>
            <ListItem disableGutters>
              <ListItemText primary="🔹 Управление фокусом, анимациями" />
            </ListItem>
            <ListItem disableGutters>
              <ListItemText primary="🔹 Интеграция с DOM-библиотеками (например, библиотеки графиков)" />
            </ListItem>
            <ListItem disableGutters>
              <ListItemText primary="🔹 Сохранение значений между рендерами без вызова useEffect" />
            </ListItem>
          </List>
        </Box>
      </Box>

      <Box className="fragments-section" mt={4}>
        <Typography variant="h6" gutterBottom fontWeight="bold">
          🧩 Fragments — группировка элементов без лишних обёрток
        </Typography>
        <Typography paragraph>
          React.Fragment позволяет группировать элементы без создания лишнего
          узла в DOM.
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
function Table() {
  return (
    <table>
      <tbody>
        <tr>
          <React.Fragment>
            <td>Ячейка 1</td>
            <td>Ячейка 2</td>
          </React.Fragment>
        </tr>
        {/* Короткий синтаксис <>...</> */}
        <tr>
          <>
            <td>Ячейка A</td>
            <td>Ячейка B</td>
          </>
        </tr>
      </tbody>
    </table>
  );
}
          `}</code>
        </Box>
      </Box>

      <Box className="keys-section" mt={4}>
        <Typography variant="h6" gutterBottom fontWeight="bold">
          🔑 Keys — уникальные идентификаторы для элементов списка
        </Typography>
        <Typography paragraph>
          Используются React для эффективного сравнения и обновления элементов в
          списке.
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
function UserList({ users }) {
  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>
          {user.name} - {user.email}
        </li>
      ))}
    </ul>
  );
}
          `}</code>
        </Box>

        <Box mt={2}>
          <Typography variant="h6" gutterBottom fontWeight="medium">
            ❗ Важно помнить:
          </Typography>
          <List dense>
            <ListItem disableGutters>
              <ListItemText primary="🔸 Используйте стабильные уникальные значения как ключи" />
            </ListItem>
            <ListItem disableGutters>
              <ListItemText primary="🔸 Избегайте индексов массива для изменяемых списков" />
            </ListItem>
            <ListItem disableGutters>
              <ListItemText primary="🔸 Ключи должны быть уникальными среди соседей" />
            </ListItem>
          </List>
        </Box>
      </Box>

      <Box className="memo-section" mt={4}>
        <Typography variant="h6" gutterBottom fontWeight="bold">
          📦 React.memo — оптимизация рендеринга
        </Typography>
        <Typography paragraph>
          Позволяет избежать лишних ререндеров функциональных компонентов.
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
const MemoizedComponent = React.memo(
  function MyComponent({ prop }) {
    // Рендер компонента
  },
  (prevProps, nextProps) => {
    // Кастомная проверка пропсов
    return prevProps.prop === nextProps.prop;
  }
);
          `}</code>
        </Box>

        <Box mt={2}>
          <Typography variant="h6" gutterBottom fontWeight="medium">
            Когда применять:
          </Typography>
          <List dense>
            <ListItem disableGutters>
              <ListItemText primary="🔹 Компоненты с тяжелым рендерингом" />
            </ListItem>
            <ListItem disableGutters>
              <ListItemText primary="🔹 Частые ререндеры с одинаковыми пропсами" />
            </ListItem>
            <ListItem disableGutters>
              <ListItemText primary="🔹 Статические или редко меняющиеся компоненты" />
            </ListItem>
          </List>
        </Box>
      </Box>

      <Box className="common-mistakes" mt={4}>
        <Typography variant="h6" gutterBottom fontWeight="bold">
          🚫 Типичные ошибки
        </Typography>

        <TableContainer
          component="div"
          sx={{ border: "1px solid #e0e0e0", borderRadius: 2, boxShadow: 1 }}
        >
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  <strong>Ошибка</strong>
                </TableCell>
                <TableCell>
                  <strong>Решение</strong>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>Изменение ref.current напрямую</TableCell>
                <TableCell>Используйте только для чтения</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Пропуск key в списках</TableCell>
                <TableCell>Всегда добавляйте уникальные ключи</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Чрезмерное использование React.memo</TableCell>
                <TableCell>Применяйте только там, где это необходимо</TableCell>
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
          Углубляйтесь в оптимизацию компонентов с{" "}
          <a
            href="https://react.dev/reference/react "
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#1976d2", textDecoration: "none" }}
          >
            официальной документацией
          </a>
          . Практикуйте эти концепции в реальных проектах!
        </Typography>
      </Box>
    </Container>
  );
}
