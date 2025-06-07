import{j as r,B as e,T as t,L as n,a as s}from"./index-D4lUvXaA.js";import{C as a,L as o}from"./ListItemText-BZ6_vFaU.js";function d(){return r.jsxs(a,{maxWidth:"md",sx:{py:4},children:[r.jsxs(e,{className:"guide-header",textAlign:"center",mb:3,children:[r.jsx(t,{variant:"h4",component:"h1",gutterBottom:!0,fontWeight:"bold",children:"🚀 Как начать изучать React: Пошаговый гид"}),r.jsx(t,{variant:"subtitle1",color:"textSecondary",children:"От основ JavaScript до первого SPA-приложения"})]}),r.jsxs(e,{className:"step",mb:4,children:[r.jsx(t,{variant:"h5",component:"h2",gutterBottom:!0,children:"1. Подготовительный этап"}),r.jsxs(e,{className:"step-content",p:2,bgcolor:"#f9f9f9",borderRadius:2,boxShadow:1,children:[r.jsx(t,{paragraph:!0,children:r.jsx("strong",{children:"📌 Необходимые знания:"})}),r.jsxs(n,{children:[r.jsx(s,{disableGutters:!0,children:r.jsx(o,{primary:"HTML/CSS (семантика, flex/grid)"})}),r.jsx(s,{disableGutters:!0,children:r.jsx(o,{primary:"JavaScript ES6+ (стрелочные функции, деструктуризация)"})}),r.jsx(s,{disableGutters:!0,children:r.jsx(o,{primary:"Базовое понимание npm/yarn"})})]}),r.jsx(e,{mt:2,p:2,bgcolor:"#e3f2fd",borderRadius:2,children:r.jsxs(t,{children:["💡 Совет: Пройдите"," ",r.jsx("a",{href:"https://learn.javascript.ru/ ",target:"_blank",rel:"noopener noreferrer",style:{color:"#1976d2",textDecoration:"none"},children:"курс по современному JS"})," ","перед стартом"]})})]})]}),r.jsxs(e,{className:"step",mb:4,children:[r.jsx(t,{variant:"h5",component:"h2",gutterBottom:!0,children:"2. Установка окружения"}),r.jsx(e,{component:"pre",sx:{backgroundColor:"#272822",color:"#f8f8f2",padding:2,borderRadius:2,overflowX:"auto"},children:r.jsx("code",{children:`
# Установите Node.js с официального сайта
# Затем создайте первое приложение:
npx create-react-app my-first-app
cd my-first-app
npm start
          `})})]}),r.jsxs(e,{className:"step",mb:4,children:[r.jsx(t,{variant:"h5",component:"h2",gutterBottom:!0,children:"3. Основные концепции"}),r.jsxs(e,{display:"flex",gap:3,flexWrap:"wrap",children:[r.jsxs(e,{className:"concept-card",flex:1,minWidth:"200px",p:2,bgcolor:"#fff",borderRadius:2,boxShadow:1,children:[r.jsx(t,{variant:"h6",gutterBottom:!0,children:"Компоненты"}),r.jsx(e,{component:"pre",sx:{backgroundColor:"#f4f4f4",padding:"10px",borderRadius:"8px",overflowX:"auto"},children:r.jsx("code",{children:`
function Welcome() {
  return <h1>Привет, мир!</h1>;
}
              `})})]}),r.jsxs(e,{className:"concept-card",flex:1,minWidth:"200px",p:2,bgcolor:"#fff",borderRadius:2,boxShadow:1,children:[r.jsx(t,{variant:"h6",gutterBottom:!0,children:"Хуки (Hooks)"}),r.jsx(e,{component:"pre",sx:{backgroundColor:"#f4f4f4",padding:"10px",borderRadius:"8px",overflowX:"auto"},children:r.jsx("code",{children:`
function Counter() {
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount(c => c + 1)}>
      Нажато: {count}
    </button>
  );
}
              `})})]})]})]}),r.jsxs(e,{className:"step",mb:4,children:[r.jsx(t,{variant:"h5",component:"h2",gutterBottom:!0,children:"4. Практические шаги"}),r.jsxs(n,{children:[r.jsx(s,{disableGutters:!0,children:r.jsx(o,{primary:"✅ Создайте компонент туду-листа"})}),r.jsx(s,{disableGutters:!0,children:r.jsx(o,{primary:"✅ Добавьте форму ввода с управляемыми полями"})}),r.jsx(s,{disableGutters:!0,children:r.jsx(o,{primary:"✅ Реализуйте фильтрацию элементов"})}),r.jsx(s,{disableGutters:!0,children:r.jsx(o,{primary:"✅ Подключите localStorage для сохранения данных"})})]})]}),r.jsxs(e,{className:"resources",mb:4,children:[r.jsx(t,{variant:"h5",component:"h2",gutterBottom:!0,children:"📚 Ресурсы для обучения"}),r.jsx(n,{children:r.jsx(s,{disableGutters:!0,children:r.jsx(o,{primary:r.jsx("a",{href:"https://react.dev/learn ",target:"_blank",rel:"noopener noreferrer",style:{color:"#1976d2",textDecoration:"none"},children:"Официальная документация (React.dev)"})})})})]}),r.jsxs(e,{className:"motivation",mt:4,p:3,bgcolor:"#e0f7fa",borderRadius:2,children:[r.jsx(t,{variant:"body1",children:"🔥 Главное — начинайте практиковать сразу! Каждая ошибка делает вас сильнее."}),r.jsx(t,{variant:"body1",gutterBottom:!0,children:"Создайте свой первый компонент прямо сейчас:"}),r.jsx(e,{component:"pre",sx:{backgroundColor:"#272822",color:"#f8f8f2",padding:2,borderRadius:2,overflowX:"auto"},children:r.jsx("code",{children:`
function FirstComponent() {
  return (
    <div>
      <h2>Моя первая React-компонента!</h2>
      <p>Поздравляю! 🎉</p>
    </div>
  );
}
          `})})]})]})}export{d as default};
