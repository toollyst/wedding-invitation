import Hero from '@/components/Hero';
import InvitationMessage from '@/components/InvitationMessage';
import Contact from '@/components/Contact';
import Calender from '@/components/Calender';
import Gallery from '@/components/Gallery';
import Map from '@/components/Map';
import RSVP from '@/components/RSVP';
import Bank from '@/components/Bank';
import Footer from '@/components/Footer';
import ConfettiBackground from '@/components/ConfettiBackground';

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

        <Calender />
        <Map />
        <RSVP />

        <Gallery />

        <Contact />
        <Bank />

        <Footer />
      </div>
    </div>
  );
}
