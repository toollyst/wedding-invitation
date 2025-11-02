const title = 'We are getting married';

const message = `
4년 전 여름, 두 마음이 만나
서로의 밤을 밝혀 주는 별이 되었습니다.

함께한 시간 동안 우리는 많은 계절을 지나며
마침내 서로의 믿음 속에서 깊은 안온함에 닿았습니다.

가을의 첫머리,
한 권의 책을 닫듯, 한 편의 길을 열듯,
서로의 집이 되려 합니다.
`;

const InvitationMessage = () => {
  return (
    <div className="text-center py-10 flex flex-col items-center gap-3">
      <div className="text-xl font-bold">{title}</div>
      <div className="text-base whitespace-pre-line">{message}</div>
    </div>
  );
};

export default InvitationMessage;
