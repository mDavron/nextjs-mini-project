import React from "react";
import Heading from "../../components/Heading";
import Head from "next/head";
import Link from "next/link";

export const getStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { contacts: data },
  };
};
const Contacts = ({ contacts }) => {
  return (
    <>
      <Head>
        <title>contacts</title>
      </Head>
      <Heading text="Contacts list:" />
      <p>Lorem ipsum dolor sit amet111.</p>
      <ul>
        {contacts &&
          contacts.map(({ id, name }) => {
            return (
              <li key={id}>
                <Link href={`/contacts/${id}`}>{name}</Link>
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default Contacts;
