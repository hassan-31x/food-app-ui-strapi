import Image from "next/image";

export default function Home() {
  return (
    <main
      className="bg-cover bg-center w-full h-[120rem] md:h-[250rem] lg:h-[300rem] xl:h-[330rem] 2xl:h-[350rem] 4xl:h-[400rem] bg-no-repeat mt-0 "
      // style={{ backgroundImage: `url(${backgroundImageUrl})` }}
    >
      {/* <Header /> */}
      {/* <Hero heroHeading={landingPage.heroHeading} heroText={landingPage.heroText} heroVideo={landingPage.heroVideo} /> */}
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
      {/* <Menu menuItems={landingPage.menuItems} /> */}
      {/* <FormSection /> */}
      {/* <VideoSection videoUrl={landingPage.videoUrl} /> */}
      {/* <Philosophy /> */}
      {/* <Testimonials testimonials={landingPage.testimonials}/> */}
      <div className="h-[2%] w-[25%] mx-auto relative mt-[1%]">
        <Image
          className="object-contain "
          fill
          src="/LandingPageImages/Testimonials/Line.svg"
          alt="Underline"
        />
      </div>
      {/* <Company /> */}
      {/* <Footer/> */}
    </main>
  );
}
