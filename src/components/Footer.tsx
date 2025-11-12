import { BRIDE_GROOM_INFO } from '@/constants/weddingInfo';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className=" py-8 mt-12">
      <div className="text-center">
        <div className="text-lg font-semibold mb-2" style={{ color: 'var(--text-main)' }}>
          감사합니다
        </div>
        <div className="text-sm flex items-center justify-center">
          Made by {BRIDE_GROOM_INFO.groom.name}
          <Image
            src="/heart.svg"
            alt="heart"
            width={16}
            height={16}
            className="inline-block mx-1"
          />
          {BRIDE_GROOM_INFO.bride.name}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
