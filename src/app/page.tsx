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
import ConfettiBackground from '@/components/ConfettiBackground';

export default function Page() {
  return (
    <div className="mx-auto w-105">
      <ConfettiBackground />
      <Hero />
      <div className=" bg-gradient-to-t from-[#FFDCDF] via-[#FFDCDC]/40 to-[#FFF2EB]">
        <InvitationMessage />
        <Introduce />

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
