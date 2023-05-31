import React from 'react';
import Link from 'next/link';
import styles from '../../styles/homebutton.module.css'; 

export default function HomeButton() {
  return (
    <div className={styles.buttonText}>
      <Link href="/">
        <a className={styles.button}>Home</a>
      </Link>
    </div>
  );
}
