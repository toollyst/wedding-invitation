'use client';

import { WEDDING_INFO } from '@/constants/weddingInfo';
import Image from 'next/image';

const ContactItem = ({ name, phone }: { name: string; phone: string }) => {
  const handlePhoneCall = (phoneNumber: string) => {
    window.open(`tel:${phoneNumber}`, '_self');
  };

  const handleSendMessage = (phoneNumber: string) => {
    window.open(`sms:${phoneNumber}`, '_self');
  };
  return (
    <div className="flex flex-col items-center">
      <div>{name}</div>
      <div className="flex gap-2">
        <button
          onClick={() => handlePhoneCall(phone)}
          className="p-2 rounded-full cursor-pointer transition-colors"
        >
          <Image
            src="/phone.svg"
            alt="phone"
            width={16}
            height={16}
            className="w-6 h-6"
          />
        </button>
        <button
          onClick={() => handleSendMessage(phone)}
          className="p-2 rounded-full cursor-pointer transition-colors"
        >
          <Image
            src="/message.svg"
            alt="message"
            width={16}
            height={16}
            className="w-6 h-6"
          />
        </button>
      </div>
    </div>
  );
};

const Contact = () => {
  return (
    <div className="flex gap-2">
      <div className="flex-1 flex flex-col gap-6">
        <ContactItem
          name={`신랑 ${WEDDING_INFO.groom.name}`}
          phone={WEDDING_INFO.groom.phone}
        />
        <ContactItem
          name={`아버지 ${WEDDING_INFO.groomParents.father.name}`}
          phone={WEDDING_INFO.groomParents.father.phone}
        />
        <ContactItem
          name={`어머니 ${WEDDING_INFO.groomParents.mother.name}`}
          phone={WEDDING_INFO.groomParents.mother.phone}
        />
      </div>

      <div className="flex-1 flex flex-col gap-6">
        <ContactItem
          name={`신부 ${WEDDING_INFO.bride.name}`}
          phone={WEDDING_INFO.bride.phone}
        />
        <ContactItem
          name={`아버지 ${WEDDING_INFO.brideParents.father.name}`}
          phone={WEDDING_INFO.brideParents.father.phone}
        />
        <ContactItem
          name={`어머니 ${WEDDING_INFO.brideParents.mother.name}`}
          phone={WEDDING_INFO.brideParents.mother.phone}
        />
      </div>
    </div>
  );
};

export default Contact;
