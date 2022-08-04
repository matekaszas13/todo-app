import { faWindowClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "./Button";
import styles from "../styles/Popup.module.css";

interface functions {
  setIsOpen: Function;
}

const Popup: React.FC<functions> = ({setIsOpen}) => {
  return (
    <div className={styles.popup_box}>
      <div className={styles.box}>
        <input type="text" placeholder="Change your plan.." />
        <Button
          className={styles.add_btn}
          buttonName={"add todo"}
          // addTodo={addTodo}
        />
        <FontAwesomeIcon className={styles.close_icon} onClick={() => setIsOpen(false)} icon={faWindowClose} />
      </div>
    </div>
  );
};

export default Popup;
