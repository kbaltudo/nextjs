export function GetContentTileData(data: any, provider:string) {
    let returnData: { id: any; description: any; image: { url: string; width: any; height: any; alt: any; } | { url: string; width: any; height: any; alt: any; } | { url: string; width: any; height: any; alt: any; }; backgroundImage: string; };
    switch (provider) {
        case "strapi":
            returnData = {
                "id": data?.id ? data.id : "",
                "description": data?.Description ? data.Description : "",
                "image": {
                    "url": data?.Image?.data?.attributes.url ? process.env.NEXT_PUBLIC_STRAPI_BASE_URL + data.Image.data.attributes.url : "",
                    "width": data?.Image?.data?.attributes?.width ? data.Image.data.attributes.width : "",
                    "height": data?.Image?.data?.attributes?.height ? data.Image.data.attributes.height : "",
                    'alt': data?.Image?.data?.attributes?.alternativeText ? data.Image.data.attributes.alternativeText : "",
                },
                "backgroundImage": data?.Background_Image?.data?.attributes?.url ? process.env.NEXT_PUBLIC_STRAPI_BASE_URL + data.Background_Image.data.attributes.url : "",
            }
            break;
        case "contentful":
            returnData = {
                "id": "1",
                "description": data?.description ? data.description : "",
                "image": {
                    "url": data?.image?.url ? data.image.url : "",
                    "width": data?.image?.width ? data.image.width : "",
                    "height": data?.image?.height ? data.image.height : "",
                    'alt': data?.image?.title ? data.image.title : "",
                },
                "backgroundImage": data?.backgroundImage?.url ? data.backgroundImage.url : "",
            }
            break;
        default:
            returnData = {
                "id": "1",
                "description": "This is Dummy Description from Dictonary",
                "image": {
                    "url": "/image.jpg",
                    "width": "2010",
                    "height": "1400",
                    'alt': "Dummy Description",
                },
                "backgroundImage": "",
            }
            break;
    }
    return returnData;
}