"use client";
import styles from "../styles/carrusel.module.css"
import { useState } from "react";
import Card from "./card";
import classNames from "classnames";




export default function Carousel({ items }) {
  const [index, setIndex] = useState(0);

  return (
    <div className={styles.carousel}>
      {/* Slides */}
      <div
        className={styles.slides}
        style={{
          transform: `translateX(-${index * 100}%)`,
        }}
      >
        {items.map((item, i) => (
          <Card
            key={i}
            imagen={item.imagen}
            titulo={item.titulo}
            texto={item.texto}
          />
        ))}
      </div>

      {/* Indicadores */}
      <div className={styles.indicators}>
        {items.map((_, i) => {
            const indicatorClass = classNames(styles.bar, {[styles.active]: i === index})
            return(
            <div
                key={i}
                className={indicatorClass}
                onClick={() => setIndex(i)}
            ></div>
            )}
        )}
      </div>
    </div>
  );
}
