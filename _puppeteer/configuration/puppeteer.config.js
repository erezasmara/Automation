const HEADLESS = JSON.parse(process.env.HEADLESS || true)
const DEVTOOLS = JSON.parse(process.env.DEVTOOLS || false)
const INCOGNITO = JSON.parse(process.env.INCOGNITO || false)
const SLOWMO = Number.parseInt(process.env.SLOWMO || 30)

const config = {
    devtools: DEVTOOLS,
    headless: HEADLESS ,
    slowMo: SLOWMO,
    Incognito: INCOGNITO
  };
  
module.exports = config;