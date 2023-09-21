// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req: { body: { data: any; }; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { error: any; }): void; new(): any; }; }; json: (arg0: { data: any; fetcherUrl: string; }) => void; }) {
//     const {data} = req.body;
//     console.log(req.body);
//     if( null === req.body){
//         res.status(400).json({ error: "Please send the email and password in request not found " });
//     }
//     // console.log(JSON.stringify({data: req.body}));
//     let fetcherUrl = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/auth/local`;
//     try {            
//         const response = await fetch(fetcherUrl, {
//             method: "POST",
//             headers: {
//                 "Accept" : "application/json",
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify(req.body )             
//         });
//         const data = await response.json();           
//         // console.log(data);
//         res.json({ data, fetcherUrl });
//     } catch (e) {
//         console.log(e);
//         res.status(400).json({ error: e.message });
//     }
}
  