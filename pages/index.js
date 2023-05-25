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
          <a className={`${styles.linkButton} ${styles.blue}`}>Live Chat</a>
        </Link>

        <Link href="/files">
          <a className={`${styles.linkButton} ${styles.red}`}>Files</a>
        </Link>
      </div>

      <div className={styles.buttonContainerBottom}>
        <Link href="/blog">
          <a className={`${styles.linkButton} ${styles.green}`}>Blog</a>
        </Link>

        <Link href="/forum">
          <a className={`${styles.linkButton} ${styles.blue}`}>Forum</a>
        </Link>
      </div>

      <div>
        <h1>About</h1>
        <p1 className="About">
          The website aims to combat money&apos;s overwhelming influence in politics and challenge corporate conglomerates. We believe that a fair and just society can only be achieved by empowering people to organize and advocate for change. Our mission is to provide a platform that enables individuals to come together, share knowledge, and take collective action for the benefit of all.

          Through our various resources, such as blogs, files, and chat functionality, we strive to create a space where individuals can educate themselves, engage in meaningful discussions, and organize grassroots movements. We encourage active participation, collaboration, and the exchange of ideas to promote transparency, accountability, and social justice.

          Join us in our fight against the undue influence of money in politics and the growing power of corporate conglomerates. Together, we can make a difference and work towards a more equitable and inclusive society, where the needs and well-being of all individuals are prioritized.
        </p1>
      </div>
    </div>
  );
}
