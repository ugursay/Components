import logo from "./logo.svg";
import "./App.css";
import Login from "./Login";
import { veri } from "./Login";
import Hello from "./Hello";

function App() {
  console.log(veri);

  return (
    <div>
      {/* <Login /> */}
      {<Hello />}
    </div>
  );
}

export default App;
