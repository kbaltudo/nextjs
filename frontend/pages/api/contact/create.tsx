export default async function handler(req: { method: string; body: { data: any; }; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { error?: any; data?: { error: { status: number; message: string; }; }; }): void; new(): any; }; }; json: (arg0: any) => void; }) {

    if (req.method === "POST") {
        const {data} = req.body;
     
        if( null === req.body.data){
            res.status(400).json({ error: "Data in request not found " });
        }

        let fetcherUrl = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/contact-us-forms`;
        try {            
            const response = await fetch(fetcherUrl, {
                method: "POST",
                headers: {
                    "Accept" : "application/json",
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${process.env.AUTH_TOKEN}`
                },
                body: JSON.stringify(req.body)           
            });
            const data = await response.json();
   
            if(data.data?.id ){
                res.json(data);
            }else{
                res.status(400).json({ error: data.error.message });
            }
        } catch (e) {
     
            res.status(400).json({ error: e.message });
        }
    } else {
        res
            .status(400)
            .json({
                data: { 
                    error: { 
                        status: 400, 
                        message: "GET method not allowed." 
                    } 
                },
            });
    }
}
