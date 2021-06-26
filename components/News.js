import Cards from "./cards";
import Image from "next/image";
import styles from "../styles/News.module.css";
const News = ({ posts }) => {
  //   console.log(posts.posts);
  //   const { news } = posts;
  //   console.log(news);
  return (
    <div className={styles.contentWrapper}>
      {posts.map((news) => (
        <Cards news={news} key={news.id} />
      ))}
    </div>
  );
};

export default News;
