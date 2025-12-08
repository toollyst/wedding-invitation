import { Profile } from '@/features/instagram/components/profile';
import { Stories } from '../components/stories';

export function InstagramMainPage() {
  return (
    <div className="flex h-full w-full flex-col">
      <Profile />
      <Stories />
    </div>
  );
}
