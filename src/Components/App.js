import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import HTML from "./Pages/HTML";
import CSS from "./Pages/CSS";
import JavaScript from "./Pages/JavaScript";
import ReactJS from "./Pages/ReactJS";
import Redux from "./Pages/Redux";
import TypeScript from "./Pages/TypeScript";
import Other from "./Pages/Other";
import Error from "./Error";
import Navbar from "./Navbar";
import GlowingButton from "./GlowingButton";
import Introduction from "./Pages/ReactThemes/Introduction";
import Components from "./Pages/ReactThemes/Components";
import State from "./Pages/ReactThemes/State";
import Props from "./Pages/ReactThemes/Props";
import Lifecycle from "./Pages/ReactThemes/Lifecycle";
import Events from "./Pages/ReactThemes/Events";
import Key from "./Pages/ReactThemes/Key";
import Refs from "./Pages/ReactThemes/Refs";
import Async from "./Pages/ReactThemes/Async";
import VDOM from "./Pages/ReactThemes/VDOM";
import Fragment from "./Pages/ReactThemes/Fragment";
import ReactMemo from "./Pages/ReactThemes/ReactMemo";
import UseEffect from "./Pages/ReactThemes/UseEffect";
import Router from "./Pages/ReactThemes/Router";
import Context from "./Pages/ReactThemes/Context";
import Form from "./Pages/ReactThemes/Form";
import UILibraries from "./Pages/ReactThemes/UILibraries";

import "../Styles/App.css";
import "../Styles/reset.css";

const App = () => {
  return (
    <>
      <Home />
      <Navbar />
      <GlowingButton />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/html" element={<HTML />} />
          <Route path="/css" element={<CSS />} />
          <Route path="/js" element={<JavaScript />} />
          <Route path="/reactjs" element={<ReactJS />} />
          <Route
            path="/introduction"
            element={
              <Introduction
                info={`Реакт - это JS-библиотека для создания UI (user interface). Легко переиспользуется, т.к. 
                взят подход независимых компонент. Разработчик ПО из FaceBook Джордан Валке создал React. 
                Исходный код открыт в мае 2013г.`}
              />
            }
          />
          <Route path="/components" element={<Components info={"TEWXT"} />} />
          <Route path="/props" element={<Props info={"props"} />} />
          <Route
            path="/state"
            element={<State info={"State in class components."} />}
          />
          <Route path="/lifecycle" element={<Lifecycle info={"Lifecycle"} />} />
          <Route path="/events" element={<Events info={"events"} />} />
          <Route path="/key" element={<Key info={"key"} />} />
          <Route path="/refs" element={<Refs info={"refs"} />} />
          <Route path="/async" element={<Async info={"async"} />} />
          <Route path="/vdom" element={<VDOM info={"vdom"} />} />
          <Route path="/fragment" element={<Fragment info={"fragment"} />} />
          <Route path="/reactmemo" element={<ReactMemo info={"reactmemo"} />} />
          <Route path="/useeffect" element={<UseEffect info={"useeffect"} />} />
          <Route path="/router" element={<Router info={"router"} />} />
          <Route path="/context" element={<Context info={"context"} />} />
          <Route path="/form" element={<Form info={"form"} />} />
          <Route path="/uilibraries" element={<UILibraries info={"ui"} />} />
          <Route path="/redux" element={<Redux />} />
          <Route path="/ts" element={<TypeScript />} />
          <Route path="/other" element={<Other />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
