import {
  Container,
  Typography,
  Box,
  List,
  ListItem,
  ListItemText,
  Table,
  TableBody,
  TableCell,
  TableRow,
  TableHead,
  TableContainer,
  Paper,
} from "@mui/material";

export default function ReactProps() {
  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Box textAlign="center" mb={3}>
        <Typography variant="h4" component="h1" fontWeight="bold">
          📦 Props в React: Передача данных между компонентами
        </Typography>
        <Typography variant="subtitle1" color="textSecondary" mt={1}>
          Работа со свойствами компонентов
        </Typography>
      </Box>

      <Box className="section" mt={4}>
        <Typography variant="h6" gutterBottom fontWeight="bold">
          Что такое Props?
        </Typography>
        <Typography paragraph>
          <strong>Props (Properties)</strong> — входные параметры компонента,
          которые передаются от родителя к дочернему. Они <em>иммутабельны</em>{" "}
          (нельзя изменять внутри компонента).
        </Typography>
      </Box>

      <Box className="section" mt={4}>
        <Typography variant="h6" gutterBottom fontWeight="bold">
          Передача и использование Props
        </Typography>

        <Box display="flex" flexDirection="column" gap={2} mb={2}>
          <Box bgcolor="#f5f5f5" p={2} borderRadius={2}>
            <Typography fontWeight="medium">Родительский компонент:</Typography>
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
<UserProfile 
  name="Анна" 
  age={25}
  isVerified={true}
/>
              `}</code>
            </Box>
          </Box>

          <Box bgcolor="#f5f5f5" p={2} borderRadius={2}>
            <Typography fontWeight="medium">Дочерний компонент:</Typography>
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
function UserProfile({ name, age, isVerified }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Возраст: {age}</p>
      {isVerified && <span>✓ Подтвержден</span>}
    </div>
  );
}
              `}</code>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box className="children-prop" mt={4}>
        <Typography variant="h6" gutterBottom fontWeight="bold">
          Специальный prop: <code>children</code>
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
function Card({ children }) {
  return <div className="card">{children}</div>;
}

// Использование:
<Card>
  <h3>Заголовок</h3>
  <p>Содержание карточки</p>
</Card>
          `}</code>
        </Box>
      </Box>

      <Box className="prop-types" mt={4}>
        <Typography variant="h6" gutterBottom fontWeight="bold">
          Валидация Props с помощью PropTypes
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
import PropTypes from 'prop-types';

UserProfile.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  isVerified: PropTypes.bool
};

UserProfile.defaultProps = {
  isVerified: false
};
          `}</code>
        </Box>
      </Box>

      <Box className="best-practices" mt={4}>
        <Typography variant="h6" gutterBottom fontWeight="bold">
          🚀 Лучшие практики работы с Props
        </Typography>
        <List>
          <ListItem disableGutters>
            <ListItemText primary="🔹 Используйте деструктуризацию props" />
          </ListItem>
          <ListItem disableGutters>
            <ListItemText primary="🔹 Задавайте значения по умолчанию через defaultProps или деструктуризацию с дефолтными значениями" />
          </ListItem>
          <ListItem disableGutters>
            <ListItemText primary="🔹 Всегда валидируйте входящие props" />
          </ListItem>
          <ListItem disableGutters>
            <ListItemText primary="🔹 Избегайте передачи избыточного количества props" />
          </ListItem>
          <ListItem disableGutters>
            <ListItemText primary="🔹 Для сложных данных используйте контекст или локальное состояние" />
          </ListItem>
        </List>
      </Box>

      <Box className="props-vs-state" mt={4}>
        <Typography variant="h6" gutterBottom fontWeight="bold">
          Props vs State
        </Typography>
        <TableContainer component={Paper} sx={{ borderRadius: 2 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  <strong>Props</strong>
                </TableCell>
                <TableCell>
                  <strong>State</strong>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>Неизменяемые</TableCell>
                <TableCell>Изменяемые через setState</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Передаются сверху вниз</TableCell>
                <TableCell>Локальное состояние компонента</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      <Box
        className="conclusion"
        mt={4}
        p={2}
        bgcolor="#e0f7fa"
        borderRadius={2}
      >
        <Typography>
          Углубитесь в тему props через{" "}
          <a
            href="https://react.dev/learn/passing-props-to-a-component "
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#1976d2", textDecoration: "none" }}
          >
            официальную документацию
          </a>
          . Практикуйтесь в передаче данных между компонентами!
        </Typography>
      </Box>
    </Container>
  );
}
