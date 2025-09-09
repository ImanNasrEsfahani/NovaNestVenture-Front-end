
export default function PartnerMembershipTitle({lang}: {lang: string}) {

  return (
    <>
      <div className="text-center">
        <p className="mb-20 pt-8 font-condensed text-2xl tracking-wide md:pt-8 md:text-5xl lg:text-6xl xl:text-7xl ">
          {lang === "en" ? "BUSINESS AFFILIATES FORM" : "فرم شرکای تجاری"}
        </p>
      </div>
      <div>
        <p className="mb-4 text-xl lg:text-2xl">{lang === "en" ? "Personal Information" : "اطلاعات شخصی"}</p>
      </div>
      <div>
        <hr className="mb-5 border-[#000000] dark:border-[#ffffff]" />
      </div>
    </>
  );
}
