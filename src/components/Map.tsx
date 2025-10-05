import { WEDDING_INFO } from '@/constants/weddingInfo';

const Map = () => {
  return (
    <div className="flex flex-col item-center align-center text-center my-10">
      <div>오시는 길</div>
      <div>
        {WEDDING_INFO.weddingAddress} {WEDDING_INFO.weddingVenue}
      </div>
      <div>여기에 지도</div>
    </div>
  );
};

export default Map;
