export class SuperHero {

    public readonly name: string;
    public readonly picture: string;
    public readonly isAvenger: boolean;
    public readonly description: string;

    public constructor(name: string, picture: string, isAvenger: boolean, description: string) {
        this.name = name;
        this.picture = picture;
        this.isAvenger = isAvenger;
        this.description = description;
    }
}
