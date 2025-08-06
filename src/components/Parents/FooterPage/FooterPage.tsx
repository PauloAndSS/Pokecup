import { JSX } from 'react';
import style from './FooterPage.module.css';

function FooterPage():JSX.Element {
  return (
    <footer>
        <section className={style.footerSectionMoreAbout}>
            <div className={style.logo}>
                <img src="/logo.png" alt="Pokecup Logo" />
                <h1>Pokecup</h1>
            </div>
            <div className={style.contentFooter}>
                <p>pokecup is a platform dedicated to Pokémon enthusiasts, offering a space to explore, learn, and connect with fellow fans. Whether you're into TCG, VGC, or just love Pokémon, Pokecup has something for everyone.</p>
                <p>Join our community to share your passion, discover new strategies, and stay updated with the latest Pokémon news. From competitive play to casual discussions, Pokecup is your go-to destination for all things Pokémon.</p>
                <p>Stay tuned for exciting features, events, and updates as we continue to grow and enhance your Pokémon experience!</p>
            </div>
        </section>
        <section className={style.footerSectionRights}>
            <p>Pokecup &copy; 2023 All rights reserved.</p>
            <p>Developed by <a href="https://github.com/PauloAndSS" target="_blank" rel="noopener noreferrer">Paulo AndSS</a></p>
            <p>IFES - Santa Teresa</p>
        </section>
    </footer>
  );
}

export default FooterPage;