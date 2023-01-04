import styles from "./InfoForm.module.css";
import { forwardRef, useContext, useEffect, useState } from "react";
import FormContext from "../../Context/FormContext";

const InfoForm = forwardRef((props, ref) => {
  const [valid, setValid] = useState(false);
  const [nameVal, setNameVal] = useState({
    name: "",
    valid: false,
    ohno: false,
  });
  const [emailVal, setEmailVal] = useState({
    mail: "",
    valid: false,
    ohno: false,
  });
  const [phoneVal, setPhoneVal] = useState({
    phone: "",
    valid: false,
    ohno: false,
  });
  let ctx = useContext(FormContext);
  const hanldeSumbit = (e) => {
    if (valid === true) {
      e.preventDefault();
      console.log("submit");
      ctx.setData({ name: nameVal, phone: phoneVal, email: emailVal });
      ctx.setPage({ type: "inc" });
    }
    e.preventDefault();
    if (nameVal.valid === false) {
      setNameVal({ ...nameVal, ohno: true });
    }
    if (phoneVal.valid === false) {
      setPhoneVal({ ...phoneVal, ohno: true });
    }
    if (emailVal.valid === false) {
      setEmailVal({ ...emailVal, ohno: true });
    }
  };
  const emailChangeHandler = (e) => {
    setEmailVal({ mail: e.target.value, valid: emailVal.mail.includes("@") });
  };
  const phoneChangeHandler = (e) => {
    setPhoneVal({ phone: e.target.value, valid: phoneVal.phone.length > 5 });
  };
  const nameChangeHandler = (e) => {
    setNameVal({ name: e.target.value, valid: nameVal.name.trim().length > 5 });
  };
  useEffect(() => {
    const validityCheck = setTimeout(() => {
      if (
        nameVal.valid === true &&
        phoneVal.valid === true &&
        emailVal.valid === true
      ) {
        setValid(true);
      }
    }, 500);

    return () => {
      clearTimeout(validityCheck);
    };
  }, [nameVal, emailVal, phoneVal]);
  return (
    <form onSubmit={hanldeSumbit} className={styles.Form}>
      <h2 className={styles.h2}>Personal Info</h2>
      <p className={styles.p}>
        Please provide your name, email address, and phone number
      </p>
      <div className={styles.head}>
        <label className={styles.label} htmlFor="name">
          Name
        </label>
        {nameVal.ohno === true ? (
          <p className={styles.textarea}>This field is required</p>
        ) : (
          ""
        )}
      </div>
      <input
        className={`${styles.input} ${nameVal.ohno ? styles.incorect : ""}`}
        id="name"
        type="text"
        placeholder="e.g. Stephen King"
        value={nameVal.name}
        onChange={nameChangeHandler}
      ></input>

      <div className={styles.head}>
        <label className={styles.label} htmlFor="mail">
          Email Address
        </label>
        {emailVal.ohno === true ? (
          <p className={styles.textarea}>This field is required</p>
        ) : (
          ""
        )}
      </div>
      <input
        className={`${styles.input} ${emailVal.ohno ? styles.incorect : ""}`}
        id="mail"
        type="email"
        placeholder="e.g. stephenking@lorem.com"
        value={emailVal.name}
        onChange={emailChangeHandler}
      ></input>

      <div className={styles.head}>
        <label className={styles.label} htmlFor="number">
          Phone Number
        </label>
        {phoneVal.ohno === true ? (
          <p className={styles.textarea}>This field is required</p>
        ) : (
          ""
        )}
      </div>
      <input
        className={`${styles.input} ${phoneVal.ohno ? styles.incorect : ""}`}
        id="number"
        type="tel"
        placeholder="e.g. +1 234 567 890"
        value={phoneVal.phone}
        onChange={phoneChangeHandler}
      ></input>
      <button className={styles.button} type="submit" ref={ref}></button>
    </form>
  );
});

export default InfoForm;
