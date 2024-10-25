'use client';
import React from 'react';
import styles from '../../styles/Global/Footer.module.scss';
import Image from 'next/image';

const Footer = () => {
    const copyEmail = () => {
        navigator.clipboard.writeText('contact@easternpost.com');
        alert('Email copied to clipboard!');
    };

    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <div className={styles.logoContainer}>
                    <Image
                        src='/easternpost-logo-no-bg.png'
                        alt='EasternPost Logo'
                        className={styles.logo}
                        width={150}
                        height={50}
                        priority
                    />
                </div>

                <div className={styles.footerGrid}>
                    <ul className={styles.footerLinks}>
                        <li><a href="/news">News</a></li>
                        <li><a href="/shop">Shop</a></li>
                        <li><a href="/authors">Authors</a></li>
                        <li><a href="/topical-reports">Topical Reports</a></li>

                    </ul>

                    <ul className={styles.footerLinks}>
                    <li><a href="/my-account">My Account</a></li>
                        <li><a href="/orders">Orders</a></li>
                        <li><a href="/wishlist">Wishlist</a></li>
                        <li><a href="/settings">Account Settings</a></li>
                    </ul>

                    <ul className={styles.footerLinks}>
                        <li><a href="/cookies">Cookies</a></li>
                        <li><a href="/privacy">Privacy Policy</a></li>
                        <li><a href="/terms">Terms of Service</a></li>
                    </ul>

                    <ul className={styles.footerLinks}>
                        <li>
                            <a href="/contact-us">Contact Us</a>
                        </li>
                        <li>Email Us:</li>
                        <li>
                            <a href="#" onClick={copyEmail}>
                                info@easternpost.uk
                            </a>
                        </li>
                    </ul>
                </div>

                <p>&copy; {new Date().getFullYear()} EasternPost. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
