import { clinic } from '../../data/clinic'
import './InstagramLink.css'

type InstagramLinkProps = {
  className?: string
}

export function InstagramLink({ className = '' }: InstagramLinkProps) {
  return (
    <a
      className={`social-icon-link instagram-icon-link ${className}`}
      href={clinic.instagramUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Visit iSmile Dental Care on Instagram"
      title="Visit iSmile Dental Care on Instagram"
    >
      <svg viewBox="0 0 24 24" aria-hidden="true" fill="none">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle className="instagram-icon-link__dot" cx="17.5" cy="6.8" r="1" />
      </svg>
    </a>
  )
}
