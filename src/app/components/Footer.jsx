// src/app/components/Footer/Footer.js
import styles from "./Footer.module.css";
import Link from "next/link";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles["footer-content"]}>
        <div className={styles["footer-section"]}>
          <h4>Casa Boutique Ella & Nina</h4>
          <p>Refúgio de luxo na Praia do Patacho, Alagoas.</p>
        </div>
        <div className={styles["footer-section"]}>
          <h4>Contato</h4>
          <ul>
            <li>
              <a href="tel:+5581987654321">+55 81 98765-4321</a>
            </li>
            <li>
              <a
                href="https://wa.me/5581987654321"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp
              </a>
            </li>
            <li>
              <a href="mailto:casasboutique@gmail.com">
                casasboutique@gmail.com
              </a>
            </li>
            <li>Al 101 Norte - Laje, Porto de Pedras, AL, 57945000, Brasil</li>
          </ul>
        </div>
        <div className={styles["footer-section"]}>
          <h4>Redes Sociais</h4>
          <ul className="social-links">
            <li>
              <a
                href="https://www.instagram.com/sua-conta"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/sua-conta"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/sua-conta"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles["footer-bottom"]}>
        <p>
          &copy; {new Date().getFullYear()} Casa Boutique Ella & Nina. Todos os
          direitos reservados.
        </p>
      </div>
    </footer>
  );
}
