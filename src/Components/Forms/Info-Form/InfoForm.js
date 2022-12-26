import Card from "../../UI/Card";
import styles from "./InfoForm.module.css";

const InfoForm = (props) => {
  return (
    <form className={styles.Form}>
      <h2>Personal Info</h2>
      <p>Please provide your name, email, address, and phone number</p>
      <label htmlFor="#name">Name</label>
      <input id="name" type="text"></input>
      <label htmlFor="#mail">Email Address</label>
      <input id="mail" type="email"></input>
      <label htmlFor="#number">Phone Number</label>
      <input id="number" type="tel"></input>
    </form>
  );
};

export default InfoForm;
