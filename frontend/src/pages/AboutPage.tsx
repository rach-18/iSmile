import { DentistProfile } from '../components/doctor/DentistProfile'
import { PageIntro } from '../components/ui/PageIntro'
import './InnerPages.css'

export function AboutPage() {
  return (
    <main className="inner-page">
      <PageIntro eyebrow="ABOUT ISMILE" title="A kinder kind" emphasis="of dental care." description="We want every visit to feel clear, calm, and personal. Our team takes time to listen and make space for the questions that matter to you." />
      <section className="about-doctors" aria-label="Meet the iSmile dentists">
        <DentistProfile
          name="Dr. Rachna Pradhan"
          designation="BDS, FAD"
          portraitSrc="/images/dentist.jpg"
          introduction="Meet Dr. Rachna Pradhan, the dentist at iSmile Dental Care."
        />
        <DentistProfile name="Dr. Anmol Dahal" photoOnRight />
      </section>
      <section className="about-values"><span className="section-kicker">WHAT MATTERS TO US</span><h2>Comfort comes with confidence.</h2><p>Choosing a dentist is personal. We aim to make your experience welcoming, explain your care in everyday language, and work with you on a plan that suits your needs.</p></section>
    </main>
  )
}
