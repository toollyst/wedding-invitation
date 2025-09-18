import Hero from '@/components/Hero';
import InvitationMessage from '@/components/InvitationMessage';
import Introduce from '@/components/Introduce';
import Contact from '@/components/Contact';
import Calender from '@/components/Calender';
import Gallery from '@/components/Gallery';
import Map from '@/components/Map';
import RSVP from '@/components/RSVP';
import Bank from '@/components/Bank';
import Footer from '@/components/Footer';

export default function Page() {
  return (
    <>
      <Hero />
      <InvitationMessage />
      <Introduce />
      <Contact />
      <Calender />
      <Gallery />
      <Map />
      <RSVP />
      <Bank />
      <Footer />
    </>
  );
}
