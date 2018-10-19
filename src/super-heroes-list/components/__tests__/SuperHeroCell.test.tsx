import * as React from "react";
import * as renderer from "react-test-renderer";

import { anyAvenger, anyRegularSuperHero } from "../../../test-doubles/super-heroes";
import SuperHeroCell from "../SuperHeroCell";

it("renders a regular super hero and does not show the avengers badge", () => {
    const component = renderer
        .create(<SuperHeroCell onTap={jest.fn()} superHero={anyRegularSuperHero} />)
        .toJSON();
    expect(component).toMatchSnapshot();
});

it("renders an avenger super hero and shows the avengers badge", () => {
    const component = renderer
        .create(<SuperHeroCell onTap={jest.fn()} superHero={anyAvenger} />)
        .toJSON();
    expect(component).toMatchSnapshot();
});
