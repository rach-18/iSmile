import { Link } from 'react-router-dom'
import { LuArrowRight, LuArrowUpRight, LuHeart, LuImagePlus, LuSparkles } from 'react-icons/lu'
import { clinic } from '../../data/clinic'

const strengths = [
  { number: '01', title: 'Patient comfort', description: 'A considerate, unhurried experience that helps you feel at ease.' },
  { number: '02', title: 'Careful hygiene', description: 'Cleanliness and infection prevention are part of every visit.' },
  { number: '03', title: 'Personalised care', description: 'Recommendations shaped around your needs and questions.' },
  { number: '04', title: 'Modern equipment', description: 'Contemporary tools to support clear, careful dental care.' },
]

const careBenefits = [
  { number: '01', title: 'Everyday wellbeing', description: 'Healthy teeth and gums support everyday comfort.' },
  { number: '02', title: 'Preventive attention', description: 'Regular visits give you time to talk through changes or concerns.' },
  { number: '03', title: 'Advice for you', description: 'Get guidance shaped around your own oral health needs.' },
]

const treatmentSlots = ['01', '02', '03']

const patientReviews = [
  {
    name: 'shukhi bhagat',
    quote: 'I recently visited the Clinic and had an exceptional experience! The staff were friendly, welcoming, and professional. Dr.Anmol and Dr.Rachna was fantastic - they explained everything clearly, answered all my questions, and made me feel at ease. The facilities are modern and clean. I highly recommend this dental clinic to anyone looking for top-notch care. 5 stars!',
  },
  {
    name: 'Rajendra Kumar Chhetri',
    quote: 'I-Smile Dental Care, in my view, is one of the most reliable and best dental clinics in Siliguri. Easily accessible by walking from Darjeeling Modd. Well equipped, neat and tidy. I have had my root canal treatment. A timely, simple, precise and professional service provided. Itemised prices are reasonable. Customer service is excellent. Dr. Rachana is very polite and well behaved who commands respect. It was a great experience seeing her. Highly recommended for any potential dental customers requiring any types of treatment.',
  },
  {
    name: 'Govind Agarwal',
    quote: 'very soothing and nice experience .. Dr. Anmol is one of the finest in siliguri town .. highly recommended & very safe :)',
  },
]

const faqs = [
  { question: 'Why is regular dental care important?', answer: 'Dental visits help your dentist check your oral health, answer questions, and plan care around your needs.' },
  { question: 'How often should I book a check-up?', answer: 'The right interval varies from person to person. Dr. Rachna can recommend a schedule based on your oral health and care needs.' },
  { question: 'What if I feel nervous about a visit?', answer: 'Let the clinic know when booking. Sharing your concerns helps the dental team understand your experience and discuss ways to make the visit more comfortable.' },
  { question: 'What should I do about tooth sensitivity?', answer: 'Sensitivity can have different causes. If it is new, persistent, or worrying you, contact a dentist for an assessment.' },
]

export function HeroSection() {
  return (
    <section className="home-hero home-hero--original" aria-labelledby="home-title">
      <div className="home-hero__copy">
        <p className="eyebrow"><span /> YOUR NEIGHBOURHOOD DENTAL CLINIC</p>
        <h1 id="home-title">A little care.<br />A lot more <em>confidence.</em></h1>
        <p className="home-hero__description">We believe every smile deserves thoughtful care. Feel at ease, feel heard, and leave a little more confident.</p>
        <div className="home-hero__actions">
          <Link className="button button--primary" to="/contact">Plan your visit <LuArrowUpRight className="button__icon" aria-hidden="true" /></Link>
          <Link className="button button--text" to="/services">Explore our care <LuArrowRight className="button__icon" aria-hidden="true" /></Link>
        </div>
        <div className="home-hero__note"><span className="home-hero__note-icon" aria-hidden="true"><LuHeart /></span><span>Made for your comfort<br /><strong>At every appointment</strong></span></div>
      </div>
      <div className="home-hero__visual" aria-label="iSmile Dental Care brand illustration" role="img">
        <div className="home-hero__wash" />
        <span className="sparkle sparkle--one" aria-hidden="true"><LuSparkles /></span><span className="sparkle sparkle--two" aria-hidden="true"><LuSparkles /></span><span className="sparkle sparkle--three" aria-hidden="true"><LuSparkles /></span>
        <div className="home-hero__poster">
          <span className="poster-kicker">A HEALTHIER SMILE STARTS HERE</span>
          <span className="poster-title">Feel good<br />about your <em>smile.</em></span>
          <span className="poster-rule" />
          <span className="poster-caption">Gentle dental care, with you in mind.</span>
          <span className="poster-stamp" aria-hidden="true">i</span>
        </div>
        <span className="home-hero__caption"><i /> A warm welcome, every time</span>
      </div>
    </section>
  )
}

