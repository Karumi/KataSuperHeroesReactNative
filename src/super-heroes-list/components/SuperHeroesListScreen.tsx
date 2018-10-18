import * as React from "react";
import { Text } from "react-native";
import navigationOptions from "../../base-components/navigationOptions";
import { SuperHero } from "../../core/model";
import SuperHeroCell from "./SuperHeroCell";

const sh = new SuperHero("Scarlet Witch",
    "https://i.annihil.us/u/prod/marvel/i/mg/9/b0/537bc2375dfb9.jpg",
    true,
    "Scarlet Witch was born at the Wundagore base of the High Evolutionary, she and her twin "
    + "brother Pietro were the children of Romani couple Django and Marya Maximoff. The "
    + "High Evolutionary supposedly abducted the twins when they were babies and "
    + "experimented on them, once he was disgusted with the results, he returned them to"
    + " Wundagore, disguised as regular mutants.");

class SuperHeroesListScreen extends React.Component {
    public static navigationOptions = navigationOptions("Kata Super Heroes");
    public render() {
        return <SuperHeroCell superHero={sh} />;
    }
}

export default SuperHeroesListScreen;
