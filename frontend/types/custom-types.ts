//* Components
type MediaData = {
    id: number;
    attributes: {
      name: string;
      url: string;
    };
  };

type Media = {
  data: MediaData
};

export type Button = {
  id: number;
  text: string;
  variant: "TRANSPARENT" | "FILLED";
  hasGlow: boolean;
  color: string;
};

export type Input = {
  id: number;
  label: string;
  placeholder: string;
  type: 'text' | 'email' | 'password' | 'date';
  compulsory: boolean;
}

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

export type PhilCard = {
  id: number;
  heading: string;
  description: string;
  image: Media;
};

export type testimonialCard = {
  id: number;
  name: string;
  position: string;
  description: string;
  image: Media;
}

//* Sections
type SectionCommon = {
  id: number;
  __component: "sections.hero" | "sections.menu" | "sections.form" | "sections.about-us" | "sections.philosophy" | "sections.testimonials" | "sections.companies";
};

export type NavbarSection = {
  id: number;
  image: Media;
};

export type HeroSection = SectionCommon & {
  title: string;
  description: string;
  videoOverlayColor: string;
  heroBackgroundColor: string;
  video: Media;
  navbar: NavbarSection;
  leftButton: Button;
  rightButton: Button;
  backgroundImage: Media;
};

export type FormsSection = SectionCommon & {
  sectionHeading: string;
  heading: string;
  description: string;
  backgroundColor: string;
  formTerms: string;
  cancelButton: Button;
  submitButton: Button;
  formInputs: Input[];
  address: {
    id: number;
    heading: string;
    name: string;
    address: string;
    email: string;
    phone: string;
  }
}

export type MenuSection = SectionCommon & {
  heading: string;
  backgroundColor: string;
  menuCards: MenuItem[];
};

export type PhilosophySection = SectionCommon & {
  heading: string;
  button: Button;
  coverImage: Media;
  cards: PhilCard[]
}

export type TestimonialsSection = SectionCommon & {
  heading: string;
  testimonialCards: testimonialCard[]
}

export type CompanySection = SectionCommon & {
  text: string;
  reviewCount: number;
  starColor: string;
  button: Button;
  image: {
    data: MediaData[];
  }
}

export type AboutUsSection = SectionCommon & {
  heading: string;
  youtubeVideoLink: string;
  backgroundColor: string;
  leftButton: Button;
  rightButton: Button;
}

export type Section = HeroSection | MenuSection | FormsSection | AboutUsSection | PhilosophySection | TestimonialsSection | CompanySection;