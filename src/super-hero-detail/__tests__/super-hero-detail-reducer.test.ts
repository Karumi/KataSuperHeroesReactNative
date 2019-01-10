import { Store } from "redux";
import appStore from "../../store";
import { anyRegularSuperHero, anySuperHeroId } from "../../test-doubles/super-heroes";
import { fetchSuperHeroById } from "../super-hero-detail-actions";

jest.mock("../../core/super-heroes-repository", () => {
    return {
        getSuperHeroById: jest.fn(),
    };
});

import { Option, Some } from "fp-ts/lib/Option";
import { SuperHero } from "../../core/model";
import { getSuperHeroById } from "../../core/super-heroes-repository";

it("creates the store using the initial state", () => {
    const store = appStore();

    snapStoreState(store);
});

it("mark the loading property as true while fetching the super hero by id", () => {
    const store = appStore();
    givenTheRepositoryTakesTimeToAnswer();

    store.dispatch(fetchSuperHeroById(anySuperHeroId));

    snapStoreState(store);
});

it("mark the loading property as false and store the super hero fetched", () => {
    const store = appStore();
    givenThereIsASuperHero();

    store.dispatch(fetchSuperHeroById(anySuperHeroId));

    snapStoreState(store);
});

function snapStoreState(store: Store) {
    expect(store.getState().superHeroDetail).toMatchSnapshot();
}

function givenTheRepositoryTakesTimeToAnswer() {

}

function givenThereIsASuperHero() {
    const mock = getSuperHeroById as jest.Mock<Promise<Option<SuperHero>>>;
    
    mock.mockReturnValueOnce(Promise.resolve(new Some(anyRegularSuperHero)));
    console.log("-------> " + JSON.stringify(mock("id")));
}
