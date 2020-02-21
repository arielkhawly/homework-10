class Engineer extends Employee {
    constructor( github) {
        super(name, id, title, email)
        this.github = github;
    }
getGitHub() {
    return this.github;
}
getRole() {
    return 'Engineer';
}
}