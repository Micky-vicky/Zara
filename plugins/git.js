const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'git', fromMe: false, desc: Lang.WP}, (async (message, match) => {

    var r_text = new Array ();
    
    
   
  r_text[0] = "https://i.ibb.co/XjDC6sP/IMG-20210731-WA0008.jpg";
    
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `*creaters Raashii & Priyan*


*owner number wa.me/916282120758*

*githublink       https://github.com/Raashii/Zara*

*audio commads    https://github.com/Raashii/Zara/tree/master/uploads*

*sticker commads  https://github.com/Raashii/Zara/tree/master/stickers*

`}) 

}));
