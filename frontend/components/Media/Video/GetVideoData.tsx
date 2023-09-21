export function GetVideo(data: any, provider: string) {
    let returndata:any = {};
    console.log(data);
    switch (provider) {
        case "strapi":
            returndata = {
                "url": data.video.url,
                "width": data.video?.width?data.video?.width:'100',
                "height": data.video?.height?data.video?.height:'100',
                'alt': data.video?.alt,
                'tumbnial': data?.image?.url ? data?.image?.url:'',
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
                "url": data?.video.url ? data.video.url : "",
                "width": "100",
                "height": "100",
                'alt': "Need to add",
                'tumbnial': data?.image?.url ? data?.image?.url:'',
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
                    "url": "mov_bbb.mp4",
                    "width": "100",
                    "height": "100",
                    'alt': "Dummy Bunny video",
                    'tumbnial':'',
                    settings:{controls:true,autoplay:true,loop:false, muted:false,preload:'auto'}
            }
            break;
    }
    return returndata;
}