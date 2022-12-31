import { createContext } from "react";

const FormContext = createContext({
  data: {},
  payment: {},
  addons: [],
  page: 1,
  setPage: () => {},
  setData: () => {},
});

export default FormContext;
