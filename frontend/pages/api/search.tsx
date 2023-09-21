export default async function handler(req: { body: any; }, res: { json: (arg0: { data: any; }) => void; status: (arg0: number) => { (): any; new(): any; json: { (arg0: { error: any; }): void; new(): any; }; }; }) {
 
    let response: Response,
        defaultoption = {
            method: "GET",
            headers: {
                Authorization: `Bearer ${process.env.AUTH_TOKEN}`,
            },
            body: JSON.stringify(req.body)
        },
        fetcherUrl = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/articles`;    
    try {
        response = await fetch(fetcherUrl, defaultoption);
        const data = await response.json();
        res.json({ data });
      } catch (e) {
        res.status(400).json({ error: e.message });
      }
}