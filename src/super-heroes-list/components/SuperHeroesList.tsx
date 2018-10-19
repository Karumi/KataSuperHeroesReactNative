import * as React from "react";
import { FlatList } from "react-native";
import { SuperHero } from "../../core/model";
import SuperHeroCell from "./SuperHeroCell";

interface Props {
    readonly superHeroes: SuperHero[];
    readonly onSuperHeroCellTap: (superHero: SuperHero) => void;
}

class SuperHeroesList extends React.Component<Props> {
    public render() {
        return <FlatList
            data={this.props.superHeroes}
            renderItem={({ item }) => <SuperHeroCell
                onTap={(sh) => this.props.onSuperHeroCellTap(sh)}
                superHero={item} />}
            keyExtractor={(item) => item.name}
        />;
    }
}

export default SuperHeroesList;
