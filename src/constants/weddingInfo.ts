export interface Person {
  name: string;
  phone: string;
  bankName?: string;
  accountNumber?: string;
  accountHolder?: string;
}

export interface WeddingInfo {
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
  weddingDate: Date;
  weddingDateString: string;
  weddingVenue: string;
  weddingAddress: string;
}

export const WEDDING_INFO: WeddingInfo = {
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
      name: '심○○',
      phone: '010-1234-5678',
      bankName: '국민은행',
      accountNumber: '123456-78-901234',
      accountHolder: '김영호',
    },
    mother: {
      name: '이○○',
      phone: '010-1234-5678',
      bankName: '국민은행',
      accountNumber: '123456-78-901234',
      accountHolder: '김영호',
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
  weddingDate: new Date(2026, 8, 5, 11, 30),
  weddingDateString: '2026년 9월 5일 오전 11시 30분',
  weddingVenue: '그랜드힐 컨벤션',
  weddingAddress: '서울 강남구 역삼로 607',
};
