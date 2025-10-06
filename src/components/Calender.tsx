import { VENUE_INFO } from '@/constants/weddingInfo';

const Calender = () => {
  const today = new Date();
  const diffTime = VENUE_INFO.weddingDate.getTime() - today.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  return (
    <div className="flex flex-col items-center gap-2 my-10 mx-8 border-t-2 border-b-2 border-[#FFDCDC] py-2">
      <div>{VENUE_INFO.weddingDateString}</div>
      <div>{VENUE_INFO.venueName}</div>
      <div>{VENUE_INFO.venueNameDetail}</div>
      <div>D-{diffDays}</div>
    </div>
  );
};

export default Calender;
