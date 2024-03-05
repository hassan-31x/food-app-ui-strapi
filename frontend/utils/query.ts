const rawQuery = {
  populate: {
    metadata: {
      populate: {
        metaImage: {
          populate: true,
          fields: ["name", "url"],
        },
      },
    },
    sections: {
      populate: {
        image: {
          fields: ["name", "url"],
        },
        video: {
          fields: ["name", "url"],
        },
        button: {
          populate: true,
        },
        navbar: {
          populate: {
            image: {
              fields: ["name", "url"],
            },
          },
        },
        leftButton: {
          populate: true,
        },
        rightButton: {
          populate: true,
        },
        backgroundImage: {
          fields: ["name", "url"],
        },
        menuCards: {
          populate: {
            image: {
              fields: ["name", "url"],
            },
            button: {
              populate: true,
            },
          },
        },
        coverImage: {
          fields: ["name", "url"],
        },
        cards: {
          populate: {
            image: {
              fields: ["name", "url"],
            },
          },
        },
      },
    },
  },
};

// BASIC
const url = process.env.NEXT_PUBLIC_API_URL;
const endpoint = "/api/home-pages";
const metadata = "populate[metadata][populate][metaImage][populate]=true";
const metaImage =
  "populate[metadata][populate][metaImage][fields][0]=name&populate[metadata][populate][metaImage][fields][1]=url";
const sectionImage =
  "populate[sections][populate][image][fields][0]=name&populate[sections][populate][image][fields][1]=url";
const sectionVideo =
  "populate[sections][populate][video][fields][0]=name&populate[sections][populate][video][fields][1]=url";
const sectionButton = "populate[sections][populate][button][populate]=true";

// NAVBAR
const navbarImage =
  "populate[sections][populate][navbar][populate][image][fields][0]=name&populate[sections][populate][navbar][populate][image][fields][1]=url";

// HERO
const buttons =
  "populate[sections][populate][leftButton][populate]=true&populate[sections][populate][rightButton][populate]=true";
const bgImage =
  "populate[sections][populate][backgroundImage][fields][0]=name&populate[sections][populate][backgroundImage][fields][1]=url";

// MENU
const menu =
  "populate[sections][populate][menuCards][populate][image][fields][0]=name&populate[sections][populate][menuCards][populate][image][fields][1]=url&populate[sections][populate][menuCards][populate][button][populate]=true";

// PHILOSOPHY
const phil =
  "populate[sections][populate][coverImage][fields][0]=name&populate[sections][populate][coverImage][fields][1]=url&populate[sections][populate][cards][populate][image][fields][0]=name&populate[sections][populate][cards][populate][image][fields][1]=url";

// FORM
const form = 'populate[sections][populate][cancelButton][populate]=true&populate[sections][populate][submitButton][populate]=true'
const inputs = 'populate[sections][populate][formInputs][populate]=true'
const address = 'populate[sections][populate][address][populate]=true'

// TESTIMONIAL
const testimonial = 'populate[sections][populate][testimonialCards][populate][image][fields][0]=name&populate[sections][populate][testimonialCards][populate][image][fields][1]=url'

export const combinedQuery = `${url}${endpoint}?${metadata}&${metaImage}&${sectionImage}&${sectionVideo}&${sectionButton}&${navbarImage}&${buttons}&${bgImage}&${menu}&${phil}&${form}&${inputs}&${address}&${testimonial}`;

const queryParameters =
  "/api/home-pages?populate[metadata][populate][metaImage][populate]=true&populate[metadata][populate][metaImage][fields][0]=name&populate[metadata][populate][metaImage][fields][1]=url&populate[sections][populate][image][fields][0]=name&populate[sections][populate][image][fields][1]=url&populate[sections][populate][video][fields][0]=name&populate[sections][populate][video][fields][1]=url&populate[sections][populate][button][populate]=true&populate[sections][populate][navbar][populate][image][fields][0]=name&populate[sections][populate][navbar][populate][image][fields][1]=url&populate[sections][populate][leftButton][populate]=true&populate[sections][populate][rightButton][populate]=true&populate[sections][populate][backgroundImage][fields][0]=name&populate[sections][populate][backgroundImage][fields][1]=url&populate[sections][populate][menuCards][populate][image][fields][0]=name&populate[sections][populate][menuCards][populate][image][fields][1]=url&populate[sections][populate][menuCards][populate][button][populate]=true&populate[sections][populate][coverImage][fields][0]=name&populate[sections][populate][coverImage][fields][1]=url&populate[sections][populate][cards][populate][image][fields][0]=name&populate[sections][populate][cards][populate][image][fields][1]=url&populate[sections][populate][cancelButton][populate]=true&populate[sections][populate][submitButton][populate]=true&populate[sections][populate][formInputs][populate]=true&populate[sections][populate][address][populate]=true&populate[sections][populate][testimonialCards][populate][image][fields][0]=name&populate[sections][populate][testimonialCards][populate][image][fields][1]=url";
