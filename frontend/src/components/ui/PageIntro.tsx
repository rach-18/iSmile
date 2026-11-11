import './PageIntro.css'

type PageIntroProps = {
  eyebrow: string
  title: string
  emphasis: string
  description: string
}

export function PageIntro({ eyebrow, title, emphasis, description }: PageIntroProps) {
  return (
    <header className="page-intro">
      <span className="section-kicker">{eyebrow}</span>
      <h1>{title}<br /><em>{emphasis}</em></h1>
      <p>{description}</p>
    </header>
  )
}
