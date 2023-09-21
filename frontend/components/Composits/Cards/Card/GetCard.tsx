export function GetCardData(data: any, provider: string ) {
    let returnData: { id: any; title: any; slug: any; description: any; shortdescription: any; image: { url: string; width: any; height: any; alt: any; }; categories: any; tags: any };
    switch (provider) {
        case "strapi":
            returnData = {
                "id": data?.id ? data.id : "",
                "title": data?.attributes?.Title ? data.attributes.Title : "",
                'slug': data?.attributes?.Slug ? data.attributes.Slug : "",
                "description": data?.attributes?.Description ? data.attributes.Description : "",
                "shortdescription": data?.attributes?.ShortDescription ? data.attributes.ShortDescription : "",
                "image": {
                    "url": data?.attributes?.Image?.data?.attributes.url ? process.env.NEXT_PUBLIC_STRAPI_BASE_URL + data.attributes.Image.data.attributes.url : "",
                    "width": data?.attributes?.Image?.data?.attributes?.width ? data.attributes.Image.data.attributes.width : "",
                    "height": data?.attributes?.Image?.data?.attributes?.height ? data.attributes.Image.data.attributes.height : "",
                    'alt': data?.attributes?.Image?.data?.attributes?.alternativeText ? data.attributes.Image.data.attributes.alternativeText : "",
                },
                "categories": data?.attributes?.Categories?.data ? data.attributes.Categories.data : "",
                "tags": data?.attributes?.Tags?.data ? data.attributes.Tags.data : ""
            }
            break;
        case "contentful":
            returnData = {
                "id": data?.id ? data.id : "",
                "title": data?.attributes?.Title ? data.attributes.Title : "",
                'slug': data?.attributes?.Slug ? data.attributes.Slug : "",
                "description": data?.attributes?.Description ? data.attributes.Description : "",
                "shortdescription": data?.attributes?.ShortDescription ? data.attributes.ShortDescription : "",
                "image": {
                    "url": data?.attributes.Image?.data?.attributes.url ? process.env.NEXT_PUBLIC_STRAPI_BASE_URL + data.attributes.Image.data.attributes.url : "",
                    "width": data?.attributes.Image?.data?.attributes?.width ? data.attributes.Image.data.attributes.width : "",
                    "height": data?.attributes.Image?.data?.attributes?.height ? data.attributes.Image.data.attributes.height : "",
                    'alt': data?.attributes.Image?.data?.attributes?.alternativeText ? data.attributes.Image.data.attributes.alternativeText : "",
                },
                "categories": data?.attributes?.Categories?.data ? data.attributes.Categories.data : "",
                "tags": data?.attributes.Tags?.data ? data.attributes.Tags.data : ""
            }
            break;
        default:
            returnData = {
                "id": "1",
                "title":  "Dummy Title Dummy Ut quaerat autem",
                'slug': "Dummy Dummy Ut quaerat autem",
                "description":  "Dummy Ut quaerat autem id dolorum voluptatem est vitae minima sit nulla temporibus rem voluptas molestiae non laborum galisum eos iusto dolore! Et accusamus necessitatibus ab totam voluptatem et repudiandae fugit.",
                "shortdescription": "Dummy Ut quaerat autem id dolorum voluptatem",
                "image": {
                    "url": process.env.NEXT_PUBLIC_STRAPI_BASE_URL + "/uploads/card_c47cac70df.jpg",
                    "width": "300",
                    "height": "300",
                    'alt': "ALT dummy",
                },
                "categories":  "",
                "tags":  ""
            }
            break;
    }
    return returnData;
}