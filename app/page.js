import Image from "next/image";
import styles from "./page.module.css";

export function title (name) {
  return (
    <h1>{name}</h1>
  )
}

export default function Index() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        {title("Home")}
        <a href="/contact">Contact</a>
      </main>
    </div>
  );
}
