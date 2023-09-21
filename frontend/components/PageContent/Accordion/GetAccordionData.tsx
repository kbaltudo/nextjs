export function GetAccordionData(data: any, provider:string) {
    let returnData:any;
    
    switch (provider) {
        case "strapi":
            returnData =  data.map((accordion: { id: any; Title: any; Description: any;  }) => {
                return {
                    "id":accordion?.id ? accordion.id : "",
                    "title":  accordion?.Title ? accordion.Title : "",
                    "description": accordion?.Description ? JSON.stringify(accordion.Description) : ""
                }
            })
            break;
       
        default:
            returnData = [{
                "id":"1",
                "title": "Dummy Dictionary Title1",
                "description": "Dummy Description 1 from Dictonary.",
            },
            {
                "id":"2",
                "isactive": false,
                "title": "Dummy Dictionary Title2",
                "description": "Dummy Description 2 from Dictonary.",
            }
        ]
            break;
    }
    return returnData;
}