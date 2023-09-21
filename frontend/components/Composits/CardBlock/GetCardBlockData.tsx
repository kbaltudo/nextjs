import { GetCardData } from "../Cards/Card/GetCard";
export function GetCardBlockData(data: { id: any; Title: any; Description: any; Background_Image: { data: { attributes: { url: string } } }; ButtonTitle: string; cards: { data: any };CardImageRounded:any }, provider: string) {
    let returnData: { id: any; title: any; description: any; backgroundImage: any; button: any; cards: any; roundimage:boolean };
    switch (provider) {
        case "strapi":
            returnData = {
                "id": data?.id ? data.id : "yt",
                "title": data?.Title ? data.Title : "",
                "description": data?.Description ? data.Description : "",
                "backgroundImage": data?.Background_Image?.data?.attributes?.url ? process.env.NEXT_PUBLIC_STRAPI_BASE_URL + data.Background_Image.data.attributes.url : "",
                "button": data?.ButtonTitle ? data.ButtonTitle : "",
                "cards": data?.cards.data ? data.cards.data:"",
                "roundimage":data?.CardImageRounded ? data.CardImageRounded:""
            }
            break;
        case "contentful":
            returnData = {
                "id": data?.id ? data.id : "yt",
                "title": data?.Title ? data.Title : "",
                "description": data?.Description ? data.Description : "",
                "backgroundImage": data?.Background_Image?.data?.attributes?.url ? process.env.NEXT_PUBLIC_STRAPI_BASE_URL + data.Background_Image.data.attributes.url : "",
                "button": data?.ButtonTitle ? data.ButtonTitle : "",
                "cards": data?.cards.data ? data.cards.data:"",
                "roundimage":data?.CardImageRounded ? data.CardImageRounded:""
            }
            break;
        default:
            returnData = {
                "id": "55",
                "title": "Dummy Title",
                "description": "Dummy Description Sit nihil eius vel suscipit eaque sed porro obcaecati ab consectetur minima sed vero ullam. Eum voluptatem deleniti id deserunt aliquam ab pariatur reprehenderit eos nulla dicta. Eos sunt officiis et quia omnis et enim incidunt",
                "backgroundImage": process.env.NEXT_PUBLIC_STRAPI_BASE_URL + "/uploads/1368x500_5_634d0c434c.png",
                "button": "Dummy Click Me",
                "cards": [
                    {
                        'id': "1",
                        'title': "Dummy Card Title 1",
                        'slug': "abc",
                        "description": "Dummy Description Sit nihil eius vel suscipit eaque sed porro obcaecati ab consectetur minima sed vero ullam. Eum voluptatem deleniti id deserunt aliquam ab pariatur reprehenderit eos nulla dicta. Eos sunt officiis et quia omnis et enim incidunt",
                        'shortdescription': "Dummy Card short description 1 Sit nihil eius vel suscipit eaque sed porro obcaecati ab consectetur minima sed vero ullam. Eum voluptatem deleniti id deserunt aliquam ab pariatur reprehenderit eos nulla dicta. Eos sunt officiis et quia omnis et enim incidunt",
                        'image': {
                            "url": process.env.NEXT_PUBLIC_STRAPI_BASE_URL + "/uploads/400x400_af3b8c58a1.png",
                            "width": "250",
                            "height": "250",
                            'alt': "card Image",
                        }
                    },
                    {
                        'id': "2",
                        'title': "Dummy Card Title 2",
                        'slug': "abc",
                        "description": "Dummy Description Sit nihil eius vel suscipit eaque sed porro obcaecati ab consectetur minima sed vero ullam. Eum voluptatem deleniti id deserunt aliquam ab pariatur reprehenderit eos nulla dicta. Eos sunt officiis et quia omnis et enim incidunt",
                        'shortdescription': "Dummy Card short description 2 Sit nihil eius vel suscipit eaque sed porro obcaecati ab consectetur minima sed vero ullam. Eum voluptatem deleniti id deserunt aliquam ab pariatur reprehenderit eos nulla dicta. Eos sunt officiis et quia omnis et enim incidunt",
                        'image': {
                            "url": process.env.NEXT_PUBLIC_STRAPI_BASE_URL + "/uploads/400x400_af3b8c58a1.png",
                            "width": "250",
                            "height": "250",
                            'alt': "card Image",
                        }
                    },
                    {
                        'id': "1",
                        'title': "Dummy Card Title 3",
                        'slug': "abc",
                        "description": "Dummy Description Sit nihil eius vel suscipit eaque sed porro obcaecati ab consectetur minima sed vero ullam. Eum voluptatem deleniti id deserunt aliquam ab pariatur reprehenderit eos nulla dicta. Eos sunt officiis et quia omnis et enim incidunt",
                        'shortdescription': "Dummy Card short description 3 Sit nihil eius vel suscipit eaque sed porro obcaecati ab consectetur minima sed vero ullam. Eum voluptatem deleniti id deserunt aliquam ab pariatur reprehenderit eos nulla dicta. Eos sunt officiis et quia omnis et enim incidunt",
                        'image': {
                            "url": process.env.NEXT_PUBLIC_STRAPI_BASE_URL + "/uploads/400x400_af3b8c58a1.png",
                            "width": "250",
                            "height": "250",
                            'alt': "card Image",
                        }
                    }
                ],
                "roundimage":true


            }
            break            
    }
    return returnData;
}