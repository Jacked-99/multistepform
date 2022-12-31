import "./App.css";
import { useState, useRef } from "react";
import NavBackground from "./Components/TopNav/TopNavBackground";
import Buttons from "./Components/Buttons/Buttons";
import InfoForm from "./Components/Forms/Info-Form/InfoForm";
import PaymentForm from "./Components/Forms/PaymentForm/PaymentForm";
import AddonForm from "./Components/Forms/AddonForm/AddonForm";

function App() {
  const [state, setState] = useState(1);
  const ref = useRef(null);
  const HandleClick = () => {
    ref.current.click();
  };

  return (
    <>
      <NavBackground state={state}></NavBackground>
      <AddonForm ref={ref} />
      <Buttons onClick={HandleClick} />
    </>
  );
}

export default App;
