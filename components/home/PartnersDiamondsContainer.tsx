import PartnersDiamond from './PartnersDiamond';
// TODO: import from i18n instead of statics
import { partners1, partners2, partners3 } from '../../app/[lang]/statics';

export default function PartnersDiamondsContainer() {
  return (
    <div className="flex flex-col">
      <div className="mx-auto flex flex-wrap gap-14 pt-48">
        {partners1.map((partner, index) => (
          <PartnersDiamond
            key={index}
            backgroundImage={partner.number}
            name={partner.alt}
          />
        ))}
      </div>
      <div className="mx-auto flex flex-wrap gap-14">
        {partners2.map((partner, index) => (
          <PartnersDiamond
            key={index}
            backgroundImage={partner.number}
            name={partner.alt}
          />
        ))}
      </div>
      <div className="mx-auto flex flex-wrap  gap-14 pb-20">
        {partners3.map((partner, index) => (
          <PartnersDiamond
            key={index}
            backgroundImage={partner.number}
            name={partner.alt}
          />
        ))}
      </div>
    </div>
  );
}
