import Image from "next/image";
import { type CompanySection } from "@/types/custom-types";
import Button from "../(ui-components)/Button";

type Props = {
  companyDetail: CompanySection;
};

function Company({ companyDetail }: Props) {
  return (
    <div className="h-[7%] w-full mx-auto">
      <h3 className="blanch text-black text-xl leading-[20px] md:text-4xl lg:text-6xl w-[70%] lg:leading-[46px] max-w-4xl mx-auto text-center mt-[3%] lg:mt-[5%] ">
        {companyDetail.text}
      </h3>
      <div className="mt-[3%] flex flex-row justify-between h-[20px] lg:h-[35px] w-full xl:w-[80%] mx-auto">
        {companyDetail?.image?.data?.map((image, index) => (

          <div className="h-full w-[20%] lg:w-[24%] mx-auto relative mt-[3%]">
          <Image
            className="object-contain "
            fill
            src={`${process.env.NEXT_PUBLIC_API_URL}${image?.attributes?.url}`}
            alt="Underline"
            />
        </div>
            ))}
      </div>
      <div className=" w-[50%] h-[5%] flex flex-row justify-center gap-x-[1%] items-center mx-auto mt-[5%] ">
        <h3 className="font-bold md:text-xs text-xxs">GOOGLE & FACEBOOK</h3>
        <div className="w-[20%] h-full relative">
          <Image
            fill
            className="object-contain"
            src="/LandingPageImages/Hero/Stars.svg"
            alt="Stars"
          />
        </div>
        <h3 className="font-bold md:text-xs text-xxs">{companyDetail?.reviewCount} REVIEWS</h3>
      </div>
      {/* Button */}
      <div className="mt-[3%] flex flex-row justify-center w-full">
        <Button buttonProps={companyDetail.button} />
      </div>
    </div>
  );
}

export default Company;