import Image from 'next/image';

const Hero = () => {
  return (
    <div
      className="relative px-5 bg-cover bg-center bg-no-repeat h-screen flex items-center justify-center"
      style={{
        backgroundImage: 'url(/images/wedding10.jpg)',
      }}
    >
      <div className="relative w-full h-full">
        <Image
          src="/hand_writing.svg"
          alt="wedding"
          fill
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default Hero;
