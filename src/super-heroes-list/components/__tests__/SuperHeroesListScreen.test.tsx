import * as React from "react";
import { Provider } from "react-redux";
import * as renderer from "react-test-renderer";
import { Store } from "redux";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { mockPlainNavigation } from "../../../test-doubles/navigation";
import { anyListOfSuperHeroes } from "../../../test-doubles/super-heroes";
import SuperHeroesListScreen from "../SuperHeroesListScreen";

jest.mock("../../../base-components/loading/Loading", () => {
    return {
        default: "Loading",
    };
});

jest.mock("../../../base-components/empty-case/EmptyCase", () => {
    return {
        default: "EmptyCase",
    };
});

jest.mock("../SuperHeroesList", () => {
    return {
        default: "SuperHeroesList",
    };
});

it("renders a loading component if the users list state is loading", () => {
    const store = givenAStoreInTheLoadingState();

    const component = renderer
        .create(
            <Provider store={store}>
                <SuperHeroesListScreen navigation={mockPlainNavigation} />
            </Provider>,
        )
        .toJSON();
    expect(component).toMatchSnapshot();
});

it("renders an empty case component if the list of super heroes is empty", () => {
    const store = givenAStoreLoadedButWithoutSuperHeroes();

    const component = renderer
        .create(
            <SuperHeroesListScreen store={store} navigation={mockPlainNavigation} />,
        )
        .toJSON();
    expect(component).toMatchSnapshot();
});

it("renders the list of super heroes if we are not fetching the info and we have some super heroes to show", () => {
    const store = givenAStoreLoadedWithSuperHeroes();

    const component = renderer
        .create(
            <SuperHeroesListScreen store={store} navigation={mockPlainNavigation} />,
        )
        .toJSON();
    expect(component).toMatchSnapshot();
});

function givenAStoreInTheLoadingState(): Store {
    const middlewares = [thunk];
    return configureStore(middlewares)({
        superHeroesList: {
            loading: true,
            superHeroes: [],
        },
    });
}

function givenAStoreLoadedButWithoutSuperHeroes(): Store {
    const middlewares = [thunk];
    const mockStore = configureStore(middlewares);
    return mockStore({
        superHeroesList: {
            loading: false,
            superHeroes: [],
        },
    });
}

function givenAStoreLoadedWithSuperHeroes(): Store {
    const middlewares = [thunk];
    const mockStore = configureStore(middlewares);
    return mockStore({
        superHeroesList: {
            loading: false,
            superHeroes: anyListOfSuperHeroes,
        },
    });
}
