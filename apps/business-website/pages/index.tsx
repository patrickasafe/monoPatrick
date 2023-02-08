import Head from "next/head";
import { HomeBody } from "../components/Homebody";

import { Layout } from "../components/Layout";

export default function Home() {
  return (
    <>
      <Head>
        <title>Smile Dental Care</title>
      </Head>
      <header>
        <h1>Smile Dental Care</h1>
        <p>Your trusted dental care provider</p>
      </header>
      <section>
        <h2>About Us</h2>
        <p>
          At Smile Dental Care, we provide high-quality dental services to help
          you maintain a healthy and beautiful smile. Our team of experienced
          dentists and staff are dedicated to making your visit as comfortable
          and stress-free as possible.
        </p>
      </section>
      <section>
        <h2>Our Services</h2>
        <ul>
          <li>General Dentistry</li>
          <li>Cosmetic Dentistry</li>
          <li>Orthodontics</li>
          <li>Periodontics</li>
          <li>Endodontics</li>
        </ul>
      </section>
    </>
  );
}
