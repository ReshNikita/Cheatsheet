import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import HTML from "./Pages/HTML";
import CSS from "./Pages/CSS";
import JavaScript from "./Pages/JavaScript";
import Error from "./Error";
import Navbar from "./Navbar";
import GlowingButton from "./GlowingButton";
import Redux from "./Pages/Redux";
import TypeScript from "./Pages/TypeScript";
import Other from "./Pages/Other";

import ReactTopics from "./Pages/ReactTopics";

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
          <Route path="/reactjs/*" element={<ReactTopics />} />
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
