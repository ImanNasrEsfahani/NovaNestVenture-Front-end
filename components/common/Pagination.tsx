
import ArrowLeftShort from '@/components/icons/common/ArrowLeftShort';
import ArrowRightShort from '@/components/icons/common/ArrowRightShort';

export default function Pagination() {
  return (
    <div className="my-2 flex justify-center gap-5">
      <div className="btn btn-xs size-8 items-center justify-center rounded-sm p-2">
        <ArrowLeftShort />
      </div>

      <div className="btn btn-xs size-8 items-center justify-center rounded-sm p-2">
        1
      </div>
      <div className="btn btn-xs size-8 items-center justify-center rounded-sm p-2">
        2
      </div>
      <div className="btn btn-xs size-8 items-center justify-center rounded-sm p-2">
        3
      </div>
      <div className="btn btn-xs size-8 items-center justify-center rounded-sm p-2">
        4
      </div>
      <div className="btn btn-xs size-8 items-center justify-center rounded-sm p-2">
        ...
      </div>
      <div className="btn btn-xs size-8 items-center justify-center rounded-sm p-2">
        <ArrowRightShort />
      </div>
    </div>
  );
}
