import fetch from 'node-fetch'
let handler = async (m, { conn, args }) => {
  if (!args[0]) throw 'Uhm...url nya mana?'
let res = await fetch(API('lol', '/api/tiktok', { url: args[0] }, 'apikey'))
    let json = await res.json()
    
    m.reply(wait)
await conn.reply(m.chat, `Downloading media from Tiktok`, 0, {
  contextInfo: { mentionedJid: [m.sender],
    externalAdReply :{
    mediaUrl: sig,
    mediaType: 2,
    description: author , 
    title: ucapan,
    body: wm, //`${fileSizeH}`,
    thumbnail: await(await fetch(logo)).buffer(),
    sourceUrl: sgc
     }}
  })
let txt = `🚀 *Link:* ${await(await axios.get(`https://tinyurl.com/api-create.php?url=${args[0]}`)).data}` 
    await conn.sendButtonVid(m.chat, json.result.link, txt, wm, `Audio`, `.tiktokaudio ${args[0]}`, m)
}
handler.help = ['tiktoknowm'].map(v => v + ' <url>')
handler.tags = ['downloader', 'premium']
handler.command = /^(tt|tiktok)nowm(dl)?(download(er)?)?$/i

handler.premium = false

export default handler
