import * as React from "react";
import * as renderer from "react-test-renderer";

import EmptyCase from "../EmptyCase";

it("renders with the default configuration", () => {
    const component = renderer
        .create(<EmptyCase />)
        .toJSON();
    expect(component).toMatchSnapshot();
});
