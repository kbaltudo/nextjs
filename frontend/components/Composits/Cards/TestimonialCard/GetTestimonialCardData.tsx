export function GetTestimonialData(data: any[], ) {
    let returndata: any[];
    let provider = "STRAPI";  

    switch (provider) {
      case "STRAPI":
            returndata = data?data.map((data: {author: any; attributes: any; id: any }) => {     
             
              return {  
                  'id': data?.id?data.id:"",
                  "author":{
                    "nickname": data?.author?.nickname?data.author.nickname : "fdssfsf",
                    "description": data.author?.description?data.author.description : "",
                    "designation": data?.author?.designation?data.author.designation : "",
                    "organization":data?.author?.organization?data.author.organization : "",
                    "authorImage": {
                      "url": data?.author?.authorImage?.url?data.author.authorImage.url : "",
                      "width": data?.author?.authorImage?.width?data.author.authorImage.width : "",
                      "height": data?.author?.authorImage?.height?data.author.authorImage.height : "",
                      "alt": data?.author?.authorImage?.alt?data.author.authorImage.alt : "",
                    }
                  }             
              }
          })
        break;
      
    //   default:
    //     returndata = [
    //             {  
    //               'id': "11",
    //               "author":{
    //                 "nickname":"nickname",
    //                 "description" : "dummy content  dummy content dummy content ",
    //                 "designation": "designation",
    //                 "organization": "organization",
    //                 "author_image": {
    //                   "url": "author_image",
    //                   "width":"width",
    //                   "height": "height",
    //                   "alt":  "alternativeText",
    //                 }
    //               }             
    //           },
    //           {  
    //             'id': "22",
    //             "author":{
    //               "nickname":"nickname 2",
    //               "description" : "dummy content  dummy content dummy content ",
    //               "designation": "designation 2",
    //               "organization": "organization 2",
    //               "author_image": {
    //                 "url": "author_image 2" ,
    //                 "width":"width 2",
    //                 "height": "height 2",
    //                 "alt":  "alternativeText 2",
    //               }
    //             }            
    //         }
    //     ]
     
    //     break;
    // }
    return returndata;
  }
  

  