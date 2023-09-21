export function GetWebinars(data: any) {
    let returndata: any;
    let result = "CONTENTFUL"
    switch (result) {
        case "STRAPI":
            returndata = data.map((card: { id: any; title: any; date:any; description: any; link: any; phone:any; author:any; startTime:any; endTime:any; Image:any; Video:any; slug: any;}) => {
                return {
                    'id': card?.id ? card.id : "",
                    'title': card?.title ? card.title : "",
                    'date': card?.date ? card.date : "",
                    'description': card?.description ? card.description : "",
                    'link': card?.link ? card.link : "",
                    'phone': card?.phone ? card.phone : "",
                    'author': card?.author ? card.author : "",
                    'startTime': card?.startTime ? card.startTime : "",
                    'endTime': card?.endTime ? card.endTime : "",
                    'slug': card?.slug ? card.slug : "",
                    'image': {
                        "url": card?.Image?.data?.attributes?.url ? process.env.NEXT_PUBLIC_STRAPI_BASE_URL + card.Image.data.attributes.url : "",
                        "width": card?.Image?.data?.attributes?.width ? card.Image.data.attributes.width : "",
                        "height": card?.Image?.data?.attributes?.height ? card.Image.data.attributes.height : "",
                        'alt': card?.Image?.data?.attributes?.alternativeText ? card.Image.data.attributes.alternativeText : "",
                    },
                    'video': {
                        "url": card?.Video?.data?.attributes?.url ? process.env.NEXT_PUBLIC_STRAPI_BASE_URL + card.Video.data.attributes.url : "",
                        "width": card?.Video?.data?.attributes?.width ? card.Video.data.attributes.width : "",
                        "height": card?.Video?.data?.attributes?.height ? card.Video.data.attributes.height : "",
                        'alt': card?.Video?.data?.attributes?.alternativeText ? card.Video.data.attributes.alternativeText : "",
                    }
                }
               
            })
            break;
        default:
            returndata = [{
                'id': "1",
                'title': "Dummy Title from Dictonary",
                'date': "09/12/2022",
                'description': "Dummy Discription from Dictonary",
                'link': "www.google.com",
                'phone': "123456789",
                'author': "Dummy Author",
                'startTime': "10:29 AM",
                'endTime': "11:30 PM",
                'slug': "slug dummy",
                'Image': {
                    "url": "/logo.png",
                    "width": "2560",
                    "height": "1440",
                    'alt': "Dummy Alt tag",
                },
                'Video': {
                    "url": "/logo.png",
                    "width": "2560",
                    "height": "340",
                    'alt': "Dummy Alt tag",
                }

            }
            ]
            break;
    }
    return returndata;

}