import styles from "./FinalForm.module.css";
import final from "../../../assets/images/icon-thank-you.svg";

const FinalForm = () => {
  return (
    <div className={styles.Form}>
      <img src={final} className={styles.img} alt="" />
      <h2 className={styles.h2}>Thank you!</h2>
      <p className={styles.p}>
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </div>
  );
};

export default FinalForm;
