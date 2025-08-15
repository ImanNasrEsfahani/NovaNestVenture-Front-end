
import EventCard from './EventCard';

export default function EventCardsContainer() {
  return (
    <div className="mx-4 my-6 flex flex-col gap-10 md:mx-28 md:my-16">
      {/* TODO: read from backend */}
      <EventCard />
      <EventCard />
      <EventCard />
      <EventCard />
      <EventCard />
      <EventCard />
    </div>
  );
}
