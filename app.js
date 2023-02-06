const {
    createBot,
    createProvider,
    createFlow,
    addKeyword,
} = require('@bot-whatsapp/bot')

const QRPortalWeb = require('@bot-whatsapp/portal')
const BaileysProvider = require('@bot-whatsapp/provider/baileys')
const JsonFileAdapter = require('@bot-whatsapp/database/json')

const flowSecundario = addKeyword(['2', 'siguiente']).addAnswer([
    '📄 Aquí tenemos el flujo secundario',
])

const flowDocs = addKeyword(['aplicar','capacitacion',])
.addAnswer('🔥Este Lunes 6 de Febrero Iniciaremos una Capacitacion, de 07:50AM a 05:00PM, la capacitacion y el trabajo son presenciales',{delay:500})
.addAnswer('🔥Nuestra Direccion: Managua, Batahola Sur, de SITEL, 1c al sur, mano derecha, Casa Color Blanco con Rotulo que dice BOX MEDIA MARKETING',{delay:500})
.addAnswer('🔥Trae Cuaderno y Lapiz para Tomar Nota, tu Almuerzo y tus documentos Personales',)
.addAnswer('🔥RUTAS 🚌 110/120/6/116/175/172/113',)
.addAnswer('✅✅ *Te Esperamos* ✅✅')


const flowTuto = addKeyword(['dirección', 'direcc']).addAnswer(
    [
        
    ],
    null,
    null,
    [flowSecundario]
)

const flowGracias = addKeyword(['gracias', 'grac']).addAnswer(
    [
        '🚀 Puedes aportar tu granito de arena a este proyecto',
        '[*opencollective*] https://opencollective.com/bot-whatsapp',
        '[*buymeacoffee*] https://www.buymeacoffee.com/leifermendez',
        '[*patreon*] https://www.patreon.com/leifermendez',
        '\n*2* Para siguiente paso.',
    ],
    null,
    null,
    [flowSecundario]
)

const flowDiscord = addKeyword(['discord']).addAnswer(
    [
        '🤪 Únete al discord',
        'https://link.codigoencasa.com/DISCORD',
        '\n*2* Para siguiente paso.',
    ],
    null,
    null,
    [flowSecundario]
)

const flowPrinci =  addKeyword(['info', 'ole', 'alo'])
.addAnswer('🙌 Hola soy un* ChatBot de HS*')




const flowPrincipal = addKeyword(['hola', 'ole', 'alo', 'buenas', 'buenos', 'dias', 'tarde', 'noche', 'interesa', 'trabajo'])
    .addAnswer('🙌 Hola soy un* ChatBot de HS*')
    .addAnswer('👉 Somos un Call Center en ESPAñOLy Buscamos vendedores de Pagina Web',{delay:500})
    .addAnswer('👉 No damos Basico, ganas el 25% de lo Facturado, si facturas $1000 sera de $250 tu Comision',{delay:500})
    .addAnswer('👉 Ofrecemos un bono de contratacion, este bono tiene parametros, no es solo que empieces a trabajar con nosotros y automaticamente es tuyo',{delay:500})
    .addAnswer('👉 Vendemos PAGINAS WEB, es un Puesto Presencial en Managua',{delay:500})
    .addAnswer('👉 Horario de Capacitación oficina de 8:00AM a 05:00 de Lunes a Viernes, NO es Teletrabajo',{delay:500})
    .addAnswer('👉 El Pago es Quincenal',{delay:500})
    .addAnswer('Quieres Aplicar a la *Capacitacion?*',{delay:500})
    .addAnswer(
        [
           '👉 Escribe *APLICAR*',
         
        ],
        null,
        null,
        [flowDocs, flowGracias, flowTuto, flowDiscord]
    )

const main = async () => {
    const adapterDB = new JsonFileAdapter()
    const adapterFlow = createFlow([flowPrincipal, flowPrinci])
    const adapterProvider = createProvider(BaileysProvider)

    createBot({
        flow: adapterFlow,
        provider: adapterProvider,
        database: adapterDB,
    })

    QRPortalWeb()
}

main()
