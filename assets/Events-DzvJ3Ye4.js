import{j as e,B as n,T as t,L as i,a as o}from"./index-BOVuD0T1.js";import{C as a,L as l}from"./ListItemText-CdY_zJW9.js";import{T as d,a as c,b as h,c as s,d as r,e as x}from"./TableRow-owqxMg5i.js";import{P as u}from"./Paper-VX_gwVT6.js";import"./useTheme-BH3WgF-_.js";function g(){return e.jsxs(a,{maxWidth:"md",sx:{py:4},children:[e.jsxs(n,{textAlign:"center",mb:3,children:[e.jsx(t,{variant:"h4",component:"h1",fontWeight:"bold",children:"🎯 Обработка событий в React"}),e.jsx(t,{variant:"subtitle1",color:"textSecondary",children:"Работа с синтетическими событиями"})]}),e.jsxs(n,{className:"section",mt:4,children:[e.jsx(t,{variant:"h6",gutterBottom:!0,fontWeight:"bold",children:"Основы обработки событий"}),e.jsx(t,{children:"В React события пишутся в camelCase:"}),e.jsx(n,{component:"pre",sx:{backgroundColor:"#272822",color:"#f8f8f2",padding:2,borderRadius:2,overflowX:"auto"},children:e.jsx("code",{children:`
// onClick — клик по кнопке
<button onClick={handleClick}>
  Нажми меня
</button>

// onChange + onFocus
<input 
  onChange={handleInputChange} 
  onFocus={handleFocus}
/>
          `})})]}),e.jsxs(n,{className:"parameter-section",mt:4,children:[e.jsx(t,{variant:"h6",gutterBottom:!0,fontWeight:"bold",children:"Передача параметров в обработчики"}),e.jsx(n,{component:"pre",sx:{backgroundColor:"#272822",color:"#f8f8f2",padding:2,borderRadius:2,overflowX:"auto"},children:e.jsx("code",{children:`
// Через стрелочную функцию
<button onClick={(e) => handleDelete(id, e)}>
  Удалить
</button>

// Через bind
<button onClick={handleEdit.bind(null, item)}>
  Редактировать
</button>
          `})})]}),e.jsxs(n,{className:"synthetic-event",mt:4,children:[e.jsx(t,{variant:"h6",gutterBottom:!0,fontWeight:"bold",children:"Синтетические события"}),e.jsxs(t,{children:["React оборачивает нативные события браузера в"," ",e.jsx("code",{children:"SyntheticEvent"})," для кросс-браузерной совместимости."]}),e.jsx(n,{component:"pre",sx:{backgroundColor:"#272822",color:"#f8f8f2",padding:2,borderRadius:2,overflowX:"auto"},children:e.jsx("code",{children:`
function handleSubmit(e) {
  e.preventDefault();
  console.log(e.target.elements.username.value);
}
          `})})]}),e.jsxs(n,{className:"events-table",mt:4,children:[e.jsx(t,{variant:"h6",gutterBottom:!0,fontWeight:"bold",children:"📋 Распространённые события в React"}),e.jsx(d,{component:u,sx:{borderRadius:2},children:e.jsxs(c,{children:[e.jsx(h,{children:e.jsxs(s,{children:[e.jsx(r,{children:e.jsx("strong",{children:"Событие"})}),e.jsx(r,{children:e.jsx("strong",{children:"Описание"})})]})}),e.jsxs(x,{children:[e.jsxs(s,{children:[e.jsx(r,{children:"onClick"}),e.jsx(r,{children:"Клик мышью"})]}),e.jsxs(s,{children:[e.jsx(r,{children:"onChange"}),e.jsx(r,{children:"Изменение значения формы"})]}),e.jsxs(s,{children:[e.jsx(r,{children:"onKeyDown"}),e.jsx(r,{children:"Нажатие клавиши"})]}),e.jsxs(s,{children:[e.jsx(r,{children:"onSubmit"}),e.jsx(r,{children:"Отправка формы"})]}),e.jsxs(s,{children:[e.jsx(r,{children:"onMouseOver"}),e.jsx(r,{children:"Наведение курсора"})]})]})]})})]}),e.jsxs(n,{className:"optimization",mt:4,children:[e.jsx(t,{variant:"h6",gutterBottom:!0,fontWeight:"bold",children:"⚙️ Оптимизация обработчиков"}),e.jsx(n,{component:"pre",sx:{backgroundColor:"#272822",color:"#f8f8f2",padding:2,borderRadius:2,overflowX:"auto"},children:e.jsx("code",{children:`
// Использование useCallback для мемоизации
const handleClick = useCallback((e) => {
  // Логика обработки
}, [dependencies]);
          `})})]}),e.jsxs(n,{className:"best-practices",mt:4,children:[e.jsx(t,{variant:"h6",gutterBottom:!0,fontWeight:"bold",children:"🏆 Лучшие практики"}),e.jsxs(i,{children:[e.jsx(o,{disableGutters:!0,children:e.jsx(l,{primary:"🔹 Избегайте inline-функций в рендере для частых ререндеров"})}),e.jsx(o,{disableGutters:!0,children:e.jsx(l,{primary:"🔹 Используйте делегирование событий для списков"})}),e.jsx(o,{disableGutters:!0,children:e.jsx(l,{primary:"🔹 Очищайте таймеры и подписки в useEffect"})}),e.jsx(o,{disableGutters:!0,children:e.jsx(l,{primary:"🔹 Именуйте обработчики с префиксом handle (handleClick, handleChange)"})}),e.jsx(o,{disableGutters:!0,children:e.jsx(l,{primary:"🔹 Для форм используйте управляемые компоненты"})})]})]}),e.jsxs(n,{className:"advanced-techniques",mt:4,children:[e.jsx(t,{variant:"h6",gutterBottom:!0,fontWeight:"bold",children:"🔍 Продвинутые техники"}),e.jsx(n,{component:"pre",sx:{backgroundColor:"#272822",color:"#f8f8f2",padding:2,borderRadius:2,overflowX:"auto"},children:e.jsx("code",{children:`
// Кастомный хук для обработки событий
function useEventListener(eventName, handler, element = window) {
  useEffect(() => {
    element.addEventListener(eventName, handler);
    return () => element.removeEventListener(eventName, handler);
  }, [eventName, handler, element]);
}
          `})})]}),e.jsx(n,{className:"conclusion",mt:4,p:3,bgcolor:"#e0f7fa",borderRadius:2,children:e.jsx(t,{children:"События — важная часть любого динамического приложения. Практикуйтесь!"})})]})}export{g as default};
