import Header from '@/components/Header';
import Team from '@/components/Team';
import Abstract from '@/components/Abstract';
import ItemSet from '@/components/ItemSet';
import Timeline from '@/components/Timeline';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import { Inter } from "next/font/google";
import Carousel from '@/components/Carousel';
import { useRef } from 'react';

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const teamRef = useRef(null);

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between ${inter.className}`}
    >
      <section className="w-full">
        <Header teamRef={teamRef} />
      </section>

      <section className="w-full">
        <Hero />
      </section>

      <section className="w-full">
        <Abstract />
      </section>

      <section className="w-full">
        <Carousel />
      </section>

      <section className="w-full">
        <ItemSet />
      </section>

      <section className="w-full">
        <Timeline />
      </section>

      <section className="w-full">
        <Team ref={teamRef} />
      </section>

      <section className="w-full">
        <Footer />
      </section>
    </main>
  );
}
