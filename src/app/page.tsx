import Hero from '@/features/basic/sections/Hero';
import InvitationMessage from '@/features/basic/sections/InvitationMessage';
import Contact from '@/features/basic/sections/Contact';
import DateInfo from '@/features/basic/sections/DateInfo';
import Gallery from '@/features/basic/sections/Gallery';
import Map from '@/features/basic/sections/Map';
import RSVP from '@/features/basic/sections/RSVP';
import Bank from '@/features/basic/sections/Bank';
import Footer from '@/features/basic/sections/Footer';
import ConfettiBackground from '@/features/basic/sections/ConfettiBackground';
import { Divider } from '@/components/Divider';

export default function Page() {
  return (
    <div className="w-full max-w-105 mx-auto overflow-x-hidden">
      <ConfettiBackground />
      <Hero />
      <div
        className="w-full"
        style={{
          background:
            'linear-gradient(to top, var(--bg-color-emphasis), var(--bg-color))',
        }}
      >
        <InvitationMessage />
        <Divider />
        <DateInfo />
        <Divider />
        <Map />
        <Divider />
        <RSVP />
        <Divider />
        <Gallery />
        <Divider />
        <Contact />
        <Divider />
        <Bank />

        <Footer />
      </div>
    </div>
  );
}
