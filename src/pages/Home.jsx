// componenets
import Hero from "../components/elements/Hero";
import About from "../components/elements/About";
import Tokenomics from "../components/elements/Tokenomics";
import Roadmap from "../components/elements/Roadmap"
import Documents from "../components/elements/Documents"
import FAQ from "../components/elements/FAQ"

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Tokenomics />
      <Roadmap />
      <Documents />
      <FAQ />
    </>
  );
}
export default Home;
