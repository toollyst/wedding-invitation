import { WEDDING_INFO } from '@/constants/weddingInfo';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className=" py-8 mt-12">
      <div className="text-center">
        <div className="text-lg font-semibold text-gray-700 mb-2">
          감사합니다
        </div>
        <div className="text-sm flex items-center justify-center">
          Made by {WEDDING_INFO.groom.name}
          <Image
            src="/heart.svg"
            alt="heart"
            width={16}
            height={16}
            className="inline-block mx-1"
          />
          {WEDDING_INFO.bride.name}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
