import{j as e,B as t,T as r,L as d,a as s}from"./index-PoM-DG1p.js";import{C as c,L as n}from"./ListItemText-BACBNzGr.js";import{T as a,a as l,b as x,c as i,d as o,e as u}from"./TableRow-BKjCZ3ui.js";function p(){return e.jsxs(c,{maxWidth:"md",sx:{py:4},children:[e.jsxs(t,{textAlign:"center",mb:3,children:[e.jsx(r,{variant:"h4",component:"h1",fontWeight:"bold",children:"⚙️ Refs, Fragments, Keys и React.memo"}),e.jsx(r,{variant:"subtitle1",color:"textSecondary",mt:1,children:"Продвинутые концепции React"})]}),e.jsxs(t,{className:"refs-section",mt:4,children:[e.jsx(r,{variant:"h6",gutterBottom:!0,fontWeight:"bold",children:"🔍 Refs — ссылки на DOM или значения между рендерами"}),e.jsxs(r,{children:["Используйте ",e.jsx("code",{children:"useRef"}),", чтобы получить доступ к DOM-элементам или сохранить мутабельные данные."]}),e.jsx(t,{component:"pre",sx:{backgroundColor:"#272822",color:"#f8f8f2",padding:2,borderRadius:2,overflowX:"auto"},children:e.jsx("code",{children:`
function TextInput() {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <>
      <input ref={inputRef} type="text" />
      <button onClick={focusInput}>Фокус</button>
    </>
  );
}
          `})}),e.jsxs(t,{mt:2,children:[e.jsx(r,{variant:"h6",gutterBottom:!0,fontWeight:"medium",children:"Когда использовать:"}),e.jsxs(d,{dense:!0,children:[e.jsx(s,{disableGutters:!0,children:e.jsx(n,{primary:"🔹 Управление фокусом, анимациями"})}),e.jsx(s,{disableGutters:!0,children:e.jsx(n,{primary:"🔹 Интеграция с DOM-библиотеками (например, библиотеки графиков)"})}),e.jsx(s,{disableGutters:!0,children:e.jsx(n,{primary:"🔹 Сохранение значений между рендерами без вызова useEffect"})})]})]})]}),e.jsxs(t,{className:"fragments-section",mt:4,children:[e.jsx(r,{variant:"h6",gutterBottom:!0,fontWeight:"bold",children:"🧩 Fragments — группировка элементов без лишних обёрток"}),e.jsx(r,{children:"React.Fragment позволяет группировать элементы без создания лишнего узла в DOM."}),e.jsx(t,{component:"pre",sx:{backgroundColor:"#272822",color:"#f8f8f2",padding:2,borderRadius:2,overflowX:"auto"},children:e.jsx("code",{children:`
function Table() {
  return (
    <table>
      <tbody>
        <tr>
          <React.Fragment>
            <td>Ячейка 1</td>
            <td>Ячейка 2</td>
          </React.Fragment>
        </tr>
        {/* Короткий синтаксис <>...</> */}
        <tr>
          <>
            <td>Ячейка A</td>
            <td>Ячейка B</td>
          </>
        </tr>
      </tbody>
    </table>
  );
}
          `})})]}),e.jsxs(t,{className:"keys-section",mt:4,children:[e.jsx(r,{variant:"h6",gutterBottom:!0,fontWeight:"bold",children:"🔑 Keys — уникальные идентификаторы для элементов списка"}),e.jsx(r,{children:"Используются React для эффективного сравнения и обновления элементов в списке."}),e.jsx(t,{component:"pre",sx:{backgroundColor:"#272822",color:"#f8f8f2",padding:2,borderRadius:2,overflowX:"auto"},children:e.jsx("code",{children:`
function UserList({ users }) {
  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>
          {user.name} - {user.email}
        </li>
      ))}
    </ul>
  );
}
          `})}),e.jsxs(t,{mt:2,children:[e.jsx(r,{variant:"h6",gutterBottom:!0,fontWeight:"medium",children:"❗ Важно помнить:"}),e.jsxs(d,{dense:!0,children:[e.jsx(s,{disableGutters:!0,children:e.jsx(n,{primary:"🔸 Используйте стабильные уникальные значения как ключи"})}),e.jsx(s,{disableGutters:!0,children:e.jsx(n,{primary:"🔸 Избегайте индексов массива для изменяемых списков"})}),e.jsx(s,{disableGutters:!0,children:e.jsx(n,{primary:"🔸 Ключи должны быть уникальными среди соседей"})})]})]})]}),e.jsxs(t,{className:"memo-section",mt:4,children:[e.jsx(r,{variant:"h6",gutterBottom:!0,fontWeight:"bold",children:"📦 React.memo — оптимизация рендеринга"}),e.jsx(r,{children:"Позволяет избежать лишних ререндеров функциональных компонентов."}),e.jsx(t,{component:"pre",sx:{backgroundColor:"#272822",color:"#f8f8f2",padding:2,borderRadius:2,overflowX:"auto"},children:e.jsx("code",{children:`
const MemoizedComponent = React.memo(
  function MyComponent({ prop }) {
    // Рендер компонента
  },
  (prevProps, nextProps) => {
    // Кастомная проверка пропсов
    return prevProps.prop === nextProps.prop;
  }
);
          `})}),e.jsxs(t,{mt:2,children:[e.jsx(r,{variant:"h6",gutterBottom:!0,fontWeight:"medium",children:"Когда применять:"}),e.jsxs(d,{dense:!0,children:[e.jsx(s,{disableGutters:!0,children:e.jsx(n,{primary:"🔹 Компоненты с тяжелым рендерингом"})}),e.jsx(s,{disableGutters:!0,children:e.jsx(n,{primary:"🔹 Частые ререндеры с одинаковыми пропсами"})}),e.jsx(s,{disableGutters:!0,children:e.jsx(n,{primary:"🔹 Статические или редко меняющиеся компоненты"})})]})]})]}),e.jsxs(t,{className:"common-mistakes",mt:4,children:[e.jsx(r,{variant:"h6",gutterBottom:!0,fontWeight:"bold",children:"🚫 Типичные ошибки"}),e.jsx(a,{component:"div",sx:{border:"1px solid #e0e0e0",borderRadius:2,boxShadow:1},children:e.jsxs(l,{children:[e.jsx(x,{children:e.jsxs(i,{children:[e.jsx(o,{children:e.jsx("strong",{children:"Ошибка"})}),e.jsx(o,{children:e.jsx("strong",{children:"Решение"})})]})}),e.jsxs(u,{children:[e.jsxs(i,{children:[e.jsx(o,{children:"Изменение ref.current напрямую"}),e.jsx(o,{children:"Используйте только для чтения"})]}),e.jsxs(i,{children:[e.jsx(o,{children:"Пропуск key в списках"}),e.jsx(o,{children:"Всегда добавляйте уникальные ключи"})]}),e.jsxs(i,{children:[e.jsx(o,{children:"Чрезмерное использование React.memo"}),e.jsx(o,{children:"Применяйте только там, где это необходимо"})]})]})]})})]}),e.jsx(t,{className:"conclusion",mt:4,p:3,bgcolor:"#e0f7fa",borderRadius:2,children:e.jsxs(r,{children:["Углубляйтесь в оптимизацию компонентов с"," ",e.jsx("a",{href:"https://react.dev/reference/react ",target:"_blank",rel:"noopener noreferrer",style:{color:"#1976d2",textDecoration:"none"},children:"официальной документацией"}),". Практикуйте эти концепции в реальных проектах!"]})})]})}export{p as default};
