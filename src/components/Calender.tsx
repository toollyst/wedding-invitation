import { VENUE_INFO } from '@/constants/weddingInfo';
import ScrollFadeIn from './common/ScrollFadeIn';
import { Calendar } from './common/Calendar';

const title = 'Save the Date';

const DateInfo = () => {
  const today = new Date();
  const diffTime = VENUE_INFO.weddingDate.getTime() - today.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  return (
    <div className="flex flex-col items-center gap-4 px-4">
      <ScrollFadeIn>
        <h3>{title}</h3>
      </ScrollFadeIn>
      <ScrollFadeIn>
        <h5>{VENUE_INFO.weddingDateString}</h5>
      </ScrollFadeIn>
      <ScrollFadeIn>
        <h5>
          {VENUE_INFO.venueName} {VENUE_INFO.venueNameDetail}
        </h5>
      </ScrollFadeIn>
      <ScrollFadeIn>
        <Calendar date={VENUE_INFO.weddingDate} />
      </ScrollFadeIn>
      <ScrollFadeIn>
        <p>D-{diffDays}</p>
      </ScrollFadeIn>
    </div>
  );
};

export default DateInfo;
