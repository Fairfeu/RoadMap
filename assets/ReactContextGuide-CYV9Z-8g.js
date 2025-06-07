import{l as a,j as e,B as t,T as r,L as l,a as s}from"./index-D4lUvXaA.js";import{C as c,L as o}from"./ListItemText-BZ6_vFaU.js";import{T as d,a as h,b as x,c as i,d as n,e as m}from"./TableRow-BnjJLRHQ.js";import{P as u}from"./Paper-Bv0uqrue.js";import"./useTheme-CwMOd9Pi.js";const C=a.createContext({theme:"light",toggleTheme:()=>{}});function T(){return e.jsxs(c,{maxWidth:"md",sx:{py:4},children:[e.jsxs(t,{textAlign:"center",mb:3,children:[e.jsx(r,{variant:"h4",component:"h1",fontWeight:"bold",children:"🌐 React Context API"}),e.jsx(r,{variant:"subtitle1",color:"textSecondary",children:"Управление глобальным состоянием приложения"})]}),e.jsxs(t,{className:"section",mt:4,children:[e.jsx(r,{variant:"h6",gutterBottom:!0,fontWeight:"bold",children:"Что такое Context?"}),e.jsxs(r,{paragraph:!0,children:[e.jsx("strong",{children:"Context"})," — это механизм для передачи данных через дерево компонентов без явной передачи пропсов. Он решает проблему"," ",e.jsx("strong",{children:"пропс-дриллинга"})," и позволяет легко делиться данными между компонентами."]})]}),e.jsxs(t,{className:"create-context",mt:4,children:[e.jsx(r,{variant:"h6",gutterBottom:!0,fontWeight:"bold",children:"Создание контекста"}),e.jsx(t,{component:"pre",sx:{backgroundColor:"#272822",color:"#f8f8f2",padding:2,borderRadius:2,overflowX:"auto"},children:e.jsx("code",{children:`
// ThemeContext.js
import { createContext } from 'react';

export const ThemeContext = createContext({
  theme: 'light',
  toggleTheme: () => {},
});
          `})})]}),e.jsxs(t,{className:"provider-consumer",mt:4,children:[e.jsx(r,{variant:"h6",gutterBottom:!0,fontWeight:"bold",children:"Поставщик и потребитель"}),e.jsxs(t,{mb:3,children:[e.jsx(r,{fontWeight:"medium",children:"Поставщик (Provider):"}),e.jsx(t,{component:"pre",sx:{backgroundColor:"#272822",color:"#f8f8f2",padding:2,borderRadius:2,overflowX:"auto"},children:e.jsx("code",{children:`
function App() {
  const [theme, setTheme] = useState('light');
  
  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const value = useMemo(() => ({ theme, toggleTheme }), [theme]);

  return (
    <ThemeContext.Provider value={value}>
      <Header />
      <MainContent />
    </ThemeContext.Provider>
  );
}
          `})})]}),e.jsxs(t,{mb:3,children:[e.jsx(r,{fontWeight:"medium",children:"Потребитель (useContext):"}),e.jsx(t,{component:"pre",sx:{backgroundColor:"#272822",color:"#f8f8f2",padding:2,borderRadius:2,overflowX:"auto"},children:e.jsx("code",{children:`
function ThemeButton() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  
  return (
    <button onClick={toggleTheme} className={\`theme-btn \${theme}\`}>
      Текущая тема: {theme}
    </button>
  );
}
          `})})]})]}),e.jsxs(t,{className:"optimization-section",mt:4,children:[e.jsx(r,{variant:"h6",gutterBottom:!0,fontWeight:"bold",children:"🛠 Оптимизация с помощью useMemo"}),e.jsxs(r,{paragraph:!0,children:["Чтобы избежать лишних ререндеров, оборачивайте объекты в"," ",e.jsx("code",{children:"useMemo()"}),"."]}),e.jsx(t,{component:"pre",sx:{backgroundColor:"#272822",color:"#f8f8f2",padding:2,borderRadius:2,overflowX:"auto"},children:e.jsx("code",{children:`
// Чтобы избежать лишних ререндеров
<ThemeContext.Provider 
  value={useMemo(() => ({ theme, toggleTheme }), [theme])}
>
          `})})]}),e.jsxs(t,{className:"use-cases",mt:4,children:[e.jsx(r,{variant:"h6",gutterBottom:!0,fontWeight:"bold",children:"📋 Типичные сценарии использования:"}),e.jsxs(l,{children:[e.jsx(s,{disableGutters:!0,children:e.jsx(o,{primary:"🔹 Темы оформления (light/dark)"})}),e.jsx(s,{disableGutters:!0,children:e.jsx(o,{primary:"🔹 Данные аутентификации (user, token)"})}),e.jsx(s,{disableGutters:!0,children:e.jsx(o,{primary:"🔹 Локализация (языковые настройки)"})}),e.jsx(s,{disableGutters:!0,children:e.jsx(o,{primary:"🔹 Глобальные настройки (например, размер шрифта)"})}),e.jsx(s,{disableGutters:!0,children:e.jsx(o,{primary:"🔹 Кеширование данных (например, userPreferences)"})})]})]}),e.jsxs(t,{className:"custom-hook",mt:4,children:[e.jsx(r,{variant:"h6",gutterBottom:!0,fontWeight:"bold",children:"🔧 Кастомный хук для контекста"}),e.jsx(t,{component:"pre",sx:{backgroundColor:"#272822",color:"#f8f8f2",padding:2,borderRadius:2,overflowX:"auto"},children:e.jsx("code",{children:`
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme должен использоваться внутри ThemeProvider');
  }
  return context;
};
          `})})]}),e.jsxs(t,{className:"comparison-table",mt:4,children:[e.jsx(r,{variant:"h6",gutterBottom:!0,fontWeight:"bold",children:"📊 Context API vs Redux"}),e.jsx(d,{component:u,sx:{boxShadow:1,borderRadius:2},children:e.jsxs(h,{children:[e.jsx(x,{children:e.jsxs(i,{children:[e.jsx(n,{children:e.jsx("strong",{children:"Context API"})}),e.jsx(n,{children:e.jsx("strong",{children:"Redux"})})]})}),e.jsxs(m,{children:[e.jsxs(i,{children:[e.jsx(n,{children:"Встроен в React"}),e.jsx(n,{children:"Сторонняя библиотека"})]}),e.jsxs(i,{children:[e.jsx(n,{children:"Простая настройка"}),e.jsx(n,{children:"Сложная конфигурация"})]}),e.jsxs(i,{children:[e.jsx(n,{children:"Лучше для статичных данных"}),e.jsx(n,{children:"Оптимизирован для частых изменений"})]})]})]})})]}),e.jsxs(t,{className:"best-practices",mt:4,children:[e.jsx(r,{variant:"h6",gutterBottom:!0,fontWeight:"bold",children:"🚀 Лучшие практики работы с Context"}),e.jsxs(l,{children:[e.jsx(s,{disableGutters:!0,children:e.jsx(o,{primary:"🔹 Разделяйте контексты по функционалу (не один на всё приложение)"})}),e.jsx(s,{disableGutters:!0,children:e.jsx(o,{primary:"🔹 Используйте кастомные хуки для доступа к контексту"})}),e.jsx(s,{disableGutters:!0,children:e.jsx(o,{primary:"🔹 Мемоизируйте значение провайдера через useMemo()"})}),e.jsx(s,{disableGutters:!0,children:e.jsx(o,{primary:"🔹 Избегайте вложенных провайдеров"})}),e.jsx(s,{disableGutters:!0,children:e.jsx(o,{primary:"🔹 Не используйте для высокочастотных обновлений"})})]})]}),e.jsx(t,{className:"conclusion",mt:4,p:3,bgcolor:"#e0f7fa",borderRadius:2,children:e.jsxs(r,{children:["Изучите продвинутые техники работы с Context в"," ",e.jsx("a",{href:"https://react.dev/reference/react/useContext ",target:"_blank",rel:"noopener noreferrer",style:{color:"#1976d2",textDecoration:"none"},children:"официальной документации"}),". Практикуйтесь с разными типами глобальных данных!"]})})]})}export{C as ThemeContext,T as default};
