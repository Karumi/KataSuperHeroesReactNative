export class SuperHero {

    public readonly name: string;
    public readonly description: string;
    public readonly isAvenger: boolean;
    public readonly picture?: string;

    public constructor(name: string, description: string, isAvenger: boolean, picture?: string) {
        this.name = name;
        this.description = description;
        this.isAvenger = isAvenger;
        this.picture = picture;
    }
}
