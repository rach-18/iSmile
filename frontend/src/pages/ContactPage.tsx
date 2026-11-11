import { PageIntro } from '../components/ui/PageIntro'
import { FacebookLink } from '../components/ui/FacebookLink'
import { InstagramLink } from '../components/ui/InstagramLink'
import { clinic } from '../data/clinic'
import './InnerPages.css'

export function ContactPage() {
  return (
    <main className="inner-page">
      <PageIntro eyebrow="CONTACT & APPOINTMENTS" title="We would love" emphasis="to hear from you." description="Have a question or want to plan a visit? Reach out to the clinic and our team will be happy to help." />
      <section className="contact-grid">
        <article className="contact-card"><span className="section-kicker">SAY HELLO</span><h2>Connect with us</h2><p>Follow iSmile Dental Care for clinic updates and ways to get in touch.</p><div className="contact-card__socials"><InstagramLink /><FacebookLink /></div></article>
        <article className="contact-card contact-card--lavender"><span className="section-kicker">YOUR VISIT</span><h2>Find the clinic</h2><p className="contact-card__address">{clinic.address}</p></article>
      </section>
    </main>
  )
}
