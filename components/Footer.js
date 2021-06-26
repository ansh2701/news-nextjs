import { FaHeart } from "react-icons/fa";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>
        Created with <FaHeart /> by Ansh Agrawal
      </p>
    </footer>
  );
};

export default Footer;
