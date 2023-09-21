// Fetcher
export async function fetcher(url: string, option = {}) {
    let response: Response,
        defaultoption = {
            method: "GET",
        },
        fetcherUrl = url
    if (!option) {
        response = await fetch(fetcherUrl);
    } else {
        response = await fetch(fetcherUrl, defaultoption);
    }
    const data = await response.json();
    return data;
}

function GetBannerData(bannerdata: any[]) {
    let data: any = [];
    return bannerdata ? bannerdata.map((data) => {
        return {
            'id': data?.attributes?.drupal_internal__vid ? data.attributes.drupal_internal__vid : "",
            'title': data?.attributes?.field_banner_title ? data.attributes.field_banner_title : "",
            'description': data?.attributes?.field_banner_description ? data.attributes.field_banner_description : "",
            "image": data.relationships.field_banner_image.links.related.href
        }
    }) : ""
}

async function extractHomeEntries(fetchResponse: { data: { attributes: any,relationships: any; }[]; }) {
    let data = fetchResponse?.data[0]?.attributes;
    let attributes = fetchResponse?.data[0]?.relationships;
    let fieldHeroCaruosel = await fetcher(attributes.field__hero_carousel.links.related.href)
    let fieldbanner = await fetcher(fieldHeroCaruosel.data.relationships.field_banner.links.related.href);
    return {
        "title": data?.title ? data.title : "",
        "description": data?.body.value ? data.body.value : "",
        "slug": data?.path?.alias ? data.path.alias : "",
        "backgroundImage":"",
        "banner": GetBannerData(fieldbanner.data)
    }
}

// Export Data
export async function getDrupalHomePage() {
    const entries = await fetcher(
        'https://dev-dev-altudo.pantheonsite.io/jsonapi/node/home_page'
    )
    return extractHomeEntries(entries)
}