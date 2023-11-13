import {
  promises,
  readFileSync
 } from "fs"
 import {
  join
 } from "path"
 import {
  xpRange
 } from "../lib/levelling.js"
 import moment from "moment-timezone"
 import os from "os"
 import fs from "fs"
 import fetch from "node-fetch"
 
 const defaultMenu = {
  before: `
  「 ${botname} あ⁩ 」\n
  *%ucpn*
 
 乂───『 *U S E R*』───乂
 ⛥ *Name:* %name
  ⛥ *Gold:* %credit
  ⛥ *Role:* %role
  ⛥ *Level:* %level [ %xp4levelup Xp For Levelup]
  ⛥ *Xp:* %exp / %maxexp
  ⛥ *Total Xp:* %totalexp
  ╰──────────⳹
 
  乂───『 *I N F O*』───乂
  ⛥ *Bot Name:* ${botname}
  ⛥ *Mode:* %mode
  ⛥ *Platform:* %platform
  ⛥ *Type:* NodeJs
  ⛥ *Baileys:* Multi Device
  ⛥ *Prefix:* [ *%_p* ]
  ⛥ *Uptime:* %muptime
  ⛥ *Database:*  %totalreg
  ╰──────────⳹
  
  乂───『 *I N F O  C M D*』───乂 
  │ *%totalfeatures* Commands
  ╰──────────⳹
 %readmore
 `.trimStart(),
 header: "✦ ───『 *%category* 』─── ⚝",
 body: "◈ %cmd %isPremium %islimit",
 footer: "╰──────────⳹",
 after: "\n%me",
 }
 let handler = async (m, {
  conn,
  usedPrefix: _p,
  __dirname,
  args
 }) => {
  await conn.sendMessage(m.chat, {
   react: {
 text: "⏳",
 key: m.key,
   }
  })

  
