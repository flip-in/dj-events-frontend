import Link from "next/link";
import styles from "@/styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.foter}>
      <p>Copyright &copy; DJ Events 2021</p>
      <p>
        <Link href="/about">
          <a>About this Project</a>
        </Link>
      </p>
    </footer>
  );
}
