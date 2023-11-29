import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./router/Home";
import Skills from "./router/Skills";
import Projects from "./router/Projects";
import ContactList from "./router/ContactList";
import Myself from "./router/Myself";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/myself" element={<Myself />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<ContactList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
