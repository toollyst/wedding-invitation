import { VENUE_INFO } from '@/constants/weddingInfo';
import { PROFILE_DATA } from '../../constants/profileData';

interface ProfileBioProps {
  onVenueClick?: () => void;
}

export const ProfileBio = ({ onVenueClick }: ProfileBioProps) => {
  return (
    <div className="px-4 mt-3">
      {/* Display name */}
      <p
        className="font-semibold text-sm text-left"
        style={{ color: 'var(--ig-text-primary)' }}
      >
        {PROFILE_DATA.displayName}
      </p>

      {/* Bio text */}
      <p
        className="text-sm mt-1 whitespace-pre-line text-left"
        style={{ color: 'var(--ig-text-primary)' }}
      >
        {PROFILE_DATA.bio}
      </p>

      {/* Venue link */}
      <button
        onClick={onVenueClick}
        className="text-sm font-medium mt-0.5 text-left"
        style={{ color: 'var(--ig-link)' }}
      >
        {VENUE_INFO.venueName}
      </button>
    </div>
  );
};
