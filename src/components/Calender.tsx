import { WEDDING_INFO } from '@/constants/weddingInfo';

const Calender = () => {
  const today = new Date();
  const diffTime = WEDDING_INFO.weddingDate.getTime() - today.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  console.log(diffDays);
  return (
    <div className="flex flex-col items-center gap-2 my-10 mx-8 border-t-2 border-b-2 border-[#FFDCDC] py-2">
      <div>{WEDDING_INFO.weddingDateString}</div>
      <div>{WEDDING_INFO.weddingVenue}</div>
      <div>D-{diffDays}</div>
    </div>
  );
};

export default Calender;
