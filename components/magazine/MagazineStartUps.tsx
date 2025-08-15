
import MagazineStartUpsCard from './MagazineStartUpsCard';

export default function MagazineStartUps() {
  return (
    <div className="px-16">
      <div className="mx-auto">
        {/* Section Title */}
        <h1 className="divide-y-7 mb-1 mt-5 text-center text-4xl text-slate-950">
          STARTUPS
        </h1>
      </div>

      {/* Horizontal Line */}
      <hr className="mx-auto mb-9 mt-4 h-1 w-80 border-0 bg-gray-200 dark:bg-gray-700" />

      {/* StartUp Cards */}
      <MagazineStartUpsCard
        description="Quisque pretium fermentum quam, sit amet cursus ante sollicitudin vel. Morbi consequat risus consequat, porttitor orci sit amet, iaculis nisl. Integer quis sapien neceli ultrices euismod sit amet id lacus. Sed a imperdiet erat. Duis eu est dignissim lacus.."
        title="LANDA TRIP"
        image="" // Add your image source here
      />

      <MagazineStartUpsCard
        description="Quisque pretium fermentum quam, sit amet cursus ante sollicitudin vel. Morbi consequat risus consequat, porttitor orci sit amet, iaculis nisl. Integer quis sapien neceli ultrices euismod sit amet id lacus. Sed a imperdiet erat. Duis eu est dignissim lacus.."
        title="DIACO"
        image="Rectangle 2878.png" // Add your image source here
      />

      {/* TODO: Add more StartUp Cards with props */}
    </div>
  );
}
