import {
  BookVisitSection,
  FAQSection,
  HeroSection,
  SmileGallerySection,
  SmilePrioritySection,
  TestimonialsSection,
  WhyChooseSection,
  WhyDentalCareSection,
} from '../components/home/HomeSections'
import './HomePage.css'

export function HomePage() {
  return (
    <main className="home-page">
      <HeroSection />
      <WhyDentalCareSection />
      <WhyChooseSection />
      <SmilePrioritySection />
      <SmileGallerySection />
      <TestimonialsSection />
      <FAQSection />
      <BookVisitSection />
    </main>
  )
}
