const fs = require('fs');
const path = require('path');
const { getConfig } = require("./lib/configdb");

if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "RAHMAN-MD~H4sIAAAAAAAAA61Uy46jRhT9lai2tqZ5Pyy1NDyMDRgbG7+jLMpQYGwMdFHYxiMvs5+sW15mkyyyzCKL/JI/IcLuzow0k0lHCqviUtx7zrnn3g8gzeIC2agCrQ8gx/EeElQfSZUj0AJqGYYIgyYIIIGgBQaqEFYRv92Zgcfa0DId/mk8Khupz2p4nm/CVf+AJGe2TxeP4NwEeblKYv8bCS1TpKqZhAV5sZjkwZhXhIloHWVRTU256KwZndZsZI0aY+kRnOuMMMZxGrXzNdohDBMbVS6M8dvgN6yTGyTedDUbqGSnZfOAzgjOPPy0EyOPFobEnnJwNN1O2m+Dv+vPCukY0UvLl7Y7mu7l9niVebPDabzMzdytZqPQMQoct7M7/CKOUhSYAUpJTKo3694wCiM5CkQsmXj94Bqer0c8F3ZCtd3tZSPPQEMy3apGezJ8G/BTwE9382SONl16mkSpttpF9sm1Q2c/74drS64o9ci6Q93gPgfu4levbP+L7kPHmlJE7M9SPWOXDTd0NXvma9qmGoxz3rSkzimabVSvYt+oe1JVo1Ocn9YZHXS70zZk1p1tNgvDeL8piT6zlcmBO6VWfJp8gg9Jib+F0iLa2lN5KuKG9GpiWQ7PHYJBp1sk5XQhjE0mG5YyPVfkHqPbTxytbQ8bz0+YJSMQ0x+rsDOdTxrQGcI+N1rBBjSVrq483hhtUWUGoEWfmwCjKC4IhiTO0jrGM00Ag72HfIzITV0QUg/ztZ1N2K6/m7HqrEgbu7n1sPTsQeVKw6zvLZyFnwdZh3sETZDjzEdFgYJuXJAMVw4qChihArS+vzWq5ozRLiPIigPQAjLDsrQsUrIo0e+Ld4c1JAXM83cpIqAJQpztHARaBJeoCW4/tKU2rbTFtqgzqqprEs9xmqRThsDpdZSqGe7uRcfxDhUE7nLQokWe52VG5Klz8//BQdMKpWgUpRuGIYq6LusGTSmyICoKwwht419wCOcfmiBFR3K3cS0+yzRBGOOCTNIyTzIYvHr89SP0/axMiVelvlYfEAYt+lMYERKnUVEzK1OI/XW8R1rNA7RCmBTo734jjIJXLi87TMuC2oaitXSXU8YDNfY60RfatPgv1UlutxiWYmSBozlJEAVObPHv63gTpLBOBa6Xj79fL88/Xy8//Xi9PP/63fXy/Nv18vzH9fL8y/Xy8c9asBcqdeUAERgnBWgBbXDqYnmrts3TYetMOh3FjBQtUsAn6q8TdbdsR+3ovUMxKweHB3U7Px41xVV42NEH6Xqw3SYboeTKjb+OlO3jV5LUjON5l+rTRcYQ4vf2lECxIyoNzUXUPQbtbFCyVBTzwuCBeogZ0mGT3jY9iSGLxc785CwtUa/cJXZW3Gj/FJTxxJRDSavHrwkCtI999HmxZWHnQ2vh9h1NHDGeyCxjfV/pvKdoRbgeIIHFhuTBLjV1FhqMiIjHjVFET8YefNAkkkjDYiWXy5HZUDXLsE+26y316D7rt12TvOz4+GUM49trGKPbynzpz781+Y67tiJ1bn6W4mUH/8MeU0fRKKqknoE3hXtYGpI/jPTDYLaOTjk3zi1r0cBlL2PNhWKBcz0TeQJJmOEdaAGYBji7eQhnZe1tMw2zbxTTFNNUh3fiCSyI8mlevjKCjHy/5eIs78JiXVt4KopPk9r8lZLnHoHkdfyAUj+OzYHzXxEwytyoCAAA",  
//chatbot integration 
CHATBOT: getConfig("CHATBOT") || "on",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*sᴇᴇɴ ʏᴏᴜʀ sᴛᴀᴛᴜs ᴊᴜsᴛ ɴᴏᴡ ʀᴀʜᴍᴀɴ-ᴍᴅ*",
// set the auto reply massage on status reply  
WELCOME: process.env.WELCOME || "true",
// true if want welcome msg in groups
GOODBYE: process.env.GOODBYE || "true",
// true if want goodbye msg in groups 
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
ANTI_LINK_WARN: process.env.ANTI_LINK_WARN || "false",
ANTI_LINK_DELETE: process.env.ANTI_LINK_DELETE || "false",
// make anti link true,false for groups
ANTI_CALL: getConfig("ANTI_CALL") || "true",
REJECT_MSG: process.env.REJECT_MSG || "*📞 ᴄαℓℓ ɴσт αℓℓσωє∂ ιɴ тнιѕ ɴᴜмвєʀ уσυ ∂σɴт нανє ᴘєʀмιѕѕισɴ 📵*",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
ALIVE_IMG: getConfig("ALIVE_IMG") || "https://files.catbox.moe/84jssf.jpg",
// add custom menu image url
PREFIX: getConfig("PREFIX") || ".", 
// add your prifix for bot   
BOT_NAME: getConfig("BOT_NAME") || "ʀᴀʜᴍᴀɴ-ᴍᴅ",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "ʀᴀʜᴍᴀɴ-ᴍᴅ",    
VPS: process.env.VPS || "",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
OWNER_REACT: process.env.OWNER_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
OWNER_NUMBER: process.env.OWNER_NUMBER || "923015954782",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "Rᴀʜᴍᴀɴ Tᴇᴄʜ",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ ʀᴀʜᴍᴀɴ ᴛᴇᴄʜ",
// add bot desp name    
LIVE_MSG: process.env.LIVE_MSG || "HEY IM ALIVE",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD_WORD: process.env.ANTI_BAD_WORD || "false",
// false or true for anti bad words 
ANTI_BOT: process.env.ANTI_BOT || "true",
MODE: getConfig("MODE") || "public",
// make bot public-private-inbox-group 
ANTIVIEW_ONCE: process.env.ANTIVIEW_ONCE || "off",
AUTO_VOICE: process.env.AUTO_VOICE || "false",
// make true for send automatic voices
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923015954782",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
ANTI_DELETE: process.env.ANTI_DELETE || "false",
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
