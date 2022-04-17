// Modelado de informacion (objetos) en JS
// Modelado de repo
const repo = {
        name: "LaunchX",
        author: "carlogilmar",
        language: "JavaScript",
        numberOfCommits: 100,
        stars: 199,
        forks: 299,
        issues_open: 10,
        issues_close: 10,
        getTotalIssues: function() {
            return this.issues_open + this.issues_close
        },
        getGeneralInfo: function() {
            return `This repository ${this.name} was created by ${this.author}, language: ${this.language}`
        }
    }
    // Modelado de Issue
const issue = {
        title: "Wrong Name",
        repoName: repo.name,
        status: "Open",
        nComments: 200,
        labels: "Documentation",
        author: repo.author,
        dateCreated: 2022,
        lastUpdate: "2 days ago",
        getTitleAuthor() {
            return `${this.title} issue created by ${this.author}`
        },
        getGeneralInfo() {
            return `\n name: ${this.title} \n status: ${this.status} \n label: ${this.labels} \n created: ${this.dateCreated} \n last Update: ${this.lastUpdate}`
        }
    }
    // Modelado de pull request
const pull = {
        title: "Modificacion a la base de datos",
        branchName: "baseDatos",
        status: "open",
        author: "Gabriel Villagran",
        repoName: repo.name,
        getStatus() {
            return `pull request is ${this.status}`
        },
        getTitleAuthor() {
            return `\n Created by ${this.author} \n title: ${this.title}`
        }
    }
    // modelado de twitter
const profile = {
        user: {
            user: "Gabriel",
            username: " Ubuntu 20.04",
            bio: "და როგორ ხარ?...",
            link: "github.com/Villagran29A",
            following: 27,
            followers: 55,
            birthday: "4 de julio de 1998"
        },
        tweets: 4355,
        notifications: 2,
        dm: 1
    }
    // modelado de FB
const profileFB = {
        profile: {
            name: "Gabriel Villagran",
            friends: 768,
            status: "soltero",
            school: "UASLP",
        },
        notification: 2,
        messages: 30,
        videos: 9
    }
    // perfil uber
const uber = {
        profile: {
            name: "Gabriel Aldair",
            stars: 4.82,
            uberReward: 1368
        },
        mensajes: 0,
        viajes: {
            viaje1: 48.24,
            viaje2: 40.00,
            viaje3: 100.10
        }
    }
    // impresion de valores
console.log("Modelado de repo:")
console.log("Nombre del repo:" + repo.name)
console.log("Stars:" + repo.stars)
console.log("Forks:" + repo.forks)
console.log("Issues totales: " + repo.getTotalIssues())
console.log(repo.getGeneralInfo())
console.log("=========================================================")
console.log("Modelado de Issue")
console.log(issue.getTitleAuthor())
console.log(issue.getGeneralInfo())
console.log("=========================================================")
console.log("Modelado de Pull Request")
console.log(pull.getStatus())
console.log(pull.getTitleAuthor())
console.log("=========================================================")
console.log("Modelado de Twitter")
console.log(profile.user.user)
console.log(profile.user.bio)
console.log(profile.user.followers)
console.log(`Numero total de tweets: ${profile.tweets}`)
console.log("=========================================================")
console.log("Modelado de FB")
console.log(profileFB.profile.name)
console.log(profileFB.profile.school)
console.log(profileFB.profile.status)
console.log("=========================================================")
console.log(uber.profile.name)
console.log(`stars: ${uber.profile.stars}`)
console.log(`Rewards: ${uber.profile.uberReward}`)
console.log(`Viaje1 a centro odontologico: ${uber.viajes.viaje1}`)