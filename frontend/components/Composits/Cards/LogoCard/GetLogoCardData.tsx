function GetLogos(data: any[]) {
    return data ? data.map((card: { attributes: any; id: any }) => {
        let carddata = card.attributes;
        return {
            'id': card?.id ? card.id : "",
            'image': {
                "url": carddata?.Image?.data?.attributes?.url ? process.env.NEXT_PUBLIC_STRAPI_BASE_URL + carddata.Image.data.attributes.url : "",
                "width": carddata?.Image?.data?.attributes?.width ? carddata.Image.data.attributes.width : "",
                "height": carddata?.Image?.data?.attributes?.height ? carddata.Image.data.attributes.height : "",
                'alt': carddata?.Image?.data?.attributes?.alternativeText ? carddata.Image.data.attributes.alternativeText : "",
            }
        }
    }) : ""
}

export function GetLogoCardData(data: any, provider: string) {
    let returnData: {id: any; logos: any};
    switch (provider) {
        case "strapi":
            returnData = {
                "id": data?.id ? data.id : "",
                "logos": GetLogos(data.cards.data)
            }
        break;
       
        default:
            returnData = {
                "id": "1",
                "logos": [{
                            "id" : "1",
                            'image': {
                                "url": "/logo.png",
                                "width": "200",
                                "height": "100",
                                'alt':  "Dummy Alt text",
                            }
                        },
                        {
                            "id" : "2",
                            'image': {
                                "url": "/logo.png",
                                "width": "200",
                                "height": "100",
                                'alt':  "Dummy Alt text",
                            }
                        }
                    ]
            }
        break;
    }

    return returnData;
}