import type { Schema, Attribute } from '@strapi/strapi';

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

export interface SectionsHero extends Schema.Component {
  collectionName: 'components_sections_heroes';
  info: {
    displayName: 'hero';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    overlayImage: Attribute.Media;
    leftButton: Attribute.Component<'elements.button'>;
    rightButton: Attribute.Component<'elements.button', true>;
    video: Attribute.Media;
  };
}

export interface SectionsNavbar extends Schema.Component {
  collectionName: 'components_sections_navbars';
  info: {
    displayName: 'navbar';
    description: '';
  };
  attributes: {
    image: Attribute.Media;
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
      'elements.button': ElementsButton;
      'sections.hero': SectionsHero;
      'sections.navbar': SectionsNavbar;
      'seo.meta-data': SeoMetaData;
    }
  }
}
