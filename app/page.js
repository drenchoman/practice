import Image from 'next/image';
import styles from './page.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Welcome to this NEXTJS course!</h1>
      <p>Lesh gooo!</p>
      <p>
        <Link href="/about">About Us</Link>
      </p>
    </main>
  );
}
