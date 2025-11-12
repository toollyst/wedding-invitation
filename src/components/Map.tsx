'use client';

import { VENUE_INFO } from '@/constants/weddingInfo';
import Image from 'next/image';
import { useState } from 'react';

const title = '오시는 길';

const CAR_DESC = `강남 → 잠실 (테헤란로 기준)
강남역에서 삼성역 방향 직진 후 삼성역 사거리 지나
강남경찰서 사거리에서 우회전.
직진 후 400미터 지점에 위치

잠실 → 강남 (테헤란로 기준)
잠실역에서 종합운동장역 사거리 직진 후
삼성교 지나 강남경찰서 사거리 에서 좌회전.
직진 후 400미터 지점에 위치

동시 000대 / 2시간 무료
주차 공간이 충분하므로 자차 이용을 권장드립니다.
`;

const METRO_DESC = `지하철 2호선 삼성역 1번출구
1번 출구 : 셔틀버스 항시 대기
2번 출구 : 도보(5분 정도 소요)
`;

const BUS_DESC = `간선버스(파랑색) : 143, 146, 341, 360, 401
지선버스(녹색) 2413, 3411, 3422, 4318, 11-3
광역버스(빨강색) 9407, 6900
`;

const Description = ({
  iconSrc,
  title,
  desc,
}: {
  iconSrc: string;
  title: string;
  desc: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mx-8 my-2">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-4 flex items-center gap-1 justify-center rounded-md transition-colors cursor-pointer hover:bg-[var(--bg-color)]"
      >
        <Image
          src={iconSrc}
          alt="map"
          width={16}
          height={16}
          className="w-5 h-5 inline-block"
        />
        <div className="inline-block">{title}</div>
        <span
          className="ml-2 text-sm transition-transform duration-300"
          style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
        >
          ▼
        </span>
      </button>
      <div
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{
          maxHeight: isOpen ? '500px' : '0px',
          opacity: isOpen ? 1 : 0,
        }}
      >
        <div className="px-4 pb-4 text-sm whitespace-pre-line">{desc}</div>
      </div>
    </div>
  );
};

const Map = () => {
  return (
    <div className="flex flex-col item-center align-center my-10">
      <div className="text-lg font-semibold text-center">{title}</div>
      <div className="text-center">
        {VENUE_INFO.address} {VENUE_INFO.venueName}
      </div>
      <div>여기에 지도</div>

      <Description iconSrc="/car.svg" title="자차" desc={CAR_DESC} />
      <Description iconSrc="/metro.svg" title="지하철" desc={METRO_DESC} />
      <Description iconSrc="/bus.svg" title="버스" desc={BUS_DESC} />
    </div>
  );
};

export default Map;
