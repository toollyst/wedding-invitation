import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { side, attendance, name, guestCount } = body;

    // 입력 검증
    if (!side || !attendance || !name) {
      return NextResponse.json(
        { error: '필수 항목을 모두 입력해주세요.' },
        { status: 400 },
      );
    }

    // TODO: Google Sheets API 연동
    // 현재는 콘솔에 로그만 출력
    console.log('RSVP 제출:', { side, attendance, name, guestCount });

    // Google Sheets API 연동 예시 코드 (나중에 활성화)
    /*
    const { GoogleSpreadsheet } = require('google-spreadsheet');
    const { JWT } = require('google-auth-library');

    const serviceAccountAuth = new JWT({
      email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const doc = new GoogleSpreadsheet(
      process.env.GOOGLE_SHEET_ID!,
      serviceAccountAuth,
    );

    await doc.loadInfo();
    const sheet = doc.sheetsByIndex[0];

    await sheet.addRow({
      날짜: new Date().toLocaleString('ko-KR'),
      측별: side === 'groom' ? '신랑측' : '신부측',
      참석여부: attendance === 'attend' ? '참석' : attendance === 'not-attend' ? '불참' : '미정',
      이름: name,
      인원수: guestCount || '-',
    });
    */

    return NextResponse.json({
      success: true,
      message: '참석 여부가 전달되었습니다.',
    });
  } catch (error) {
    console.error('RSVP 제출 오류:', error);
    return NextResponse.json(
      { error: '제출 중 오류가 발생했습니다.' },
      { status: 500 },
    );
  }
}
