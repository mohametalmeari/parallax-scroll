"use client";

import styles from "./page.module.scss";
import Image from "next/image";

const images = Array(12)
  .fill()
  .map((_, i) => `${i + 1}.jpg`);

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.spacer} />
      <div className={styles.gallery}>
        <Column images={[images[0], images[1], images[2]]} />
        <Column images={[images[3], images[4], images[5]]} />
        <Column images={[images[6], images[7], images[8]]} />
        <Column images={[images[9], images[10], images[11]]} />
      </div>
      <div className={styles.spacer} />
    </main>
  );
}

const Column = ({ images }) => {
  return (
    <div className={styles.column}>
      {images.map((src, index) => (
        <div key={index} className={styles.imageContainer}>
          <Image src={`/images/${src}`} fill alt="image" />
        </div>
      ))}
    </div>
  );
};
