import { BRIDE_GROOM_INFO } from '@/constants/weddingInfo';
const Introduce = () => {
  return (
    <div className="text-center my-10 flex flex-col items-center gap-3">
      <div>
        {BRIDE_GROOM_INFO.groomParents.father.name}·
        {BRIDE_GROOM_INFO.groomParents.mother.name}의 장남{' '}
        {BRIDE_GROOM_INFO.groom.name}
      </div>
      <div>
        {BRIDE_GROOM_INFO.brideParents.father.name}·
        {BRIDE_GROOM_INFO.brideParents.mother.name}의 장녀{' '}
        {BRIDE_GROOM_INFO.bride.name}
      </div>
    </div>
  );
};

export default Introduce;
