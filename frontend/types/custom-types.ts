//* Components
type Media = {
  data: {
    id: number;
    attributes: {
      name: string;
      url: string;
    };
  };
};

export type Button = {
  id: number;
  text: string;
  variant: "TRANSPARENT" | "FILLED";
  hasGlow: boolean;
  color: string;
};

export type MetaData = {
  id: number;
  metaTitle: string;
  metaDescription: string;
  metaImage: Media;
};

export type MenuItem = {
  id: number;
  heading: string;
  description: string;
  image: Media;
  button: Button;
};

//* Sections
type SectionCommon = {
  id: number;
  __component: "sections.hero" | "sections.menu";
};

export type NavbarSection = {
  id: number;
  image: Media;
};

export type HeroSection = SectionCommon & {
  title: string;
  description: string;
  videoOverlayColor: string;
  video: Media;
  navbar: NavbarSection;
  leftButton: Button;
  rightButton: Button;
  backgroundImage: Media;
};

export type MenuSection = SectionCommon & {
  heading: string;
  backgroundColour: string;
  menuCards: MenuItem[];
};

export type Section = HeroSection | MenuSection;

type Testimonial = {
  name: string;
  text: string;
  image?: any;
  jobTitle: string;
};
