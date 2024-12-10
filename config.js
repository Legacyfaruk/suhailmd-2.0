const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348132749273";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_14_02_12_10_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDExMixcbiAgICAgICAgMjUsXG4gICAgICAgIDYxLFxuICAgICAgICA2NixcbiAgICAgICAgNjksXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTEyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDI1LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMTYsXG4gICAgICAgIDg1LFxuICAgICAgICAzMSxcbiAgICAgICAgNCxcbiAgICAgICAgNDMsXG4gICAgICAgIDkwLFxuICAgICAgICA4NSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMzIsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTI1LFxuICAgICAgICAxMDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTAsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMTYsXG4gICAgICAgIDUyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNzMsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNjMsXG4gICAgICAgIDIwLFxuICAgICAgICAyNSxcbiAgICAgICAgMjA1LFxuICAgICAgICA0MCxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMzAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgODUsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTc5LFxuICAgICAgICAzMyxcbiAgICAgICAgMjMsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTM4LFxuICAgICAgICA1MSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMzksXG4gICAgICAgIDQ0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDg4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NixcbiAgICAgICAgNTIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxODMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMCxcbiAgICAgICAgNjYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTgzLFxuICAgICAgICAxODQsXG4gICAgICAgIDcsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTE1LFxuICAgICAgICA2NCxcbiAgICAgICAgOTAsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxLFxuICAgICAgICAxODIsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMzgsXG4gICAgICAgIDI0NixcbiAgICAgICAgNDksXG4gICAgICAgIDExMyxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMTQsXG4gICAgICAgIDI1LFxuICAgICAgICAyMTIsXG4gICAgICAgIDc4LFxuICAgICAgICA5OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2MyxcbiAgICAgICAgOTAsXG4gICAgICAgIDc4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDEyNixcbiAgICAgICAgOSxcbiAgICAgICAgMTE3LFxuICAgICAgICAyOSxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMjQsXG4gICAgICAgIDg3LFxuICAgICAgICAyMTksXG4gICAgICAgIDIxMixcbiAgICAgICAgNDAsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDEwLFxuICAgICAgICAyMjEsXG4gICAgICAgIDUwLFxuICAgICAgICAyOSxcbiAgICAgICAgMSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxODIsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTcyLFxuICAgICAgICA4MixcbiAgICAgICAgMTEsXG4gICAgICAgIDIwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTA0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjAsXG4gICAgICAgIDIyLFxuICAgICAgICAxNyxcbiAgICAgICAgMTI3LFxuICAgICAgICAzNyxcbiAgICAgICAgMTEwLFxuICAgICAgICA1OSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMjQsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTg0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMTUsXG4gICAgICAgIDYwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDY5LFxuICAgICAgICAxOTQsXG4gICAgICAgIDk5LFxuICAgICAgICAxMzksXG4gICAgICAgIDEyOSxcbiAgICAgICAgNDgsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDgzLFxuICAgICAgICAxNjIsXG4gICAgICAgIDY3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDIxNixcbiAgICAgICAgNDgsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTEwLFxuICAgICAgICA4NixcbiAgICAgICAgNjksXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjYsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTY5LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE2LFxuICAgICAgICAyMTUsXG4gICAgICAgIDUzLFxuICAgICAgICAxMDUsXG4gICAgICAgIDI4LFxuICAgICAgICA2OCxcbiAgICAgICAgMTEzLFxuICAgICAgICA3OCxcbiAgICAgICAgMTExLFxuICAgICAgICAxNDgsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxODMsXG4gICAgICAgIDczLFxuICAgICAgICAxNjMsXG4gICAgICAgIDFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgOSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgODVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA0MyxcbiAgICAgICAgICA2OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDkyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDY0LFxuICAgICAgICA0NCxcbiAgICAgICAgMTI0LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNCxcbiAgICAgICAgNjUsXG4gICAgICAgIDY3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDMwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMDksXG4gICAgICAgIDIwNixcbiAgICAgICAgNjAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNzcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNzAsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjQ3LFxuICAgICAgICA4MyxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDI0LFxuICAgICAgICAxODMsXG4gICAgICAgIDIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMixcbiAgICAgICAgMjEzLFxuICAgICAgICA5NixcbiAgICAgICAgMTgzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDMyLFxuICAgICAgICA2NixcbiAgICAgICAgNDksXG4gICAgICAgIDIyLFxuICAgICAgICA4MSxcbiAgICAgICAgNzAsXG4gICAgICAgIDc2LFxuICAgICAgICAxNjEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjI3LFxuICAgICAgICA4MixcbiAgICAgICAgNzYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjA3LFxuICAgICAgICAzOSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNDAsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjU1LFxuICAgICAgICAyNDAsXG4gICAgICAgIDc1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDk0LFxuICAgICAgICAyMDUsXG4gICAgICAgIDEzMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNzksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiSnN2Yksxdy84RktXS3lTeG9HZkZSTWZEQW16am5EYVdhV2lDZXg0Z2Jmcz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwibnJnc1ljbkhTNHVzZEZ3VVNVMHJCd1wiLFxuICBcInBob25lSWRcIjogXCIyM2ZkZGFjMS1lZDU5LTRhNTQtODUxNi0zOTEwYjA0MzI0YzhcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgODQsXG4gICAgICAxNzYsXG4gICAgICA4MSxcbiAgICAgIDEyMCxcbiAgICAgIDkzLFxuICAgICAgMTEsXG4gICAgICAxNDQsXG4gICAgICAyLFxuICAgICAgNyxcbiAgICAgIDIwMCxcbiAgICAgIDEyMCxcbiAgICAgIDMwLFxuICAgICAgOTgsXG4gICAgICAyNDMsXG4gICAgICAxNTUsXG4gICAgICAxMzIsXG4gICAgICAzNSxcbiAgICAgIDE3NixcbiAgICAgIDAsXG4gICAgICAxMDhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTI2LFxuICAgICAgMTAwLFxuICAgICAgMTg4LFxuICAgICAgMTYwLFxuICAgICAgODAsXG4gICAgICAyMzIsXG4gICAgICA0MCxcbiAgICAgIDExNSxcbiAgICAgIDI1MixcbiAgICAgIDMwLFxuICAgICAgMTYzLFxuICAgICAgMTI5LFxuICAgICAgNDYsXG4gICAgICAxNjQsXG4gICAgICA5OSxcbiAgICAgIDEzOSxcbiAgICAgIDEwMixcbiAgICAgIDEzMixcbiAgICAgIDI1MyxcbiAgICAgIDEzMFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCIzUzNKQkdRSlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODEzMjc0OTI3MjoxMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjA1NTkxODk3MTkwNDYxOjExQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0ltS2hMWURFUGVUNGJvR0dBZ2dBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwicW9qdVB3TVVBT3AwQVFqOFN2QWlhN2RIb1UvZE8xRGJid3lDL0s0Ri8xMD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJOYXk4eW5RbWc3U0xwc1EyUjNNRkc3SGJhbGhaQVc3N0pTbTh1OFBmV3dDWndBY0JpRjZoZTgvRmZXakI2L3JsdW94eVp4cmFYYklMWDdSODAvUjdBQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCI0MTNYU1JmUkRqcU0wTUdEdVNFZkNnUkFpQkNFQXBMU3FSYkFMYlIyUkU0ZnNsb0NYQlNoWVpQckVsalVvWGsySnV3MHkwZWtBSHdZeU0raFo1M05nUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MTMyNzQ5MjcyOjExQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgOTNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMzgzOTM1N1xufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
