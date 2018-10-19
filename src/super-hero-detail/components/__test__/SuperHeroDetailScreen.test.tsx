import { none, some } from "fp-ts/lib/Option";
import * as React from "react";
import * as renderer from "react-test-renderer";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { action } from "typesafe-actions";
import { navigationWithMockedParams } from "../../../test-doubles/navigation";
import { anyRegularSuperHero } from "../../../test-doubles/super-heroes";
import SuperHeroDetailScreen from "../SuperHeroDetailScreen";

const anySuperHeroId = "stark";
const anyFetchSuperHeroByIdAction = (id: string) => action(`fetchSuperHeroById - ${id}`);

jest.mock("../../super-hero-detail-actions", () => {
    return {
        fetchSuperHeroById: (() => anyFetchSuperHeroByIdAction(anySuperHeroId)),
    };
});

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

jest.mock("../../../super-heroes-list/components/SuperHeroCell", () => {
    return {
        defatult: "SuperHeroCell",
    };
});
it("invokes the onMount prop when it renders", () => {
    const store = givenAStoreLoadingASuperHero();
    givenTheComponentIsInitializedForASuperHeroWithId(anySuperHeroId);

    renderer.create(
        <SuperHeroDetailScreen store={store} navigation={navigationWithMockedParams} />,
    );

    const actions = store.getActions();
    expect(actions).toEqual([anyFetchSuperHeroByIdAction(anySuperHeroId)]);
});

it("render a loading component while the super hero is being fetched", () => {
    const store = givenAStoreLoadingASuperHero();
    givenTheComponentIsInitializedForASuperHeroWithId(anySuperHeroId);

    const component = renderer.create(
        <SuperHeroDetailScreen store={store} navigation={navigationWithMockedParams} />,
    ).toJSON();

    expect(component).toMatchSnapshot();
});

it("render an empty case component if the super hero fetched does not exist", () => {
    const store = givenAStoreWithAnNonExistingSuperHero();
    givenTheComponentIsInitializedForASuperHeroWithId(anySuperHeroId);

    const component = renderer.create(
        <SuperHeroDetailScreen store={store} navigation={navigationWithMockedParams} />,
    ).toJSON();

    expect(component).toMatchSnapshot();
});

it("renders the super hero loaded", () => {
    const store = givenAStoreWithASuperHeroLoaded();
    givenTheComponentIsInitializedForASuperHeroWithId(anySuperHeroId);

    const component = renderer.create(
        <SuperHeroDetailScreen store={store} navigation={navigationWithMockedParams} />,
    ).toJSON();

    expect(component).toMatchSnapshot();
});

function givenTheComponentIsInitializedForASuperHeroWithId(id: string) {
    navigationWithMockedParams.getParam.mockReturnValue(id);
}

function givenAStoreLoadingASuperHero() {
    const middlewares = [thunk];
    const mockStore = configureStore(middlewares);
    return mockStore({
        superHeroDetail: {
            loading: true,
            superHero: none,
        },
    });
}

function givenAStoreWithAnNonExistingSuperHero() {
    const middlewares = [thunk];
    const mockStore = configureStore(middlewares);
    return mockStore({
        superHeroDetail: {
            loading: false,
            superHero: none,
        },
    });
}

function givenAStoreWithASuperHeroLoaded() {
    const middlewares = [thunk];
    const mockStore = configureStore(middlewares);
    return mockStore({
        superHeroDetail: {
            loading: false,
            superHero: some(anyRegularSuperHero),
        },
    });
}
