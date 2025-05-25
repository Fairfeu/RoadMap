import React from "react";
import {
  Container,
  Typography,
  Box,
  List,
  ListItem,
  ListItemText,
  TextField,
  Button,
} from "@mui/material";

export default function StateExplanation() {
  const [inputValue, setInputValue] = React.useState("");
  const [showText, setShowText] = React.useState(true);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const toggleText = () => {
    setShowText(!showText);
  };

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Box textAlign="center" mb={3}>
        <Typography variant="h4" component="h1" fontWeight="bold">
          🔄 Что такое State в React?
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          Управление данными и обновлениями в интерфейсе
        </Typography>
      </Box>

      <Box className="state-description" mt={3}>
        <Typography>
          В React данные, которые могут меняться, хранятся в{" "}
          <strong>состоянии</strong> (state). С помощью состояния ты можешь
          динамически обновлять интерфейс приложения.
        </Typography>
      </Box>

      <Box className="use-state-section" mt={4}>
        <Typography variant="h6" gutterBottom fontWeight="bold">
          📌 useState — основа состояния
        </Typography>
        <Typography>
          Хук <code>useState()</code> позволяет тебе добавить состояние в
          функциональный компонент.
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
// Пример:
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0); // начальное значение count = 0

  return (
    <div>
      <p>Счёт: {count}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  );
}
          `}</code>
        </Box>
      </Box>

      <Box className="user-input-example" mt={4}>
        <Typography variant="h6" gutterBottom fontWeight="bold">
          🧪 Пример с пользовательским вводом
        </Typography>
        <Typography>
          Ты можешь отслеживать ввод пользователя или другие изменения.
        </Typography>

        <Box p={2} bgcolor="#f9f9f9" borderRadius={2} boxShadow={1}>
          <Typography>
            <strong>Ты написал:</strong> {inputValue || "ничего"}
          </Typography>
          <TextField
            fullWidth
            label="Введите что-нибудь"
            value={inputValue}
            onChange={handleInputChange}
            margin="normal"
            variant="outlined"
          />
        </Box>
      </Box>

      <Box className="summary" mt={4}>
        <Typography variant="h6" gutterBottom fontWeight="bold">
          💡 Итог:
        </Typography>
        <List>
          <ListItem disableGutters>
            <ListItemText primary="🔹 useState() — это способ хранить и изменять данные в компоненте" />
          </ListItem>
          <ListItem disableGutters>
            <ListItemText primary="🔹 React автоматически перерисует часть интерфейса, если состояние изменилось" />
          </ListItem>
          <ListItem disableGutters>
            <ListItemText primary="🔹 Используй его для форм, счетчиков, фильтрации, показа/скрытия элементов и многого другого" />
          </ListItem>
        </List>
      </Box>

      <Box className="toggle-example" mt={4}>
        <Typography>
          <strong>
            {showText ? "Текст сейчас отображается." : "Текст скрыт."}
          </strong>
        </Typography>
        <Button
          button="true"
          variant="contained"
          color="primary"
          onClick={toggleText}
        >
          {showText ? "Скрыть текст" : "Показать текст"}
        </Button>
      </Box>

      <Box
        className="conclusion"
        mt={4}
        p={3}
        bgcolor="#e0f7fa"
        borderRadius={2}
      >
        <Typography>
          Теперь ты знаешь, как управлять состоянием в React. Это важная база
          для создания динамических приложений!
        </Typography>
      </Box>
    </Container>
  );
}
