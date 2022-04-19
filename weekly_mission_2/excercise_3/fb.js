export default class profileFB {
    constructor(name, friends, status, school) {
        this.name = name
        this.friends = friends
        this.status = status
        this.school = school
    }
    getInfo() {
        return `${this.name} profile has${this.friends}, profile status: ${this.status} study at ${this.school}`
    }
}