import { Store } from "redux";
import appStore from "../../store";
import { anySuperHeroId } from "../../test-doubles/super-heroes";
import { fetchSuperHeroById } from "../super-hero-detail-actions";

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

function snapStoreState(store: Store) {
    expect(store.getState().superHeroDetail).toMatchSnapshot();
}

function givenTheRepositoryTakesTimeToAnswer() {

}
