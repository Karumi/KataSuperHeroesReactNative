import * as React from "react";
import { FlatList } from "react-native";
import { SuperHero } from "../../core/model";
import SuperHeroCell from "./SuperHeroCell";

interface Props {
    readonly superHeroes: SuperHero[];
}

class SuperHeroesList extends React.Component<Props> {
    public render() {
        return <FlatList
            data={this.props.superHeroes}
            renderItem={({ item }) => <SuperHeroCell superHero={item} />}
            keyExtractor={(item) => item.name}
        />;
    }
}

export default SuperHeroesList;
