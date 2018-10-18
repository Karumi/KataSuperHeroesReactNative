import * as React from "react";
import * as renderer from "react-test-renderer";

import App from "../App";

it("renders correctly with the default configuration", () => {
    const component = renderer
        .create(<App />)
        .toJSON();
    expect(component).toMatchSnapshot();
});
