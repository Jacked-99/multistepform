import "./App.css";
import { useState } from "react";
import NavBackground from "./Components/TopNav/TopNavBackground";
import Buttons from "./Components/Buttons/Buttons";

function App() {
  const [state, setState] = useState(1);

  return (
    <>
      <NavBackground state={state}></NavBackground>
      <Buttons />
    </>
  );
}

export default App;
