import{e as V,r as C,f as Y,j as t,c as Z,i as ee,d as te,g as ne,h as re,s as oe,u as se,B as l,T as f,L as ie,a as G}from"./index-PoM-DG1p.js";import{s as ce,u as ae,C as le,L as w}from"./ListItemText-BACBNzGr.js";import{u as de}from"./useTheme--rqtSOzm.js";const ue=(e,n)=>e.filter(r=>n.includes(r)),b=(e,n,r)=>{const i=e.keys[0];Array.isArray(n)?n.forEach((s,o)=>{r((c,h)=>{o<=e.keys.length-1&&(o===0?Object.assign(c,h):c[e.up(e.keys[o])]=h)},s)}):n&&typeof n=="object"?(Object.keys(n).length>e.keys.length?e.keys:ue(e.keys,Object.keys(n))).forEach(o=>{if(e.keys.includes(o)){const c=n[o];c!==void 0&&r((h,S)=>{i===o?Object.assign(h,S):h[e.up(o)]=S},c)}}):(typeof n=="number"||typeof n=="string")&&r((s,o)=>{Object.assign(s,o)},n)};function k(e){return`--Grid-${e}Spacing`}function $(e){return`--Grid-parent-${e}Spacing`}const E="--Grid-columns",y="--Grid-parent-columns",fe=({theme:e,ownerState:n})=>{const r={};return b(e.breakpoints,n.size,(i,s)=>{let o={};s==="grow"&&(o={flexBasis:0,flexGrow:1,maxWidth:"100%"}),s==="auto"&&(o={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"}),typeof s=="number"&&(o={flexGrow:0,flexBasis:"auto",width:`calc(100% * ${s} / var(${y}) - (var(${y}) - ${s}) * (var(${$("column")}) / var(${y})))`}),i(r,o)}),r},me=({theme:e,ownerState:n})=>{const r={};return b(e.breakpoints,n.offset,(i,s)=>{let o={};s==="auto"&&(o={marginLeft:"auto"}),typeof s=="number"&&(o={marginLeft:s===0?"0px":`calc(100% * ${s} / var(${y}) + var(${$("column")}) * ${s} / var(${y}))`}),i(r,o)}),r},pe=({theme:e,ownerState:n})=>{if(!n.container)return{};const r={[E]:12};return b(e.breakpoints,n.columns,(i,s)=>{const o=s??12;i(r,{[E]:o,"> *":{[y]:o}})}),r},ge=({theme:e,ownerState:n})=>{if(!n.container)return{};const r={};return b(e.breakpoints,n.rowSpacing,(i,s)=>{var c;const o=typeof s=="string"?s:(c=e.spacing)==null?void 0:c.call(e,s);i(r,{[k("row")]:o,"> *":{[$("row")]:o}})}),r},he=({theme:e,ownerState:n})=>{if(!n.container)return{};const r={};return b(e.breakpoints,n.columnSpacing,(i,s)=>{var c;const o=typeof s=="string"?s:(c=e.spacing)==null?void 0:c.call(e,s);i(r,{[k("column")]:o,"> *":{[$("column")]:o}})}),r},xe=({theme:e,ownerState:n})=>{if(!n.container)return{};const r={};return b(e.breakpoints,n.direction,(i,s)=>{i(r,{flexDirection:s})}),r},je=({ownerState:e})=>({minWidth:0,boxSizing:"border-box",...e.container&&{display:"flex",flexWrap:"wrap",...e.wrap&&e.wrap!=="wrap"&&{flexWrap:e.wrap},gap:`var(${k("row")}) var(${k("column")})`}}),ye=e=>{const n=[];return Object.entries(e).forEach(([r,i])=>{i!==!1&&i!==void 0&&n.push(`grid-${r}-${String(i)}`)}),n},be=(e,n="xs")=>{function r(i){return i===void 0?!1:typeof i=="string"&&!Number.isNaN(Number(i))||typeof i=="number"&&i>0}if(r(e))return[`spacing-${n}-${String(e)}`];if(typeof e=="object"&&!Array.isArray(e)){const i=[];return Object.entries(e).forEach(([s,o])=>{r(o)&&i.push(`spacing-${s}-${String(o)}`)}),i}return[]},Se=e=>e===void 0?[]:typeof e=="object"?Object.entries(e).map(([n,r])=>`direction-${n}-${r}`):[`direction-xs-${String(e)}`];function Ce(e,n){e.item!==void 0&&delete e.item,e.zeroMinWidth!==void 0&&delete e.zeroMinWidth,n.keys.forEach(r=>{e[r]!==void 0&&delete e[r]})}const Ge=re(),we=ce("div",{name:"MuiGrid",slot:"Root"});function ke(e){return ae({props:e,name:"MuiGrid",defaultTheme:Ge})}function $e(e={}){const{createStyledComponent:n=we,useThemeProps:r=ke,useTheme:i=V,componentName:s="MuiGrid"}=e,o=(m,d)=>{const{container:x,direction:u,spacing:p,wrap:a,size:B}=m,N={root:["root",x&&"container",a!=="wrap"&&`wrap-xs-${String(a)}`,...Se(u),...ye(B),...x?be(p,d.breakpoints.keys[0]):[]]};return te(N,R=>ne(s,R),{})};function c(m,d,x=()=>!0){const u={};return m===null||(Array.isArray(m)?m.forEach((p,a)=>{p!==null&&x(p)&&d.keys[a]&&(u[d.keys[a]]=p)}):typeof m=="object"?Object.keys(m).forEach(p=>{const a=m[p];a!=null&&x(a)&&(u[p]=a)}):u[d.keys[0]]=m),u}const h=n(pe,he,ge,fe,xe,je,me),S=C.forwardRef(function(d,x){const u=i(),p=r(d),a=Y(p);Ce(a,u.breakpoints);const{className:B,children:N,columns:R=12,container:T=!1,component:O="div",direction:A="row",wrap:M="wrap",size:L={},offset:D={},spacing:v=0,rowSpacing:X=v,columnSpacing:_=v,unstable_level:j=0,...I}=a,K=c(L,u.breakpoints,g=>g!==!1),U=c(D,u.breakpoints),q=d.columns??(j?void 0:R),F=d.spacing??(j?void 0:v),H=d.rowSpacing??d.spacing??(j?void 0:X),J=d.columnSpacing??d.spacing??(j?void 0:_),P={...a,level:j,columns:q,container:T,direction:A,wrap:M,spacing:F,rowSpacing:H,columnSpacing:J,size:K,offset:U},Q=o(P,u);return t.jsx(h,{ref:x,as:O,ownerState:P,className:Z(Q.root,B),...I,children:C.Children.map(N,g=>{var z;return C.isValidElement(g)&&ee(g,["Grid"])&&T&&g.props.container?C.cloneElement(g,{unstable_level:((z=g.props)==null?void 0:z.unstable_level)??j+1}):g})})});return S.muiName="Grid",S}const W=$e({createStyledComponent:oe("div",{name:"MuiGrid",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:r}=e;return[n.root,r.container&&n.container]}}),componentName:"MuiGrid",useThemeProps:e=>se({props:e,name:"MuiGrid"}),useTheme:de});function ve(){return t.jsxs(le,{maxWidth:"md",sx:{py:4},children:[t.jsxs(l,{textAlign:"center",mb:3,children:[t.jsx(f,{variant:"h4",component:"h1",fontWeight:"bold",children:"🧱 React Components: Основы создания"}),t.jsx(f,{variant:"subtitle1",color:"textSecondary",children:"Строительные блоки React-приложений"})]}),t.jsxs(l,{className:"types-section",mt:4,children:[t.jsx(f,{variant:"h6",gutterBottom:!0,fontWeight:"bold",children:"🔍 Типы компонентов"}),t.jsxs(W,{container:!0,spacing:2,mt:1,children:[t.jsx(W,{size:{xs:12,sm:6},children:t.jsxs(l,{p:2,bgcolor:"#f9f9f9",borderRadius:2,boxShadow:1,children:[t.jsx(f,{variant:"h6",gutterBottom:!0,children:"Функциональные компоненты"}),t.jsx(l,{component:"pre",sx:{backgroundColor:"#272822",color:"#f8f8f2",padding:2,borderRadius:2,overflowX:"auto"},children:t.jsx("code",{children:`
function Welcome(props) {
  return <h1>Привет, {props.name}</h1>;
}
                `})})]})}),t.jsx(W,{size:{xs:12,sm:6},children:t.jsxs(l,{p:2,bgcolor:"#f9f9f9",borderRadius:2,boxShadow:1,children:[t.jsx(f,{variant:"h6",gutterBottom:!0,children:"Классовые компоненты"}),t.jsx(l,{component:"pre",sx:{backgroundColor:"#272822",color:"#f8f8f2",padding:2,borderRadius:2,overflowX:"auto"},children:t.jsx("code",{children:`
class Welcome extends React.Component {
  render() {
    return <h1>Привет, {this.props.name}</h1>;
  }
}
                `})})]})})]})]}),t.jsxs(l,{className:"component-creation",mt:4,children:[t.jsx(f,{variant:"h6",gutterBottom:!0,fontWeight:"bold",children:"💡 Создание компонента"}),t.jsx(l,{component:"pre",sx:{backgroundColor:"#272822",color:"#f8f8f2",padding:2,borderRadius:2,overflowX:"auto"},children:t.jsx("code",{children:`
// Button.jsx
import React from 'react';

const Button = ({ onClick, children }) => {
  return (
    <button 
      className="custom-btn"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
          `})})]}),t.jsxs(l,{className:"component-usage",mt:4,children:[t.jsx(f,{variant:"h6",gutterBottom:!0,fontWeight:"bold",children:"📦 Использование компонентов"}),t.jsx(l,{component:"pre",sx:{backgroundColor:"#272822",color:"#f8f8f2",padding:2,borderRadius:2,overflowX:"auto"},children:t.jsx("code",{children:`
// App.jsx
import Button from './Button';

function App() {
  const handleClick = () => {
    console.log('Кнопка нажата!');
  };

  return (
    <div>
      <Button onClick={handleClick}>
        Нажми меня
      </Button>
    </div>
  );
}
          `})})]}),t.jsxs(l,{className:"best-practices",mt:4,children:[t.jsx(f,{variant:"h6",gutterBottom:!0,fontWeight:"bold",children:"🏆 Лучшие практики при работе с компонентами"}),t.jsxs(ie,{children:[t.jsx(G,{disableGutters:!0,children:t.jsx(w,{primary:"🔹 Разделяйте компоненты на Presentational и Container"})}),t.jsx(G,{disableGutters:!0,children:t.jsx(w,{primary:"🔹 Используйте PropTypes для валидации пропсов"})}),t.jsx(G,{disableGutters:!0,children:t.jsx(w,{primary:"🔹 Делайте компоненты маленькими и переиспользуемыми"})}),t.jsx(G,{disableGutters:!0,children:t.jsx(w,{primary:"🔹 Избегайте побочных эффектов в рендеринге"})})]})]}),t.jsxs(l,{className:"composition",mt:4,children:[t.jsx(f,{variant:"h6",gutterBottom:!0,fontWeight:"bold",children:"🔄 Композиция компонентов"}),t.jsx(l,{component:"pre",sx:{backgroundColor:"#272822",color:"#f8f8f2",padding:2,borderRadius:2,overflowX:"auto"},children:t.jsx("code",{children:`
function Card({ title, content, children }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{content}</p>
      <div className="actions">
        {children}
      </div>
    </div>
  );
}
          `})})]}),t.jsxs(l,{className:"conclusion",mt:4,p:3,bgcolor:"#e0f7fa",borderRadius:2,children:[t.jsx(f,{variant:"h6",gutterBottom:!0,fontWeight:"medium",children:"🎯 Итог:"}),t.jsx(f,{paragraph:!0,children:"Компоненты — основа любого React-приложения. Они позволяют создавать модульный, чистый и легко поддерживаемый интерфейс."}),t.jsx(f,{children:"Чем больше вы будете делить интерфейс на мелкие компоненты — тем легче будет масштабировать проект."})]})]})}export{ve as default};
