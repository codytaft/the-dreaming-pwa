import React from 'react';
import Link from 'next/link';
import Head from '../components/Head';
import CircleButton from '../components/CircleButton';

const Home = () => (
  <div>
    <Head title="Home" />

    <div className="hero">
      <h1 className="title">Oneiros</h1>
      <CircleButton />
    </div>

    <style jsx>{`
      @import url('https://fonts.googleapis.com/css?family=Srisakdi:400,700');
      *,
      *::after,
      *::before {
        margin: 0;
        padding: 0;
        box-sizing: inherit;
      }
      :global(html) {
        font-size: 61.5%;
      }
      :global(body) {
        margin: 0;
        font-family: 'Srisakdi', cursive;
        box-sizing: border-box;
      }
      .hero {
        width: 100%;
        height: 100vh;
        color: rgb(112 173 210);
        background-color: #111;
        position: relative;
      }
      .title {
        margin: 0;
        width: 100%;
        padding-top: 3rem;
        line-height: 1.15;
        font-size: 4.8rem;
        text-align: center;
      }
    `}</style>
  </div>
);

export default Home;
