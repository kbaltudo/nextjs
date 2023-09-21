export function GetImpactCardData(data: any) {
   
    let returndata: any[];
    let result = "STRAPI"
    switch (result) {
        case "STRAPI":
            returndata = data.map((card: { id: any; title: any;text:string;url:string; description: any; link: any;}) => {   
                return {
                    'id': card?.id ? card.id : "",
                    'title':  card?.title ? card.title : "",
                    'description': card?.description ? card.description : "",
                    'Link': {
                        'text': card?.text ? card.text : "default",
                        'url': card?.url ? card.url : "default",
                    }
                }
            })
            break;
            case "CONTENTFUL":
                returndata =  data.map((card: { id: any; title: any;url:string;text:string; description: any; Link: any; } , index: number)=>{
                    return {
                        'id': card?.id ? card.id : "",
                        'title':  card?.title ? card.title : "",
                        'description': card?.description ? JSON.stringify(card.description) : "",
                        'Link': {
                            'text': card?.text ? card.text : "",
                            'url': card?.url ? card.url : "",
                        }
                      
                    }
                })
                break;

        default:
            returndata = [
                {
                'id': "1",
                'title': "Short placeholder heading ",
                'description': "Lorem Ipsum is simply dummy text of the printing and typesetting industry.2 Lorem Ipsum is simply dummy text.",
                'Link': {
                    'text': 'Find More',
                    'url': '#'
                }
            },
            {
                'id': "1",
                'title': "Short placeholder heading ",
                'description': "Lorem Ipsum is simply dummy text of the printing and typesetting industry.2 Lorem Ipsum is simply dummy text.",
                'Link': {
                    'text': 'Find More',
                    'url': '#'
                }
            },
            {
                'id': "1",
                'title': "Short placeholder heading ",
                'description': "Lorem Ipsum is simply dummy text of the printing and typesetting industry.2 Lorem Ipsum is simply dummy text.",
                'Link': {
                    'text': 'Find More',
                    'url': '#'
                }
            },
            ]
            break;
    }
    return returndata;
}