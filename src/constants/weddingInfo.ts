export interface VenueInfo {
  weddingDate: Date;
  weddingDateString: string;
  venueName: string;
  venueNameDetail: string;
  address: string;
}

export const VENUE_INFO: VenueInfo = {
  weddingDate: new Date(2026, 8, 5, 11, 30),
  weddingDateString: '2026년 9월 5일 오전 11시 30분',
  venueName: '그랜드힐 컨벤션',
  venueNameDetail: '2F 사브리나홀',
  address: '서울 강남구 역삼로 607',
};

export interface Person {
  name: string;
  phone: string;
  bankName?: string;
  accountNumber?: string;
  accountHolder?: string;
}

export interface BrideGroomInfo {
  groom: Person;
  bride: Person;
  groomParents: {
    father: Person;
    mother: Person;
  };
  brideParents: {
    father: Person;
    mother: Person;
  };
}

export const BRIDE_GROOM_INFO: BrideGroomInfo = {
  groom: {
    name: '심상원',
    phone: '010-3327-4025',
    bankName: '토스',
    accountNumber: '123456-78-901234',
    accountHolder: '심상원',
  },
  bride: {
    name: '김예현',
    phone: '010-9284-4688',
    bankName: '기업은행',
    accountNumber: '987654-32-109876',
    accountHolder: '김예현',
  },
  groomParents: {
    father: {
      name: '심대택',
      phone: '010-1234-5678',
      bankName: '국민은행',
      accountNumber: '123456-78-901234',
      accountHolder: '심대택',
    },
    mother: {
      name: '안미영',
      phone: '010-1234-5678',
      bankName: '국민은행',
      accountNumber: '123456-78-901234',
      accountHolder: '안미영',
    },
  },
  brideParents: {
    father: {
      name: '김영진',
      phone: '010-1234-5678',
      bankName: '국민은행',
      accountNumber: '123456-78-901234',
      accountHolder: '김영진',
    },
    mother: {
      name: '이은정',
      phone: '010-1234-5678',
      bankName: '국민은행',
      accountNumber: '123456-78-901234',
      accountHolder: '이은정',
    },
  },
};
