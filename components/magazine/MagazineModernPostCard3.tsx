
import Image from 'next/image';
import UlList from '../List/UlList';

export default function MagazineModernPostCard3() {
  return (
    <div className="px-16">
      <div className="mx-20 mb-16 py-4">
        {/* Date */}
        <div className="flex flex-col justify-start">
          <h2 className="mt-1 text-2xl font-bold text-slate-950">
            12 DECEMBER 2022
          </h2>
          <br />
          {/* Title */}
          <h2 className="mt-1 text-2xl font-bold text-yellow-600">
            Newspaper Created as a Hobby
          </h2>
        </div>

        {/* Description */}
        <div className="flex flex-col justify-start">
          <p className="my-5 text-justify font-bold text-slate-950">
            Quisque pretium fermentum quam, sit amet cursus ante sollicitudin
            vel. Morbi consequat risus consequat, porttitor orci sit amet,
            iaculis nisl. Integer quis sapien neceli ultrices euismod sit amet
            id lacus. Sed a imperdiet erat. Duis eu est dignissim lacus...
          </p>

          {/* Additional Paragraph */}
          <p className="my-5 text-justify font-bold text-slate-950">
            Quisque pretium fermentum quam, sit amet cursus ante sollicitudin
            vel. Morbi consequat risus consequat, porttitor orci sit amet,
            iaculis nisl. Integer quis sapien neceli ultrices euismod sit amet
            id lacus. Sed a imperdiet erat. Duis eu est dignissim lacus...
          </p>

          {/* Image */}
          <div className="flex flex-col justify-center">
            <Image
              loading="lazy"
              className=""
              src={'/static/images/magazine/Rectangle 2881.png'}
              alt="NovaNest Venture"
              width={800}
              height={300}
            />
            <UlList
              list={[
                "This is an item in the list, for example.",
                "This is another item in the list, for example.",
                "This is another item in the list, for example.",
                "This is another item in the list, for example."
              ]}
              style1="px-4 mt-3 text-slate-950"
              style2="list-disc"
              style3="my-2"
            />
            {/* <div className="px-4 mt-3 text-slate-950">
              <ul className="list-disc">
                <li className="my-2">
                  This is an item in the list, for example.
                </li>
                <li className="my-2">
                  This is another item in the list, for example.
                </li>
                <li className="my-2">
                  This is another item in the list, for example.
                </li>
                <li className="my-2">
                  This is another item in the list, for example.
                </li>
              </ul>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
