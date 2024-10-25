// 'use client';
// import React, { useState } from 'react';
// import { slide as Menu } from 'react-burger-menu';
// import styles from '../../styles/Global/Header.module.scss';
// import Image from 'next/image';
// import Link from 'next/link';
//
// const Header = () => {
//     const [isOpen, setIsOpen] = useState(false);
//
//     const handleStateChange = (state) => {
//         setIsOpen(state.isOpen);
//     };
//
//     const closeMenu = () => {
//         setIsOpen(false);
//     };
//
//     return (
//         <header className={styles.header}>
//             <div className={styles.logoContainer}>
//                 <Link href="/public">
//                     <Image
//                         src="/easternpost-logo-no-bg.png"
//                         alt="EasternPost Logo"
//                         className={styles.logo}
//                         width={150}
//                         height={50}
//                         priority
//                     />
//                 </Link>
//             </div>
//
//             {/* Desktop Navigation */}
//             <nav className={styles.desktopNav}>
//                 <ul className={styles.navLinks}>
//                     <li><Link href="/news">News</Link></li>
//                     <li><Link href="/shop">Shop</Link></li>
//                     <li><Link href="/authors">Authors</Link></li>
//                     <li><Link href="/topical-reports">Topical Reports</Link></li>
//                     <li><Link href="/contact-us">Contact Us</Link></li>
//                 </ul>
//             </nav>
//
//             {/* Mobile Burger Menu */}
//             <Menu
//                 right
//                 isOpen={isOpen}
//                 onStateChange={(state) => handleStateChange(state)}
//                 className={styles.burgerMenu}
//             >
//                 {/*<ul className={styles.mobileNavLinks}>*/}
//                 {/*    <li><Link href="/news" onClick={closeMenu}>News</Link></li>*/}
//                 {/*    <li><Link href="/shop" onClick={closeMenu}>Shop</Link></li>*/}
//                 {/*    <li><Link href="/authors" onClick={closeMenu}>Authors</Link></li>*/}
//                 {/*    <li><Link href="/topical-reports" onClick={closeMenu}>Topical Reports</Link></li>*/}
//                 {/*    <li><Link href="/contact-us" onClick={closeMenu}>Contact Us</Link></li>*/}
//                 {/*</ul>*/}
//             </Menu>
//         </header>
//     );
// };
//
// export default Header;
