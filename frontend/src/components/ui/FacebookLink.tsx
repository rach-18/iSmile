import { clinic } from '../../data/clinic'
import './InstagramLink.css'

type FacebookLinkProps = {
  className?: string
}

export function FacebookLink({ className = '' }: FacebookLinkProps) {
  return (
    <a
      className={`social-icon-link facebook-icon-link ${className}`}
      href={clinic.facebookUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Visit iSmile Dental Care on Facebook"
      title="Visit iSmile Dental Care on Facebook"
    >
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path fill="currentColor" d="M13.7 21v-8.2h2.8l.4-3.2h-3.2V7.5c0-.9.3-1.5 1.6-1.5H17V3.1c-.8-.1-1.7-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.4H7.5v3.2h2.8V21h3.4Z" />
      </svg>
    </a>
  )
}
