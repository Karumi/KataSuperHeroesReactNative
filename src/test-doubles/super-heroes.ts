import { SuperHero } from "../core/model";

export const anySuperHeroId: string = "Gambito";

export const anyListOfSuperHeroes: SuperHero[] = [
    new SuperHero("Scarlet Witch",
        "https://i.annihil.us/u/prod/marvel/i/mg/9/b0/537bc2375dfb9.jpg",
        false,
        "Scarlet Witch was born at the Wundagore base of the High Evolutionary, she and her twin "
        + "brother Pietro were the children of Romani couple Django and Marya Maximoff. The "
        + "High Evolutionary supposedly abducted the twins when they were babies and "
        + "experimented on them, once he was disgusted with the results, he returned them to"
        + " Wundagore, disguised as regular mutants."),
    new SuperHero("Iron Man",
        "https://i.annihil.us/u/prod/marvel/i/mg/c/60/55b6a28ef24fa.jpg",
        true,
        "Wounded, captured and forced to build a weapon by his enemies, billionaire "
        + "industrialist Tony Stark instead created an advanced suit of armor to save his "
        + "life and escape captivity. Now with a new outlook on life, Tony uses his money "
        + "and intelligence to make the world a safer, better place as Iron Man."),
    new SuperHero("Wolverine",
        "https://i.annihil.us/u/prod/marvel/i/mg/9/00/537bcb1133fd7.jpg",
        false,
        "Born with super-human senses and the power to heal from almost any wound, " +
        "Wolverine "
        + "was captured by a secret Canadian organization and given an unbreakable "
        + "skeleton and claws. Treated like an animal, it took years for him to control"
        + " himself. Now, he's a premiere member of both the X-Men and the Avengers."),
];

export const anyRegularSuperHero = anyListOfSuperHeroes[0];

export const anyAvenger = anyListOfSuperHeroes[1];
