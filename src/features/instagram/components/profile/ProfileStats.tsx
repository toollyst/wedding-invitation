import type { ProfileStats as ProfileStatsType } from '../../types/instagram';

interface ProfileStatsProps {
  stats: ProfileStatsType;
}

export const ProfileStats = ({ stats }: ProfileStatsProps) => {
  const statItems = [
    { value: stats.posts, label: '게시물' },
    { value: stats.followers, label: '팔로워' },
    { value: stats.following, label: '팔로잉' },
  ];

  return (
    <div className="flex items-center justify-around flex-1">
      {statItems.map((item) => (
        <div key={item.label} className="flex flex-col items-center">
          <span
            className="font-semibold text-base"
            style={{ color: 'var(--ig-text-primary)' }}
          >
            {item.value}
          </span>
          <span className="text-sm" style={{ color: 'var(--ig-text-primary)' }}>
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
};
