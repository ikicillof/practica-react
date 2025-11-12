import "./globals.css";
import styles from "@/styles/layout.module.scss";
import { Bitter } from "next/font/google";

const bitter = Bitter({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = {
  title: "parque-nacional-iguazu",
  description: "Conoce todas las experiencias maravillosas que te esperan en las catarastas del Iguazú",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={bitter.className}>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
        />
      </head>

      <body className={styles.layout}>
        <header>
          <div>
            <h1>Parque Nacional Iguazu</h1>
            <img src="/images/emblema_-_pn_iguazu.png" />
          </div>

          <nav>
            <label htmlFor="menu-toggle">
              <span className="material-symbols-outlined">menu</span>
            </label>
            <input id="menu-toggle" type="checkbox" />
            <ul>
              <li className={styles.close}>
                <label htmlFor="menu-toggle">
                  <span className="material-symbols-outlined">close</span>
                </label>
              </li>
              <li><a className={styles.activo} href="/">Inicio</a></li>
              <li><a href="">Flora</a></li>
              <li><a href="">Fauna</a></li>
              <li><a href="">Excursiones</a></li>
              <li><a href="">Contactos</a></li>
            </ul>
          </nav>
        </header>

        {children}

        <footer>
          <section>
            <nav>
              <ul className={styles.menufotter}>
                <li><a href="/">Inicio</a></li>
                <li><a href="">Flora</a></li>
                <li><a href="">Fauna</a></li>
                <li><a href="">Excursiones</a></li>
                <li><a href="">Contactos</a></li>
              </ul>
            </nav>
          </section>

          <section>
            <ul>
              <li><a href="https://www.instagram.com/parque.nacional.iguazu/?hl=es"><img src="/images/instagram.svg" /></a></li>
              <li><a href="https://www.facebook.com/ParqueNacIguazu/?locale=es_LA"><img src="/images/facebook.svg" /></a></li>
            </ul>
          </section>

          <section>
            <p>© Copyright 2025, Parque Nacional Iguazú.<br />Todos los derechos reservados</p>
            <img className={styles.imgFooter} src="/images/emblema_-_pn_iguazu.png" />
          </section>
        </footer>
      </body>
    </html>
  );
}
