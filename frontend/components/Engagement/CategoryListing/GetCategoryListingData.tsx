export function GetCategories(data: any) {
    let returndata: any;
    let result = "CONTENTFUL"
    switch (result) {
        case "STRAPI":
            returndata = data.map((category: { id: any; title: any; description: any; slug: any }) => {
                return {
                    'id': category?.id ? category.id : "",
                    'title': category?.title ? category.title : "",
                    'slug': category?.slug ? category.slug : "",
                    'description': category?.description ? category.description : ""
                }
            })
            break;
        default:
            returndata = [{
                'id': "1",
                'title': "Dummy Title from Dictonary",
                'description': "Dummy Discription from Dictonary",
                'slug': "slug dummy"
            },
            {
                'id': "2",
                'title': "Dummy Title from Dictonary",
                'description': "Dummy Discription from Dictonary",
                'slug': "slug dummy"
            },
            ]
            break;
    }
    return returndata;

}