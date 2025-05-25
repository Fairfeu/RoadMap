import React from "react";
import {
  Container,
  Typography,
  Box,
  Grid,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

export default function Components() {
  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Box textAlign="center" mb={3}>
        <Typography variant="h4" component="h1" fontWeight="bold">
          🧱 React Components: Основы создания
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          Строительные блоки React-приложений
        </Typography>
      </Box>

      <Box className="types-section" mt={4}>
        <Typography variant="h6" gutterBottom fontWeight="bold">
          🔍 Типы компонентов
        </Typography>

        <Grid container spacing={2} mt={1}>
          <Grid size={{ xs: 12, sm: 6 }}>
            <Box p={2} bgcolor="#f9f9f9" borderRadius={2} boxShadow={1}>
              <Typography variant="h6" gutterBottom>
                Функциональные компоненты
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
function Welcome(props) {
  return <h1>Привет, {props.name}</h1>;
}
                `}</code>
              </Box>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, sm: 6 }}>
            <Box p={2} bgcolor="#f9f9f9" borderRadius={2} boxShadow={1}>
              <Typography variant="h6" gutterBottom>
                Классовые компоненты
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
class Welcome extends React.Component {
  render() {
    return <h1>Привет, {this.props.name}</h1>;
  }
}
                `}</code>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Box className="component-creation" mt={4}>
        <Typography variant="h6" gutterBottom fontWeight="bold">
          💡 Создание компонента
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
// Button.jsx
import React from 'react';

const Button = ({ onClick, children }) => {
  return (
    <button 
      className="custom-btn"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
          `}</code>
        </Box>
      </Box>

      <Box className="component-usage" mt={4}>
        <Typography variant="h6" gutterBottom fontWeight="bold">
          📦 Использование компонентов
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
// App.jsx
import Button from './Button';

function App() {
  const handleClick = () => {
    console.log('Кнопка нажата!');
  };

  return (
    <div>
      <Button onClick={handleClick}>
        Нажми меня
      </Button>
    </div>
  );
}
          `}</code>
        </Box>
      </Box>

      <Box className="best-practices" mt={4}>
        <Typography variant="h6" gutterBottom fontWeight="bold">
          🏆 Лучшие практики при работе с компонентами
        </Typography>
        <List>
          <ListItem disableGutters>
            <ListItemText primary="🔹 Разделяйте компоненты на Presentational и Container" />
          </ListItem>
          <ListItem disableGutters>
            <ListItemText primary="🔹 Используйте PropTypes для валидации пропсов" />
          </ListItem>
          <ListItem disableGutters>
            <ListItemText primary="🔹 Делайте компоненты маленькими и переиспользуемыми" />
          </ListItem>
          <ListItem disableGutters>
            <ListItemText primary="🔹 Избегайте побочных эффектов в рендеринге" />
          </ListItem>
        </List>
      </Box>

      <Box className="composition" mt={4}>
        <Typography variant="h6" gutterBottom fontWeight="bold">
          🔄 Композиция компонентов
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
function Card({ title, content, children }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{content}</p>
      <div className="actions">
        {children}
      </div>
    </div>
  );
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
        <Typography variant="h6" gutterBottom fontWeight="medium">
          🎯 Итог:
        </Typography>
        <Typography paragraph>
          Компоненты — основа любого React-приложения. Они позволяют создавать
          модульный, чистый и легко поддерживаемый интерфейс.
        </Typography>
        <Typography>
          Чем больше вы будете делить интерфейс на мелкие компоненты — тем легче
          будет масштабировать проект.
        </Typography>
      </Box>
    </Container>
  );
}
