import { Link } from 'react-router-dom'
import { PageIntro } from '../components/ui/PageIntro'
import './InnerPages.css'

const services = [
  { number: '01', title: 'Routine checkups', text: 'Regular visits help us keep an eye on your oral health and answer your questions along the way.' },
  { number: '02', title: 'Cleaning & prevention', text: 'A fresh, comfortable clean and simple guidance for caring for your smile at home.' },
  { number: '03', title: 'Restorative care', text: 'Thoughtful treatment options to help protect and restore your natural teeth.' },
  { number: '04', title: 'Cosmetic dentistry', text: 'Talk with us about options for the changes you would like to see in your smile.' },
]

export function ServicesPage() {
  return (
    <main className="inner-page">
      <PageIntro eyebrow="OUR SERVICES" title="Thoughtful care" emphasis="for every smile." description="From preventive visits to treatment planning, we will help you understand your options and feel comfortable with your care." />
      <section className="service-grid" aria-label="Dental services">
        {services.map((service) => <article className="service-card" key={service.number}><span className="service-card__number">{service.number}</span><span className="service-card__sparkle" aria-hidden="true">✦</span><h2>{service.title}</h2><p>{service.text}</p></article>)}
      </section>
      <section className="inner-callout"><div><span className="section-kicker">NOT SURE WHERE TO START?</span><h2>We can talk it through.</h2></div><Link className="button button--primary" to="/contact">Get in touch <span aria-hidden="true">↗</span></Link></section>
    </main>
  )
}
