import styles from "./App.module.css";
import { useRef } from "react";
import NavBackground from "./Components/TopNav/TopNavBackground";
import Buttons from "./Components/Buttons/Buttons";
import FormContextProvider from "./Components/Context/FormContextProvider";
import FormDisplayer from "./Components/Forms/FormsDisplayer/FormsDisplayer";

function App() {
  const ref = useRef(null);
  const HandleClick = () => {
    ref.current.click();
  };

  return (
    <FormContextProvider>
      <div className={styles.container}>
        <NavBackground></NavBackground>
        <div className={styles.content}>
          <FormDisplayer ref={ref} />
          <Buttons onClick={HandleClick} />
        </div>
      </div>
    </FormContextProvider>
  );
}

export default App;
