import Image from "next/image";
import Header from "./(ui-components)/Header";
import Print from "./print";
import FormSection from "./(landing-page-components)/FormSection";
import Philosophy from "./(landing-page-components)/Philosophy";
import Company from "./(landing-page-components)/Company";
import Footer from "./(landing-page-components)/Footer";
import Hero from "./(landing-page-components)/Hero";
import Review from "./(landing-page-components)/Review";
import { combinedQuery } from "@/utils/query";
import Menu from "./(landing-page-components)/Menu";

import type { AboutUsSection, CompanySection, FormsSection, HeroSection, MenuSection, PhilosophySection, Section } from "@/types/custom-types";
import AboutSection from "./(landing-page-components)/AboutUs";

export const revalidate = 60;

const fetchData = async () => {
  try {
    const res = await fetch(combinedQuery);
    const { data } = await res.json();
    return data?.[0];
  } catch (err) {
    console.error(err);
    return {};
  }
};


export default async function Home() {
  const data = await fetchData();

  const URL = process.env.NEXT_PUBLIC_API_URL;

  // const metaImgUrl = `${URL}${data?.attributes?.metadata?.metaImage?.data?.attributes?.url}`;
  
  const getSection = (section: Section) => {
    switch (section?.__component) {
      case "sections.hero":
        const heroSection = section as HeroSection; //* to remove ts error
        const backgroundUrl = heroSection?.backgroundImage?.data ? `${URL}${heroSection?.backgroundImage?.data?.attributes?.url}` : '/_illustrations.svg';
        return (
          // <div className="w-full relative" style={{ background: `url(${backgroundUrl}) no-repeat`, backgroundSize: 'contain', backgroundPosition: '50% 0%' }}>
          <div className="w-full relative">
            <div className="absolute top-0 left-0 w-full z-10 h-[650px]">
              <Image src={backgroundUrl} fill alt="bg" className="!relative !top-[-8%] !left-[-1%]"></Image>
            </div>
            <Header navDetail={(heroSection)?.navbar} />
            <Hero heroDetail={heroSection} />
          </div>
        );
      case "sections.menu":
        return <Menu menuDetail={section as MenuSection} />
      case "sections.form":
        return <FormSection formDetail={section as FormsSection} />;
      case "sections.about-us":
      return <AboutSection aboutUsProps={section as AboutUsSection} />
      case "sections.philosophy":
        return <Philosophy philDetail={section as PhilosophySection} />;
      // case "testimonials":
      //   // return <Testimonials testimonials={landingPage.testimonials} />
      //   return <></>;
      case "sections.companies":
        return <Company companyDetail={section as CompanySection} />;
      // case "footer":
      //   return <Footer />;
      default:
        return null;
    }
  };

  return (
    <main className="bg-[#FDFDFD] w-full mt-0 flex flex-col gap-0">
    {/* <main className="bg-[#FDFDFD] w-full mt-0"> */}
      {data?.attributes?.sections?.map((section: Section) => {
        return <>{getSection(section)}</>;
      })}

      {/* <Header logoUrl={logoImgUrl} />

      <Hero heroHeading={'landingPage.heroHeading'} heroText={'landingPage.heroText'} heroVideo={'landingPage.heroVideo'} />

      <Review /> */}

      {/* <Menu menuItems={landingPage.menuItems} /> */}

      {/* <FormSection /> */}

      {/* <VideoSection videoUrl={landingPage.videoUrl} /> */}

      {/* <Philosophy /> */}

      {/* <Testimonials testimonials={landingPage.testimonials}/> */}

      {/* <div className="h-[2%] w-[25%] mx-auto relative mt-[1%]">
        <Image
          className="object-contain "
          fill
          src="/LandingPageImages/Testimonials/Line.svg"
          alt="Underline"
        />
      </div>

      <Company />

      <Footer /> */}

      <Print data={data.attributes} />
    </main>
  );
}