export function WhyDentalCareSection() {
  return (
    <section className="care-matters home-section" aria-labelledby="care-matters-title">
      <div className="care-matters__heading">
        <span className="section-kicker">A HEALTHIER SMILE, EVERY DAY</span>
        <h2 id="care-matters-title">Why dental care<br /><em>matters.</em></h2>
      </div>
      <div className="care-matters__copy">
        <p>Oral health is part of your overall wellbeing. Regular dental care can help you keep your teeth and gums healthy, spot concerns, and get advice that fits your needs.</p>
        <p>Small, consistent steps today can make caring for your smile feel easier over time.</p>
      </div>
      <div className="care-matters__seal" aria-hidden="true"><span>CARE FOR<br />YOUR SMILE</span><LuSparkles /></div>
      <div className="care-matters__benefits">
        {careBenefits.map((benefit) => <article className="care-benefit" key={benefit.number}><span className="care-benefit__number">{benefit.number}</span><h3>{benefit.title}</h3><p>{benefit.description}</p></article>)}
      </div>
    </section>
  )
}

export function WhyChooseSection() {
  return (
    <section className="why-choose home-section" aria-labelledby="why-choose-title">
      <div className="section-heading">
        <div><span className="section-kicker">THE iSMILE DIFFERENCE</span><h2 id="why-choose-title">Why choose <em>iSMILE?</em></h2></div>
        <p>Your comfort and care guide every conversation, recommendation, and visit.</p>
      </div>
      <div className="strength-grid">
        {strengths.map((strength) => <article className="strength-card" key={strength.number}><span className="strength-card__number">{strength.number}</span><span className="strength-card__sparkle" aria-hidden="true"><LuSparkles /></span><h3>{strength.title}</h3><p>{strength.description}</p></article>)}
      </div>
    </section>
  )
}

export function SmilePrioritySection() {
  return (
    <section className="smile-priority" aria-labelledby="smile-priority-title">
      <div className="smile-priority__visual" role="img" aria-label="Illustration of iSmile's patient-first approach">
        <span className="priority-orbit priority-orbit--outer" />
        <span className="priority-orbit priority-orbit--inner" />
        <span className="priority-sparkle priority-sparkle--one" aria-hidden="true"><LuSparkles /></span>
        <span className="priority-sparkle priority-sparkle--two" aria-hidden="true"><LuSparkles /></span>
        <svg className="priority-tooth" viewBox="0 0 220 250" aria-hidden="true">
          <path d="M48 23C22 30 15 59 25 91c9 27 18 83 36 120 6 13 19 14 27 1l15-28c4-8 10-8 14 0l15 28c8 14 21 12 27-1 18-37 27-93 36-120 10-32 3-61-23-68-22-6-37 12-59 12S70 17 48 23Z" />
          <path d="M82 125c15 17 41 17 56 0" />
        </svg>
        <span className="priority-note priority-note--one"><i>01</i> We listen</span>
        <span className="priority-note priority-note--two"><i>02</i> We explain</span>
        <span className="priority-note priority-note--three"><i>03</i> You decide</span>
      </div>
      <div className="smile-priority__copy"><span className="section-kicker">YOUR SMILE, OUR PRIORITY</span><h2 id="smile-priority-title">Care that starts<br />with <em>listening.</em></h2><p>We want you to feel heard and informed. We take time to understand your concerns, explain your options in clear language, and support you in making decisions about your dental care.</p><Link className="button button--outline" to="/services">Explore our care <LuArrowUpRight className="button__icon" aria-hidden="true" /></Link></div>
    </section>
  )
}

