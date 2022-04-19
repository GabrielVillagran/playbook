export default class repo {
    constructor(name, author, language, stars) {
        this.name = name
        this.author = author
        this.language = language
        this.stars = stars
    }
    getRepoInfo() {
        return `${this.name} repo, creted by ${this.author} has ${this.stars} and is created on ${this.language}`

    }
}