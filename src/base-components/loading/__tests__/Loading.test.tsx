import * as React from "react";
import * as renderer from "react-test-renderer";

import Loading from "../Loading";

it("renders with the default configuration", () => {
    const component = renderer
        .create(<Loading />)
        .toJSON();
    expect(component).toMatchSnapshot();
});
