import { useState, useEffect } from 'react';
import styles from '../styles/blog.module.css';
import { format } from 'date-fns';

export default function Blog() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch('http://localhost:1337/api/blogs');
        const data = await response.json();
        setBlogs(data.data);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className={styles.blog}>
      {blogs.map(blog => (
        <div className={styles['blog-item']} key={blog.id}>
          <h1>{blog.attributes.Title}</h1>
          <h2>{format(new Date(blog.attributes.PublishedOn), 'MMM dd, yyyy HH:mm')}</h2>
          <p>{blog.attributes.Content}</p>
        </div>
      ))}
    </div>
  );
}
