export function GetAudio(data: any, provider: string) {
    let returndata:any = {};
    switch (provider) {
        case "strapi":
            returndata = {
                "url": data.video.url,
                "width": data.video?.width?data.video?.width:'100',
                'alt': data.video?.alt,
                'settings': {
                    controls:data?.settings?.controls?data.settings.controls:false,
                    autoplay:data?.settings?.autoplay?data.settings.autoplay:false,
                    loop:data?.settings?.loop?data.settings.loop:false, 
                    muted:data?.settings?.muted?data.settings.muted:false,
                    preload:data?.settings?.muted?data.settings.preload:'auto'
                }
        }
            break;
        case "contentful":
            returndata = {
                "url": data.video.url,
                "width": data.video?.width?data.video?.width:'100',
                'alt': data.video?.alt,
                'settings': {
                    controls:data?.settings?.controls?data.settings.controls:false,
                    autoplay:data?.settings?.autoplay?data.settings.autoplay:false,
                    loop:data?.settings?.loop?data.settings.loop:false, 
                    muted:data?.settings?.muted?data.settings.muted:false,
                    preload:data?.settings?.muted?data.settings.preload:'auto'
                }
        }
            break;
        default:
            returndata = {
                    "url": "mucialinstruments.mp3",
                    "width": "100",
                    'alt': "Dummy horse Audio",
                    settings:{controls:true,autoplay:true,loop:false, muted:false,preload:'auto'}
            }
            break;
    }
    return returndata;
}