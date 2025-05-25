import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./topics/Home";
import AboutReact from "./topics/AboutReact";
import StartsWith from "./topics/StartsWith";
import ProjectStructure from "./topics/ProjectStructure";
import VirtualDOMPage from "./topics/VirtualDomPage";
import Components from "./topics/Components";
import ReactProps from "./topics/ReactProps";
import StateReact from "./topics/StateReact";
import LyfeCycleReact from "./topics/LifeCycleReact";
import Events from "./topics/Events";
import ReactAdvancedConceptsGuide from "./topics/ReactAdvancedConceptsGuide";
import ReactContextGuide from "./topics/ReactContextGuide";
import ReactRouter from "./topics/ReactRouter";
import LocalStorage from "./topics/LocalStorage";
import HOCreact from "./topics/HOCreact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="AboutReact" element={<AboutReact />} />
          <Route path="StartsWith" element={<StartsWith />} />
          <Route path="ProjectStructure" element={<ProjectStructure />} />
          <Route path="VirtualDOMPage" element={<VirtualDOMPage />} />
          <Route path="Components" element={<Components />} />
          <Route path="ReactProps" element={<ReactProps />} />
          <Route path="StateReact" element={<StateReact />} />
          <Route path="LyfeCycleReact" element={<LyfeCycleReact />} />
          <Route path="Events" element={<Events />} />
          <Route
            path="ReactAdvancedConceptsGuide"
            element={<ReactAdvancedConceptsGuide />}
          />
          <Route path="ReactContextGuide" element={<ReactContextGuide />} />
          <Route path="ReactRouter" element={<ReactRouter />} />
          <Route path="LocalStorage" element={<LocalStorage />} />
          <Route path="HOCreact" element={<HOCreact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
