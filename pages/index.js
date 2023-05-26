import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/index.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Homepage</title>
        <meta name="description" content="A grassroots community dedicated to combating corporate conglomerates." />
      </Head>

      <div className={styles.githubButtonContainer}>
        <a
          href="https://github.com/notasquid1938/WebsiteForAll"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.githubButton}
        >
          Github
        </a>
      </div>

      <div className={styles.title}>
        <h1>Welcome to the Homepage!</h1>
      </div>

      <div className={styles.slogan}>
        <p1>For the Benefit of All</p1>
      </div>

      <div className={styles.buttonContainerTop}>
        <Link href="/chat">
          <a className={`${styles.linkButton} ${styles.buttonColor}`}>
            <img src="/images/Chat.png" alt="Chat" className={styles.buttonImage} />
            Live Chat
          </a>
        </Link>

        <Link href="/files">
          <a className={`${styles.linkButton} ${styles.buttonColor}`}>
            <img src="/images/Files.png" alt="Files" className={styles.buttonImage} />
            Files
          </a>
        </Link>
      </div>

      <div className={styles.buttonContainerBottom}>
        <Link href="/blog">
          <a className={`${styles.linkButton} ${styles.buttonColor}`}>
            <img src="/images/Logo.png" alt="Blog" className={styles.buttonImage} />
            Blog
          </a>
        </Link>

        <Link href="/forum">
          <a className={`${styles.linkButton} ${styles.buttonColor}`}>
            <img src="/images/Forum.jpg" alt="Forum" className={styles.buttonImage} />
            Forum
          </a>
        </Link>
      </div>

      <div>
        <h1>About</h1>
        <p1 className="About">
          Lorem ipsum... you get the idea. This needs work.
        </p1>
      </div>
    </div>
  );
}
