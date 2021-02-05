import logo from "./logo.svg";
import "./App.css";
import PakAimsStudent from "./components/PakAimsStudent";
import MyExample from "./components/MyExample";

function App() {
  const disturbStudent = (name) => {
    alert("You Disturbed " + name);
  };
  return (
    <div className="App">
      <h1>Hello From React</h1>
      <MyExample />
      <PakAimsStudent name="Usman Akram" onDisturbMe={disturbStudent} />
      <PakAimsStudent name="Kashif" onDisturbMe={disturbStudent} />
      <PakAimsStudent name="Ali" onDisturbMe={disturbStudent} />
    </div>
  );
}

export default App;
