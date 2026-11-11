import './ClinicLogo.css'

type ClinicLogoProps = {
  className?: string
  tone?: 'indigo' | 'white'
}

export function ClinicLogo({ className = '', tone = 'indigo' }: ClinicLogoProps) {
  const logoPath = tone === 'white' ? '/images/ismile-logo-white.png' : '/images/ismile-logo-indigo.png'

  return (
    <span className={`clinic-logo ${className}`}>
      <img src={logoPath} alt="iSmile Dental Care" />
    </span>
  )
}
