import Career from "@/components/Career"
import Contact from "@/components/Contact"
import CurrentWork from "@/components/CurrentWork"
import Hero from "@/components/Hero"
import Papers from "@/components/Papers"
import Toolkit from "@/components/Toolkit"
import Work from "@/components/Work"

export default function Home() {
  return (
    <main>
      <Hero />
      <CurrentWork />
      <Work />
      <Papers />
      <Career />
      <Toolkit />
      <Contact />
    </main>
  )
}
