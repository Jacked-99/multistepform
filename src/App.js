import "./App.css";
import { useState } from "react";
import NavBackground from "./Components/TopNav/TopNavBackground";
import Buttons from "./Components/Buttons/Buttons";
import InfoForm from "./Components/Forms/Info-Form/InfoForm";

function App() {
  const [state, setState] = useState(1);

  return (
    <>
      <NavBackground state={state}></NavBackground>
      <InfoForm />
      <Buttons />
    </>
  );
}

export default App;
