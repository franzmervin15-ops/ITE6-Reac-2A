import styles from "./Button.module.css";

const Button = ({ btnName, onclick }) => {
  return (
    <button 
      className={styles.buttonComponent}
      onClick={onclick}
    >{btnName}</button>
  );
}

export default Button;