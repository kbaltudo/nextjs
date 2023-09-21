const Home_GRAPHQL_FIELDS = `
title
slug
backgroundImage{
  width
  height
  url
}
bannerCollection{
  items{
    title
    slug
    excerpt
    image{
      url
      width
      height
    }
  }
}
contentTile{
  title
  slug
  description
  image{
    width
    height
    url
  }
  backgroundImage{
    width
    height
    url
  }
}
articleCollection{
  items{
    title
    slug
    description
    subTitle
    image{
      width
      height
      url
    }
    category{
      title
      slug
    }
  }
}
backgroundImage{
  width
  height
  url
}
`
const HEADER_GRAPHQL_FIELDS = `
logo {
  width
  height
  url
  title
}
navigationCollection {
  items {
    title
    slug
    navigationLinksCollection {
      items {
        title
        slug
      }
    }
  }
}
`

const FOOTER_GRAPHQL_FIELDS = `
logo {
  width
  height
  url
}
`

async function fetchGraphQL(query: string, preview = false) {
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${preview
            ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
            : process.env.CONTENTFUL_ACCESS_TOKEN
          }`,
      },
      body: JSON.stringify({ query }),
    }
  ).then((response) => response.json())
}

function extractpageTemplate(fetchResponse: { data: { headerCollection: { items: any[] } } }) {
  let header = fetchResponse?.data?.headerCollection?.items[0]
  return {
    "logo": {
      "url": header?.logo?.url ? header.logo.url : "",
      "width": header?.logo?.width ? header.logo.width : "",
      "height": header?.logo?.height ? header.logo.height : "",
      "alternativeText": header?.logo?.title ? header.logo.title : "",
    },
    "primaryNavigation": header.navigationCollection.items
  }
}

function extractHomeEntries(fetchResponse: { data: { homePageCollection: { items: any[] } } }) {
  let data = fetchResponse?.data?.homePageCollection?.items[0]
  return {
    "title": data?.title ? data.title : "",
    "description": "",
    "slug": data?.slug ? data.slug : "",
    "backgroundImage": data?.backgroundImage?.url ? data.backgroundImage.url : "",
    "banner": data?.bannerCollection?.items ? data.bannerCollection.items : [],
    "contentTile": data?.contentTile ? data?.contentTile : "",
    "provider":"contentful"
  }
}

export async function getContentfulHomePage() {
  const entries = await fetchGraphQL(
    `query {
      homePageCollection(limit:1){
        items {
          ${Home_GRAPHQL_FIELDS}
        }
      }
    }`
  )
  return extractHomeEntries(entries)
}

export async function getPageTemplate() {
  const entries = await fetchGraphQL(
    `query {
      headerCollection(limit:1){
        items {
          ${HEADER_GRAPHQL_FIELDS}
        }
      }
    }`
  )
  return extractpageTemplate(entries)
}
