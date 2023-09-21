export function GetStatCardData(data: any) {
  let returndata = [];
  let result = "CONTENTFUL";
  switch (result) {
    case "STRAPI":
      returndata = data.map(
        (statCard: {
          id: any;
          Title: any;
          Description: any;
          Image: {
            data: {
              attributes: {
                url: string;
                width: any;
                height: any;
                alternativeText: any;
              };
            };
          };
        }) => {
          return {
            id: statCard?.id ? statCard.id : "",
            title: statCard?.Title ? statCard.Title : "",
            description: statCard?.Description
              ? JSON.stringify(statCard.Description)
              : "",
            image: {
              url: statCard?.Image?.data?.attributes?.url
                ? process.env.NEXT_PUBLIC_STRAPI_BASE_URL +
                  statCard.Image.data.attributes.url
                : "",
              width: statCard?.Image?.data?.attributes?.width
                ? statCard.Image.data.attributes.width
                : "",
              height: statCard?.Image?.data?.attributes?.height
                ? statCard.Image.data.attributes.height
                : "",
              alt: statCard?.Image?.data?.attributes?.alternativeText
                ? statCard.Image.data.attributes.alternativeText
                : "",
            },
          };
        }
      );
      break;
    // case "CONTENTFUL":
    //   returndata = data.map(
    //     (
    //       statCard: { title: any; description: any; image: { url: any } },
    //       index: number
    //     ) => {
    //       return {
    //         id: index + 1,
    //         title: statCard?.title ? statCard.title : "",
    //         description: statCard?.description ? statCard.description : "",
    //         image: {
    //           url: statCard?.image?.url ? statCard.image.url : "",
    //           width: "2560",
    //           height: "1440",
    //           alt: "Need to add",
    //         },
    //       };
    //     }
    //   );
    //   break;
    default:
      returndata = [
        {
          id: "1",
          title: "Dummy Title from Dictonary",
          description: "Dummy Discription from Dictonary",
          image: {
            url: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80",
            width: "2560",
            height: "1440",
            alt: "Dummy Alt tag",
          },
        },
        {
          id: "2",
          title: "Dummy Title 2 from Dictonary",
          description: "Dummy Discription from Dictonary",
          image: {
            url: "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
            width: "2560",
            height: "1440",
            alt: "Dummy Alt tag",
          },
        },
        {
          id: "2",
          title: "Dummy Title 2 from Dictonary",
          description: "Dummy Discription from Dictonary",
          image: {
            url: "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
            width: "2560",
            height: "1440",
            alt: "Dummy Alt tag",
          },
        },
      ];
      break;
  }
  return returndata;
}
