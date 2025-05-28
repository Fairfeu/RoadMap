import{j as e,B as r,T as t,L as n,a as o}from"./index-PoM-DG1p.js";import{C as i,L as s}from"./ListItemText-BACBNzGr.js";function d(){return e.jsxs(i,{maxWidth:"md",sx:{py:4},children:[e.jsxs(r,{textAlign:"center",mb:3,children:[e.jsx(t,{variant:"h4",component:"h1",fontWeight:"bold",children:"📁 Структура проекта на React"}),e.jsx(t,{variant:"subtitle1",color:"textSecondary",mt:1,children:"Как правильно организовать файлы и папки в React-приложении."})]}),e.jsxs(r,{className:"project-description",mt:3,children:[e.jsx(t,{children:"Чтобы начать разрабатывать приложение на React, важно правильно организовать файлы и папки. Ниже приведён пример типичной структуры проекта:"}),e.jsx(r,{component:"pre",sx:{backgroundColor:"#272822",color:"#f8f8f2",padding:2,borderRadius:2,overflowX:"auto",fontSize:"0.9rem"},children:e.jsx("code",{children:`src/
├── assets/           # Изображения, шрифты, JSON и другие статические файлы
├── components/       # Повторно используемые компоненты (например: кнопка, заголовок)
│   ├── Header.jsx
│   └── Sidebar.jsx
├── topics/            # Компоненты страниц (Главная, Тема 1, Профиль и т.д.)
│   ├── Home.jsx
│   └── TopicPage.jsx
├── App.jsx           # Главный компонент, содержит маршруты
└── main.jsx          # Точка входа, рендерит App в DOM`})})]}),e.jsxs(r,{className:"folder-structure",mt:4,children:[e.jsx(t,{variant:"h6",gutterBottom:!0,fontWeight:"bold",children:"🔍 Основные папки и их назначение:"}),e.jsxs(n,{children:[e.jsx(o,{disableGutters:!0,children:e.jsx(s,{primary:"📁 assets — хранение изображений, JSON, видео и других статических ресурсов."})}),e.jsx(o,{disableGutters:!0,children:e.jsx(s,{primary:"🧩 components — здесь находятся небольшие переиспользуемые компоненты."})}),e.jsx(o,{disableGutters:!0,children:e.jsx(s,{primary:"📄 pages — большие компоненты, отвечающие за отдельные экраны или разделы."})}),e.jsx(o,{disableGutters:!0,children:e.jsx(s,{primary:"⚙️ App.jsx — главный файл, где подключаются маршруты и основные компоненты."})}),e.jsx(o,{disableGutters:!0,children:e.jsx(s,{primary:"🏁 main.jsx — точка входа, запускает приложение."})})]})]}),e.jsxs(r,{className:"component-example",mt:4,children:[e.jsx(t,{variant:"h6",gutterBottom:!0,fontWeight:"bold",children:"📦 Пример компонента:"}),e.jsx(t,{children:"Вот как может выглядеть простой компонент:"}),e.jsx(r,{component:"pre",sx:{backgroundColor:"#272822",color:"#f8f8f2",padding:2,borderRadius:2,overflowX:"auto",mb:2},children:e.jsx("code",{children:`// src/components/Button.jsx
import React from 'react';

function Button({ text }) {
  return <button>{text}</button>;
}

export default Button;`})}),e.jsx(t,{children:"Использование в другом компоненте:"}),e.jsx(r,{component:"pre",sx:{backgroundColor:"#272822",color:"#f8f8f2",padding:2,borderRadius:2,overflowX:"auto"},children:e.jsx("code",{children:`// src/pages/Home.jsx
import React from 'react';
import Button from '../components/Button';

function Home() {
  return (
    <div>
      <h2>Главная</h2>
      <Button text="Нажми меня" />
    </div>
  );
}

export default Home;`})})]}),e.jsxs(r,{className:"routing-section",mt:4,children:[e.jsx(t,{variant:"h6",gutterBottom:!0,fontWeight:"bold",children:"🔄 Роутинг (навигация между страницами)"}),e.jsxs(t,{children:["Для создания разных страниц используется ",e.jsx("code",{children:"react-router-dom"}),"."]}),e.jsx(r,{component:"pre",sx:{backgroundColor:"#272822",color:"#f8f8f2",padding:2,borderRadius:2,overflowX:"auto"},children:e.jsx("code",{children:`// src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import TopicPage from './pages/TopicPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/topic1" element={<TopicPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;`})})]}),e.jsxs(r,{className:"next-steps",mt:4,children:[e.jsx(t,{variant:"h6",gutterBottom:!0,fontWeight:"bold",children:"🏁 Что дальше?"}),e.jsx(t,{children:"После освоения базовой структуры попробуй добавить:"}),e.jsxs(n,{children:[e.jsx(o,{disableGutters:!0,children:e.jsx(s,{primary:"📌 Сайдбар с меню"})}),e.jsx(o,{disableGutters:!0,children:e.jsx(s,{primary:"📌 useState — для управления состоянием"})}),e.jsx(o,{disableGutters:!0,children:e.jsx(s,{primary:"📌 fetch / axios — для работы с API"})}),e.jsx(o,{disableGutters:!0,children:e.jsx(s,{primary:"📌 useContext / zustand — для управления глобальным состоянием"})})]})]}),e.jsx(r,{className:"conclusion",mt:4,p:3,bgcolor:"#e0f7fa",borderRadius:2,children:e.jsx(t,{children:"React — это не сложно, если двигаться шаг за шагом. Удачи в разработке!"})})]})}export{d as default};
