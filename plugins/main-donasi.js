const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys')
let fs = require('fs')
let handler = async (m) => {
let krizyn = `
Hallo mypren ๐
Kalian bisa mendukung saya agar bot ini tetap up to date dengan:
โโโโใ ฤฑll *DONATE* llฤฑ ใโโโ
โฌก *DANA:* ${dana}
โฌก *GOPAY:* ${gopay}
โฌก *OVO:* ${pulsa}
โโโโโโโโโโโโโโโโโโโโ
โโโใ ฤฑll *THANKS TO* llฤฑ ใโโ
โฌก team creator-creator
โฌก team yang sudah berdonasi
โโโโโโโโโโโโ
Berapapun donasi kalian akan sangat berarti ๐
Terimakasih yang sudah mendonasikan untuk bot
Contact person Owner:
wa.me/${numberowner} (Owner)
	`.trim()
  let message = await prepareWAMessageMedia({ image: await (await require('node-fetch')(donasi)).buffer()}, { upload: conn.waUploadToServer }) 
    const template = generateWAMessageFromContent(m.key.remoteJid, proto.Message.fromObject({
        templateMessage: {
            hydratedTemplate: {
                hydratedContentText: krizyn,
                imageMessage: message.imageMessage, 
           hydratedFooterText: '๐ฎ Silahkan pilih Command Dibawah ini',
           hydratedButtons: [{
             urlButton: {
               displayText: 'Saweria๐',
               url: saweria
             }

           },
                {
               urlButton: {
               displayText: '๐ผWhatsapp creator๐ผ',
               url: nomer
             }

           },
               {
             quickReplyButton: {
               displayText: 'sewa',
               id: '.sewazifa',
             }
             
           },
               {
             quickReplyButton: {
               displayText: 'Menu',
               id: '.menu',
             }
             
             },
               {
             quickReplyButton: {
               displayText: 'Runtime',
               id: '.runtime',
             }

           }]
         }
       }
     }), { userJid: m.sender, quoted: m });
    //conn.reply(m.chat, text.trim(), m)
    return await conn.relayMessage(
         m.chat,
         template.message,
         { messageId: template.key.id }
     )
}

handler.tags = ['main', 'info']
handler.command = /^(donasi|donate)$/i
handler.help = ['donasi']
module.exports = handler
