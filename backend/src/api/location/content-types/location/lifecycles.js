module.exports = {
    async afterUpdate(event) {    // Connected to "Save" button in admin panel
        const { result } = event;
        console.log(result);
        try{
            const res = await strapi.plugins['email'].services.email.send({
              to: 'sandip.baikare@altudo.co',
              from: 'sandip.baikare@altudo.co', // e.g. single sender verification in SendGrid
            //   cc: 'valid email address',
            //   bcc: 'valid email address',
              replyTo: 'sandip.baikare@altudo.co',
              subject: 'The Strapi Email plugin worked successfully',
              text: 'New location with Name '+ `${result.LocationName}` + 'is created', // Replace with a valid field ID
              html: 'Hello world!', 
                
            });
            console.log(res);
        } catch(err) {
            console.log(err);
        }
    }
}
