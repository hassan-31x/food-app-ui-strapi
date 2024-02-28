const rawQuery = {
  populate: {
    metadata: {
      populate: {
        metaImage: {
          populate: true,
          fields: ["name", "url"]
        }
      }
    },
    sections: {
      populate: {
        image: {
          fields: ["name", "url"]
        },
        video: {
          fields: ["name", "url"]
        },
        navbar: {
          populate: {
            image: {
              fields: ["name", "url"]
            }
          }
        },
        leftButton: {
          populate: true
        },
        rightButton: {
          populate: true
        },
        backgroundImage: {
          fields: ["name", "url"]
        },
        menuCards: {
            populate: {
            image: {
              fields: ["name", "url"]
            },
            button: {
              populate: true
            }
          }
          }
      }
    }
  }
}

// BASIC
const url = process.env.NEXT_PUBLIC_API_URL
const endpoint = '/api/home-pages'
const metadata = 'populate[metadata][populate][metaImage][populate]=true'
const metaImage = 'populate[metadata][populate][metaImage][fields][0]=name&populate[metadata][populate][metaImage][fields][1]=url'
const sectionImage = 'populate[sections][populate][image][fields][0]=name&populate[sections][populate][image][fields][1]=url'
const sectionVideo = 'populate[sections][populate][video][fields][0]=name&populate[sections][populate][video][fields][1]=url'

// NAVBAR
const navbarImage = 'populate[sections][populate][navbar][populate][image][fields][0]=name&populate[sections][populate][navbar][populate][image][fields][1]=url'

// HERO
const buttons = 'populate[sections][populate][leftButton][populate]=true&populate[sections][populate][rightButton][populate]=true'
const bgImage = 'populate[sections][populate][backgroundImage][fields][0]=name&populate[sections][populate][backgroundImage][fields][1]=url'

// MENU
const menu = 'populate[sections][populate][menuCards][populate][image][fields][0]=name&populate[sections][populate][menuCards][populate][image][fields][1]=url&populate[sections][populate][menuCards][populate][button][populate]=true'

export const combinedQuery = `${url}${endpoint}?${metadata}&${metaImage}&${sectionImage}&${sectionVideo}&${navbarImage}&${buttons}&${bgImage}&${menu}`



const queryParameters = '/api/home-pages?populate[metadata][populate][metaImage][populate]=true&populate[metadata][populate][metaImage][fields][0]=name&populate[metadata][populate][metaImage][fields][1]=url&populate[sections][populate][image][fields][0]=name&populate[sections][populate][image][fields][1]=url&populate[sections][populate][video][fields][0]=name&populate[sections][populate][video][fields][1]=url&populate[sections][populate][navbar][populate][image][fields][0]=name&populate[sections][populate][navbar][populate][image][fields][1]=url&populate[sections][populate][leftButton][populate]=true&populate[sections][populate][rightButton][populate]=true&populate[sections][populate][backgroundImage][fields][0]=name&populate[sections][populate][backgroundImage][fields][1]=url&populate[sections][populate][menuCards][populate][image][fields][0]=name&populate[sections][populate][menuCards][populate][image][fields][1]=url&populate[sections][populate][menuCards][populate][button][populate]=true'