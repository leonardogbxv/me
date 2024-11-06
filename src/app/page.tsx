import styles from './page.module.css';
import Image from 'next/image';
import { Metadata } from 'next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Leonardo Gomes',
  description: 'leonardogbxv\'s portfolio & blog'
};

export default function Home() {
  return (
    <>
      <section className={styles.headliner}>
        <Link href="https://github.com/leonardogbxv" target="_blank">
          <Image
            src="https://github.com/leonardogbxv.png"
            alt="Leonardo's GitHub Profile"
            width={300}
            height={300}
          />
        </Link>

        <p>
          <span>Olá! Meu nome é Leonardo.&nbsp;</span>
          <span>Sou um desenvolvedor mobile apaixonado por tecnologia.</span>
        </p>

        <p className={styles.socials}>
          <Link href="https://www.linkedin.com/in/leonardo-g-batista/" target="_blank">
            <FontAwesomeIcon
              icon={faLinkedin}
              size="2x"
            />
          </Link>

          <Link href="https://github.com/leonardogbxv" target="_blank">
            <FontAwesomeIcon
              icon={faGithub}
              size="2x"
            />
          </Link>

          <Link href="mailto:leonardog.bat@gmail.com" target="_blank">
            <FontAwesomeIcon
              icon={faEnvelope}
              size="2x"
            />
          </Link>
        </p>
      </section>

      <section className={styles.wip}>
        <h3>🚧 Em Contrução 🚧</h3>
      </section>
    </>
  );
}
