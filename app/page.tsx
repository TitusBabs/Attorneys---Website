import { Blueprint } from "@/components/Blueprint";
import { Contact } from "@/components/Contact";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Reviews } from "@/components/Reviews";
import { ScrollTop } from "@/components/ScrollTop";
import { Solutions } from "@/components/Solutions";
import { TrustStrip } from "@/components/TrustStrip";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustStrip />
        <Solutions />
        <Blueprint />
        <Reviews />
        <Contact />
      </main>
      <ScrollTop />
    </>
  );
}
