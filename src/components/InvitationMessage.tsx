const title = '저희 결혼합니다';

const message = `
저희의 결혼 소식이
부담스럽지 않게다가가길 바라며,
편한 마음으로 오셔서
축하해주시면 감사하겠습니다.

혹여 참석이 어려우시더라도 부담 갖지 마시고,
마음으로 축하해주시면 감사하겠습니다.
`;

const InvitationMessage = () => {
  return (
    <div className="text-center my-10 flex flex-col items-center gap-3">
      <div className="text-xl font-bold">{title}</div>
      <div className="text-base whitespace-pre-line">{message}</div>
    </div>
  );
};

export default InvitationMessage;
