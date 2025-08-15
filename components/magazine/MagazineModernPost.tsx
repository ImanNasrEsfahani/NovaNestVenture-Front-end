
import MagazineModernPostCard from './MagazineModernPostCard';
import MagazineModernPostCard2 from './MagazineModernPostCard2';
import MagazineModernPostCard3 from './MagazineModernPostCard3';
import MagazineModernPostBottomSpace from './MagazineModernPostBottomSpace';

export default function MagazineModernPost() {
  return (
    <div>
      <h1 className="ml-20 mt-5 px-16 text-left text-4xl text-slate-950">
        MODERN POST
      </h1>
      <div className="text-1xl mt-5 px-36 text-justify text-slate-950">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
        commodi iste nobis est voluptatem voluptates ratione provident eos
        culpa, neque unde ab minima harum! Autem veniam similique laboriosam
        dolorem mollitia.
      </div>
      <MagazineModernPostCard />
      <hr className="horizontal-rule" />
      <MagazineModernPostCard2 />
      <hr className="horizontal-rule" />
      <MagazineModernPostCard3 />
      <hr className="horizontal-rule" />
      <div className="text-bold mb-6 mt-5 px-24 text-justify text-3xl text-slate-950">
        12 DECEMBER 2022
      </div>
      <MagazineModernPostBottomSpace />
    </div>
  );
}
