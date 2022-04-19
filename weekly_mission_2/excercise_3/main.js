// Tomando de referencia el ejercicio 1, convierte esos objetos a definiciones de clases, trata de aplicar lo visto en los ejemplos.
//  Archivos json son realizados al ejecutar npm install modules
import repo from './github.js'
import twitter from './twitter.js'
import facebook from './fb.js'
// repo(name, author, language, stars)
// twitter(user, username, bio, followers)
// facebook(name, friends, status, school) 

const repo1 = new repo("ns3-ai", "UCLA", "c++", "190")
const profile1 = new twitter("Gabriel", "Ubuntu 20.04", "და როგორ ხარ?...", "55")
const profileFB1 = new facebook("Gabriel Villagran", "768", "soltero", "UASLP")

// impresion de datos
console.log("Github repository")
console.log(repo1.getRepoInfo())
console.log("============================================")
console.log("Twitter profile")
console.log(profile1.getProfileInfo())
console.log("============================================")
console.log("Facebook profile")
console.log(profileFB1.getInfo())
console.log("============================================")