import React from 'react';
import styles from '../../styles/Footer.module.css'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.contents}>
                <h2 className={styles.title}>
                    Write by Gnuke
                </h2>
            </div>
        </footer>
    );
};

export default Footer;