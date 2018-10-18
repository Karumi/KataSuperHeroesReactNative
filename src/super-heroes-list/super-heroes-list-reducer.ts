import { ActionType } from "typesafe-actions";
import { SuperHero } from "../common/model";
import * as superHeroesActions from "./super-heroes-list-actions";
import { LOADING_SUPER_HEROES, SUPER_HEROES_FETCHED } from "./super-heroes-list-constants";

export type SuperHeroesListActions = ActionType<typeof superHeroesActions>;

export interface SuperHeroesListState {
    readonly loading: boolean;
    readonly superHeroes: SuperHero[];
}

const initialState: SuperHeroesListState = {
    loading: false,
    superHeroes: [],
};

export default function superHeroesListReducer(
    state: SuperHeroesListState = initialState, action: SuperHeroesListActions) {
    switch (action.type) {
        case LOADING_SUPER_HEROES:
            return state;
        case SUPER_HEROES_FETCHED:
            return state;
        default:
            return state;
    }
}
