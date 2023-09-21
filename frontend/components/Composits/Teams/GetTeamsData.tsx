function GetTeamMembers(data: any[]) {
    return data ? data.map((card: { attributes: any; id: any }) => {
        let carddata = card.attributes;
        return {
            'id': card?.id ? card.id : "",
            'title': carddata?.Title ? carddata.Title : "",
            'role': carddata?.Role ? carddata.Role : "",
            'shortDescription': carddata?.ShortDescription ? carddata.ShortDescription : "",
            'slug': carddata?.Slug ? carddata.Slug : "",
            'image': {
                "url": carddata?.Image?.data?.attributes?.url ? process.env.NEXT_PUBLIC_STRAPI_BASE_URL + carddata.Image.data.attributes.url : "",
                "width": carddata?.Image?.data?.attributes?.width ? carddata.Image.data.attributes.width : "",
                "height": carddata?.Image?.data?.attributes?.height ? carddata.Image.data.attributes.height : "",
                'alt': carddata?.Image?.data?.attributes?.alternativeText ? carddata.Image.data.attributes.alternativeText : "",
            }
        }
    }) : ""
}

export function GetTeamsData(data: any, provider: string) {
    let returnData: {id: any; title: any; description:any; teamMembers: any;};
    switch (provider) {
        case "strapi":
            returnData =  {
                    'id': data?.id ? data.id : "",
                    'title': data?.Title ? data.Title : "",
                    'description': data?.Description ? JSON.stringify(data.Description) : "",
                    "teamMembers": data?.Team?.data ? GetTeamMembers(data.Team.data) : ""
                }
        
        break;
       
        default:
            returnData = {
                'id': "1",
                'title': "Dummy Title from Dictionary",
                'description': "Dummy Description from Dictionary",
                "teamMembers": [           
                         {
                            'id': 1,
                            'title': "Dummy Member",
                            'role': "Dummy Role",
                            'shortDescription': "Dummy Short Description from Dictionary",
                            'slug': "Dummy slug",
                            'image': {
                                "url": "/logo.png",
                                "width": "100",
                                "height": "100",
                                'alt': "Dummy alternative text",
                            }
                        },
                        {
                            'id': 2,
                            'title': "Dummy Member",
                            'role': "Dummy Role",
                            'shortDescription': "Dummy Short Description from Dictionary",
                            'slug': "Dummy slug",
                            'image': {
                                "url": "/logo.png",
                                "width": "100",
                                "height": "100",
                                'alt': "Dummy alternative text",
                            }
                        },
                        {
                            'id': 3,
                            'title': "Dummy Member",
                            'role': "Dummy Role",
                            'shortDescription': "Dummy Short Description from Dictionary",
                            'slug': "Dummy slug",
                            'image': {
                                "url": "/logo.png",
                                "width": "100",
                                "height": "100",
                                'alt': "Dummy alternative text",
                            }
                        }
                ]
            }
        break;
    }
    
    return returnData;
}