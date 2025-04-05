import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import styles from './SocialMedia.module.css';

export default function SocialMedia() {
  return (
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
  );
}
