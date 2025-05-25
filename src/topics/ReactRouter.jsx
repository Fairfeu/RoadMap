import React from "react";
import {
  Container,
  Typography,
  Box,
  List,
  ListItem,
  ListItemText,
  Paper,
} from "@mui/material";

export default function ReactRouter() {
  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Box textAlign="center" mb={3}>
        <Typography variant="h4" component="h1" fontWeight="bold">
          🔁 React Router v6 — краткая теория
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          Навигация между страницами в одностраничном приложении
        </Typography>
      </Box>

      <Box className="core-elements" mt={4}>
        <Typography variant="h6" gutterBottom fontWeight="bold">
          Основные элементы:
        </Typography>
        <List>
          <ListItem disableGutters>
            <ListItemText
              primary={
                <code
                  style={{
                    backgroundColor: "#e0f7fa",
                    padding: "2px 6px",
                    borderRadius: "4px",
                  }}
                >
                  {"<BrowserRouter />"}
                </code>
              }
              secondary="Обёртка вокруг всего приложения, использует history API"
            />
          </ListItem>
          <ListItem disableGutters>
            <ListItemText
              primary={
                <code
                  style={{
                    backgroundColor: "#e0f7fa",
                    padding: "2px 6px",
                    borderRadius: "4px",
                  }}
                >
                  {"<Routes />"}
                </code>
              }
              secondary="Определяет, какие страницы показывать по маршрутам"
            />
          </ListItem>
          <ListItem disableGutters>
            <ListItemText
              primary={
                <code
                  style={{
                    backgroundColor: "#e0f7fa",
                    padding: "2px 6px",
                    borderRadius: "4px",
                  }}
                >
                  {"<Route />"}
                </code>
              }
              secondary="Один маршрут с path и element"
            />
          </ListItem>
          <ListItem disableGutters>
            <ListItemText
              primary={
                <code
                  style={{
                    backgroundColor: "#e0f7fa",
                    padding: "2px 6px",
                    borderRadius: "4px",
                  }}
                >
                  {"<Link to='/...' />"}
                </code>
              }
              secondary="Навигация без перезагрузки страницы"
            />
          </ListItem>
          <ListItem disableGutters>
            <ListItemText
              primary={
                <code
                  style={{
                    backgroundColor: "#e0f7fa",
                    padding: "2px 6px",
                    borderRadius: "4px",
                  }}
                >
                  {"<Outlet />"}
                </code>
              }
              secondary="Отображает дочерние маршруты внутри родительского компонента"
            />
          </ListItem>
          <ListItem disableGutters>
            <ListItemText
              primary={
                <code
                  style={{
                    backgroundColor: "#e0f7fa",
                    padding: "2px 6px",
                    borderRadius: "4px",
                  }}
                >
                  {"<Navigate />"}
                </code>
              }
              secondary="Перенаправление на другой маршрут"
            />
          </ListItem>
        </List>
      </Box>

      <Box className="route-example" mt={4}>
        <Typography variant="h6" gutterBottom fontWeight="bold">
          Пример маршрутов:
        </Typography>
        <Paper
          elevation={0}
          sx={{
            p: 2,
            bgcolor: "#272822",
            borderRadius: 2,
            overflowX: "auto",
          }}
        >
          <code
            style={{
              color: "#f8f8f2",
              display: "block",
              whiteSpace: "pre-wrap",
            }}
          >{`
<Routes>
  <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    <Route path="about" element={<About />} />
    <Route path="users/:id" element={<UserPage />} />
    <Route path="topics">
      <Route path="javascript" element={<JSPage />} />
      <Route path="react" element={<ReactPage />} />
    </Route>
    <Route path="*" element={<NotFound />} />
</Routes>`}</code>
        </Paper>
      </Box>

      <Box className="important-points" mt={4}>
        <Typography variant="h6" gutterBottom fontWeight="bold">
          Важные моменты:
        </Typography>
        <List>
          <ListItem disableGutters>
            <ListItemText
              primary={
                <code
                  style={{
                    backgroundColor: "#e0f7fa",
                    padding: "2px 6px",
                    borderRadius: "4px",
                  }}
                >
                  index
                </code>
              }
              secondary="Главная страница внутри родительского маршрута"
            />
          </ListItem>
          <ListItem disableGutters>
            <ListItemText
              primary={
                <code
                  style={{
                    backgroundColor: "#e0f7fa",
                    padding: "2px 6px",
                    borderRadius: "4px",
                  }}
                >
                  :id
                </code>
              }
              secondary="Динамический параметр в пути"
            />
          </ListItem>
          <ListItem disableGutters>
            <ListItemText
              primary={
                <code
                  style={{
                    backgroundColor: "#e0f7fa",
                    padding: "2px 6px",
                    borderRadius: "4px",
                  }}
                >
                  *
                </code>
              }
              secondary="Маршрут для ошибки 404 (не найденная страница)"
            />
          </ListItem>
        </List>
      </Box>

      <Box className="useful-hooks" mt={4}>
        <Typography variant="h6" gutterBottom fontWeight="bold">
          🎯 Полезные хуки:
        </Typography>
        <List>
          <ListItem disableGutters>
            <ListItemText
              primary={
                <code
                  style={{
                    backgroundColor: "#e0f7fa",
                    padding: "2px 6px",
                    borderRadius: "4px",
                  }}
                >
                  useNavigate()
                </code>
              }
              secondary="Для программного перехода между страницами"
            />
          </ListItem>
          <ListItem disableGutters>
            <ListItemText
              primary={
                <code
                  style={{
                    backgroundColor: "#e0f7fa",
                    padding: "2px 6px",
                    borderRadius: "4px",
                  }}
                >
                  useParams()
                </code>
              }
              secondary="Получение параметров из URL, например /user/:id"
            />
          </ListItem>
          <ListItem disableGutters>
            <ListItemText
              primary={
                <code
                  style={{
                    backgroundColor: "#e0f7fa",
                    padding: "2px 6px",
                    borderRadius: "4px",
                  }}
                >
                  useLocation()
                </code>
              }
              secondary="Информация о текущем маршруте"
            />
          </ListItem>
          <ListItem disableGutters>
            <ListItemText
              primary={
                <code
                  style={{
                    backgroundColor: "#e0f7fa",
                    padding: "2px 6px",
                    borderRadius: "4px",
                  }}
                >
                  useMatch()
                </code>
              }
              secondary="Проверка совпадения маршрута"
            />
          </ListItem>
        </List>
      </Box>

      <Box className="redirect-example" mt={4}>
        <Typography variant="h6" gutterBottom fontWeight="bold">
          Как сделать редирект?
        </Typography>
        <Typography paragraph>
          Используйте <code>{"<Navigate />"}</code> или хук{" "}
          <code>useNavigate()</code>.
        </Typography>
        <Paper
          elevation={0}
          sx={{
            p: 2,
            bgcolor: "#272822",
            borderRadius: 2,
            overflowX: "auto",
          }}
        >
          <code
            style={{
              color: "#f8f8f2",
              display: "block",
              whiteSpace: "pre-wrap",
            }}
          >{`
// В роуте:
<Route path="/old-path" element={<Navigate to="/new-path" replace />} />

// Или в компоненте:
const navigate = useNavigate();
navigate('/dashboard');
          `}</code>
        </Paper>
      </Box>

      <Box className="nested-routes" mt={4}>
        <Typography variant="h6" gutterBottom fontWeight="bold">
          Вложенные маршруты
        </Typography>
        <Typography paragraph>
          Работают через <code>{"<Outlet />"}</code>:
        </Typography>
        <Paper
          elevation={0}
          sx={{
            p: 2,
            bgcolor: "#272822",
            borderRadius: 2,
            overflowX: "auto",
          }}
        >
          <code
            style={{
              color: "#f8f8f2",
              display: "block",
              whiteSpace: "pre-wrap",
            }}
          >{`
// App.jsx
<Route path="/app" element={<DashboardLayout />}>
  <Route index element={<HomePage />} />
  <Route path="settings" element={<SettingsPage />} />
</Route>

// DashboardLayout.jsx
<aside>Меню</aside>
<Outlet />
          `}</code>
        </Paper>
      </Box>

      <Box
        className="conclusion"
        mt={4}
        p={3}
        bgcolor="#e0f7fa"
        borderRadius={2}
      >
        <Typography variant="h6" gutterBottom fontWeight="bold">
          🏁 Заключение
        </Typography>
        <Typography paragraph>
          React Router v6 позволяет легко организовать навигацию в SPA. С его
          помощью ты можешь:
        </Typography>
        <List>
          <ListItem disableGutters>
            <ListItemText primary="🔹 Создавать много страниц без перезагрузки" />
          </ListItem>
          <ListItem disableGutters>
            <ListItemText primary="🔹 Работать с динамическими и вложенными маршрутами" />
          </ListItem>
          <ListItem disableGutters>
            <ListItemText primary="🔹 Перенаправлять пользователя программно" />
          </ListItem>
        </List>
        <Typography mt={2}>
          Теперь ты знаешь, как работать с роутами в React!
        </Typography>
      </Box>
    </Container>
  );
}
