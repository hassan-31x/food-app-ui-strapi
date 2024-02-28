import Image from "next/image";
import Button from "../(ui-components)/Button";
import { type MenuItem } from "@/types/custom-types";

type MenuCardProps = {
  menuDetail: MenuItem;
}

function MenuCard({ menuDetail }: MenuCardProps) {
  const { id, heading, description, image, button } = menuDetail
  return (
      <div className="w-[320px] md:mr-4 lg:mr-6 mr-2" key={id}>
        <div className="h-56 lg:h-[20rem] relative z-50">
          <Image
            className="object-contain "
            fill
            src={`${process.env.NEXT_PUBLIC_API_URL}${image?.data?.attributes?.url}`}
            alt="Left line"
          />
        </div>
        <div className="w-[290px] h-[350px] lg:h-[400px] mt-[-35%] md:mt-[-40%] mx-auto bg-white rounded-2xl text-black flex flex-col items-center justify-center px-[5%]">
          <h3 className="blanch text-4xl mt-[10%] text-center h-[20%] md:h-[15%] flex items-center justify-center"  style={{ lineHeight: "0.8" }}>
            {heading}
          </h3>
          <h5
            className="text-sm mt-[6%] w-[90%] mx-auto text-center"
          >
           {description}
          </h5>
          <div className="w-full h-5 relative mt-[5%] md:mt-[10%]">
            <Image
              className="object-cover "
              fill
              src="/LandingPageImages/Menu/MenuLine.svg"
              alt="Left line"
            />
          </div>
          <Button buttonProps={button} />
        </div>
      </div>
  );
}

export default MenuCard;