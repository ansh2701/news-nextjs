import Link from "next/link";
import { FaNewspaper, FaSearch } from "react-icons/fa";
import styles from "../styles/Header.module.css";
const Header = ({ onChange }) => {
  return (
    <header>
      <nav className={styles.navbar}>
        <div className={styles.navLogo}>
          <Link href="/">
            <a>
              <FaNewspaper className={styles.icon} />
              <span>NewsBytes</span>
            </a>
          </Link>
        </div>
        <div className={styles.searchBox}>
          <button className={styles.btnSearch}>
            <FaSearch />
          </button>
          <input
            type="text"
            placeholder="Search..."
            onChange={onChange}
            className={styles.inputSearch}
          />
        </div>
      </nav>
    </header>
  );
};

export default Header;
