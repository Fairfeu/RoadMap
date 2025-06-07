import{j as e,B as r,T as s,L as d,a as t}from"./index-D4lUvXaA.js";import{C as l,L as n}from"./ListItemText-BZ6_vFaU.js";import{T as c,a,b as h,c as o,d as i,e as x}from"./TableRow-BnjJLRHQ.js";import{P as u}from"./Paper-Bv0uqrue.js";import"./useTheme-CwMOd9Pi.js";function g(){return e.jsxs(l,{maxWidth:"md",sx:{py:4},children:[e.jsxs(r,{textAlign:"center",mb:3,children:[e.jsx(s,{variant:"h4",component:"h1",fontWeight:"bold",children:"🔄 Жизненный цикл компонентов React"}),e.jsx(s,{variant:"subtitle1",color:"textSecondary",children:"От создания до удаления компонента"})]}),e.jsxs(r,{className:"lifecycle-phases",mt:4,children:[e.jsx(s,{variant:"h6",gutterBottom:!0,fontWeight:"bold",children:"Основные этапы жизненного цикла"}),e.jsxs(r,{display:"flex",gap:2,flexWrap:"wrap",children:[e.jsxs(r,{p:2,bgcolor:"#f9f9f9",borderRadius:2,boxShadow:1,flex:1,minWidth:"200px",children:[e.jsx(s,{fontWeight:"medium",children:"Монтирование"}),e.jsxs(d,{dense:!0,children:[e.jsx(t,{disableGutters:!0,children:e.jsx(n,{primary:"🔹 constructor()"})}),e.jsx(t,{disableGutters:!0,children:e.jsx(n,{primary:"🔹 render()"})}),e.jsx(t,{disableGutters:!0,children:e.jsx(n,{primary:"🔹 componentDidMount()"})})]})]}),e.jsxs(r,{p:2,bgcolor:"#f9f9f9",borderRadius:2,boxShadow:1,flex:1,minWidth:"200px",children:[e.jsx(s,{fontWeight:"medium",children:"Обновление"}),e.jsxs(d,{dense:!0,children:[e.jsx(t,{disableGutters:!0,children:e.jsx(n,{primary:"🔹 shouldComponentUpdate()"})}),e.jsx(t,{disableGutters:!0,children:e.jsx(n,{primary:"🔹 render()"})}),e.jsx(t,{disableGutters:!0,children:e.jsx(n,{primary:"🔹 componentDidUpdate()"})})]})]}),e.jsxs(r,{p:2,bgcolor:"#f9f9f9",borderRadius:2,boxShadow:1,flex:1,minWidth:"200px",children:[e.jsx(s,{fontWeight:"medium",children:"Размонтирование"}),e.jsx(d,{dense:!0,children:e.jsx(t,{disableGutters:!0,children:e.jsx(n,{primary:"🔹 componentWillUnmount()"})})})]})]})]}),e.jsxs(r,{className:"hooks-section",mt:4,children:[e.jsx(s,{variant:"h6",gutterBottom:!0,fontWeight:"bold",children:"Хуки жизненного цикла в функциональных компонентах"}),e.jsx(r,{component:"pre",sx:{backgroundColor:"#272822",color:"#f8f8f2",padding:2,borderRadius:2,overflowX:"auto"},children:e.jsx("code",{children:`
useEffect(() => {
  // Аналог componentDidMount + componentDidUpdate
  console.log('Компонент обновлен');

  return () => {
    // Аналог componentWillUnmount
    console.log('Очистка перед удалением');
  };
}, [dependencies]);
          `})})]}),e.jsxs(r,{className:"practical-examples",mt:4,children:[e.jsx(s,{variant:"h6",gutterBottom:!0,fontWeight:"bold",children:"📌 Практические примеры"}),e.jsxs(r,{mb:3,p:2,bgcolor:"#f5f5f5",borderRadius:2,children:[e.jsx(s,{fontWeight:"medium",children:"Загрузка данных при монтировании"}),e.jsx(r,{component:"pre",sx:{backgroundColor:"#272822",color:"#f8f8f2",padding:2,borderRadius:2,overflowX:"auto",mt:1},children:e.jsx("code",{children:`
useEffect(() => {
  const fetchData = async () => {
    const response = await fetch('/api/data');
    const data = await response.json();
    setData(data);
  };

  fetchData();
}, []); // Пустой массив зависимостей = только при монтировании
            `})})]}),e.jsxs(r,{mb:3,p:2,bgcolor:"#f5f5f5",borderRadius:2,children:[e.jsx(s,{fontWeight:"medium",children:"Очистка подписок"}),e.jsx(r,{component:"pre",sx:{backgroundColor:"#272822",color:"#f8f8f2",padding:2,borderRadius:2,overflowX:"auto",mt:1},children:e.jsx("code",{children:`
useEffect(() => {
  const handler = () => { /* ... */ };
  window.addEventListener('resize', handler);

  return () => {
    window.removeEventListener('resize', handler);
  };
}, []);
            `})})]})]}),e.jsxs(r,{className:"best-practices",mt:4,children:[e.jsx(s,{variant:"h6",gutterBottom:!0,fontWeight:"bold",children:"🚀 Лучшие практики работы с useEffect"}),e.jsxs(d,{children:[e.jsx(t,{disableGutters:!0,children:e.jsx(n,{primary:"🔹 Используйте useEffect для побочных эффектов"})}),e.jsx(t,{disableGutters:!0,children:e.jsx(n,{primary:"🔹 Всегда очищайте таймеры и подписки"})}),e.jsx(t,{disableGutters:!0,children:e.jsx(n,{primary:"🔹 Оптимизируйте ререндеры с помощью зависимостей"})}),e.jsx(t,{disableGutters:!0,children:e.jsx(n,{primary:"🔹 Избегайте устаревших методов (componentWillMount и др.)"})}),e.jsx(t,{disableGutters:!0,children:e.jsx(n,{primary:"🔹 Разделяйте несвязанные эффекты на отдельные useEffect"})})]})]}),e.jsxs(r,{className:"comparison-table",mt:4,children:[e.jsx(s,{variant:"h6",gutterBottom:!0,fontWeight:"bold",children:"📊 Сравнение с классовыми компонентами"}),e.jsx(c,{component:u,sx:{borderRadius:2},children:e.jsxs(a,{children:[e.jsx(h,{children:e.jsxs(o,{children:[e.jsx(i,{children:e.jsx("strong",{children:"Классовый компонент"})}),e.jsx(i,{children:e.jsx("strong",{children:"Функциональный компонент"})})]})}),e.jsxs(x,{children:[e.jsxs(o,{children:[e.jsx(i,{children:"componentDidMount"}),e.jsxs(i,{children:["useEffect(","() => {}",", [])"]})]}),e.jsxs(o,{children:[e.jsx(i,{children:"componentDidUpdate"}),e.jsxs(i,{children:["useEffect(","() => {}",")"]})]}),e.jsxs(o,{children:[e.jsx(i,{children:"componentWillUnmount"}),e.jsxs(i,{children:["return","() => {}"," в useEffect"]})]}),e.jsxs(o,{children:[e.jsx(i,{children:"shouldComponentUpdate"}),e.jsx(i,{children:"React.memo или useMemo"})]})]})]})})]}),e.jsx(r,{className:"conclusion",mt:4,p:3,bgcolor:"#e0f7fa",borderRadius:2,children:e.jsxs(s,{children:["Подробнее о жизненном цикле в"," ",e.jsx("a",{href:"https://react.dev/learn/lifecycle-of-reactive-effects ",target:"_blank",rel:"noopener noreferrer",style:{color:"#1976d2",textDecoration:"none"},children:"официальной документации"}),". Практикуйтесь с разными сценариями использования эффектов!"]})})]})}export{g as default};
