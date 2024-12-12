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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349153143112";




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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_04_28_12_12_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNTYsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNTksXG4gICAgICAgIDkyLFxuICAgICAgICAxODYsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjE0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMixcbiAgICAgICAgMTM2LFxuICAgICAgICA2OSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDIyNixcbiAgICAgICAgMzcsXG4gICAgICAgIDY5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDgxLFxuICAgICAgICA2MSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE1LFxuICAgICAgICA4NCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNDUsXG4gICAgICAgIDg2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MyxcbiAgICAgICAgNjQsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTIyLFxuICAgICAgICA0MyxcbiAgICAgICAgMTA5LFxuICAgICAgICAxODQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTM2LFxuICAgICAgICAxOTcsXG4gICAgICAgIDM4LFxuICAgICAgICA4MixcbiAgICAgICAgNjIsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTU4LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNTksXG4gICAgICAgIDAsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTYxLFxuICAgICAgICA1NixcbiAgICAgICAgMTA2LFxuICAgICAgICAxMDcsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjAzLFxuICAgICAgICAzMyxcbiAgICAgICAgOTksXG4gICAgICAgIDdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ4LFxuICAgICAgICAzNSxcbiAgICAgICAgNDgsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNDEsXG4gICAgICAgIDc1LFxuICAgICAgICAzNixcbiAgICAgICAgMTExLFxuICAgICAgICAyMDMsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNzgsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxOTksXG4gICAgICAgIDI3LFxuICAgICAgICA5NSxcbiAgICAgICAgNDMsXG4gICAgICAgIDM4LFxuICAgICAgICAyNCxcbiAgICAgICAgMTI2LFxuICAgICAgICAzNyxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgOTksXG4gICAgICAgIDIyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDczLFxuICAgICAgICA5N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjI2LFxuICAgICAgICA1NixcbiAgICAgICAgMjUsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMTAsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMjYsXG4gICAgICAgIDMyLFxuICAgICAgICAxMixcbiAgICAgICAgNDIsXG4gICAgICAgIDgyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjcsXG4gICAgICAgIDEwNixcbiAgICAgICAgODgsXG4gICAgICAgIDI1MixcbiAgICAgICAgNjEsXG4gICAgICAgIDY3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNzEsXG4gICAgICAgIDI5LFxuICAgICAgICAxNzYsXG4gICAgICAgIDk3LFxuICAgICAgICAyOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDY2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDcxLFxuICAgICAgICAyMjIsXG4gICAgICAgIDM4LFxuICAgICAgICAxLFxuICAgICAgICAxMDcsXG4gICAgICAgIDIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNzcsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMyxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMjksXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTQsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjE4LFxuICAgICAgICAxMTQsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNjQsXG4gICAgICAgIDM3LFxuICAgICAgICA4LFxuICAgICAgICAxMjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI0LFxuICAgICAgICAxODIsXG4gICAgICAgIDc3LFxuICAgICAgICAyMDMsXG4gICAgICAgIDc4LFxuICAgICAgICA1NCxcbiAgICAgICAgMjUzLFxuICAgICAgICA5MixcbiAgICAgICAgMTU1LFxuICAgICAgICAxODAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjE5LFxuICAgICAgICA2NCxcbiAgICAgICAgMzYsXG4gICAgICAgIDYzLFxuICAgICAgICA5MSxcbiAgICAgICAgNDgsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTY2LFxuICAgICAgICA2MixcbiAgICAgICAgMTIyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxOSxcbiAgICAgICAgMSxcbiAgICAgICAgNjYsXG4gICAgICAgIDIwNSxcbiAgICAgICAgOTIsXG4gICAgICAgIDE4LFxuICAgICAgICAyMjUsXG4gICAgICAgIDIxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA4NlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgOSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICA0N1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNyxcbiAgICAgICAgODksXG4gICAgICAgIDExMCxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjYsXG4gICAgICAgIDE5LFxuICAgICAgICAyMzMsXG4gICAgICAgIDYzLFxuICAgICAgICA3MixcbiAgICAgICAgOTYsXG4gICAgICAgIDExMixcbiAgICAgICAgMTg5LFxuICAgICAgICA5OSxcbiAgICAgICAgNjYsXG4gICAgICAgIDE3NixcbiAgICAgICAgOTQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTU5LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE0LFxuICAgICAgICAyNyxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMjEsXG4gICAgICAgIDU3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjE4LFxuICAgICAgICAxMyxcbiAgICAgICAgMjIsXG4gICAgICAgIDUzLFxuICAgICAgICA4NSxcbiAgICAgICAgOTksXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNjUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMzMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNzQsXG4gICAgICAgIDE2NixcbiAgICAgICAgNDQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNCxcbiAgICAgICAgNTYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNixcbiAgICAgICAgMTgyLFxuICAgICAgICAyMyxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMDcsXG4gICAgICAgIDg3LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMzBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE2MixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ4LzhwdGJoakF1eDdnZEJlcUhuSGl5WHhmQ2dFQ3lOT2MrVll0dFJuVXc0PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDkxNTMxNDMxMTJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkNEQjRCNjk4QTU3MTk1REY1NTJCMTdBRUU2OEIwOUQyXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczMzk3NzczMVxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDkxNTMxNDMxMTJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjU5Q0RBRTM1QjczQkNDQTVDNEQ1MkYzMTU4NUE5NjZFXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczMzk3NzczMVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCI0dlotMldnd1F4Q0k5ZFloVjJxeDhRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjc3ZjNlZWQwLWM4NWItNDcxOC04YTY3LTQ3MzI5YmMzN2FhZVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA4NixcbiAgICAgIDk5LFxuICAgICAgMTk0LFxuICAgICAgMTI0LFxuICAgICAgMyxcbiAgICAgIDE4OCxcbiAgICAgIDEwLFxuICAgICAgMTc0LFxuICAgICAgMjQxLFxuICAgICAgMjM5LFxuICAgICAgNzQsXG4gICAgICAyMzcsXG4gICAgICA0NyxcbiAgICAgIDc0LFxuICAgICAgMTkwLFxuICAgICAgMTE3LFxuICAgICAgODcsXG4gICAgICAyMDEsXG4gICAgICAxMzgsXG4gICAgICA1NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA4MyxcbiAgICAgIDExMSxcbiAgICAgIDE4NCxcbiAgICAgIDMsXG4gICAgICA5OCxcbiAgICAgIDkzLFxuICAgICAgMjA3LFxuICAgICAgODksXG4gICAgICA5NyxcbiAgICAgIDE5NSxcbiAgICAgIDI4LFxuICAgICAgNzYsXG4gICAgICA3MCxcbiAgICAgIDE5OSxcbiAgICAgIDM0LFxuICAgICAgMTk1LFxuICAgICAgMjAzLFxuICAgICAgMjIyLFxuICAgICAgNTUsXG4gICAgICA3MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJZNkpHSzQxUFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTE1MzE0MzExMjo2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiTXVoYW1tYWRcIixcbiAgICBcImxpZFwiOiBcIjEyMjMwNDEyNjI3OTc0Mzo2QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ05pWnZyc0VFUDNNNmJvR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiOGREd2pNMG5ta1lTUC9QaWpMZFAxZTFBbm1DSmc2THVNN3F6QThNYjlGcz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJtUFZDWldkeU1JRmpiSUErSURMYUI1L2JZTTNvQk1SMWlDL0djcGl2dGhFSm1UenNOUEQyZnhpVFdDSGRNQmlNdU5WblZ4MGxBdzhFaklZOE02MHhCUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJlR2F1L0FlTmJSZ292TVlzVTNJb3AxWU1QYTYvdFFGRXNWcHRNcmswL0twUXhxTXRLUlRZcitKOXdHSkpJY1VkS0tZNlN5WnZOblZXTVhqRUY2N2xqdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MTUzMTQzMTEyOjZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDkxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzM5Nzc3MjksXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFCUWdcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUJRZy5qc29uIjogIntcImtleURhdGFcIjpcIk5xTmZOVHVqRnI4WXRnZHR2RWR2WW5FaVo0VFpLN3E4bmxmUTVESFdQMXM9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTE5ODQ5Mjg4OCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzMzOTc3NzMwNjc3XCJ9Igp9"  // PUT your SESSION_ID 


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
