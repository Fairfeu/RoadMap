import{j as r,B as n,T as s,L as i,a as e}from"./index-CFbW8M46.js";import{C as o,L as t}from"./ListItemText-BI6f-O7I.js";function l(){return r.jsxs(o,{maxWidth:"md",sx:{py:4},children:[r.jsxs(n,{textAlign:"center",mb:3,children:[r.jsx(s,{variant:"h4",component:"h1",fontWeight:"bold",children:"🧩 Что такое HOC в React?"}),r.jsx(s,{variant:"subtitle1",color:"textSecondary",children:"Повторное использование логики между компонентами"})]}),r.jsxs(n,{className:"description",mt:2,children:[r.jsxs(s,{children:[r.jsx("strong",{children:"HOC"})," (Higher-Order Component) — это функция, которая принимает один компонент и возвращает новый, расширенный дополнительной логикой или пропсами."]}),r.jsxs(s,{children:["Это один из способов ",r.jsx("strong",{children:"повторного использования логики"})," ","между компонентами без дублирования кода."]})]}),r.jsxs(n,{className:"hoc-example",mt:4,children:[r.jsx(s,{variant:"h6",gutterBottom:!0,fontWeight:"bold",children:"📌 Простой пример HOC:"}),r.jsx(n,{component:"pre",sx:{backgroundColor:"#272822",color:"#f8f8f2",padding:2,borderRadius:2,overflowX:"auto"},children:r.jsx("code",{children:`
// hoc/withCounter.js
function withCounter(WrappedComponent) {
  return function EnhancedComponent({ count }) {
    return (
      <div>
        {count > 0 && <p>Счётчик: {count}</p>}
        <WrappedComponent />
      </div>
    );
  };
}

export default withCounter;
          `})})]}),r.jsxs(n,{className:"hoc-usage",mt:4,children:[r.jsx(s,{variant:"h6",gutterBottom:!0,fontWeight:"bold",children:"🔄 Как применить HOC:"}),r.jsx(n,{component:"pre",sx:{backgroundColor:"#272822",color:"#f8f8f2",padding:2,borderRadius:2,overflowX:"auto"},children:r.jsx("code",{children:`
// components/MyButton.jsx
function MyButton() {
  return <button>Нажми меня</button>;
}

const ButtonWithCounter = withCounter(MyButton);

// Использование:
<ButtonWithCounter count={5} />
          `})})]}),r.jsxs(n,{className:"when-to-use",mt:4,children:[r.jsx(s,{variant:"h6",gutterBottom:!0,fontWeight:"bold",children:"🧠 Когда использовать HOC?"}),r.jsxs(i,{children:[r.jsx(e,{disableGutters:!0,children:r.jsx(t,{primary:"🔹 Добавление общего поведения всем компонентам (например, авторизация)"})}),r.jsx(e,{disableGutters:!0,children:r.jsx(t,{primary:"🔹 Логика рендера (показ спиннера, прогресса, лоадера)"})}),r.jsx(e,{disableGutters:!0,children:r.jsx(t,{primary:"🔹 Добавление пропсов, не связанных с UI"})})]})]}),r.jsxs(n,{className:"important-notes",mt:4,children:[r.jsx(s,{variant:"h6",gutterBottom:!0,fontWeight:"bold",children:"⚠️ Важные моменты при использовании HOC:"}),r.jsxs(i,{children:[r.jsx(e,{disableGutters:!0,children:r.jsx(t,{primary:"🔸 Не мутируйте оригинальный компонент"})}),r.jsx(e,{disableGutters:!0,children:r.jsx(t,{primary:"🔸 Передавайте все ненужные пропсы дальше через {...props}"})}),r.jsx(e,{disableGutters:!0,children:r.jsx(t,{primary:"🔸 Избегайте чрезмерного использования HOC — они могут усложнить отладку"})})]})]}),r.jsxs(n,{className:"plus-minus",mt:4,children:[r.jsx(s,{variant:"h6",gutterBottom:!0,fontWeight:"bold",children:"✅ Плюсы HOC:"}),r.jsxs(i,{children:[r.jsx(e,{disableGutters:!0,children:r.jsx(t,{primary:"🔹 Повторное использование логики"})}),r.jsx(e,{disableGutters:!0,children:r.jsx(t,{primary:"🔹 Разделение ответственности"})}),r.jsx(e,{disableGutters:!0,children:r.jsx(t,{primary:"🔹 Удобство тестирования"})})]})]}),r.jsxs(n,{className:"alternatives",mt:4,children:[r.jsx(s,{variant:"h6",gutterBottom:!0,fontWeight:"bold",children:"🛠 Альтернативы HOC:"}),r.jsxs(i,{children:[r.jsx(e,{disableGutters:!0,children:r.jsx(t,{primary:r.jsxs(r.Fragment,{children:[r.jsx("strong",{children:"Хуки (Hooks)"})," — например,"," ",r.jsx("code",{style:{backgroundColor:"#e0f7fa",padding:"2px 6px",borderRadius:"4px"},children:"useAuth()"}),","," ",r.jsx("code",{style:{backgroundColor:"#e0f7fa",padding:"2px 6px",borderRadius:"4px"},children:"useData()"})]})})}),r.jsx(e,{disableGutters:!0,children:r.jsx(t,{primary:r.jsxs(r.Fragment,{children:[r.jsx("strong",{children:"Render Props"})," — передача данных через пропс-функцию"]})})}),r.jsx(e,{disableGutters:!0,children:r.jsx(t,{primary:r.jsxs(r.Fragment,{children:[r.jsx("strong",{children:"Custom Components"})," — оборачивание компонентов в контейнеры"]})})})]})]}),r.jsxs(n,{className:"conclusion",mt:4,p:3,bgcolor:"#e0f7fa",borderRadius:2,children:[r.jsx(s,{variant:"h6",gutterBottom:!0,fontWeight:"bold",children:"🏁 Итог:"}),r.jsx(s,{children:"HOC — мощный паттерн для расширения компонентов. Он особенно полезен, если ты хочешь добавить:"}),r.jsxs(i,{dense:!0,children:[r.jsx(e,{disableGutters:!0,children:r.jsx(t,{primary:"🔹 Логику"})}),r.jsx(e,{disableGutters:!0,children:r.jsx(t,{primary:"🔹 Пропсы"})}),r.jsx(e,{disableGutters:!0,children:r.jsx(t,{primary:"🔹 Рендер-поведение"})})]}),r.jsxs(s,{mt:2,children:["Но помни: в новых версиях React чаще используются"," ",r.jsx("strong",{children:"хуки"}),". Они проще и понятнее."]})]})]})}export{l as default};
