export class Member{
    public name: string;
    public role: string;
    public imagePath: string;

    constructor(name: string, role: string, imagePath: string){
        this.name = name;
        this.role = role;
        this.imagePath = imagePath;
    }
}