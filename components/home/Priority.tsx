import PriorityCard from './PriorityCard';

interface PriorityProps {
    Priorities: string;
    cardData: Array<{ title: string; image: string }>;
}

export default function Priority({ Priorities, cardData }: PriorityProps) {

  return (
    <section className="w-full max-w-responsive mx-auto py-16 lg:py-24 text-center">
      <h3 className="text-4xl font-header font-bold mb-20 text-gray-800">
        {Priorities}
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 place-items-center">
        {cardData.map(({ title, image }, index) => (
          <PriorityCard key={index} title={title} image={image} />
        ))}
      </div>
    </section>
  );
}
