'use client';

import Image from 'next/image';
import { useState } from 'react';
import { VENUE_INFO } from '@/constants/weddingInfo';

const CAR_DESC = `강남 → 잠실 (테헤란로 기준)
강남역에서 삼성역 방향 직진 후 삼성역 사거리 지나
강남경찰서 사거리에서 우회전.
직진 후 400미터 지점에 위치

잠실 → 강남 (테헤란로 기준)
잠실역에서 종합운동장역 사거리 직진 후
삼성교 지나 강남경찰서 사거리 에서 좌회전.
직진 후 400미터 지점에 위치

동시 000대 / 2시간 무료
주차 공간이 충분하므로 자차 이용을 권장드립니다.`;

const METRO_DESC = `지하철 2호선 삼성역 1번출구
1번 출구 : 셔틀버스 항시 대기
2번 출구 : 도보(5분 정도 소요)`;

const BUS_DESC = `간선버스(파랑색) : 143, 146, 341, 360, 401
지선버스(녹색) 2413, 3411, 3422, 4318, 11-3
광역버스(빨강색) 9407, 6900`;

interface TransportSectionProps {
  iconSrc: string;
  title: string;
  description: string;
}

const TransportSection = ({ iconSrc, title, description }: TransportSectionProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const id = `transport-${title.toLowerCase()}`;

  return (
    <div className="border-b" style={{ borderColor: 'var(--ig-border)' }}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-3 flex items-center justify-between"
        aria-expanded={isOpen}
        aria-controls={id}
      >
        <div className="flex items-center gap-3">
          <Image src={iconSrc} alt={title} width={20} height={20} />
          <span
            className="font-medium text-sm"
            style={{ color: 'var(--ig-text-primary)' }}
          >
            {title}
          </span>
        </div>
        <Image
          src="/Name=Arrow Down, State=default, Dark=no.svg"
          alt=""
          width={16}
          height={16}
          className="transition-transform duration-200"
          style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
        />
      </button>
      <div
        id={id}
        className="overflow-hidden transition-all duration-300"
        style={{
          maxHeight: isOpen ? '400px' : '0px',
          opacity: isOpen ? 1 : 0,
        }}
      >
        <p
          className="px-4 pb-4 text-sm whitespace-pre-line text-left"
          style={{ color: 'var(--ig-text-secondary)' }}
        >
          {description}
        </p>
      </div>
    </div>
  );
};

export const LocationTab = () => {
  const handleCopyAddress = async () => {
    try {
      await navigator.clipboard.writeText(VENUE_INFO.address);
      alert('주소가 복사되었습니다!');
    } catch {
      console.error('Failed to copy address');
    }
  };

  const openMap = (type: 'kakao' | 'naver' | 'tmap') => {
    const address = encodeURIComponent(VENUE_INFO.address);
    const name = encodeURIComponent(VENUE_INFO.venueName);

    const urls = {
      kakao: `https://map.kakao.com/link/search/${name}`,
      naver: `https://map.naver.com/v5/search/${address}`,
      tmap: `https://tmap.life/navigate?goalx=127.05502&goaly=37.50806&goalname=${name}`,
    };

    window.open(urls[type], '_blank');
  };

  return (
    <div>
      {/* Map Image */}
      <div className="relative">
        <a
          href="https://map.kakao.com/?urlX=514750&urlY=1112950&urlLevel=3&map_type=TYPE_MAP&map_hybrid=false"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://map2.daum.net/map/mapservice?FORMAT=PNG&SCALE=2.5&MX=514750&MY=1112950&S=0&IW=504&IH=310&LANG=0&COORDSTM=WCONGNAMUL&logo=kakao_logo"
            alt="카카오맵"
            className="w-full"
            style={{ aspectRatio: '504/310' }}
          />
        </a>
      </div>

      {/* Address Section */}
      <div className="p-4 border-b" style={{ borderColor: 'var(--ig-border)' }}>
        <div className="flex items-start justify-between">
          <div>
            <p
              className="font-semibold text-sm text-left"
              style={{ color: 'var(--ig-text-primary)' }}
            >
              {VENUE_INFO.venueName} {VENUE_INFO.venueNameDetail}
            </p>
            <p
              className="text-sm mt-1 text-left"
              style={{ color: 'var(--ig-text-secondary)' }}
            >
              {VENUE_INFO.address}
            </p>
          </div>
          <button
            onClick={handleCopyAddress}
            className="p-2 hover:bg-gray-100 rounded"
            aria-label="주소 복사"
          >
            <Image src="/copy.svg" alt="Copy" width={16} height={16} />
          </button>
        </div>

        {/* Map App Buttons */}
        <div className="flex gap-2 mt-4">
          <button
            onClick={() => openMap('kakao')}
            className="flex-1 py-2 text-sm font-medium rounded-md"
            style={{
              background: '#FEE500',
              color: '#191919',
            }}
          >
            카카오맵
          </button>
          <button
            onClick={() => openMap('naver')}
            className="flex-1 py-2 text-sm font-medium rounded-md"
            style={{
              background: '#03C75A',
              color: '#fff',
            }}
          >
            네이버지도
          </button>
          <button
            onClick={() => openMap('tmap')}
            className="flex-1 py-2 text-sm font-medium rounded-md"
            style={{
              background: '#EF4135',
              color: '#fff',
            }}
          >
            티맵
          </button>
        </div>
      </div>

      {/* Transportation Info */}
      <div>
        <TransportSection iconSrc="/car.svg" title="자가용" description={CAR_DESC} />
        <TransportSection iconSrc="/metro.svg" title="지하철" description={METRO_DESC} />
        <TransportSection iconSrc="/bus.svg" title="버스" description={BUS_DESC} />
      </div>
    </div>
  );
};
