import Image from "next/image"

const Review = () => {
  return (
    <div className=" justify-end h-max flex w-[83%] mx-auto mt-6 gap-x-3 items-center">
        <h3 className="font-bold md:text-xxs text-xxss">GOOGLE & FACEBOOK</h3>
        <div className="md:h-[20px] md:w-[80px] h-[10px] w-[40px] relative">
          <Image
            fill
            className="object-contain"
            src="/LandingPageImages/Hero/Stars.svg"
            alt="Starts"
          />
        </div>
        <h3 className="font-bold md:text-xxs text-xxss">200+ REVIEWS</h3>
      </div>
  )
}

export default Review