import { faWindowClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../styles/Popup.module.css";
import { useState } from "react";

interface functions {
  setIsOpen: Function;
  setNewNameForOneTodo: Function;
  id: number;
}

const Popup: React.FC<functions> = ({setIsOpen, setNewNameForOneTodo, id}) => {

  const [inputValue, setInputValue] = useState<string>("");

  return (
    <div className={styles.popup_box}>
      <div className={styles.box}>
        <input type="text" placeholder="Change your plan.." onChange={(event) => setInputValue(event.target.value)}/>
        <button className={styles.add_btn}
          onClick={() => {
            setNewNameForOneTodo(id, inputValue);
            setIsOpen(false);
          }}>add new name</button>
        <FontAwesomeIcon className={styles.close_icon} onClick={() => setIsOpen(false)} icon={faWindowClose} />
      </div>
    </div>
  );
};

export default Popup;
