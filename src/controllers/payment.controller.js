import { MercadoPagoConfig, Preference  } from 'mercadopago';

const client = new MercadoPagoConfig(
    { 
        accessToken: 'APP_USR-4581348590404098-111409-512fa23a9a4c5738c558f5088967db88-2089283805'
    }
);

const preference = new Preference(client);


export const createOrder = async (req, res) => {

    try {
        const body = {
            status: false,
            items: [
              {
                title: 'My product',
                quantity: 1,
                unit_price: 500
              }
            ],
          };
        
        const response = await preference.create({body});
        console.log(response);
        
        res.status(200).json({ response: response.body });
    } catch (error) {
        console.error("Error al crear el pago:", error);
        res.status(500).json({ error: 'Error al procesar el pago' });
    }

}
