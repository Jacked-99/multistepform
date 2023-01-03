import { useState } from "react";
import FormContext from "./FormContext";

const FormContextProvider = (props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentData, setCurrentData] = useState({});

  const setPageHandler = (action) => {
    if (action.type === "inc" && currentPage < 5) {
      setCurrentPage((prev) => prev + 1);
    } else if (action.type === "dec") {
      setCurrentPage((prev) => prev - 1);
    }
  };
  const setDataHandler = (data) => {
    setCurrentData({ ...currentData, ...data });
  };
  const defaultContext = {
    data: currentData,
    payment: {},
    addons: [],
    page: currentPage,
    setPage: setPageHandler,
    setData: setDataHandler,
  };
  return (
    <FormContext.Provider value={defaultContext}>
      {props.children}
    </FormContext.Provider>
  );
};

export default FormContextProvider;
