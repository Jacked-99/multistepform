import { useContext, forwardRef } from "react";
import FormContext from "../../Context/FormContext";
import AddonForm from "../AddonForm/AddonForm";
import InfoForm from "../Info-Form/InfoForm";
import PaymentForm from "../PaymentForm/PaymentForm";

const FormDisplayer = forwardRef((props, ref) => {
  let ctx = useContext(FormContext);
  const Displayer = () => {
    if (ctx.page === 1) {
      return <InfoForm ref={ref} />;
    }
    if (ctx.page === 2) {
      return <PaymentForm ref={ref} />;
    }
    if (ctx.page === 3) {
      return <AddonForm ref={ref} />;
    } else {
      return;
    }
  };
  return <>{Displayer()}</>;
});

export default FormDisplayer;
