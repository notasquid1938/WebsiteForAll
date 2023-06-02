import { useState, useEffect } from 'react';
import styles from '../styles/forum.module.css';
import HomeButton from './components/homebutton';
import Head from 'next/head';


export default function Forum() {
    return (
        <div>
            <Head>
                <title>{('GGH')}</title>
                <meta name="description" content={('Forum for Global Good Hub')} />
            </Head>
            <HomeButton />
            <p>Under Construction</p>
        </div>
    );
}