import Hero from '@/sections/Hero';
import InvitationMessage from '@/sections/InvitationMessage';
import Contact from '@/sections/Contact';
import DateInfo from '@/sections/DateInfo';
import Gallery from '@/sections/Gallery';
import Map from '@/sections/Map';
import RSVP from '@/sections/RSVP';
import Bank from '@/sections/Bank';
import Footer from '@/sections/Footer';
import ConfettiBackground from '@/sections/ConfettiBackground';
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
