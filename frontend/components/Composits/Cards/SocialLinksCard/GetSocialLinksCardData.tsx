export function GetSocialLinksCardData(data: any, provider: string) {
  let returndata = [];
  switch (provider) {
    case "strapi":
      returndata = data.map(
        (SocialLinksCard:
          {
            id: any;
            Title: string;
            RoundedBox: boolean;
            Alignment: string;
            SocialLink: { id: any, FacebookLink: any, InstagramLink: any, Youtube: any, LinkedinLink: any };
        }) => {
          return {
            id: SocialLinksCard?.id
              ? SocialLinksCard.id
              : "",
            Title: SocialLinksCard?.Title
              ? SocialLinksCard.Title
              : "",
            Alignment: SocialLinksCard?.Alignment ? SocialLinksCard.Alignment : "",
            RoundedBox: SocialLinksCard?.RoundedBox ? SocialLinksCard.RoundedBox : "",
            SocialLink: {
              id: SocialLinksCard?.SocialLink?.id ? SocialLinksCard.SocialLink.id : "",
              FacebookLink: SocialLinksCard?.SocialLink?.FacebookLink ? SocialLinksCard.SocialLink.FacebookLink : "",
              InstagramLink: SocialLinksCard?.SocialLink?.InstagramLink ? SocialLinksCard.SocialLink.InstagramLink : "",
              LinkedinLink: SocialLinksCard?.SocialLink?.LinkedinLink ? SocialLinksCard.SocialLink.LinkedinLink : "",
              YoutubeLink: SocialLinksCard?.SocialLink?.Youtube ? SocialLinksCard.SocialLink.Youtube : "",
            },
          };
        }
      );
      break;
    default:
      returndata = [
        {
          "id": 1,
          "Title": "Follow Us more",
          "RoundedBox": true,
          "Alignment": "Horizontal",
          "SocialLink": {
            "id": 1,
            "FacebookLink": "https://www.altudo.co",
            "LinkedinLink": "https://www.altudo.co",
            "YoutubeLink": "https://www.altudo.co",
            "InstagramLink": "https://www.altudo.co"
          }
        }
      ];
      break;
  }
  return returndata;
}
