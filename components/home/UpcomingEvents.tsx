
import ButtonRefactor from '@/components/common/ButtonRefactor';

export default function UpcomingEvents() {

  return (
    <div className="relative h-[480px] bg-[#FAFAFA]">
      <div className="absolute left-20 top-10 font-header text-2xl font-normal text-neutral-800 md:left-[185px] md:top-[29px] md:text-4xl">
        UPCOMING EVENT
      </div>
      <div className="absolute left-[20px] top-[118px] inline-flex flex-col items-start justify-center gap-[18px] md:left-[174px] md:pr-[40px]">
        <div className="flex items-center justify-between self-stretch md:w-[1100px]">
          <div className="flex items-start justify-start gap-1 md:w-[307px] md:gap-16">
            <div className="inline-flex flex-col items-center justify-start px-8 font-condensed">
              <div className="text-right text-4xl font-medium text-primary">
                08
              </div>
              <div className="text-right text-3xl font-medium text-primary">
                oct
              </div>
            </div>
            <div className="inline-flex flex-col items-start justify-start gap-2">
              <div className="text-right font-condensed text-3xl font-medium text-neutral-800">
                Investment
              </div>
              <div className="font-condensed text-base font-normal tracking-widest text-neutral-400">
                MONDAY/ 2023
              </div>
            </div>
          </div>
          <ButtonRefactor text="Register" />
        </div>
        <div className="flex items-center justify-between self-stretch md:w-[1100px]">
          <div className="flex items-start justify-start gap-1 md:w-[307px] md:gap-16">
            <div className="inline-flex flex-col items-center justify-start px-8 font-condensed">
              <div className="text-right text-4xl font-medium text-primary">
                11
              </div>
              <div className="text-right text-3xl font-medium text-primary">
                oct
              </div>
            </div>
            <div className="inline-flex flex-col items-start justify-start gap-2">
              <div className="text-right font-condensed text-3xl font-medium text-neutral-800">
                Entrepreneur
              </div>
              <div className="font-condensed text-base font-normal tracking-widest text-neutral-400">
                SATURDAY/ 2023
              </div>
            </div>
          </div>
          <ButtonRefactor text="Register" />
        </div>
        <div className="flex items-center justify-between self-stretch md:w-[1100px]">
          <div className="flex items-center justify-start gap-1 md:gap-16">
            <div className="inline-flex flex-col items-center justify-start px-8 font-condensed">
              <div className="text-right text-4xl font-medium text-primary">
                18
              </div>
              <div className="text-right text-3xl font-medium text-primary">
                oct
              </div>
            </div>
            <div className="inline-flex flex-col items-start justify-start gap-2">
              <div className="text-right font-condensed text-3xl font-medium text-neutral-800">
                Investment
              </div>
              <div className="font-condensed text-base font-normal tracking-widest text-neutral-400">
                SUNDAY/ 2023
              </div>
            </div>
          </div>
          <ButtonRefactor text="Register" />
        </div>
      </div>
      <div className='relative'>
      <div className="absolute left-10 top-[52px] hidden h-[313.88px] w-16 md:left-[121px] md:block">
        <div className="absolute left-0 top-[307px] h-0 w-[306px] origin-top-left -rotate-90 border border-neutral-800 bg-neutral-800"></div>
        <div className="absolute left-0 top-[103.03px] h-0 w-14 border border-neutral-800 bg-neutral-800"></div>
        <div className="absolute left-0 top-[305px] h-0 w-14 border border-neutral-800 bg-neutral-800"></div>
        <div className="absolute left-0 top-0 h-0 w-14 border border-neutral-800 bg-neutral-800"></div>
        <div className="absolute left-0 top-[198.51px] h-0 w-14 border border-neutral-800 bg-neutral-800"></div>
        <div className="absolute left-14 top-[97px] size-3 rounded-full border border-neutral-800 bg-neutral-800" />
        <div className="absolute left-14 top-[194px] size-3 rounded-full border border-neutral-800 bg-neutral-800" />
        <div className="absolute left-14 top-[300px] size-3 rounded-full border border-neutral-800 bg-neutral-800" />
      </div>
      </div>
    </div>
  );
}
