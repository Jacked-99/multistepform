import "./App.css";
import { useState, useRef } from "react";
import NavBackground from "./Components/TopNav/TopNavBackground";
import Buttons from "./Components/Buttons/Buttons";
import InfoForm from "./Components/Forms/Info-Form/InfoForm";
import PaymentForm from "./Components/Forms/PaymentForm/PaymentForm";
import AddonForm from "./Components/Forms/AddonForm/AddonForm";
import FormContextProvider from "./Components/Context/FormContextProvider";
import FormDisplayer from "./Components/Forms/FormsDisplayer/FormsDisplayer";
import SummaryForm from "./Components/Forms/SummaryForm/SummaryForm";
import FinalForm from "./Components/Forms/FinalForm/FinalForm";

function App() {
  const [state, setState] = useState(1);
  const ref = useRef(null);
  const HandleClick = () => {
    ref.current.click();
  };

  return (
    <FormContextProvider>
      <NavBackground state={state}></NavBackground>

      <FormDisplayer ref={ref} />
      <Buttons onClick={HandleClick} />
    </FormContextProvider>
  );
}

export default App;
