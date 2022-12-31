import { useContext, forwardRef } from "react";
import FormContext from "../../Context/FormContext";
import AddonForm from "../AddonForm/AddonForm";
import FinalForm from "../FinalForm/FinalForm";
import InfoForm from "../Info-Form/InfoForm";
import PaymentForm from "../PaymentForm/PaymentForm";
import SummaryForm from "../SummaryForm/SummaryForm";

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
    }
    if (ctx.page === 4) {
      return <SummaryForm ref={ref} />;
    } else {
      return <FinalForm />;
    }
  };
  return <>{Displayer()}</>;
});

export default FormDisplayer;
