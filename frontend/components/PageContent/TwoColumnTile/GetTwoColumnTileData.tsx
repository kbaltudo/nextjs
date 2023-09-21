export function GetTwoColumnCallout(data: any, provider:string) {
    let returnData = (data:{ id: any; Title1: any; Description1: any; Title2: any; Description2: any; BackgroundImage: { data: { attributes: { url: string } } } })=>{
        return {
            "id": data?.id ? data.id : "",
            "title1": data?.Title1 ? data.Title1 : "",
            "description1": data?.Description1 ? data.Description1 : "",
            "title2": data?.Title2 ? data.Title2 : "",
            "description2": data?.Description2 ? data.Description2 : "",
            "backgroundImage": data?.BackgroundImage?.data?.attributes?.url ? process.env.NEXT_PUBLIC_STRAPI_BASE_URL + data.BackgroundImage.data.attributes.url : "",
        }
    }
    return returnData;
}