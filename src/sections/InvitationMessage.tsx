import { BRIDE_GROOM_INFO } from '@/constants/weddingInfo';
import ScrollFadeIn from '@/components/ScrollFadeIn';

const title = 'We are getting married';

const message = `4년 전 여름, 한낮의 열기 속에서
두 마음이 이어졌습니다.
작은 별들이 말끝마다 이어져
서로의 밤을 밝혀 주었지요.

우리는 시간의 계절들을 함께 건너며
흔들림보다 깊은 평온을 얻게 되었습니다.

가을의 첫머리,
한 권의 책을 닫듯, 한 편의 길을 열듯,
이제 서로의 집이 되어 걸어가려 합니다.
`;

const InvitationMessage = () => {
  return (
    <section className="pt-10">
      <ScrollFadeIn>
        <h3>{title}</h3>
      </ScrollFadeIn>
      <ScrollFadeIn>
        <p>{message}</p>
      </ScrollFadeIn>
      <ScrollFadeIn>
        <div className="text-center mt-10 flex flex-col items-center gap-3">
          <p>
            {BRIDE_GROOM_INFO.groomParents.father.name}·
            {BRIDE_GROOM_INFO.groomParents.mother.name}의 장남{' '}
            <b>{BRIDE_GROOM_INFO.groom.name}</b>
          </p>
          <p>
            {BRIDE_GROOM_INFO.brideParents.father.name}·
            {BRIDE_GROOM_INFO.brideParents.mother.name}의 장녀{' '}
            <b>{BRIDE_GROOM_INFO.bride.name}</b>
          </p>
        </div>
      </ScrollFadeIn>
    </section>
  );
};

export default InvitationMessage;
