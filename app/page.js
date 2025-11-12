import Image from "next/image";
import styles from "./page.module.css";
import Carousel from "@/components/carrusel";

const tarjetas = [
    {
        imagen: '/images/imagencarrusel1.jpeg', 
        titulo: "Biodivesidad", 
        texto: "El Parque Nacional Iguazú es un refugio natural que protege una gran variedad de especies animales y vegetales. En sus bosques subtropicales habitan animales como el yaguareté, tucanes y monos aulladores, muchos de ellos en peligro de extinción. Esta diversidad lo convierte en un espacio fundamental para la conservación de la naturaleza."
    }, 
    {
        imagen: "/images/imagencarrusel2.jpeg", 
        titulo: "Patrimonio natural de la humanidad", 
        texto: "En 1984, la UNESCO declaró al Parque Nacional Iguazú como Patrimonio de la Humanidad por su valor ecológico y paisajístico. Sus famosas cataratas, consideradas una de las maravillas naturales del mundo, atraen la atención por su magnitud y belleza, siendo un símbolo natural de Argentina."
    }, 
    {
        imagen: "/images/imagencarrusel3.jpeg", 
        titulo: "Turismo y desarrollo sostenible", 
        texto:  "El parque es un importante destino turístico que recibe millones de visitantes cada año. Este turismo genera empleo y promueve el desarrollo económico local, al tiempo que fomenta la protección del medio ambiente y la educación ambiental para conservar este tesoro natural a largo plazo."
    }
]

export default function Inicio () {
  return (
    <main className={styles.inicio}>
      <h2>Ubicación</h2>

      <div className={styles.mapa}>
        <p>
          El Parque Nacional Iguazú está ubicado en el noreste de Argentina,
          en la provincia de Misiones, cerca de la frontera con Brasil.
          Se encuentra a unos 17 km de la ciudad de Puerto Iguazú, en una zona
          de selva subtropical densa y húmeda. El río Iguazú atraviesa esta
          región, formando las famosas cataratas. El acceso principal es desde
          Puerto Iguazú, a través de rutas que conectan con otras ciudades de
          Argentina y países vecinos.
        </p>

        <iframe
          allowFullScreen
          height="450"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4499.9950418414655!2d-54.45567666280236!3d-25.683863253590523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94f6ea41eb9d9119%3A0x2ab8d74e979dc0a2!2sParque%20Nacional%20Iguaz%C3%BA!5e0!3m2!1ses-419!2sar!4v1761095720069!5m2!1ses-419!2sar"
          style={{ border: 0, width: "600px" }}
        />
      </div>


        <h2>Importancia</h2>
            <Carousel items={tarjetas} />
    </main>
  );
}
