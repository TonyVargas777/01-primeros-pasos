import logo from "./logo.svg";
import "./App.css";
import MiComponente from "./MiComponente";
import SegundoComponente from "./SegundoComponente";
import { TercerComponente } from "./TercerComponente";
import { EventosComponente } from "./EventosComponente";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Primeros pasos en REACT 🫡 !!!!</p>
        <div className="componentes">
          <EventosComponente/ >
          <hr/>
          <TercerComponente nombre="Tony" apellidos="Vargas"/>
          <hr/>
          <SegundoComponente />
          <hr />
          <MiComponente />
        </div>
      </header>
    </div>
  );
}

export default App;
