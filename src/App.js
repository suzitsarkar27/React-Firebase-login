import "./App.css";
import Header from "./Componont/Header/Header";
import { Route, Router, Routes } from "react-router-dom";
import Reagester from "./Componont/Reagester/Reagester";
import Login from "./Componont/Login/Login";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/reagster" element={<Reagester></Reagester>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
      </Routes>
    </div>
  );
}

export default App;
