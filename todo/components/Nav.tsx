import Link from "next/link";
import styles from "../styles/Nav.module.css";

const Nav = () => {
  return (
    <div className={styles.navigation}>
      <nav>
        <ul className={styles.links}>
          <li className={styles.first_link}>
            <Link className={styles.link} href="/">
              <a className={styles.link}><span className={styles.link_name}>Home</span></a>
            </Link>
          </li>
          
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
