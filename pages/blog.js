import React from 'react';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';
import styles from '../styles/blog.module.css';
import HomeButton from './components/homebutton';
import Head from 'next/head';

export default function Blog({ blogs }) {
  return (
    <div className={styles.blogPost}>
      <Head>
        <title>{('GGH')}</title>
        <meta name="description" content={('Home page for Global Good Hub')} />
      </Head>
      <HomeButton />
      <h1 className={styles.blogTitle}>Blog Page</h1>
      {blogs.map((blog) => (
        <div key={blog.id}>
          <h2 className={styles.blogPostTitle}>{blog.attributes.Title}</h2>
          <ReactMarkdown>{blog.attributes.Content}</ReactMarkdown>
          <p>Published on: {formatDate(blog.attributes.PublishedOn)}</p>
          <hr className={styles.blogPostDivider} />
        </div>
      ))}
    </div>
  );
}

function formatDate(dateString) {
  const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
  return new Date(dateString).toLocaleString(undefined, options);
}

export async function getServerSideProps() {
  try {
    const response = await axios.get('http://localhost:80/api/blogs');
    const blogs = response.data.data;
    return {
      props: { blogs },
    };
  } catch (error) {
    console.error(error);
    return {
      props: { blogs: [] },
    };
  }
}
