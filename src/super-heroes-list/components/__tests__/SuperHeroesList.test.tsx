import * as React from "react";
import * as renderer from "react-test-renderer";

import { FlatList } from "react-native";
import { anyListOfSuperHeroes } from "../../../test-doubles/super-heroes";
import SuperHeroesList from "../SuperHeroesList";

it("uses the list of super heroes as data", () => {
    const component = renderer
        .create(<SuperHeroesList onSuperHeroCellTap={jest.fn()} superHeroes={anyListOfSuperHeroes} />).root;

    expect(component.findByType(FlatList).instance.props.data).toEqual(anyListOfSuperHeroes);
});
