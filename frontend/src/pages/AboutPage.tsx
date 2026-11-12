import { LuArrowUpRight, LuHeart, LuImagePlus, LuShieldCheck, LuSparkles } from 'react-icons/lu'
import { Link } from 'react-router-dom'
import { DentistProfile } from '../components/doctor/DentistProfile'
import { PageIntro } from '../components/ui/PageIntro'
import './InnerPages.css'

const facilitySpaces = [
  { title: 'Reception', description: 'A welcoming space to begin your visit.' },
  { title: 'Treatment rooms', description: 'A look inside the clinic’s care spaces.' },
  { title: 'Dental equipment', description: 'The tools and technology used in your care.' },
  { title: 'Clinic infrastructure', description: 'More details about the clinic environment.' },
]

const safetyPractices = [
  { title: 'Instrument sterilisation', text: 'Details about the clinic’s sterilisation process will be added after confirmation.' },
  { title: 'Clean treatment spaces', text: 'Clinic-specific room cleaning procedures will be added here.' },
  { title: 'Patient safety', text: 'Information about the safety steps followed during appointments will be added here.' },
]

export function AboutPage() {
  return (
    <main className="inner-page about-page">
      <PageIntro eyebrow="ABOUT iSMILE" title="A kinder kind" emphasis="of dental care." description="We want every visit to feel clear, calm, and personal. Our team takes time to listen and make space for the questions that matter to you." />

      <section className="about-introduction" aria-labelledby="about-introduction-title">
        <div className="about-introduction__mark" aria-hidden="true"><LuHeart /></div>
        <div><span className="section-kicker">ABOUT iSMILE</span><h2 id="about-introduction-title">Care that feels personal.</h2><p>iSmile Dental Care is a neighbourhood dental clinic in Siliguri. We aim to make dental care feel approachable, with clear conversations and treatment options shaped around each patient.</p></div>
      </section>

      <section className="about-vision-mission" aria-label="Our vision and mission">
        <article><span className="section-kicker">OUR VISION</span><h2>A healthier smile for every patient.</h2><p>We want to help people feel confident about caring for their oral health, with a dental experience that is welcoming and easy to understand.</p></article>
        <article><span className="section-kicker">OUR MISSION</span><h2>Make thoughtful care easier to access.</h2><p>We work to listen carefully, explain treatment choices, and support patients through each step of their care.</p></article>
      </section>

      <section className="about-team" aria-labelledby="about-team-title">
        <header className="about-team__heading"><span className="section-kicker">MEET YOUR DENTIST</span><h2 id="about-team-title">The people behind<br /><em>your care.</em></h2><p>Get to know the dental team and the people who will support you during your visit.</p></header>
        <div className="about-doctors">
          <DentistProfile
            name="Dr. Rachna Pradhan"
            designation="BDS, FAD"
            portraitSrc="/images/dentist.jpg"
            introduction="Dr. Rachna Pradhan is part of the iSmile Dental Care team. She aims to help patients feel at ease and understand their care. A fuller professional biography will be added soon."
            specialisation="To be confirmed"
            experience="Years of experience to be added"
            expertise={['Areas of expertise to be confirmed']}
          />
          <DentistProfile name="Dr. Anmol Dahal" photoOnRight />
        </div>
      </section>

      <section className="about-philosophy" aria-labelledby="about-philosophy-title">
        <div className="about-philosophy__icon" aria-hidden="true"><LuSparkles /></div>
        <span className="section-kicker">OUR PHILOSOPHY</span>
        <h2 id="about-philosophy-title">Listen first. Explain clearly. Care together.</h2>
        <p>Dental care is personal. We make room for questions, explain what we find in everyday language, and discuss options with you so you can make informed decisions at a pace that feels comfortable.</p>
      </section>

      <section className="about-facilities" aria-labelledby="about-facilities-title">
        <header className="about-section-heading"><span className="section-kicker">A CLOSER LOOK</span><h2 id="about-facilities-title">Our clinic<br /><em>&amp; facilities.</em></h2><p>See the spaces where your visit begins, the rooms where care takes place, and the equipment that supports treatment. We’ll add photos of the clinic here.</p></header>
        <div className="facility-grid">
          {facilitySpaces.map((space, index) => <article className={`facility-slot facility-slot--${index + 1}`} key={space.title}>
            <div className="facility-slot__image"><LuImagePlus aria-hidden="true" /><span>PHOTO TO BE ADDED</span></div>
            <h3>{space.title}</h3><p>{space.description}</p>
          </article>)}
        </div>
      </section>

      <section className="about-safety" aria-labelledby="about-safety-title">
        <div className="about-safety__heading"><span className="section-kicker">HYGIENE &amp; SAFETY</span><h2 id="about-safety-title">Your wellbeing<br /><em>comes first.</em></h2><p>Patient safety and clean care spaces matter at every visit. We’ll add the clinic’s specific hygiene and sterilisation practices here once confirmed.</p><span className="about-safety__note"><LuShieldCheck aria-hidden="true" /> Clinic-specific protocols to be confirmed</span></div>
        <div className="safety-practice-list">{safetyPractices.map((practice, index) => <article key={practice.title}><span>{`0${index + 1}`}</span><div><h3>{practice.title}</h3><p>{practice.text}</p></div></article>)}</div>
      </section>

      <section className="about-commitment" aria-labelledby="about-commitment-title">
        <span className="section-kicker">OUR COMMITMENT</span><h2 id="about-commitment-title">A visit where you feel<br /><em>heard and cared for.</em></h2>
        <div><p>At iSmile, you can expect a warm welcome, clear information, and time to discuss your concerns. We’ll work with you to understand your options and plan the next step together.</p><p>Have a question before you visit? Our team is happy to help.</p></div>
      </section>

      <section className="inner-callout about-visit-callout" aria-label="Plan your visit">
        <div><span className="section-kicker">WE’RE HERE TO HELP</span><h2>Ready to plan a visit?</h2><p>Get in touch and we’ll help you take the next step.</p></div>
        <Link className="button button--primary" to="/contact">Plan your visit <LuArrowUpRight className="button__icon" aria-hidden="true" /></Link>
      </section>
    </main>
  )
}
