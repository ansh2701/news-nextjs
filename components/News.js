import Cards from "./Cards";
import styles from "../styles/News.module.css";
const News = ({ posts }) => {
  return (
    <div className={styles.contentWrapper}>
      {posts.map((news) => (
        <Cards news={news} key={news.id} />
      ))}
    </div>
  );
};

export default News;
