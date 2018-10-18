import * as React from "react";
import * as renderer from "react-test-renderer";

import SuperHeroesListScreen from "../SuperHeroesListScreen";

it("renders correctly with the default configuration", () => {
    const component = renderer
        .create(<SuperHeroesListScreen />)
        .toJSON();
    expect(component).toMatchSnapshot();
});