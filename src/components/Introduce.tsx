import { WEDDING_INFO } from '@/constants/weddingInfo';
const Introduce = () => {
  return (
    <div className="text-center my-10 flex flex-col items-center gap-3">
      <div>
        {WEDDING_INFO.groomParents.father.name}·
        {WEDDING_INFO.groomParents.mother.name}의 장남 {WEDDING_INFO.groom.name}
      </div>
      <div>
        {WEDDING_INFO.brideParents.father.name}·
        {WEDDING_INFO.brideParents.mother.name}의 장녀 {WEDDING_INFO.bride.name}
      </div>
    </div>
  );
};

export default Introduce;
