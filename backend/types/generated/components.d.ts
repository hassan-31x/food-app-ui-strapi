import type { Schema, Attribute } from '@strapi/strapi';

export interface ElementsAddress extends Schema.Component {
  collectionName: 'components_elements_addresses';
  info: {
    displayName: 'Address';
  };
  attributes: {
    heading: Attribute.String;
    name: Attribute.String;
    address: Attribute.String;
    email: Attribute.String;
    phone: Attribute.String;
  };
}

export interface ElementsButton extends Schema.Component {
  collectionName: 'components_elements_buttons';
  info: {
    displayName: 'Button';
    icon: '';
  };
  attributes: {
    text: Attribute.String;
    variant: Attribute.Enumeration<['FILLED', 'TRANSPARENT']>;
    hasGlow: Attribute.Boolean & Attribute.DefaultTo<false>;
    color: Attribute.String;
  };
}

export interface ElementsInput extends Schema.Component {
  collectionName: 'components_elements_inputs';
  info: {
    displayName: 'Input';
  };
  attributes: {
    label: Attribute.String;
    placeholder: Attribute.String;
    compulsory: Attribute.Boolean & Attribute.DefaultTo<true>;
    type: Attribute.Enumeration<['text', 'password', 'email', 'date']>;
  };
}

export interface ElementsMenuCard extends Schema.Component {
  collectionName: 'components_elements_menu_cards';
  info: {
    displayName: 'Menu Card';
    description: '';
  };
  attributes: {
    image: Attribute.Media;
    heading: Attribute.String;
    description: Attribute.String;
    button: Attribute.Component<'elements.button'>;
  };
}

export interface ElementsPhilosophyCard extends Schema.Component {
  collectionName: 'components_elements_philosophy_cards';
  info: {
    displayName: 'Philosophy Card';
  };
  attributes: {
    heading: Attribute.String;
    description: Attribute.Text;
    image: Attribute.Media;
  };
}

export interface SectionsCompanies extends Schema.Component {
  collectionName: 'components_sections_companies';
  info: {
    displayName: 'Companies';
    description: '';
  };
  attributes: {
    text: Attribute.Text;
    image: Attribute.Media;
    reviewCount: Attribute.Integer;
    button: Attribute.Component<'elements.button'>;
    starColor: Attribute.String;
  };
}

export interface SectionsForm extends Schema.Component {
  collectionName: 'components_sections_forms';
  info: {
    displayName: 'Form';
    description: '';
  };
  attributes: {
    description: Attribute.Text;
    formInputs: Attribute.Component<'elements.input', true>;
    formTerms: Attribute.Text;
    heading: Attribute.RichText;
    address: Attribute.Component<'elements.address'>;
    cancelButton: Attribute.Component<'elements.button'>;
    submitButton: Attribute.Component<'elements.button'>;
    sectionHeading: Attribute.String;
  };
}

export interface SectionsHero extends Schema.Component {
  collectionName: 'components_sections_heroes';
  info: {
    displayName: 'Hero';
    description: '';
  };
  attributes: {
    leftButton: Attribute.Component<'elements.button'>;
    rightButton: Attribute.Component<'elements.button'>;
    video: Attribute.Media;
    navbar: Attribute.Component<'sections.navbar'>;
    backgroundImage: Attribute.Media;
    videoOverlayColor: Attribute.String;
    title: Attribute.RichText;
    description: Attribute.RichText;
    heroBackgroundColor: Attribute.String;
  };
}

export interface SectionsMenu extends Schema.Component {
  collectionName: 'components_sections_menus';
  info: {
    displayName: 'Menu';
  };
  attributes: {
    heading: Attribute.String;
    backgroundColor: Attribute.String;
    menuCards: Attribute.Component<'elements.menu-card', true>;
  };
}

export interface SectionsNavbar extends Schema.Component {
  collectionName: 'components_sections_navbars';
  info: {
    displayName: 'Navbar';
    description: '';
  };
  attributes: {
    image: Attribute.Media;
  };
}

export interface SectionsPhilosophy extends Schema.Component {
  collectionName: 'components_sections_philosophies';
  info: {
    displayName: 'Philosophy';
  };
  attributes: {
    heading: Attribute.String;
    coverImage: Attribute.Media;
    cards: Attribute.Component<'elements.philosophy-card', true>;
    button: Attribute.Component<'elements.button'>;
  };
}

export interface SeoMetaData extends Schema.Component {
  collectionName: 'components_seo_meta_data';
  info: {
    displayName: 'Meta Data';
  };
  attributes: {
    metaTitle: Attribute.String;
    metaDescription: Attribute.Text;
    metaImage: Attribute.Media;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'elements.address': ElementsAddress;
      'elements.button': ElementsButton;
      'elements.input': ElementsInput;
      'elements.menu-card': ElementsMenuCard;
      'elements.philosophy-card': ElementsPhilosophyCard;
      'sections.companies': SectionsCompanies;
      'sections.form': SectionsForm;
      'sections.hero': SectionsHero;
      'sections.menu': SectionsMenu;
      'sections.navbar': SectionsNavbar;
      'sections.philosophy': SectionsPhilosophy;
      'seo.meta-data': SeoMetaData;
    }
  }
}
