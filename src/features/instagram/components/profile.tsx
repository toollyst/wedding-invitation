import { cn } from '@/lib/utils';
import { PROFILE_DATA } from '../constants/profileData';
import { ProfileAvatar } from './profile-avatar';

type ProfileProps = {
  className?: string;
};

export function Profile({ className }: ProfileProps) {
  return (
    <div className={cn('flex gap-8 px-4', className)}>
      <ProfileAvatar
        size={80}
        padding={4}
        ringWidth={4}
        src={PROFILE_DATA.imageUrl}
      />
      <ProfileStats />
    </div>
  );
}

const ProfileStats = () => {
  const statItems = [
    { value: PROFILE_DATA.stats.posts, label: '게시물' },
    { value: PROFILE_DATA.stats.followers, label: '팔로워' },
    { value: PROFILE_DATA.stats.following, label: '팔로잉' },
  ];

  return (
    <div className="flex flex-1 flex-col justify-center gap-0.5">
      <span>{PROFILE_DATA.displayName}</span>
      <div className={cn('flex w-full items-center')}>
        {statItems.map((item) => (
          <div
            key={item.label}
            className={cn('flex flex-1 flex-col items-start tabular-nums')}
          >
            <span className="font-semibold">{item.value}</span>
            <span className="text-sm">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
