/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { FaLongArrowAltRight } from "react-icons/fa";
import styles from "../styles/Cards.module.css";

const Cards = ({ news }) => {
  return (
    <div className={styles.newsCard}>
      <a href="#" className={styles.newsCard__cardLink}></a>
      <img src={news.image} alt="" className={styles.newsCard__image} />
      <div className={styles.newsCard__textWrapper}>
        <h2 className={styles.newsCard__title}>{news.title}</h2>
        <div className={styles.newsCard__postDate}>
          {news.published && news.published.slice(0, 10)}
        </div>
        <div className={styles.newsCard__detailsWrapper}>
          <p className={styles.newsCard__excerpt}>{news.description}&hellip;</p>
          <Link href={news.url}>
            <a className={styles.newsCard__readMore}>
              <span>Read more</span>
              <FaLongArrowAltRight className={styles.icon} />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cards;