export function SmileGallerySection() {
  return (
    <section className="smile-gallery home-section" aria-labelledby="smile-gallery-title">
      <div className="section-heading"><div><span className="section-kicker">REAL SMILES, REAL STORIES</span><h2 id="smile-gallery-title">Before &amp; <em>after.</em></h2></div><p>Clinic-approved treatment transformations will be added here once patient consent and photos are ready.</p></div>
      <div className="treatment-grid">
        {treatmentSlots.map((slot) => <article className="treatment-card" key={slot} aria-label={`Treatment transformation photo slot ${slot}`}>
          <span className="treatment-card__number">CASE {slot}</span>
          <div className="treatment-card__images">
            <div className="treatment-placeholder"><LuImagePlus className="treatment-placeholder__icon" aria-hidden="true" /><small>BEFORE</small></div>
            <div className="treatment-placeholder treatment-placeholder--after"><LuImagePlus className="treatment-placeholder__icon" aria-hidden="true" /><small>AFTER</small></div>
          </div>
          <p>Patient photo space · shared with consent</p>
        </article>)}
      </div>
    </section>
  )
}

export function TestimonialsSection() {
  return (
    <section className="testimonials home-section" aria-labelledby="testimonials-title">
      <div className="testimonials__heading"><span className="section-kicker">KIND WORDS MATTER</span><h2 id="testimonials-title">Patient <em>testimonials.</em></h2><p>A few kind words from patients who have visited iSmile Dental Care.</p></div>
      <div className="testimonial-grid">
        {patientReviews.map((review) => <article className="testimonial-card" key={review.name}>
          <div className="testimonial-card__rating" aria-label="5 out of 5 stars">★★★★★</div>
          <blockquote>{review.quote}</blockquote>
          <div className="testimonial-card__footer"><span className="testimonial-card__avatar" aria-hidden="true">{review.name.charAt(0).toUpperCase()}</span><cite>{review.name}</cite><span className="testimonial-card__source">Google review</span></div>
        </article>)}
      </div>
    </section>
  )
}

export function FAQSection() {
  return (
    <section className="home-faq home-section" aria-labelledby="faq-title">
      <div className="section-heading"><div><span className="section-kicker">A FEW HELPFUL ANSWERS</span><h2 id="faq-title">Frequently asked<br /><em>questions.</em></h2></div><p>Have another question? We’re happy to help you prepare for a visit.</p></div>
      <div className="faq-list">{faqs.map((faq, index) => <details className="faq-item" key={faq.question} open={index === 0}><summary><span>{faq.question}</span><i aria-hidden="true" /></summary><p>{faq.answer}</p></details>)}</div>
    </section>
  )
}

export function BookVisitSection() {
  return (
    <section className="book-visit" aria-labelledby="book-visit-title">
      <div><span className="section-kicker">READY WHEN YOU ARE</span><h2 id="book-visit-title">Let’s make time<br />for your <em>smile.</em></h2><p>Reach out to iSmile Dental Care to plan your visit.</p></div>
      <Link className="button button--light" to="/contact">Book your visit <LuArrowUpRight className="button__icon" aria-hidden="true" /></Link>
      <span className="book-visit__sparkle" aria-hidden="true"><LuSparkles /></span>
      <span className="book-visit__clinic">{clinic.name} · Siliguri</span>
    </section>
  )
}
