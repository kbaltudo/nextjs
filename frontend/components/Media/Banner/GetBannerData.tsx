export function GetBanner(data: any, provider: string) {
    let returndata: { id: any; title: any; description: any; desktopimage: { url: string; width: any; height: any; alt: any; }; };
    switch (provider) {
        case "strapi":
            returndata = {
                'id': data?.id ? data.id : "",
                'title': data?.Title ? data.Title : "",
                'description': data?.Description ? JSON.stringify(data.Description) : "",
                'desktopimage': {
                    "url": data?.Image?.data?.attributes?.url ? process.env.NEXT_PUBLIC_STRAPI_BASE_URL + data.Image.data.attributes.url : "",
                    "width": data?.Image?.data?.attributes?.width ? data.Image.data.attributes.width : "",
                    "height": data?.Image?.data?.attributes?.height ? data.Image.data.attributes.height : "",
                    'alt': data?.Image?.data?.attributes?.alternativeText ? data.Image.data.attributes.alternativeText : "",
                },
                // 'mobileimage': {
                //     "url": data?.Mobile_Image?.data?.attributes?.url ? process.env.NEXT_PUBLIC_STRAPI_BASE_URL + data.Mobile_Image.data.attributes.url : process.env.NEXT_PUBLIC_STRAPI_BASE_URL + data.Image.data.attributes.url,
                //     "width": data?.Mobile_Image?.data?.attributes?.width ? data.Mobile_Image.data.attributes.width : "",
                //     "height": data?.Mobile_Image?.data?.attributes?.height ? data.Mobile_Image.data.attributes.height : "",
                //     'alt': data?.Mobile_Image?.data?.attributes?.alternativeText ? data.Mobile_Image.data.attributes.alternativeText : "",
                // }
            }
            break;
        case "drupal":
            returndata = {
                'id': data?.id ? data.id : "",
                'title': data?.title ? data.title : "",
                'description': data?.description ? data.description : "",
                'desktopimage': {
                    "url": "https://dev-dev-altudo.pantheonsite.io/sites/default/files/2022-12/all-in-one-slider-simple-full-width-1.jpg",
                    "width": "",
                    "height": "",
                    'alt': "Drupal",
                }
            }
            break;
        case "contentful":
            returndata = {
                'id': "",
                'title': data?.title ? data.title : "",
                'description': data?.excerpt ? JSON.stringify(data.excerpt) : "",
                'desktopimage': {
                    "url": data?.image?.url ? data.image.url : "",
                    "width": data?.image?.width ? data.image.width : "",
                    "height": data?.image?.height ? data.image.height : "",
                    'alt': data?.image?.title ? data.image.title : "",
                }
            }
            break;
        default:
            returndata = {
                'id': "1",
                'title': "Dummy Banner Title",
                'description': "Dummy Banner",
                'desktopimage': {
                    "url": process.env.NEXT_PUBLIC_STRAPI_BASE_URL + "/logo.png",
                    "width": "200",
                    "height": "200",
                    'alt': "Banner",
                },
                // 'mobileimage': {
                //     "url": process.env.NEXT_PUBLIC_STRAPI_BASE_URL + "/logo.png",
                //     "width": "200",
                //     "height": "200",
                //     'alt':  "Banner",
                // }
            }
            break;
    }
    return returndata;
}