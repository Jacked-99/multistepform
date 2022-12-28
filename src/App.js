import "./App.css";
import { useState, useRef } from "react";
import NavBackground from "./Components/TopNav/TopNavBackground";
import Buttons from "./Components/Buttons/Buttons";
import InfoForm from "./Components/Forms/Info-Form/InfoForm";
import PaymentForm from "./Components/Forms/PaymentForm/PaymentForm";

function App() {
  const [state, setState] = useState(1);
  const ref = useRef(null);
  const HandleClick = () => {
    ref.current.click();
  };

  return (
    <>
      <NavBackground state={state}></NavBackground>
      <PaymentForm />
      <Buttons onClick={HandleClick} />
    </>
  );
}

export default App;
