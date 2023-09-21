export function GetProfileCardData(data: any[]) {
    let returnProfileData : any;
    let profileProvider = "STRAPI";

    switch (profileProvider) {
        case "STRAPI":
            returnProfileData = data ? data.map((card: { attributes: any; id: any; }) => {
                let carddata = card.attributes;
                return {
                    'id': card?.id ? card.id : "",
                    'title': carddata?.Title ? carddata?.Title : "",
                    'shortDesciption': carddata?.ShortDescription ? carddata.ShortDescription : "",
                    'slug': carddata?.Slug ? carddata.Slug : "",
                    'description': carddata?.Description ? JSON.stringify(carddata?.Description) : "",
                    'image': {
                        "url": carddata?.Image?.data?.attributes?.url ? process.env.NEXT_PUBLIC_STRAPI_BASE_URL + carddata.Image.data.attributes.url : "",
                        "width": carddata?.Image?.data?.attributes?.width ? carddata.Image.data.attributes.width : "",
                        "height": carddata?.Image?.data?.attributes?.height ? carddata.Image.data.attributes.height : "",
                        'alt': carddata?.Image?.data?.attributes?.alternativeText ? carddata.Image.data.attributes.alternativeText : "",
                    }
                }
            }) : ""
            break;

        default:
            return [{
                'id': 1,
                'title': "Dummy Dictionary Title",
                'shortDesciption': "dummy-slug",
                'slug': "",
                'description': "",
                'image': {
                    "url": "../image.jpg",
                    "width": "400",
                    "height": "400",
                    'alt': "Dummy ProfileCard Alt",
                },
                'media': {
                    "url": "../",
                    'alt': "Dummy ProfileCard Media Alt",
                }
            }]
            break;
    }    
    return returnProfileData;
}