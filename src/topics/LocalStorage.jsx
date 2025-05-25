import React from "react";
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
} from "@mui/material";

export default function StoragesTheory() {
  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Box textAlign="center" mb={3}>
        <Typography variant="h4" component="h1" fontWeight="bold">
          💾 localStorage и sessionStorage
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          Хранение данных на стороне клиента
        </Typography>
      </Box>

      <Box className="description" mt={2}>
        <Typography paragraph>
          В браузере есть встроенные механизмы хранения данных на клиенте:{" "}
          <strong>localStorage</strong> и <strong>sessionStorage</strong>. Они
          позволяют сохранять данные без использования сервера.
        </Typography>
      </Box>

      <Box className="api-description" mt={3}>
        <Typography variant="h6" gutterBottom fontWeight="bold">
          📌 Что такое Web Storage API?
        </Typography>
        <List>
          <ListItem disableGutters>
            <ListItemText
              primary={
                <>
                  <code
                    style={{
                      backgroundColor: "#e0f7fa",
                      padding: "2px 6px",
                      borderRadius: "4px",
                    }}
                  >
                    localStorage
                  </code>{" "}
                  — хранит данные <strong>без ограничения по времени</strong>
                </>
              }
            />
          </ListItem>
          <ListItem disableGutters>
            <ListItemText
              primary={
                <>
                  <code
                    style={{
                      backgroundColor: "#e0f7fa",
                      padding: "2px 6px",
                      borderRadius: "4px",
                    }}
                  >
                    sessionStorage
                  </code>{" "}
                  — хранит данные только <strong>в рамках одной вкладки</strong>
                </>
              }
            />
          </ListItem>
        </List>
      </Box>

      <Box className="differences-table" mt={4}>
        <Typography variant="h6" gutterBottom fontWeight="bold">
          🔄 Отличия между localStorage и sessionStorage
        </Typography>
        <TableContainer
          component="div"
          sx={{ border: "1px solid #ddd", borderRadius: 1, boxShadow: 1 }}
        >
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  <strong>Свойство</strong>
                </TableCell>
                <TableCell>
                  <strong>localStorage</strong>
                </TableCell>
                <TableCell>
                  <strong>sessionStorage</strong>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>Жизненный цикл</TableCell>
                <TableCell>Данные остаются после перезагрузки</TableCell>
                <TableCell>Данные удаляются при закрытии вкладки</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Область действия</TableCell>
                <TableCell>Для всех вкладок одного домена</TableCell>
                <TableCell>Только для текущей вкладки</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Максимальный размер</TableCell>
                <TableCell>~5-10 МБ</TableCell>
                <TableCell>~5-10 МБ</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      <Box className="methods" mt={4}>
        <Typography variant="h6" gutterBottom fontWeight="bold">
          🧩 Основные методы:
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
// Сохранить данные
localStorage.setItem('ключ', 'значение');
sessionStorage.setItem('ключ', 'значение');

// Получить данные
const value = localStorage.getItem('ключ');
const value = sessionStorage.getItem('ключ');

// Удалить данные
localStorage.removeItem('ключ');
sessionStorage.removeItem('ключ');

// Очистить всё хранилище
localStorage.clear();
sessionStorage.clear();
          `}</code>
        </Box>
      </Box>

      <Box className="examples" mt={4}>
        <Typography variant="h6" gutterBottom fontWeight="bold">
          🔍 Примеры использования:
        </Typography>
        <List>
          <ListItem disableGutters>
            <ListItemText primary="🔹 localStorage: сохранение темы сайта, профиля пользователя." />
          </ListItem>
          <ListItem disableGutters>
            <ListItemText primary="🔹 sessionStorage: временные данные формы, состояние до отправки." />
          </ListItem>
        </List>
      </Box>

      <Box className="important-notes" mt={4}>
        <Typography variant="h6" gutterBottom fontWeight="bold">
          ⚠️ Важно помнить:
        </Typography>
        <List>
          <ListItem disableGutters>
            <ListItemText primary="🔸 Хранят только строки. Для объектов используйте JSON.stringify() и JSON.parse()" />
          </ListItem>
          <ListItem disableGutters>
            <ListItemText primary="🔸 Не шифруется. Не храните чувствительные данные." />
          </ListItem>
          <ListItem disableGutters>
            <ListItemText primary="🔸 Доступны только по одному домену." />
          </ListItem>
        </List>
      </Box>

      <Box className="store-objects" mt={4}>
        <Typography variant="h6" gutterBottom fontWeight="bold">
          📦 Как хранить объекты и массивы?
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
// Сохраняем объект
const user = { name: "Иван", age: 25 };
localStorage.setItem("user", JSON.stringify(user));

// Читаем объект
const savedUser = JSON.parse(localStorage.getItem("user"));
          `}</code>
        </Box>
      </Box>

      <Box className="when-to-use" mt={4}>
        <Typography variant="h6" gutterBottom fontWeight="bold">
          🎯 Когда что использовать?
        </Typography>
        <List>
          <ListItem disableGutters>
            <ListItemText primary="🔹 localStorage — если нужно хранить данные долго (например, имя пользователя, предпочтения)" />
          </ListItem>
          <ListItem disableGutters>
            <ListItemText primary="🔹 sessionStorage — если данные нужны только на время вкладки (например, временный фильтр или форма)" />
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
          <code>localStorage</code> и <code>sessionStorage</code> — удобные
          инструменты для хранения данных на стороне клиента. Они просты в
          использовании и не требуют подключения к базе данных.
        </Typography>
      </Box>
    </Container>
  );
}
