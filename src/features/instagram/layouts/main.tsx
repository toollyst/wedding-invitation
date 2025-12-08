import { InstagramHeader } from '../components/header';
import { Header } from '../components/layout/Header';
import { PROFILE_DATA } from '../constants/profileData';

export function InstagramMainLayout({ children }: LayoutProps<'/i'>) {
  return (
    <div className="h-screen w-screen">
      <div className="m-auto flex h-full w-full max-w-120 flex-col overflow-hidden">
        <InstagramHeader />
        {children}
      </div>
    </div>
  );
}
