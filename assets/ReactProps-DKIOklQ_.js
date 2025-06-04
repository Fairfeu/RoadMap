import{j as e,B as r,T as s,L as d,a as t}from"./index-CFbW8M46.js";import{C as a,L as i}from"./ListItemText-BI6f-O7I.js";import{T as l,a as c,b as p,c as n,d as o,e as h}from"./TableRow-BxOPkCoK.js";import{P as x}from"./Paper-3JZS-k_m.js";import"./useTheme-DA70v4E5.js";function g(){return e.jsxs(a,{maxWidth:"md",sx:{py:4},children:[e.jsxs(r,{textAlign:"center",mb:3,children:[e.jsx(s,{variant:"h4",component:"h1",fontWeight:"bold",children:"📦 Props в React: Передача данных между компонентами"}),e.jsx(s,{variant:"subtitle1",color:"textSecondary",mt:1,children:"Работа со свойствами компонентов"})]}),e.jsxs(r,{className:"section",mt:4,children:[e.jsx(s,{variant:"h6",gutterBottom:!0,fontWeight:"bold",children:"Что такое Props?"}),e.jsxs(s,{paragraph:!0,children:[e.jsx("strong",{children:"Props (Properties)"})," — входные параметры компонента, которые передаются от родителя к дочернему. Они ",e.jsx("em",{children:"иммутабельны"})," ","(нельзя изменять внутри компонента)."]})]}),e.jsxs(r,{className:"section",mt:4,children:[e.jsx(s,{variant:"h6",gutterBottom:!0,fontWeight:"bold",children:"Передача и использование Props"}),e.jsxs(r,{display:"flex",flexDirection:"column",gap:2,mb:2,children:[e.jsxs(r,{bgcolor:"#f5f5f5",p:2,borderRadius:2,children:[e.jsx(s,{fontWeight:"medium",children:"Родительский компонент:"}),e.jsx(r,{component:"pre",sx:{backgroundColor:"#272822",color:"#f8f8f2",padding:2,borderRadius:2,overflowX:"auto"},children:e.jsx("code",{children:`
<UserProfile 
  name="Анна" 
  age={25}
  isVerified={true}
/>
              `})})]}),e.jsxs(r,{bgcolor:"#f5f5f5",p:2,borderRadius:2,children:[e.jsx(s,{fontWeight:"medium",children:"Дочерний компонент:"}),e.jsx(r,{component:"pre",sx:{backgroundColor:"#272822",color:"#f8f8f2",padding:2,borderRadius:2,overflowX:"auto"},children:e.jsx("code",{children:`
function UserProfile({ name, age, isVerified }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Возраст: {age}</p>
      {isVerified && <span>✓ Подтвержден</span>}
    </div>
  );
}
              `})})]})]})]}),e.jsxs(r,{className:"children-prop",mt:4,children:[e.jsxs(s,{variant:"h6",gutterBottom:!0,fontWeight:"bold",children:["Специальный prop: ",e.jsx("code",{children:"children"})]}),e.jsx(r,{component:"pre",sx:{backgroundColor:"#272822",color:"#f8f8f2",padding:2,borderRadius:2,overflowX:"auto"},children:e.jsx("code",{children:`
function Card({ children }) {
  return <div className="card">{children}</div>;
}

// Использование:
<Card>
  <h3>Заголовок</h3>
  <p>Содержание карточки</p>
</Card>
          `})})]}),e.jsxs(r,{className:"prop-types",mt:4,children:[e.jsx(s,{variant:"h6",gutterBottom:!0,fontWeight:"bold",children:"Валидация Props с помощью PropTypes"}),e.jsx(r,{component:"pre",sx:{backgroundColor:"#272822",color:"#f8f8f2",padding:2,borderRadius:2,overflowX:"auto"},children:e.jsx("code",{children:`
import PropTypes from 'prop-types';

UserProfile.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  isVerified: PropTypes.bool
};

UserProfile.defaultProps = {
  isVerified: false
};
          `})})]}),e.jsxs(r,{className:"best-practices",mt:4,children:[e.jsx(s,{variant:"h6",gutterBottom:!0,fontWeight:"bold",children:"🚀 Лучшие практики работы с Props"}),e.jsxs(d,{children:[e.jsx(t,{disableGutters:!0,children:e.jsx(i,{primary:"🔹 Используйте деструктуризацию props"})}),e.jsx(t,{disableGutters:!0,children:e.jsx(i,{primary:"🔹 Задавайте значения по умолчанию через defaultProps или деструктуризацию с дефолтными значениями"})}),e.jsx(t,{disableGutters:!0,children:e.jsx(i,{primary:"🔹 Всегда валидируйте входящие props"})}),e.jsx(t,{disableGutters:!0,children:e.jsx(i,{primary:"🔹 Избегайте передачи избыточного количества props"})}),e.jsx(t,{disableGutters:!0,children:e.jsx(i,{primary:"🔹 Для сложных данных используйте контекст или локальное состояние"})})]})]}),e.jsxs(r,{className:"props-vs-state",mt:4,children:[e.jsx(s,{variant:"h6",gutterBottom:!0,fontWeight:"bold",children:"Props vs State"}),e.jsx(l,{component:x,sx:{borderRadius:2},children:e.jsxs(c,{children:[e.jsx(p,{children:e.jsxs(n,{children:[e.jsx(o,{children:e.jsx("strong",{children:"Props"})}),e.jsx(o,{children:e.jsx("strong",{children:"State"})})]})}),e.jsxs(h,{children:[e.jsxs(n,{children:[e.jsx(o,{children:"Неизменяемые"}),e.jsx(o,{children:"Изменяемые через setState"})]}),e.jsxs(n,{children:[e.jsx(o,{children:"Передаются сверху вниз"}),e.jsx(o,{children:"Локальное состояние компонента"})]})]})]})})]}),e.jsx(r,{className:"conclusion",mt:4,p:2,bgcolor:"#e0f7fa",borderRadius:2,children:e.jsxs(s,{children:["Углубитесь в тему props через"," ",e.jsx("a",{href:"https://react.dev/learn/passing-props-to-a-component ",target:"_blank",rel:"noopener noreferrer",style:{color:"#1976d2",textDecoration:"none"},children:"официальную документацию"}),". Практикуйтесь в передаче данных между компонентами!"]})})]})}export{g as default};
