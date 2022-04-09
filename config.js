/**
   * Create By Dika Ardnt.
   * Contact Me on wa.me/6288292024190
   * Follow https://github.com/DikaArdnt
*/

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapi.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapi.xyz': '805a6c3fa9',
}

// Other
global.owner = ['6285870054532','6288200389836','447441432815']
global.pemilik = ['625870054532']
global.premium = ['6285870054532']
global.pengguna = 'Zyxz'
global.botnma = '2Ru Bot'
global.footer = 'Who pii' //FooterText Biar Di Bawah Nya Ada Text 
global.web = 'https://instagram.com/Jokowi' // Ubah Sama Lu Web Nya Bebas 
global.web2 = 'https://github.com/Chaplin98' //Ubah Jga Bebas Sama lu 
global.ganti = 'I N S T A G R A M ME' //Edit Terserah Lu Mau Apa
global.ganti2 = 'Github'
global.ownernma = '@Chaplin98'
global.packname = 'Pinzyxz'
global.author = 'WhatsApp Bot'
global.sessionName = 'hisoka'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    success: '✓ Success',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    owner: 'Fitur Khusus Owner Bot',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: 'Loading...',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
}
global.limitawal = {
    premium: "Infinity",
    free: 100
}
global.thumb = fs.readFileSync('./media/Lycho.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
