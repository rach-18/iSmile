import { Link } from 'react-router-dom'
import { LuArrowUpRight, LuClock3, LuMapPin, LuMessageCircle, LuPhone } from 'react-icons/lu'
import { FacebookLink } from '../components/ui/FacebookLink'
import { InstagramLink } from '../components/ui/InstagramLink'
import { clinic } from '../data/clinic'
import './InnerPages.css'

const mapEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(clinic.address)}&output=embed`

export function ContactPage() {
  return (
    <main className="inner-page contact-page">
      <header className="contact-intro">
        <span className="section-kicker">CONTACT &amp; APPOINTMENTS</span>
        <h1>We’d love to<br /><em>hear from you.</em></h1>
        <p>Have a question or want to plan a visit? Get in touch with iSmile Dental Care. We’ll be happy to help you take the next step.</p>
      </header>

      <section className="contact-information" id="contact-information" aria-labelledby="contact-information-title">
        <header className="contact-section-heading"><span className="section-kicker">GET IN TOUCH</span><h2 id="contact-information-title">Here when you<br /><em>need us.</em></h2></header>
        <div className="contact-information__grid">
          <div className="contact-detail contact-detail--pending">
            <span className="contact-detail__icon"><LuPhone aria-hidden="true" /></span><span className="contact-detail__label">Call the clinic</span><strong>Phone number to be added</strong><span className="contact-detail__action">Call details coming soon</span>
          </div>
          <div className="contact-detail contact-detail--social">
            <span className="contact-detail__icon"><LuMessageCircle aria-hidden="true" /></span><span className="contact-detail__label">Social media</span><strong>Follow iSmile Dental Care</strong><span className="contact-detail__socials"><InstagramLink /><FacebookLink /></span>
          </div>
          <article className="contact-detail contact-detail--address">
            <span className="contact-detail__icon"><LuMapPin aria-hidden="true" /></span><span className="contact-detail__label">Visit us</span><strong>{clinic.address}</strong><span className="contact-detail__action">Siliguri, West Bengal</span>
          </article>
        </div>
      </section>

      <section className="contact-location" aria-labelledby="contact-location-title">
        <header className="contact-section-heading"><span className="section-kicker">FIND iSMILE</span><h2 id="contact-location-title">A local clinic,<br /><em>close to you.</em></h2><p>{clinic.address}</p></header>
        <div className="contact-location__map"><iframe title="Map showing iSmile Dental Care in Siliguri" src={mapEmbedUrl} loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></div>
      </section>

      <section className="contact-hours" aria-labelledby="contact-hours-title">
        <div className="contact-hours__heading"><span className="contact-hours__icon"><LuClock3 aria-hidden="true" /></span><div><span className="section-kicker">WHEN TO VISIT</span><h2 id="contact-hours-title">Opening hours</h2></div></div>
        <dl>{clinic.openingHours.map((entry) => <div key={entry.days}><dt>{entry.days}</dt><dd>{entry.hours}</dd></div>)}</dl>
        <p className="contact-hours__note">Hours can change on holidays. Please call ahead if you are planning a visit.</p>
      </section>

      <section className="contact-final-cta" aria-labelledby="contact-final-cta-title">
        <div><span className="section-kicker">WE’RE HAPPY TO HELP</span><h2 id="contact-final-cta-title">Let’s plan your<br /><em>visit together.</em></h2><p>Book an appointment or get in touch with the clinic. Call details will be added soon.</p></div>
        <div className="contact-final-cta__actions"><button className="button button--light" type="button" disabled title="Phone number to be added">Call the clinic <LuPhone className="button__icon" aria-hidden="true" /></button><Link className="button button--light contact-final-cta__booking" to="/appointment">Book an appointment <LuArrowUpRight className="button__icon" aria-hidden="true" /></Link></div>
      </section>
    </main>
  )
}
