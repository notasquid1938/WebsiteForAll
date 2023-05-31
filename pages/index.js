import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/index.module.css';
import i18n from '../i18n';

export default function Home() {
  const { t } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState('en');

  const handleLanguageChange = (event) => {
    const language = event.target.value;
    setSelectedLanguage(language);
    i18n.changeLanguage(language);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>{t('homepage.title')}</title>
        <meta name="description" content={t('homepage.description')} />
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
        <h1>{t('homepage.welcome')}</h1>
      </div>

      <div className={styles.slogan}>
        <p1>{t('homepage.slogan')}</p1>
      </div>

      <div className={styles.languageDropdown}>
        <select value={selectedLanguage} onChange={handleLanguageChange}>
          <option value="en">English</option>
          <option value="es">Spanish</option>
          <option value="fr">French</option>
          {/* Add more language options as needed */}
        </select>
      </div>

      <div className={styles.buttonContainerTop}>
        <Link href="/chat">
          <a className={`${styles.linkButton} ${styles.buttonColor}`}>
            <img src="/images/Chat.png" alt="Chat" className={styles.buttonImage} />
            {t('homepage.liveChat')}
          </a>
        </Link>

        <Link href="/files">
          <a className={`${styles.linkButton} ${styles.buttonColor}`}>
            <img src="/images/Files.png" alt="Files" className={styles.buttonImage} />
            {t('homepage.files')}
          </a>
        </Link>
      </div>

      <div className={styles.buttonContainerBottom}>
        <Link href="/blog">
          <a className={`${styles.linkButton} ${styles.buttonColor}`}>
            <img src="/images/Logo.png" alt="Blog" className={styles.buttonImage} />
            {t('homepage.blog')}
          </a>
        </Link>

        <Link href="/forum">
          <a className={`${styles.linkButton} ${styles.buttonColor}`}>
            <img src="/images/Forum.png" alt="Forum" className={styles.buttonImage} />
            {t('homepage.forum')}
          </a>
        </Link>
      </div>

      <div>
        <h1 className={styles.aboutTitle}>{t('homepage.aboutTitle')}</h1>
        <p1 className="About">{t('homepage.aboutContent')}</p1>
      </div>
    </div>
  );
}