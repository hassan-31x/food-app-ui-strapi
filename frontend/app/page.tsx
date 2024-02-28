import Image from "next/image";
import Header from "./(ui-components)/Header";
import Print from "./print";
import FormSection from "./(landing-page-components)/FormSection";
import Philosophy from "./(landing-page-components)/Philosophy";
import Company from "./(landing-page-components)/Company";
import Footer from "./(landing-page-components)/Footer";
import Hero from "./(landing-page-components)/Hero";
import Review from "./(landing-page-components)/Review";
import { combinedQuery } from "@/query";

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

const SECTIONS = [
  "hero",
  "menu",
  "form",
  "about",
  "philosophy",
  "testimonials",
  "companies",
  "footer",
];

export default async function Home() {
  const data = await fetchData();

  const URL = process.env.NEXT_PUBLIC_API_URL;

  // const metaImgUrl = `${URL}${data?.attributes?.metadata?.metaImage?.data?.attributes?.url}`;
  
  const getSection = (section: any) => {
    switch (section?.__component) {
      case "sections.hero":
        return (
          <>
            <Header navDetail={section?.navbar} />
            <Hero heroDetail={section} />
          </>
        );
      case "menu":
        // return <Menu menuItems={landingPage.menuItems} />
        return <></>;
      case "form":
        return <FormSection />;
      case "about":
        return <></>;
      // return <VideoSection videoUrl={landingPage.videoUrl} />
      case "philosophy":
        return <Philosophy />;
      case "testimonials":
        // return <Testimonials testimonials={landingPage.testimonials} />
        return <></>;
      case "companies":
        return <Company />;
      case "footer":
        return <Footer />;
      default:
        return null;
    }
  };

  return (
    <main className="bg-[#FCFCFD] w-full h-[120rem] md:h-[250rem] lg:h-[300rem] xl:h-[330rem] 2xl:h-[350rem] 4xl:h-[400rem] mt-0">
      {data?.attributes?.sections?.map((section: any) => {
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
