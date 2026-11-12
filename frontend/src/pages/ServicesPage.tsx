import { Link } from 'react-router-dom'
import { LuActivity, LuArrowUpRight, LuHeart, LuSparkles } from 'react-icons/lu'
import './InnerPages.css'

const treatmentGroups = [
  {
    number: '01',
    icon: LuActivity,
    title: 'Restore & rebuild',
    introduction: 'Care to repair damaged teeth and help restore everyday comfort and function.',
    services: [
      { name: 'Root canal treatment', detail: 'Treatment for teeth affected by deep decay or infection.' },
      { name: 'Crowns', detail: 'Zirconia, PFM, and DMLS options.' },
      { name: 'Post and core build-up', detail: 'Support to rebuild a tooth before a crown.' },
      { name: 'Tooth-coloured restorations', detail: 'Composite and GIC fillings.' },
    ],
  },
  {
    number: '02',
    icon: LuHeart,
    title: 'Replace missing teeth',
    introduction: 'Options to replace missing teeth, discussed around your needs and preferences.',
    services: [
      { name: 'Fixed partial dentures', detail: 'A fixed option for replacing one or more teeth.' },
      { name: 'Complete dentures', detail: 'Full-arch tooth replacement.' },
      { name: 'Removable dentures', detail: 'Acrylic and flexible options.' },
      { name: 'Dental implants', detail: 'Implant-based tooth replacement options.' },
    ],
  },
  {
    number: '03',
    icon: LuSparkles,
    title: 'Enhance your smile',
    introduction: 'Explore cosmetic options and choose what feels right for your smile.',
    services: [
      { name: 'Veneers', detail: 'Composite and lithium disilicate options.' },
      { name: 'Teeth bleaching', detail: 'Discuss professional whitening options.' },
    ],
  },
  {
    number: '04',
    icon: LuActivity,
    title: 'Care for healthy gums & alignment',
    introduction: 'Preventive cleaning and orthodontic options for a healthier smile.',
    services: [
      { name: 'Scaling and polishing', detail: 'Professional cleaning to remove plaque and tartar.' },
      { name: 'Braces', detail: 'Orthodontic treatment to align teeth.' },
      { name: 'Clear aligners', detail: 'A removable option for teeth straightening.' },
    ],
  },
]

const approachSteps = [
  { number: '01', title: 'Consultation', text: 'We start by listening to what is bothering you and what you would like help with.' },
  { number: '02', title: 'Diagnosis', text: 'We examine your teeth and gums, then explain what we find in clear language.' },
  { number: '03', title: 'Treatment planning', text: 'We discuss suitable options, expected steps, and costs before care begins.' },
  { number: '04', title: 'Follow-up', text: 'We check in on your recovery and help you plan any ongoing care.' },
]

const serviceFaqs = [
  { question: 'How do I know which treatment I need?', answer: 'It depends on your symptoms and oral health. A consultation helps the dentist assess your needs and explain the options before you decide.' },
  { question: 'Will the dentist explain the treatment and cost first?', answer: 'Yes. The treatment plan and estimated costs will be discussed with you before treatment begins, so you can ask questions and make an informed decision.' },
  { question: 'Do you offer options for replacing missing teeth?', answer: 'The clinic provides fixed partial dentures, complete and removable dentures, and implant treatment options. The dentist can help explain which may suit your situation.' },
  { question: 'Can I book a consultation if I am unsure what service I need?', answer: 'Absolutely. You can book a consultation to talk through your concerns. You do not need to know the name of a treatment before you come in.' },
]

export function ServicesPage() {
  return (
    <main className="inner-page services-page">
      <section className="services-intro" aria-labelledby="services-title">
        <div className="services-intro__copy">
          <span className="section-kicker">OUR SERVICES</span>
          <h1 id="services-title">Care for your smile,<br /><em>at every step.</em></h1>
          <p>From a routine clean to more involved treatment, we will take time to understand your needs and talk you through your options.</p>
          <Link className="button button--primary" to="/contact">Book a consultation <LuArrowUpRight className="button__icon" aria-hidden="true" /></Link>
        </div>
        <div className="services-intro__illustration" role="img" aria-label="Illustration of a smiling tooth">
          <span className="services-intro__sparkle services-intro__sparkle--one"><LuSparkles aria-hidden="true" /></span>
          <span className="services-intro__sparkle services-intro__sparkle--two"><LuSparkles aria-hidden="true" /></span>
          <svg className="services-intro__tooth" viewBox="0 0 220 250" aria-hidden="true">
            <path d="M48 23C22 30 15 59 25 91c9 27 18 83 36 120 6 13 19 14 27 1l15-28c4-8 10-8 14 0l15 28c8 14 21 12 27-1 18-37 27-93 36-120 10-32 3-61-23-68-22-6-37 12-59 12S70 17 48 23Z" />
            <path d="M82 125c15 17 41 17 56 0" />
          </svg>
          <div className="services-intro__image-note"><LuHeart aria-hidden="true" /><span>Thoughtful care, centred on you</span></div>
        </div>
      </section>

      <section className="treatment-services" aria-labelledby="treatment-services-title">
        <header className="services-section-heading">
          <span className="section-kicker">HOW WE CAN HELP</span>
          <h2 id="treatment-services-title">Dental care for<br /><em>what matters to you.</em></h2>
          <p>Every smile is different. We will help you understand the care that may be right for you.</p>
        </header>
        <div className="treatment-category-grid">
          {treatmentGroups.map(({ number, icon: Icon, title, introduction, services }) => (
            <article className="treatment-category" key={number}>
              <div className="treatment-category__top"><span className="treatment-category__number">{number}</span><span className="treatment-category__icon"><Icon aria-hidden="true" /></span></div>
              <h3>{title}</h3>
              <p className="treatment-category__intro">{introduction}</p>
              <ul>
                {services.map((service) => <li key={service.name}><strong>{service.name}</strong><span>{service.detail}</span></li>)}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="treatment-approach" aria-labelledby="treatment-approach-title">
        <div className="treatment-approach__heading">
          <span className="section-kicker">A CLEAR, CONSIDERED PROCESS</span>
          <h2 id="treatment-approach-title">Care that moves<br /><em>at your pace.</em></h2>
          <p>You will know what to expect at each stage, with time to ask questions and feel comfortable with the plan.</p>
        </div>
        <ol className="approach-steps">
          {approachSteps.map((step) => <li className="approach-step" key={step.number}><span>{step.number}</span><div><h3>{step.title}</h3><p>{step.text}</p></div></li>)}
        </ol>
      </section>

      <section className="services-faq" aria-labelledby="services-faq-title">
        <header className="services-section-heading services-faq__heading">
          <span className="section-kicker">BEFORE YOUR VISIT</span>
          <h2 id="services-faq-title">Questions about<br /><em>treatment?</em></h2>
          <p>A few helpful answers to make planning your care feel easier.</p>
        </header>
        <div className="services-faq__list">
          {serviceFaqs.map((faq, index) => <details className="faq-item" key={faq.question} open={index === 0}><summary><span>{faq.question}</span><i aria-hidden="true" /></summary><p>{faq.answer}</p></details>)}
        </div>
      </section>

      <section className="inner-callout services-callout">
        <div><span className="section-kicker">A GOOD PLACE TO START</span><h2>Book a consultation.</h2><p>Tell us what is on your mind and we can take it from there.</p></div>
        <Link className="button button--primary" to="/contact">Plan your visit <LuArrowUpRight className="button__icon" aria-hidden="true" /></Link>
      </section>
    </main>
  )
}
