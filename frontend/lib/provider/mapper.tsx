import { strapiAboutPage, strapiHomePage } from "./strapi/api";
import { getContentfulHomePage, getPageTemplate } from "./contentful/api";
import { getDrupalHomePage } from "./drupal/api";
// import { strapiPageTemplate } from "./strapi/api";
export async function getGrowthbookFeatures(){
    const response  = await fetch(`https://cdn.growthbook.io/api/features/prod_pNBs0rykwKBnEY8x7IxBxnA2zYpuNGJOsXcGJfL1U`)
    const jsonData = await response.json()
    return jsonData;
}
export async function homeRouter() {    
    const {features} = await getGrowthbookFeatures()
    // get provider from multiple provider from growthbook
    let provider = null
    if( features?.strapi?.defaultValue )
        provider = 'strapi'
    else if ( features?.contentful?.defaultValue ) 
        provider = 'contentful'
    else if ( features?.wordpress?.defaultValue ) 
        provider = 'wordpress'
    else if ( features?.drupal?.defaultValue ) 
        provider = 'drupal'
    else
        provider = 'strapi'
    let returnData:any;
    switch (provider) {
        case "contentful":
            returnData =  {
                "provider" : "contentful",
                "data" : (await getContentfulHomePage()) ?? [],
                "pagetemplate" : (await getPageTemplate() ?? [])
            }
            break;
        case "strapi":
            returnData = {
                "provider" : "strapi",
                "data": (await strapiHomePage()) ?? [],
                "pagetemplate" : (await getPageTemplate()) ?? []
            }
            break;
        case "drupal":
            returnData = {
                "provider" : "drupal",
                "data": (await getDrupalHomePage()) ?? [],
                "pagetemplate" : (await getPageTemplate()) ?? []
            }
            break;
        default:
            returnData = {
                "provider" : "strapi",
                "data" : (await strapiHomePage()) ?? [],
                "pagetemplate" : (await getPageTemplate()) ?? []
            }
            break;
    }
    return returnData;
}