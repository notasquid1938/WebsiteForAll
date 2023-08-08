import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/index.module.css";
import i18n from "../i18n";
import Image from "next/image";

export default function Home() {
  const { t } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState("en");

  const handleLanguageChange = (event) => {
    const language = event.target.value;
    setSelectedLanguage(language);
    i18n.changeLanguage(language);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>{t("GGH")}</title>
        <meta name="description" content={t("Home page for Global Good Hub")} />
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
        <h1>{t("homepage.welcome")}</h1>
      </div>

      <div className={styles.slogan}>
        <p1>{t("homepage.slogan")}</p1>
      </div>

      <div className={styles.languageDropdown}>
        <select value={selectedLanguage} onChange={handleLanguageChange}>
          <option value="en">English</option>
          <option value="es">Español</option> {/* Spanish */}
          <option value="fr">Français</option> {/* French */}
          <option value="de">Deutsch</option> {/* Dutch */}
          <option value="pl">Polski</option> {/* Polish */}
          <option value="sg">Bahasa Indonesia</option> {/* Indonesian */}
          <option value="zh">简体中文</option> {/* Chinese Simplified */}
          <option value="hi">हिंदी</option> {/* Hindi */}
          <option value="it">Italiano</option> {/* Italian */}
          <option value="uk">Українська</option> {/* Ukranian */}
          <option value="ru">Русский</option> {/* Russian */}
        </select>
      </div>

      <div className={styles.buttonContainerTop}>
        <Link href="/chat">
          <a className={`${styles.linkButton} ${styles.buttonColor}`}>
            <Image
              src="/images/Chat.png"
              alt="Chat"
              className={styles.buttonImage}
              layout="responsive"
              width={5}
              height={3}
            />
            {t("homepage.liveChat")}
          </a>
        </Link>

        <Link href="/files">
          <a className={`${styles.linkButton} ${styles.buttonColor}`}>
            <Image
              src="/images/Files.png"
              alt="Files"
              className={styles.buttonImage}
              layout="responsive"
              width={5}
              height={3}
            />
            {t("homepage.files")}
          </a>
        </Link>
      </div>

      <div className={styles.buttonContainerBottom}>
        <Link href="/blog">
          <a className={`${styles.linkButton} ${styles.buttonColor}`}>
            <Image
              src="/images/Logo.png"
              alt="Blog"
              className={styles.buttonImage}
              layout="responsive"
              width={5}
              height={3}
            />
            {t("homepage.blog")}
          </a>
        </Link>

        <Link href="/forum">
          <a className={`${styles.linkButton} ${styles.buttonColor}`}>
            <Image
              src="/images/Forum.png"
              alt="Forum"
              className={styles.buttonImage}
              layout="responsive"
              width={5}
              height={3}
            />
            {t("homepage.forum")}
          </a>
        </Link>
      </div>

      <div>
        <h1 className={styles.aboutTitle}>{t("homepage.aboutTitle")}</h1>
        <div
          className={styles.aboutContent}
          dangerouslySetInnerHTML={{ __html: t("homepage.aboutContent") }}
        />
      </div>
    </div>
  );
}
