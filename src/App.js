import "./App.css";
import Button from "./components/button";
import TextField from "./components/textfieldComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button onClick={() => console.log("click")} label="click me please" />
        <TextField label="teste" value="inicial" />
      </header>
    </div>
  );
}

export default App;
