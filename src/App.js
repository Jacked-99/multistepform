import "./App.css";
import { useState } from "react";
import NavBackground from "./Components/TopNav/TopNavBackground";

function App() {
  const [state, setState] = useState(1);

  return (
    <>
      <NavBackground state={state}></NavBackground>
    </>
  );
}

export default App;
