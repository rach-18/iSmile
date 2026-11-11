import { useState } from "react";
import { Link } from "react-router-dom";
import "./DentistProfile.css";

type DentistProfileProps = {
  name: string;
  designation?: string;
  portraitSrc?: string;
  introduction?: string;
  compact?: boolean;
  photoOnRight?: boolean;
};

export function DentistProfile({
  name,
  designation,
  portraitSrc,
  introduction,
  compact = false,
  photoOnRight = false,
}: DentistProfileProps) {
  const [portraitAvailable, setPortraitAvailable] = useState(Boolean(portraitSrc));
  const initials = name
    .replace(/^Dr\.?\s*/i, '')
    .split(/\s+/)
    .map((part) => part.charAt(0))
    .join('');

  return (
    <article
      className={[
        'dentist-profile',
        compact && 'dentist-profile--compact',
        photoOnRight && 'dentist-profile--photo-right',
      ].filter(Boolean).join(' ')}
    >
      <div className="dentist-profile__portrait">
        {portraitAvailable ? (
          <img
            src={portraitSrc}
            alt={`${name}, dentist at iSmile Dental Care`}
            onError={() => setPortraitAvailable(false)}
          />
        ) : (
          <div className="dentist-profile__fallback" aria-hidden="true">
            <span>{initials}</span>
            <small>PHOTO TO BE ADDED</small>
          </div>
        )}
      </div>
      <div className="dentist-profile__copy">
        <span className="section-kicker">MEET OUR DENTAL TEAM</span>
        <div className="dentist-profile__identity">
          <h2>{name}</h2>
          <span className={designation ? 'dentist-profile__designation' : 'dentist-profile__designation dentist-profile__designation--placeholder'}>
            <span aria-hidden="true" />{designation ?? 'Designation to be added'}
          </span>
        </div>
        {introduction && <p>{introduction}</p>}
        {!introduction && !compact && <p className="dentist-profile__pending">Profile introduction will be added soon.</p>}
        {compact && (
          <Link to="/about" className="dentist-profile__link">
            Meet your dentist <span aria-hidden="true">↗</span>
          </Link>
        )}
      </div>
    </article>
  );
}
