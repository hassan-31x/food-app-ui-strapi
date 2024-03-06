import Image from "next/image";

import Header from "./(ui-components)/Header";
import Testimonials from "./(landing-page-components)/Testimonials";
import FormSection from "./(landing-page-components)/FormSection";
import Philosophy from "./(landing-page-components)/Philosophy";
import AboutSection from "./(landing-page-components)/AboutUs";
import Company from "./(landing-page-components)/Company";
import Footer from "./(landing-page-components)/Footer";
import Hero from "./(landing-page-components)/Hero";
import Menu from "./(landing-page-components)/Menu";

import { combinedQuery } from "@/utils/query";

import type { AboutUsSection, CompanySection, FormsSection, HeroSection, MenuSection, PhilosophySection, Section, TestimonialsSection } from "@/types/custom-types";

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
          <div className="w-full relative">
            <div className="absolute top-0 left-0 w-full z-10 h-[200px] md:h-[450px] lg:h-[650px]">
              <Image src={backgroundUrl} fill alt="bg" className="!relative !top-[-30%] md:!top-[-20%] lg:!top-[-8%] !left-[-1%]"></Image>
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
      case "sections.testimonial":
        return <Testimonials testimonials={section as TestimonialsSection} />
      case "sections.companies":
        return <Company companyDetail={section as CompanySection} />;
      default:
        return null;
    }
  };

  return (
    <main className="bg-[#FDFDFD] w-full mt-0 flex flex-col gap-0">
      {data?.attributes?.sections?.map((section: Section) => {
        return <>{getSection(section)}</>;
      })}
      <Footer />
    </main>
  );
}
