import * as React from "react";
import { Text } from "react-native";
import navigationOptions from "../../base-components/navigationOptions";

class SuperHeroesListScreen extends React.Component {
    public static navigationOptions = navigationOptions("Kata Super Heroes");
    public render() {
        return <Text>List of super heroes</Text>;
    }
}

export default SuperHeroesListScreen;
