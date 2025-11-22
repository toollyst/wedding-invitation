import Image from 'next/image';

const Hero = () => {
  return (
    <div
      className="relative px-5 bg-cover bg-center bg-no-repeat h-screen flex items-end justify-end pb-24 w-full"
      style={{
        backgroundImage: 'url(/images/wedding10.jpg)',
      }}
    >
      <div
        className="w-full text-center text-4xl sm:text-6xl"
        style={{ fontFamily: 'var(--font-hurricane)' }}
      >
        <div className="text-white drop-shadow-lg">The Beginning</div>
        <div className="text-white drop-shadow-lg">of Always</div>
      </div>
    </div>
  );
};

export default Hero;
