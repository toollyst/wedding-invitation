const Hero = () => {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat h-screen flex items-center justify-center"
      style={{
        backgroundImage: 'url(/images/wedding10.jpg)',
      }}
    >
      <div
        className="text-white text-5xl font-bold text-center"
        style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.7)' }}
      >
        We are getting married
      </div>
    </div>
  );
};

export default Hero;
