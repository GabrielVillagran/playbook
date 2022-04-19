export default class twitterProfile {
    constructor(user, username, bio, followers) {
        this.user = user
        this.username = username
        this.bio = bio
        this.followers = followers
    }
    getProfileInfo() {
        return `${this.user} uses the username: ${this.username}, profile bio: ${this.bio} and have ${this.followers} followers`

    }
}