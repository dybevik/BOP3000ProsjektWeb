export class Member{
    public name: string;
    public role: string;
    public imagePath: string;
    public linkedIn: string;
    public github: string;

    constructor(name: string, role: string, imagePath: string, linkedIn: string, github: string){
        this.name = name;
        this.role = role;
        this.imagePath = imagePath;
        this.linkedIn = linkedIn;
        this.github = github;
    }
}