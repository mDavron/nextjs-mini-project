import React from "react";
import styles from "../styles/Socials.module.scss";
import Head from "next/head";

const Socials = ({ socials }) => {
  if (!socials) {
    return null;
  }
  return (
    <div>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.0/css/all.css"
        />
      </Head>
      <ul className={styles.socials}>
        {socials?.map(({ id, icon, path }) => {
          return (
            <li key={id}>
              <a href={path} target="_blank" rel="noopener noreferrer">
                <i className={`fab fa-${icon}`} aria-hidden="true" />
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Socials;
