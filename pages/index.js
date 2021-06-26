import Head from "next/head";
import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

// import Cards from "../components/cards";
import News from "../components/News";
import styles from "../styles/Home.module.css";

export default function Home(posts) {
  const [search, setSearch] = useState("");
  const imgPosts = posts.posts.news.filter((news) => news.image !== "None");
  const filteredPosts = imgPosts.filter(
    (news) =>
      news.category.includes(search) || news.description.includes(search)
  );
  const handleChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value.toLowerCase());
  };
  return (
    <>
      <Head>
        <title>NewsBytes</title>
        <meta
          name="description"
          content="Get Latest News around the globe or search for any news"
        />
        <meta
          name="keywords"
          content="news,newsbytes,ansh agrawal,sports news,breaking news,free news, bbc"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header onChange={handleChange} />
      <News posts={filteredPosts} />
      <Footer />
    </>
  );
}
export async function getStaticProps() {
  const res = await fetch(
    `https://api.currentsapi.services/v1/latest-news?apiKey=xnj4scInf72AVFp114O7K0EhRwu0nejU3yWLKxaMxOq3a22G&language=en`
  );
  const posts = await res.json();

  if (!posts) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      posts,
    },
  };
}
